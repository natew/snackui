/**
 * Some parts adapted from react-native-web
 * Copyright (c) Nicolas Gallagher licensed under the MIT license.
 */

import { StyleObject, simpleHash } from '@tamagui/helpers'
import type { TextStyle, ViewStyle } from 'react-native'

import { getConfig } from '../config'
import { TamaguiInternalConfig } from '../types'
import { defaultOffset } from './expandStyles'
import { normalizeValueWithProperty } from './normalizeValueWithProperty.js'
import { PseudoDescriptor, pseudoDescriptors } from './pseudoDescriptors'

// refactor this file away next...

type ViewOrTextStyle = ViewStyle | TextStyle

export type ViewStyleWithPseudos = ViewOrTextStyle & {
  hoverStyle?: ViewOrTextStyle
  pressStyle?: ViewOrTextStyle
  focusStyle?: ViewOrTextStyle
}

// matching order of the below *0
const pseudosOrdered = [
  pseudoDescriptors.hoverStyle,
  pseudoDescriptors.pressStyle,
  pseudoDescriptors.focusStyle,
]

export function getStylesAtomic(stylesIn: ViewStyleWithPseudos) {
  // performance optimization
  if (!(stylesIn.hoverStyle || stylesIn.pressStyle || stylesIn.focusStyle)) {
    return getAtomicStyle(stylesIn)
  }

  // only for pseudos
  const { hoverStyle, pressStyle, focusStyle, ...base } = stylesIn
  let res: StyleObject[] = []
  // *1 order matched to *0
  for (const [index, style] of [hoverStyle, pressStyle, focusStyle, base].entries()) {
    if (!style) continue
    const pseudo = pseudosOrdered[index]
    res = [...res, ...getAtomicStyle(style, pseudo)]
  }
  return res
}

const cache = new Map()

export function getAtomicStyle(
  style: ViewOrTextStyle,
  pseudo?: PseudoDescriptor
): StyleObject[] {
  if (!style) return []
  const key = JSON.stringify(style) + (pseudo ? JSON.stringify(pseudo) : '')
  if (cache.has(key)) {
    return cache.get(key)
  }
  if (cache.size > 800) {
    cache.clear()
  }
  if (process.env.NODE_ENV === 'development') {
    if (!style || typeof style !== 'object') {
      throw new Error(`Wrong style type: "${typeof style}": ${style}`)
    }
  }
  const out = generateAtomicStyles(style, pseudo)
  cache.set(key, out)
  return out
}

let conf: TamaguiInternalConfig

const generateAtomicStyles = (
  styleIn: ViewStyle & TextStyle,
  pseudo?: PseudoDescriptor
): StyleObject[] => {
  conf = conf || getConfig()

  // were converting to css styles
  const style = styleIn as Record<string, string | null | undefined>

  // transform
  if (style.transform && Array.isArray(style.transform)) {
    style.transform = style.transform
      .map(
        // { scale: 2 } => 'scale(2)'
        // { translateX: 20 } => 'translateX(20px)'
        // { matrix: [1,2,3,4,5,6] } => 'matrix(1,2,3,4,5,6)'
        (transform) => {
          const type = Object.keys(transform)[0]
          const value = transform[type]
          if (type === 'matrix' || type === 'matrix3d') {
            return `${type}(${value.join(',')})`
          }
          return `${type}(${normalizeValueWithProperty(value, type)})`
        }
      )
      .join(' ')
  }

  styleToCSS(style)

  const out: StyleObject[] = []
  for (const key in style) {
    const value = style[key]
    if (value == null || value == undefined) continue
    const hash = presetHashes[value]
      ? value
      : typeof value === 'string'
      ? simpleHash(value)
      : `${value}`.replace('.', 'dot')

    const pseudoPrefix = pseudo ? `0${pseudo.name}-` : ''
    const shortProp = conf.inverseShorthands[key] || key
    const identifier = `_${shortProp}-${pseudoPrefix}${hash}`
    const rules = createAtomicRules(identifier, key, value, pseudo)
    const styleObject: StyleObject = {
      property: key,
      pseudo: pseudo?.name as any,
      value,
      identifier,
      rules,
    }
    out.push(styleObject)
  }

  return out
}

const presetHashes = {
  none: true,
}

const n = normalizeValueWithProperty

