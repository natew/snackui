// forked from radix-ui

import { composeRefs, useComposedRefs } from '@tamagui/compose-refs'
import {
  GetProps,
  SizeTokens,
  getSize,
  getVariableValue,
  isWeb,
  styled,
  withStaticProperties,
} from '@tamagui/core'
import { clamp, composeEventHandlers } from '@tamagui/helpers'
import { SizableStackProps, ThemeableStack } from '@tamagui/stacks'
import { useControllableState } from '@tamagui/use-controllable-state'
import { useDirection } from '@tamagui/use-direction'
import * as React from 'react'
import { View } from 'react-native'

import {
  ARROW_KEYS,
  BACK_KEYS,
  PAGE_KEYS,
  SLIDER_NAME,
  SliderOrientationProvider,
  SliderProvider,
  useSliderContext,
  useSliderOrientationContext,
} from './constants'
import {
  convertValueToPercentage,
  getClosestValueIndex,
  getDecimalCount,
  getLabel,
  getNextSortedValues,
  getThumbInBoundsOffset,
  hasMinStepsBetweenValues,
  linearScale,
  roundValue,
} from './helpers'
import { SliderFrame, SliderImpl } from './SliderImpl'
import {
  ScopedProps,
  SliderContextValue,
  SliderHorizontalProps,
  SliderProps,
  SliderTrackProps,
  SliderVerticalProps,
} from './types'

/* -------------------------------------------------------------------------------------------------
 * SliderHorizontal
 * -----------------------------------------------------------------------------------------------*/

const SliderHorizontal = React.forwardRef<View, SliderHorizontalProps>(
  (props: ScopedProps<SliderHorizontalProps>, forwardedRef) => {
    const {
      min,
      max,
      dir,
      onSlideStart,
      onSlideMove,
      onStepKeyDown,
      ...sliderProps
    } = props
    const direction = useDirection(dir)
    const isDirectionLTR = direction === 'ltr'
    const sliderRef = React.useRef<View>(null)
    const [state, setState] = React.useState(() => ({ size: 0, offset: 0 }))

    function getValueFromPointer(pointerPosition: number) {
      const input: [number, number] = [0, state.size]
      const output: [number, number] = isDirectionLTR ? [min, max] : [max, min]
      const value = linearScale(input, output)
      return value(pointerPosition)
    }

    return (
      <SliderOrientationProvider
        scope={props.__scopeSlider}
        startEdge={isDirectionLTR ? 'left' : 'right'}
        endEdge={isDirectionLTR ? 'right' : 'left'}
        direction={isDirectionLTR ? 1 : -1}
        sizeProp="width"
        size={state.size}
      >
        <SliderImpl
          ref={composeRefs(forwardedRef, sliderRef)}
          dir={direction}
          {...sliderProps}
          orientation="horizontal"
          onLayout={() => {
            sliderRef.current?.measure((_x, _y, width, _height, pageX, _pageY) => {
              setState({
                size: width,
                offset: pageX,
              })
            })
          }}
          onSlideStart={(event, target) => {
            const value = getValueFromPointer(event.nativeEvent.locationX)
            if (value) {
              onSlideStart?.(value, target)
            }
          }}
          onSlideMove={(event) => {
            const value = getValueFromPointer(event.nativeEvent.pageX - state.offset)
            if (value) {
              onSlideMove?.(value)
            }
          }}
          onSlideEnd={() => {}}
          onStepKeyDown={(event) => {
            const isBackKey = BACK_KEYS[direction].includes(event.key)
            onStepKeyDown?.({ event, direction: isBackKey ? -1 : 1 })
          }}
        />
      </SliderOrientationProvider>
    )
  },
)

/* -------------------------------------------------------------------------------------------------
 * SliderVertical
 * -----------------------------------------------------------------------------------------------*/

const SliderVertical = React.forwardRef<View, SliderVerticalProps>(
  (props: ScopedProps<SliderVerticalProps>, forwardedRef) => {
    const { min, max, onSlideStart, onSlideMove, onStepKeyDown, ...sliderProps } =
      props
    const [state, setState] = React.useState(() => ({ size: 0, offset: 0 }))
    const sliderRef = React.useRef<View>(null)

    function getValueFromPointer(pointerPosition: number) {
      const input: [number, number] = [0, state.size]
      const output: [number, number] = [max, min]
      const value = linearScale(input, output)
      return value(pointerPosition)
    }

    return (
      <SliderOrientationProvider
        scope={props.__scopeSlider}
        startEdge="bottom"
        endEdge="top"
        sizeProp="height"
        size={state.size}
        direction={1}
      >
        <SliderImpl
          ref={composeRefs(forwardedRef, sliderRef)}
          {...sliderProps}
          orientation="vertical"
          onLayout={({ nativeEvent: { layout } }) => {
            sliderRef.current?.measure((_x, _y, _width, height, _pageX, pageY) => {
              setState({
                size: height,
                offset: pageY,
              })
            })
          }}
          onSlideStart={(event, target) => {
            const value = getValueFromPointer(event.nativeEvent.locationY)
            if (value) {
              onSlideStart?.(value, target)
            }
          }}
          onSlideMove={(event) => {
            const value = getValueFromPointer(event.nativeEvent.pageY - state.offset)
            if (value) {
              onSlideMove?.(value)
            }
          }}
          onSlideEnd={() => {}}
          onStepKeyDown={(event) => {
            const isBackKey = BACK_KEYS.ltr.includes(event.key)
            onStepKeyDown?.({ event, direction: isBackKey ? -1 : 1 })
          }}
        />
      </SliderOrientationProvider>
    )
  },
)

