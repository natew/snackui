import { Collapsible, createCollapsibleScope } from '@tamagui/collapsible'
import { createCollection } from '@tamagui/collection'
import {
  Stack,
  composeEventHandlers,
  useComposedRefs,
  withStaticProperties,
} from '@tamagui/web'
import type { Scope } from '@tamagui/create-context'
import { createContextScope } from '@tamagui/create-context'
import { YStack } from '@tamagui/stacks'
import { H1, H3 } from '@tamagui/text'
import { useControllableState } from '@tamagui/use-controllable-state'
import { useDirection } from '@tamagui/use-direction'
import * as React from 'react'

type Direction = 'ltr' | 'rtl'

function useAccordion() {
  const [selected, setSelected] = React.useState<string | string[]>([])

  const control = React.useCallback((value: string | string[]) => {
    setSelected(value)
  }, [])

  return {
    selected,
    control,
  }
}
/* -------------------------------------------------------------------------------------------------
 * Accordion
 * -----------------------------------------------------------------------------------------------*/

const ACCORDION_NAME = 'Accordion'
const ACCORDION_KEYS = ['Home', 'End', 'ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight']

// TODO add types
const [Collection, useCollection, createCollectionScope] =
  //@ts-ignore
  createCollection<AccordionTriggerElement>(ACCORDION_NAME)

type ScopedProps<P> = P & { __scopeAccordion?: Scope }
const [createAccordionContext, createAccordionScope] = createContextScope(
  ACCORDION_NAME,
  [
    //@ts-ignore
    createCollectionScope,
    createCollapsibleScope,
  ]
)

const useCollapsibleScope = createCollapsibleScope()
type AccordionElement = AccordionImplMultipleElement | AccordionImplSingleElement
interface AccordionSingleProps extends AccordionImplSingleProps {
  type: 'single'
}
interface AccordionMultipleProps extends AccordionImplMultipleProps {
  type: 'multiple'
}

const AccordionComponent = React.forwardRef<
  AccordionElement,
  AccordionSingleProps | AccordionMultipleProps
>((props: ScopedProps<AccordionSingleProps | AccordionMultipleProps>, forwardedRef) => {
  const { type, ...accordionProps } = props
  const singleProps = accordionProps as AccordionImplSingleProps
  const multipleProps = accordionProps as AccordionImplMultipleProps

  return (
    <Collection.Provider scope={props.__scopeAccordion}>
      {type === 'multiple' ? (
        <AccordionImplMultiple {...multipleProps} ref={forwardedRef} />
      ) : (
        <AccordionImplSingle {...singleProps} ref={forwardedRef} />
      )}
    </Collection.Provider>
  )
})

AccordionComponent.displayName = ACCORDION_NAME

AccordionComponent.propTypes = {
  type(props) {
    const value = props.value || props.defaultValue
    if (props.type && !['single', 'multiple'].includes(props.type)) {
      return new Error(
        'Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.'
      )
    }
    if (props.type === 'multiple' && typeof value === 'string') {
      return new Error(
        'Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.'
      )
    }
    if (props.type === 'single' && Array.isArray(value)) {
      return new Error(
        'Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.'
      )
    }
    return null
  },
}

/* -----------------------------------------------------------------------------------------------*/

type AccordionValueContextValue = {
  value: string[]
  onItemOpen(value: string): void
  onItemClose(value: string): void
}

const [AccordionValueProvider, useAccordionValueContext] =
  createAccordionContext<AccordionValueContextValue>(ACCORDION_NAME)

const [AccordionCollapsibleProvider, useAccordionCollapsibleContext] =
  createAccordionContext(ACCORDION_NAME, { collapsible: false })

type AccordionImplSingleElement = AccordionImplElement

interface AccordionImplSingleProps extends AccordionImplProps {
  /**
   * The controlled stateful value of the accordion item whose content is expanded.
   */
  value?: string
  /**
   * The value of the item whose content is expanded when the accordion is initially rendered. Use
   * `defaultValue` if you do not need to control the state of an accordion.
   */
  defaultValue?: string
  /**
   * The callback that fires when the state of the accordion changes.
   */
  onValueChange?(value: string): void
  /**
   * Whether an accordion item can be collapsed after it has been opened.
   * @default false
   */
  collapsible?: boolean
}

const AccordionImplSingle = React.forwardRef<
  AccordionImplSingleElement,
  AccordionImplSingleProps
