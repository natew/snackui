/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

import { names } from './names'
export { names } from './names'

export function normalizeCSSColor(color: string): number | null {
  let match: RegExpExecArray | null = null

  if (color in names) {
    return names[color]
  }

  if (typeof color === 'number') {
    if (color >>> 0 === color && color >= 0 && color <= 0xffffffff) {
      return color
    }
    return null
  }

  // Ordered based on occurrences on Facebook codebase
  if ((match = matchers.hex6.exec(color))) {
    return parseInt(match[1] + 'ff', 16) >>> 0
  }

  if ((match = matchers.rgb.exec(color))) {
    return (
      ((parse255(match[1]) << 24) | // r
        (parse255(match[2]) << 16) | // g
        (parse255(match[3]) << 8) | // b
        0x000000ff) >>> // a
      0
    )
  }

  if ((match = matchers.rgba.exec(color))) {
    return (
      ((parse255(match[1]) << 24) | // r
        (parse255(match[2]) << 16) | // g
        (parse255(match[3]) << 8) | // b
        parse1(match[4])) >>> // a
      0
    )
  }

  if ((match = matchers.hex3.exec(color))) {
    return (
      parseInt(
        match[1] +
          match[1] + // r
          match[2] +
          match[2] + // g
          match[3] +
          match[3] + // b
          'ff', // a
        16
      ) >>> 0
    )
  }

  // https://drafts.csswg.org/css-color-4/#hex-notation
  if ((match = matchers.hex8.exec(color))) {
    return parseInt(match[1], 16) >>> 0
  }

  if ((match = matchers.hex4.exec(color))) {
    return (
      parseInt(
        match[1] +
          match[1] + // r
          match[2] +
          match[2] + // g
          match[3] +
          match[3] + // b
          match[4] +
          match[4], // a
        16
      ) >>> 0
    )
  }

  if ((match = matchers.hsl.exec(color))) {
    return (
      (hslToRgb(
        parse360(match[1]), // h
        parsePercentage(match[2]), // s
        parsePercentage(match[3]) // l
      ) |
        0x000000ff) >>> // a
      0
    )
  }

  if ((match = matchers.hsla.exec(color))) {
    return (
      (hslToRgb(
        parse360(match[1]), // h
        parsePercentage(match[2]), // s
        parsePercentage(match[3]) // l
      ) |
        parse1(match[4])) >>> // a
      0
    )
  }

  return null
}

function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1
  }
  if (t > 1) {
    t -= 1
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t
  }
  if (t < 1 / 2) {
    return q
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6
  }
  return p
}

function hslToRgb(h, s, l) {
  var q = l < 0.5 ? l * (1 + s) : l + s - l * s
  var p = 2 * l - q
  var r = hue2rgb(p, q, h + 1 / 3)
  var g = hue2rgb(p, q, h)
  var b = hue2rgb(p, q, h - 1 / 3)

  return (
    (Math.round(r * 255) << 24) | (Math.round(g * 255) << 16) | (Math.round(b * 255) << 8)
  )
}

// var INTEGER = '[-+]?\\d+';
var NUMBER = '[-+]?\\d*\\.?\\d+'
var PERCENTAGE = NUMBER + '%'

function call(...args) {
  return '\\(\\s*(' + args.join(')\\s*,\\s*(') + ')\\s*\\)'
}

var matchers = {
  rgb: new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER)),
  rgba: new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER)),
  hsl: new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE)),
  hsla: new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER)),
  hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#([0-9a-fA-F]{6})$/,
  hex8: /^#([0-9a-fA-F]{8})$/,
}

function parse255(str) {
  var int = parseInt(str, 10)
  if (int < 0) {
    return 0
  }
  if (int > 255) {
    return 255
  }
  return int
}

function parse360(str) {
  var int = parseFloat(str)
  return (((int % 360) + 360) % 360) / 360
}

function parse1(str) {
  var num = parseFloat(str)
  if (num < 0) {
    return 0
  }
  if (num > 1) {
    return 255
  }
  return Math.round(num * 255)
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  // @ts-ignore
  const int = parseFloat(str, 10)
  if (int < 0) {
    return 0
  }
  if (int > 100) {
    return 1
  }
  return int / 100
}

export function rgba(colorInt: number) {
  var r = Math.round((colorInt & 0xff000000) >>> 24)
  var g = Math.round((colorInt & 0x00ff0000) >>> 16)
  var b = Math.round((colorInt & 0x0000ff00) >>> 8)
  var a = ((colorInt & 0x000000ff) >>> 0) / 255
  return {
    r,
    g,
    b,
    a,
  }
}

export default normalizeCSSColor