/* -------------------------------------------------------------------------------------------------
 * SliderTrack
 * -----------------------------------------------------------------------------------------------*/

const TRACK_NAME = 'SliderTrack'

type SliderTrackElement = HTMLElement | View

export const SliderTrackFrame = styled(SliderFrame, {
  name: 'SliderTrack',
  height: '100%',
  width: '100%',
  backgroundColor: '$background',
  position: 'relative',
  borderRadius: 100_000,
  overflow: 'hidden',
})

const SliderTrack = React.forwardRef<SliderTrackElement, SliderTrackProps>(
  (props: ScopedProps<SliderTrackProps>, forwardedRef) => {
    const { __scopeSlider, ...trackProps } = props
    const context = useSliderContext(TRACK_NAME, __scopeSlider)
    return (
      <SliderTrackFrame
        data-disabled={context.disabled ? '' : undefined}
        data-orientation={context.orientation}
        orientation={context.orientation}
        size={context.size}
        {...trackProps}
        ref={forwardedRef}
      />
    )
  },
)

SliderTrack.displayName = TRACK_NAME

/* -------------------------------------------------------------------------------------------------
 * SliderTrackActive
 * -----------------------------------------------------------------------------------------------*/

const RANGE_NAME = 'SliderTrackActive'

export const SliderTrackActiveFrame = styled(SliderFrame, {
  name: 'SliderTrackActive',
  backgroundColor: '$background',
  position: 'absolute',
})

type SliderTrackActiveProps = GetProps<typeof SliderTrackActiveFrame>

const SliderTrackActive = React.forwardRef<View, SliderTrackActiveProps>(
  (props: ScopedProps<SliderTrackActiveProps>, forwardedRef) => {
    const { __scopeSlider, ...rangeProps } = props
    const context = useSliderContext(RANGE_NAME, __scopeSlider)
    const orientation = useSliderOrientationContext(RANGE_NAME, __scopeSlider)
    const ref = React.useRef<View>(null)
    const composedRefs = useComposedRefs(forwardedRef, ref)
    const valuesCount = context.values.length
    const percentages = context.values.map((value) =>
      convertValueToPercentage(value, context.min, context.max),
    )
    const offsetStart = valuesCount > 1 ? Math.min(...percentages) : 0
    const offsetEnd = 100 - Math.max(...percentages)

    return (
      <SliderTrackActiveFrame
        orientation={context.orientation}
        data-orientation={context.orientation}
        data-disabled={context.disabled ? '' : undefined}
        size={context.size}
        {...rangeProps}
        ref={composedRefs}
        {...{
          [orientation.startEdge]: `${offsetStart}%`,
          [orientation.endEdge]: `${offsetEnd}%`,
        }}
        {...(orientation.sizeProp === 'width'
          ? {
              height: '100%',
            }
          : {
              left: 0,
              right: 0,
            })}
      />
    )
  },
)

SliderTrackActive.displayName = RANGE_NAME

/* -------------------------------------------------------------------------------------------------
 * SliderThumb
 * -----------------------------------------------------------------------------------------------*/

const THUMB_NAME = 'SliderThumb'

// TODO make this customizable through tamagui
// so we can accurately use it for estimatedSize below
const getThumbSize = (val?: SizeTokens | number) => {
  const size = typeof val === 'number' ? val : getSize(val, -1)
  return {
    width: size,
    height: size,
    minWidth: size,
    minHeight: size,
  }
}

export const SliderThumbFrame = styled(ThemeableStack, {
  name: 'SliderThumb',
  position: 'absolute',
  // TODO not taking up 2
  bordered: 2,
  // OR THIS
  borderWidth: 2,
  backgrounded: true,
  pressTheme: isWeb,
  focusTheme: isWeb,
  hoverTheme: isWeb,

  variants: {
    size: {
      '...size': getThumbSize,
    },
  } as const,
})