>((props: ScopedProps<AccordionImplSingleProps>, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    control,
    onValueChange = () => {},
    collapsible = false,
    ...accordionSingleProps
  } = props

  const [value, setValue] = useControllableState({
    prop: valueProp,
    //@ts-ignore
    defaultProp: defaultValue,
    onChange: onValueChange,
  })

  React.useEffect(() => {
    if (value && control) {
      control([value])
    }
  }, [value])

  return (
    <AccordionValueProvider
      scope={props.__scopeAccordion}
      value={value ? [value] : []}
      onItemOpen={setValue}
      onItemClose={React.useCallback(
        () => collapsible && setValue(''),
        [setValue, collapsible]
      )}
    >
      <AccordionCollapsibleProvider
        scope={props.__scopeAccordion}
        collapsible={collapsible}
      >
        <AccordionImpl {...accordionSingleProps} ref={forwardedRef} />
      </AccordionCollapsibleProvider>
    </AccordionValueProvider>
  )
})

/* -----------------------------------------------------------------------------------------------*/
type AccordionImplMultipleElement = AccordionImplElement
interface AccordionImplMultipleProps extends AccordionImplProps {
  /**
   * The controlled stateful value of the accordion items whose contents are expanded.
   */
  value?: string[]
  /**
   * The value of the items whose contents are expanded when the accordion is initially rendered. Use
   * `defaultValue` if you do not need to control the state of an accordion.
   */
  defaultValue?: string[]
  /**
   * The callback that fires when the state of the accordion changes.
   */
  onValueChange?(value: string[]): void
}

const AccordionImplMultiple = React.forwardRef<
  AccordionImplMultipleElement,
  AccordionImplMultipleProps
>((props: ScopedProps<AccordionImplMultipleProps>, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    control,
    onValueChange = () => {},
    ...accordionMultipleProps
  } = props

  const [value, setValue] = useControllableState({
    prop: valueProp,
    //@ts-ignore
    defaultProp: defaultValue,
    onChange: onValueChange,
  })

  React.useEffect(() => {
    if (value && control) {
      control(value)
    }
  }, [value])

  const handleItemOpen = React.useCallback(
    (itemValue: string) => setValue((prevValue = []) => [...prevValue, itemValue]),
    [setValue]
  )

  const handleItemClose = React.useCallback(
    (itemValue: string) =>
      setValue((prevValue = []) => prevValue.filter((value) => value !== itemValue)),
    [setValue]
  )

  return (
    <AccordionValueProvider
      scope={props.__scopeAccordion}
      value={value || []}
      onItemOpen={handleItemOpen}
      onItemClose={handleItemClose}
    >
      <AccordionCollapsibleProvider scope={props.__scopeAccordion} collapsible={true}>
        <AccordionImpl {...accordionMultipleProps} ref={forwardedRef} />
      </AccordionCollapsibleProvider>
    </AccordionValueProvider>
  )
})

/* -----------------------------------------------------------------------------------------------*/

type AccordionImplContextValue = {
  disabled?: boolean
  direction: AccordionImplProps['dir']
  orientation: AccordionImplProps['orientation']
}

const [AccordionImplProvider, useAccordionContext] =
  createAccordionContext<AccordionImplContextValue>(ACCORDION_NAME)

type AccordionImplElement = React.ElementRef<typeof Stack>
type PrimitiveDivProps = React.ComponentPropsWithoutRef<typeof Stack>
interface AccordionImplProps extends PrimitiveDivProps {
  /**
   * Whether or not an accordion is disabled from user interaction.
   *
   * @defaultValue false
   */
  disabled?: boolean
  /**
   * The layout in which the Accordion operates.
   * @default vertical
   */
  orientation?: React.AriaAttributes['aria-orientation']
  /**
   * The language read direction.
   */
  dir?: Direction
  /**
   *  The callback that fires when the state of the accordion changes. for use with `useAccordion`
   * @param selected - The values of the accordion items whose contents are expanded.
   */
  control?(selected: string[]): void
}