export function styleToCSS(style: Record<string, any>) {
  // box-shadow
  const { shadowOffset, shadowRadius, shadowColor } = style
  if (style.shadowRadius !== undefined) {
    const offset = shadowOffset || defaultOffset
    const shadow = `${n(offset.width)} ${n(offset.height)} ${n(
      shadowRadius
    )} ${shadowColor}`
    style.boxShadow = style.boxShadow ? `${style.boxShadow}, ${shadow}` : shadow
    style.shadowOffset = undefined
    style.shadowRadius = undefined
    style.shadowColor = undefined
  }

  // text-shadow
  const { textShadowColor, textShadowOffset, textShadowRadius } = style
  if (textShadowColor || textShadowOffset || textShadowRadius) {
    const { height, width } = textShadowOffset || defaultOffset
    const radius = textShadowRadius || 0
    const color = normalizeValueWithProperty(textShadowColor, 'textShadowColor')
    if (color && (height !== 0 || width !== 0 || radius !== 0)) {
      const blurRadius = normalizeValueWithProperty(radius)
      const offsetX = normalizeValueWithProperty(width)
      const offsetY = normalizeValueWithProperty(height)
      style.textShadow = `${offsetX} ${offsetY} ${blurRadius} ${color}`
    }
    style.textShadowColor = undefined
    style.textShadowOffset = undefined
    style.textShadowRadius = undefined
  }
}

function createDeclarationBlock(style: Record<string, any>, important = false) {
  let next = ''
  for (const key in style) {
    const prop = hyphenateStyleName(key)
    const value = style[key]
    next += `${prop}:${value}${important ? ' !important' : ''};`
  }
  return `{${next}}`
}

const hcache = {}
const toHyphenLower = (match: string) => `-${match.toLowerCase()}`
const hyphenateStyleName = (key: string) => {
  let val = hcache[key]
  if (val) return val
  hcache[key] = val = key.replace(/[A-Z]/g, toHyphenLower)
  return val
}

const pseudoSelectorPrefixes = (() => {
  const res: Record<string, string> = {}
  for (const key in pseudoDescriptors) {
    const pseudo = pseudoDescriptors[key]
    res[pseudo.name] = `${[...Array(pseudo.priority)].map(() => ':root').join('')} `
  }
  return res
})()

function createAtomicRules(
  identifier: string,
  property: string,
  value: any,
  pseudo?: PseudoDescriptor
): string[] {
  const selector = pseudo
    ? `${pseudoSelectorPrefixes[pseudo.name]} .${identifier}:${pseudo.name}`
    : `.${identifier}`
  const important = !!pseudo

  let rules: string[] = []

  // Handle non-standard properties and object values that require multiple
  // CSS rules to be created.
  switch (property) {
    // Equivalent to using '::placeholder'
    case 'placeholderTextColor': {
      const block = createDeclarationBlock({ color: value, opacity: 1 }, important)
      rules.push(`${selector}::placeholder${block}`)
      break
    }

    // all webkit prefixed rules
    case 'backgroundClip':
    case 'userSelect': {
      const propertyCapitalized = `${property[0].toUpperCase()}${property.slice(1)}`
      const webkitProperty = `Webkit${propertyCapitalized}`
      const block = createDeclarationBlock(
        { [property]: value, [webkitProperty]: value },
        important
      )
      rules.push(`${selector}${block}`)
      break
    }

    // Polyfill for additional 'pointer-events' values
    case 'pointerEvents': {
      let finalValue = value
      if (value === 'auto' || value === 'box-only') {
        finalValue = 'auto'
        if (value === 'box-only') {
          rules.push(`${selector}>*${boxOnly}`)
        }
      } else if (value === 'none' || value === 'box-none') {
        finalValue = 'none'
        if (value === 'box-none') {
          rules.push(`${selector}>*${boxNone}`)
        }
      }
      const block = createDeclarationBlock({ pointerEvents: finalValue }, true)
      rules.push(`${selector}${block}`)
      break
    }

    default: {
      const block = createDeclarationBlock({ [property]: value }, important)
      rules.push(`${selector}${block}`)
      break
    }
  }

  // hover styles need to be conditional
  // perhaps this can be generalized but for now lets just shortcut
  // and hardcode for hover styles, if we need to later we can
  // WEIRD SYNTAX, SEE:
  //   https://stackoverflow.com/questions/40532204/media-query-for-devices-supporting-hover
  if (pseudo && pseudo.name === 'hover') {
    rules = rules.map((r) => `@media not all and (hover: none) { ${r} }`)
  }

  return rules
}

const boxNone = createDeclarationBlock({ pointerEvents: 'auto' }, true)
const boxOnly = createDeclarationBlock({ pointerEvents: 'none' }, true)