interface SliderThumbProps extends SizableStackProps {
  index: number
}

const SliderThumb = React.forwardRef<View, SliderThumbProps>(
  (props: ScopedProps<SliderThumbProps>, forwardedRef) => {
    const { __scopeSlider, index, size: sizeProp, ...thumbProps } = props
    const context = useSliderContext(THUMB_NAME, __scopeSlider)
    const orientation = useSliderOrientationContext(THUMB_NAME, __scopeSlider)
    const [thumb, setThumb] = React.useState<View | HTMLElement | null>(null)
    const composedRefs = useComposedRefs(forwardedRef, (node) => setThumb(node))

    // We cast because index could be `-1` which would return undefined
    const value = context.values[index] as number | undefined
    const percent =
      value === undefined
        ? 0
        : convertValueToPercentage(value, context.min, context.max)
    const label = getLabel(index, context.values.length)
    const sizeIn = sizeProp ?? context.size ?? '$4'
    const [size, setSize] = React.useState(() => {
      // for SSR
      const estimatedSize = getVariableValue(getThumbSize(sizeIn).width)
      return estimatedSize
    })

    const thumbInBoundsOffset = size
      ? getThumbInBoundsOffset(size, percent, orientation.direction)
      : 0

    React.useEffect(() => {
      if (thumb) {
        context.thumbs.add(thumb)
        return () => {
          context.thumbs.delete(thumb)
        }
      }
    }, [thumb, context.thumbs])

    return (
      <SliderThumbFrame
        ref={composedRefs}
        // TODO
        // @ts-ignore
        role="slider"
        aria-label={props['aria-label'] || label}
        aria-valuemin={context.min}
        aria-valuenow={value}
        aria-valuemax={context.max}
        aria-orientation={context.orientation}
        data-orientation={context.orientation}
        data-disabled={context.disabled ? '' : undefined}
        tabIndex={context.disabled ? undefined : 0}
        {...thumbProps}
        {...(context.orientation === 'horizontal'
          ? {
              x: thumbInBoundsOffset - size / 2,
              y: -size / 2,
              top: '50%',
              ...(size === 0 && {
                top: 'auto',
                bottom: 'auto',
              }),
            }
          : {
              x: -size / 2,
              y: size / 2,
              left: '50%',
              ...(size === 0 && {
                left: 'auto',
                right: 'auto',
              }),
            })}
        size={sizeIn}
        onLayout={(e) => {
          setSize(e.nativeEvent.layout[orientation.sizeProp])
        }}
        {...{
          [orientation.startEdge]: `${percent}%`,
        }}
        /**
         * There will be no value on initial render while we work out the index so we hide thumbs
         * without a value, otherwise SSR will render them in the wrong position before they
         * snap into the correct position during hydration which would be visually jarring for
         * slower connections.
         */
        // style={value === undefined ? { display: 'none' } : props.style}
        onFocus={composeEventHandlers(props.onFocus, () => {
          context.valueIndexToChangeRef.current = index
        })}
      />
    )
  },
)

SliderThumb.displayName = THUMB_NAME

/* -------------------------------------------------------------------------------------------------
 * Slider
 * -----------------------------------------------------------------------------------------------*/