const AccordionImpl = React.forwardRef<AccordionImplElement, AccordionImplProps>(
  (props: ScopedProps<AccordionImplProps>, forwardedRef) => {
    const {
      __scopeAccordion,
      disabled,
      dir,
      orientation = 'vertical',
      ...accordionProps
    } = props

    const accordionRef = React.useRef<AccordionImplElement>(null)
    const composedRef = useComposedRefs(accordionRef, forwardedRef)
    const getItems = useCollection(__scopeAccordion)
    const direction = useDirection(dir)
    const isDirectionLTR = direction === 'ltr'

    //@ts-ignore
    const handleKeyDown = composeEventHandlers(props.onKeyDown, (event) => {
      //@ts-ignore
      if (!ACCORDION_KEYS.includes(event.key)) return
      //@ts-ignore
      const target = event.target as HTMLElement
      //@ts-ignore
      const triggerCollection = getItems().filter((item) => !item.ref.current?.disabled)
      const triggerIndex = triggerCollection.findIndex(
        (item) => item.ref.current === target
      )
      const triggerCount = triggerCollection.length

      if (triggerIndex === -1) return

      // Prevents page scroll while user is navigating
      //@ts-ignore
      event.preventDefault()

      let nextIndex = triggerIndex
      const homeIndex = 0
      const endIndex = triggerCount - 1

      const moveNext = () => {
        nextIndex = triggerIndex + 1
        if (nextIndex > endIndex) {
          nextIndex = homeIndex
        }
      }

      const movePrev = () => {
        nextIndex = triggerIndex - 1
        if (nextIndex < homeIndex) {
          nextIndex = endIndex
        }
      }

      //@ts-ignore
      switch (event.key) {
        case 'Home':
          nextIndex = homeIndex
          break
        case 'End':
          nextIndex = endIndex
          break
        case 'ArrowRight':
          if (orientation === 'horizontal') {
            if (isDirectionLTR) {
              moveNext()
            } else {
              movePrev()
            }
          }
          break
        case 'ArrowDown':
          if (orientation === 'vertical') {
            moveNext()
          }
          break
        case 'ArrowLeft':
          if (orientation === 'horizontal') {
            if (isDirectionLTR) {
              movePrev()
            } else {
              moveNext()
            }
          }
          break
        case 'ArrowUp':
          if (orientation === 'vertical') {
            movePrev()
          }
          break
      }

      const clampedIndex = nextIndex % triggerCount
      triggerCollection[clampedIndex].ref.current?.focus()
    })

    return (
      <AccordionImplProvider
        scope={__scopeAccordion}
        disabled={disabled}
        direction={dir}
        orientation={orientation}
      >
        <Collection.Slot scope={__scopeAccordion}>
          <YStack
            {...accordionProps}
            data-orientation={orientation}
            ref={composedRef}
            // web only
            //@ts-ignore
            onKeyDown={handleKeyDown}
          />
        </Collection.Slot>
      </AccordionImplProvider>
    )
  }
)

/* -------------------------------------------------------------------------------------------------
 * AccordionItem
 * -----------------------------------------------------------------------------------------------*/

const ITEM_NAME = 'AccordionItem'

type AccordionItemContextValue = { open?: boolean; disabled?: boolean; triggerId: string }
const [AccordionItemProvider, useAccordionItemContext] =
  createAccordionContext<AccordionItemContextValue>(ITEM_NAME)
type AccordionItemElement = React.ElementRef<typeof Collapsible>
// TODO: here the radix import ComponentPropsWithoutRef from radix not React
type CollapsibleProps = React.ComponentPropsWithoutRef<typeof Collapsible>
interface AccordionItemProps
  extends Omit<CollapsibleProps, 'open' | 'defaultOpen' | 'onOpenChange'> {
  /**
   * Whether or not an accordion item is disabled from user interaction.
   *
   * @defaultValue false
   */
  disabled?: boolean
  /**
   * A string value for the accordion item. All items within an accordion should use a unique value.
   */
  value: string
}

/**
 * `AccordionItem` contains all of the parts of a collapsible section inside of an `Accordion`.
 */

const AccordionItem = React.forwardRef<AccordionItemElement, AccordionItemProps>(
  (props: ScopedProps<AccordionItemProps>, forwardedRef) => {
    const { __scopeAccordion, value, ...accordionItemProps } = props
    const accordionContext = useAccordionContext(ITEM_NAME, __scopeAccordion)
    const valueContext = useAccordionValueContext(ITEM_NAME, __scopeAccordion)
    const collapsibleScope = useCollapsibleScope(__scopeAccordion)
    const triggerId = React.useId()
    const open = (value && valueContext.value.includes(value)) || false
    const disabled = accordionContext.disabled || props.disabled

    return (
      <AccordionItemProvider
        scope={__scopeAccordion}
        open={open}
        disabled={disabled}
        triggerId={triggerId}
      >
        <Collapsible
          data-orientation={accordionContext.orientation}
          data-state={open ? 'open' : 'closed'}
          {...collapsibleScope}
          {...accordionItemProps}
          ref={forwardedRef}
          disabled={disabled}
          open={open}
          onOpenChange={(open) => {
            if (open) {
              valueContext.onItemOpen(value)
            } else {
              valueContext.onItemClose(value)
            }
          }}
        />
      </AccordionItemProvider>
    )
  }
)

AccordionItem.displayName = ITEM_NAME

/* -------------------------------------------------------------------------------------------------
 * AccordionHeader
 * -----------------------------------------------------------------------------------------------*/

const HEADER_NAME = 'AccordionHeader'