const Slider = withStaticProperties(
  React.forwardRef<View, SliderProps>(
    (props: ScopedProps<SliderProps>, forwardedRef) => {
      const {
        name,
        min = 0,
        max = 100,
        step = 1,
        orientation = 'horizontal',
        disabled = false,
        minStepsBetweenThumbs = 0,
        defaultValue = [min],
        value,
        onValueChange = () => {},
        size: sizeProp,
        ...sliderProps
      } = props
      const sliderRef = React.useRef<View>(null)
      const composedRefs = useComposedRefs(sliderRef, forwardedRef)
      const thumbRefs = React.useRef<SliderContextValue['thumbs']>(new Set())
      const valueIndexToChangeRef = React.useRef<number>(0)
      const isHorizontal = orientation === 'horizontal'
      // We set this to true by default so that events bubble to forms without JS (SSR)
      // const isFormControl =
      //   sliderRef.current instanceof HTMLElement ? Boolean(sliderRef.current.closest('form')) : true

      const [values = [], setValues] = useControllableState({
        prop: value,
        defaultProp: defaultValue,
        transition: true,
        onChange: (value) => {
          if (isWeb) {
            const thumbs = [...thumbRefs.current]
            thumbs[valueIndexToChangeRef.current]?.focus()
          }
          onValueChange(value)
        },
      })

      if (isWeb) {
        React.useEffect(() => {
          // @ts-ignore
          const node = sliderRef.current as HTMLElement
          if (!node) return
          const preventDefault = (e) => {
            e.preventDefault()
          }
          node.addEventListener('touchstart', preventDefault)
          return () => {
            node.removeEventListener('touchstart', preventDefault)
          }
        }, [])
      }

      function handleSlideMove(value: number) {
        updateValues(value, valueIndexToChangeRef.current)
      }

      function updateValues(value: number, atIndex: number) {
        const decimalCount = getDecimalCount(step)
        const snapToStep = roundValue(
          Math.round((value - min) / step) * step + min,
          decimalCount,
        )
        const nextValue = clamp(snapToStep, [min, max])
        setValues((prevValues = []) => {
          const nextValues = getNextSortedValues(prevValues, nextValue, atIndex)
          if (hasMinStepsBetweenValues(nextValues, minStepsBetweenThumbs * step)) {
            valueIndexToChangeRef.current = nextValues.indexOf(nextValue)
            return String(nextValues) === String(prevValues)
              ? prevValues
              : nextValues
          } else {
            return prevValues
          }
        })
      }

      const SliderOriented = isHorizontal ? SliderHorizontal : SliderVertical

      return (
        <SliderProvider
          scope={props.__scopeSlider}
          disabled={disabled}
          min={min}
          max={max}
          valueIndexToChangeRef={valueIndexToChangeRef}
          thumbs={thumbRefs.current}
          values={values}
          orientation={orientation}
          size={sizeProp}
        >
          <SliderOriented
            aria-disabled={disabled}
            data-disabled={disabled ? '' : undefined}
            {...sliderProps}
            ref={composedRefs}
            min={min}
            max={max}
            onSlideStart={
              disabled
                ? undefined
                : (value: number, target) => {
                    // when starting on the track, move it right away
                    // when starting on thumb, dont jump until movemenet as it feels weird
                    if (target !== 'thumb') {
                      const closestIndex = getClosestValueIndex(values, value)
                      updateValues(value, closestIndex)
                    }
                  }
            }
            onSlideMove={disabled ? undefined : handleSlideMove}
            onHomeKeyDown={() => !disabled && updateValues(min, 0)}
            onEndKeyDown={() => !disabled && updateValues(max, values.length - 1)}
            onStepKeyDown={({ event, direction: stepDirection }) => {
              if (!disabled) {
                const isPageKey = PAGE_KEYS.includes(event.key)
                const isSkipKey =
                  isPageKey || (event.shiftKey && ARROW_KEYS.includes(event.key))
                const multiplier = isSkipKey ? 10 : 1
                const atIndex = valueIndexToChangeRef.current
                const value = values[atIndex]
                const stepInDirection = step * multiplier * stepDirection
                updateValues(value + stepInDirection, atIndex)
              }
            }}
          />
          {/* {isFormControl &&
          values.map((value, index) => (
            <BubbleInput
              key={index}
              name={name ? name + (values.length > 1 ? '[]' : '') : undefined}
              value={value}
            />
          ))} */}
        </SliderProvider>
      )
    },
  ),
  {
    Track: SliderTrack,
    TrackActive: SliderTrackActive,
    Thumb: SliderThumb,
  },
)

Slider.displayName = SLIDER_NAME

/* -----------------------------------------------------------------------------------------------*/

// // TODO
// const BubbleInput = (props: any) => {
//   const { value, ...inputProps } = props
//   const ref = React.useRef<HTMLInputElement>(null)
//   const prevValue = usePrevious(value)

//   // Bubble value change to parents (e.g form change event)
//   React.useEffect(() => {
//     const input = ref.current!
//     const inputProto = window.HTMLInputElement.prototype
//     const descriptor = Object.getOwnPropertyDescriptor(inputProto, 'value') as PropertyDescriptor
//     const setValue = descriptor.set
//     if (prevValue !== value && setValue) {
//       const event = new Event('input', { bubbles: true })
//       setValue.call(input, value)
//       input.dispatchEvent(event)
//     }
//   }, [prevValue, value])

//   /**
//    * We purposefully do not use `type="hidden"` here otherwise forms that
//    * wrap it will not be able to access its value via the FormData API.
//    *
//    * We purposefully do not add the `value` attribute here to allow the value
//    * to be set programatically and bubble to any parent form `onChange` event.
//    * Adding the `value` will cause React to consider the programatic
//    * dispatch a duplicate and it will get swallowed.
//    */
//   return <input style={{ display: 'none' }} {...inputProps} ref={ref} defaultValue={value} />
// }

/* -----------------------------------------------------------------------------------------------*/

const Track = SliderTrack
const Range = SliderTrackActive
const Thumb = SliderThumb

export {
  Slider,
  SliderTrack,
  SliderTrackActive,
  SliderThumb,
  //
  Track,
  Range,
  Thumb,
}

export type {
  SliderProps,
  SliderTrackProps,
  SliderTrackActiveProps,
  SliderThumbProps,
}