type AccordionHeaderElement = React.ElementRef<typeof H3>
type PrimitiveHeading3Props = React.ComponentPropsWithoutRef<typeof H3>
//@ts-ignore
interface AccordionHeaderProps extends PrimitiveHeading3Props {}

/**
 * `AccordionHeader` contains the content for the parts of an `AccordionItem` that will be visible
 * whether or not its content is collapsed.
 */
const AccordionHeader = React.forwardRef<AccordionHeaderElement, AccordionHeaderProps>(
  (props: ScopedProps<AccordionHeaderProps>, forwardedRef) => {
    const { __scopeAccordion, ...headerProps } = props
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion)
    const itemContext = useAccordionItemContext(HEADER_NAME, __scopeAccordion)
    return (
      <H1
        data-orientation={accordionContext.orientation}
        data-state={getState(itemContext.open)}
        data-disabled={itemContext.disabled ? '' : undefined}
        {...headerProps}
        ref={forwardedRef}
      />
    )
  }
)

AccordionHeader.displayName = HEADER_NAME

/* -------------------------------------------------------------------------------------------------
 * AccordionTrigger
 * -----------------------------------------------------------------------------------------------*/

const TRIGGER_NAME = 'AccordionTrigger'

type AccordionTriggerElement = React.ElementRef<typeof Collapsible.Trigger>
type CollapsibleTriggerProps = React.ComponentPropsWithoutRef<typeof Collapsible.Trigger>
interface AccordionTriggerProps extends CollapsibleTriggerProps {}

/**
 * `AccordionTrigger` is the trigger that toggles the collapsed state of an `AccordionItem`. It
 * should always be nested inside of an `AccordionHeader`.
 */
const AccordionTrigger = React.forwardRef<AccordionTriggerElement, AccordionTriggerProps>(
  (props: ScopedProps<AccordionTriggerProps>, forwardedRef) => {
    const { __scopeAccordion, ...triggerProps } = props
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion)
    const itemContext = useAccordionItemContext(TRIGGER_NAME, __scopeAccordion)
    const collapsibleContext = useAccordionCollapsibleContext(
      TRIGGER_NAME,
      __scopeAccordion
    )
    const collapsibleScope = useCollapsibleScope(__scopeAccordion)
    return (
      <Collection.ItemSlot scope={__scopeAccordion}>
        <Collapsible.Trigger
          aria-disabled={
            (itemContext.open && !collapsibleContext.collapsible) || undefined
          }
          data-orientation={accordionContext.orientation}
          id={itemContext.triggerId}
          {...collapsibleScope}
          {...triggerProps}
          ref={forwardedRef}
        />
      </Collection.ItemSlot>
    )
  }
)

AccordionTrigger.displayName = TRIGGER_NAME

/* -------------------------------------------------------------------------------------------------
 * AccordionContent
 * -----------------------------------------------------------------------------------------------*/

const CONTENT_NAME = 'AccordionContent'

type AccordionContentElement = React.ElementRef<typeof Collapsible.Content>
type CollapsibleContentProps = React.ComponentPropsWithoutRef<typeof Collapsible.Content>
interface AccordionContentProps extends CollapsibleContentProps {}

/**
 * `AccordionContent` contains the collapsible content for an `AccordionItem`.
 */
const AccordionContent = React.forwardRef<AccordionContentElement, AccordionContentProps>(
  (props: ScopedProps<AccordionContentProps>, forwardedRef) => {
    return null
    const { __scopeAccordion, ...contentProps } = props
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion)
    const itemContext = useAccordionItemContext(CONTENT_NAME, __scopeAccordion)
    const collapsibleScope = useCollapsibleScope(__scopeAccordion)
    return (
      <Collapsible.Content
        role="region"
        aria-labelledby={itemContext.triggerId}
        data-orientation={accordionContext.orientation}
        {...collapsibleScope}
        {...contentProps}
        ref={forwardedRef}
        // there were some default styles that's been removed
        style={props.style}
      />
    )
  }
)

AccordionContent.displayName = CONTENT_NAME

/* -----------------------------------------------------------------------------------------------*/

function getState(open?: boolean) {
  return open ? 'open' : 'closed'
}
const Accordion = withStaticProperties(AccordionComponent, {
  Trigger: AccordionTrigger,
  Header: AccordionHeader,
  Content: AccordionContent,
  Item: AccordionItem,
})

export { Accordion, createAccordionScope, useAccordion }

export type {
  AccordionContentProps,
  AccordionHeaderProps,
  AccordionItemProps,
  AccordionMultipleProps,
  AccordionSingleProps,
  AccordionTriggerProps,
}
