import { Slot, isAndroid } from '@tamagui/core'
import * as MenuPrimitive from '@tamagui/menu'
import { useId } from 'react'
import * as React from 'react'
import {
  Button,
  TamaguiElement,
  YStack,
  composeEventHandlers,
  composeRefs,
  createStyledContext,
  isWeb,
  useControllableState,
} from 'tamagui'

type Direction = 'ltr' | 'rtl'

/* -------------------------------------------------------------------------------------------------
 * DropdownMenu
 * -----------------------------------------------------------------------------------------------*/

const DROPDOWN_MENU_NAME = 'DropdownMenu'

type ScopedProps<P> = P & { __scopeDropdownMenu?: string }

type DropdownMenuContextValue = {
  triggerId: string
  triggerRef: React.RefObject<HTMLButtonElement>
  contentId: string
  open: boolean
  onOpenChange(open: boolean): void
  onOpenToggle(): void
  modal: boolean
}

const { Provider: DropdownMenuProvider, useStyledContext: useDropdownMenuContext } =
  createStyledContext<DropdownMenuContextValue>()

interface DropdownMenuProps extends MenuPrimitive.MenuProps {
  children?: React.ReactNode
  dir?: Direction
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?(open: boolean): void
  modal?: boolean
}
const DROPDOWN_MENU_CONTEXT = 'DropdownMenuContext'
const DropdownMenu = (props: ScopedProps<DropdownMenuProps>) => {
  const {
    __scopeDropdownMenu,
    children,
    dir,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = true,
    ...rest
  } = props
  const triggerRef = React.useRef<HTMLButtonElement>(null)
  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen!,
    onChange: onOpenChange,
  })

  return (
    <DropdownMenuProvider
      scope={__scopeDropdownMenu}
      triggerId={useId()}
      triggerRef={triggerRef}
      contentId={useId()}
      open={open}
      onOpenChange={setOpen}
      onOpenToggle={React.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen])}
      modal={modal}
    >
      <MenuPrimitive.Root
        __scopeMenu={__scopeDropdownMenu || DROPDOWN_MENU_CONTEXT}
        open={open}
        onOpenChange={setOpen}
        dir={dir}
        modal={modal}
        {...rest}
      >
        {children}
      </MenuPrimitive.Root>
    </DropdownMenuProvider>
  )
}

DropdownMenu.displayName = DROPDOWN_MENU_NAME

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuTrigger
 * -----------------------------------------------------------------------------------------------*/

const TRIGGER_NAME = 'DropdownMenuTrigger'

// type DropdownMenuTriggerElement = React.ElementRef<typeof Button>
type PrimitiveButtonProps = React.ComponentPropsWithoutRef<typeof Button>
interface DropdownMenuTriggerProps extends PrimitiveButtonProps {}

const DropdownMenuTriggerFrame = MenuPrimitive.Anchor

const DropdownMenuTrigger = YStack.styleable<ScopedProps<DropdownMenuTriggerProps>>(
  (props, forwardedRef) => {
    const {
      __scopeDropdownMenu,
      asChild,
      children,
      disabled = false,
      ...triggerProps
    } = props
    const context = useDropdownMenuContext(__scopeDropdownMenu)
    const Comp = asChild ? Slot : Button
    return (
      <DropdownMenuTriggerFrame
        asChild
        componentName={TRIGGER_NAME}
        __scopePopper={__scopeDropdownMenu || DROPDOWN_MENU_CONTEXT}
      >
        <Comp
          tag="button"
          id={context.triggerId}
          aria-haspopup="menu"
          children={children}
          aria-expanded={context.open}
          aria-controls={context.open ? context.contentId : undefined}
          data-state={context.open ? 'open' : 'closed'}
          data-disabled={disabled ? '' : undefined}
          disabled={disabled}
          ref={composeRefs(forwardedRef, context.triggerRef)}
          {...{
            [isWeb ? 'onPointerDown' : 'onPress']: composeEventHandlers(
              //@ts-ignore
              props[isWeb ? 'onPointerDown' : 'onPress'],
              (event) => {
                // only call handler if it's the left button (mousedown gets triggered by all mouse buttons)
                // but not when the control key is pressed (avoiding MacOS right click)
                // TODO: resolve this ts ignore
                if (!disabled) {
                  // @ts-ignore
                  if (isWeb && event.button !== 0 && event.ctrlKey === true) return
                  context.onOpenToggle()
                  // prevent trigger focusing when opening
                  // this allows the content to be given focus without competition
                  if (!context.open) event.preventDefault()
                }
              }
            ),
          }}
          // TODO: resolve these ts ignores
          {...(isWeb && {
            // @ts-ignore
            onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
              if (disabled) return
              // @ts-ignore
              if (['Enter', ' '].includes(event.key)) context.onOpenToggle()
              // @ts-ignore
              if (event.key === 'ArrowDown') context.onOpenChange(true)
              // prevent keydown from scrolling window / first focused item to execute
              // that keydown (inadvertently closing the menu)
              // @ts-ignore
              if (['Enter', ' ', 'ArrowDown'].includes(event.key)) event.preventDefault()
            }),
          })}
          {...triggerProps}
        />
      </DropdownMenuTriggerFrame>
    )
  }
)

DropdownMenuTrigger.displayName = TRIGGER_NAME

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuPortal
 * -----------------------------------------------------------------------------------------------*/

const PORTAL_NAME = 'DropdownMenuPortal'

type MenuPortalProps = React.ComponentPropsWithoutRef<typeof MenuPrimitive.Portal>
interface DropdownMenuPortalProps extends MenuPortalProps {}

const DropdownMenuPortal = (props: ScopedProps<DropdownMenuPortalProps>) => {
  const { __scopeDropdownMenu, children, ...portalProps } = props

  const context = isAndroid ? useDropdownMenuContext(__scopeDropdownMenu) : null

  const content = isAndroid ? (
    <DropdownMenuProvider {...context}>{children}</DropdownMenuProvider>
  ) : (
    children
  )
  return (
    <MenuPrimitive.Portal
      __scopeMenu={__scopeDropdownMenu || DROPDOWN_MENU_CONTEXT}
      {...portalProps}
      children={content}
    />
  )
}

DropdownMenuPortal.displayName = PORTAL_NAME

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuContent
 * -----------------------------------------------------------------------------------------------*/

const CONTENT_NAME = 'DropdownMenuContent'

type DropdownMenuContentElement = React.ElementRef<typeof MenuPrimitive.Content>
type MenuContentProps = React.ComponentPropsWithoutRef<typeof MenuPrimitive.Content>
interface DropdownMenuContentProps extends Omit<MenuContentProps, 'onEntryFocus'> {}

const DropdownMenuContent = React.forwardRef<
  DropdownMenuContentElement,
  ScopedProps<DropdownMenuContentProps>
>((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...contentProps } = props
  const context = useDropdownMenuContext(__scopeDropdownMenu)
  const hasInteractedOutsideRef = React.useRef(false)

  return (
    <MenuPrimitive.Content
      id={context.contentId}
      aria-labelledby={context.triggerId}
      __scopeMenu={__scopeDropdownMenu || DROPDOWN_MENU_CONTEXT}
      {...contentProps}
      ref={forwardedRef}
      onCloseAutoFocus={composeEventHandlers(props.onCloseAutoFocus, (event) => {
        if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus()
        hasInteractedOutsideRef.current = false
        // Always prevent auto focus because we either focus manually or want user agent focus
        event.preventDefault()
      })}
      onInteractOutside={composeEventHandlers(props.onInteractOutside, (event) => {
        const originalEvent = event.detail.originalEvent as PointerEvent
        const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true
        const isRightClick = originalEvent.button === 2 || ctrlLeftClick
        if (!context.modal || isRightClick) hasInteractedOutsideRef.current = true
      })}
      // TODO: how style prop works here while there's no dom element to style? check radix as reference
      {...(props.style as Object)}
    />
  )
})

DropdownMenuContent.displayName = CONTENT_NAME

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuGroup
 * -----------------------------------------------------------------------------------------------*/

const GROUP_NAME = 'DropdownMenuGroup'

// type DropdownMenuGroupElement = React.ElementRef<typeof MenuPrimitive.Group>
type MenuGroupProps = React.ComponentPropsWithoutRef<typeof MenuPrimitive.Group>
type DropdownMenuGroupProps = MenuGroupProps & {}

const DropdownMenuGroup = MenuPrimitive.Group

DropdownMenuGroup.displayName = GROUP_NAME

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuLabel
 * -----------------------------------------------------------------------------------------------*/

const LABEL_NAME = 'DropdownMenuLabel'

// type DropdownMenuLabelElement = React.ElementRef<typeof MenuPrimitive.Label>
type MenuLabelProps = React.ComponentPropsWithoutRef<typeof MenuPrimitive.Label>
type DropdownMenuLabelProps = MenuLabelProps & {}

const DropdownMenuLabel = MenuPrimitive.Label

DropdownMenuLabel.displayName = LABEL_NAME

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuItem
 * -----------------------------------------------------------------------------------------------*/

const ITEM_NAME = 'DropdownMenuItem'

type MenuItemProps = React.ComponentPropsWithoutRef<typeof MenuPrimitive.Item>
interface DropdownMenuItemProps extends MenuItemProps {}

const DropdownMenuItemFrame = MenuPrimitive.Item

const DropdownMenuItem = DropdownMenuItemFrame.styleable<
  ScopedProps<DropdownMenuItemProps>
>((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...itemProps } = props
  return (
    <DropdownMenuItemFrame
      componentName={ITEM_NAME}
      __scopeMenu={__scopeDropdownMenu || DROPDOWN_MENU_CONTEXT}
      {...itemProps}
      ref={forwardedRef}
    />
  )
})

DropdownMenuItem.displayName = ITEM_NAME

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuCheckboxItem
 * -----------------------------------------------------------------------------------------------*/

const CHECKBOX_ITEM_NAME = 'DropdownMenuCheckboxItem'

// type DropdownMenuCheckboxItemElement = React.ElementRef<typeof MenuPrimitive.CheckboxItem>
type MenuCheckboxItemProps = React.ComponentPropsWithoutRef<
  typeof MenuPrimitive.CheckboxItem
>

interface DropdownMenuCheckboxItemProps extends MenuCheckboxItemProps {}

const DropdownMenuCheckboxItemFrame = MenuPrimitive.CheckboxItem

const DropdownMenuCheckboxItem = DropdownMenuCheckboxItemFrame.styleable<
  ScopedProps<DropdownMenuCheckboxItemProps>
>((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...checkboxItemProps } = props
  return (
    <DropdownMenuCheckboxItemFrame
      componentName={CHECKBOX_ITEM_NAME}
      __scopeMenu={__scopeDropdownMenu || DROPDOWN_MENU_CONTEXT}
      {...checkboxItemProps}
      ref={forwardedRef}
    />
  )
})

DropdownMenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuRadioGroup
 * -----------------------------------------------------------------------------------------------*/

const RADIO_GROUP_NAME = 'DropdownMenuRadioGroup'

type DropdownMenuRadioGroupElement = React.ElementRef<typeof MenuPrimitive.RadioGroup>
type MenuRadioGroupProps = React.ComponentPropsWithoutRef<typeof MenuPrimitive.RadioGroup>
interface DropdownMenuRadioGroupProps extends MenuRadioGroupProps {}

const DropdownMenuRadioGroup = React.forwardRef<
  DropdownMenuRadioGroupElement,
  ScopedProps<DropdownMenuRadioGroupProps>
>((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...radioGroupProps } = props
  return (
    <MenuPrimitive.RadioGroup
      __scopeMenu={__scopeDropdownMenu || DROPDOWN_MENU_CONTEXT}
      {...radioGroupProps}
      ref={forwardedRef}
    />
  )
})

DropdownMenuRadioGroup.displayName = RADIO_GROUP_NAME

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuRadioItem
 * -----------------------------------------------------------------------------------------------*/

const RADIO_ITEM_NAME = 'DropdownMenuRadioItem'

// type DropdownMenuRadioItemElement = React.ElementRef<typeof MenuPrimitive.RadioItem>
type MenuRadioItemProps = React.ComponentPropsWithoutRef<typeof MenuPrimitive.RadioItem>
interface DropdownMenuRadioItemProps extends MenuRadioItemProps {}

const DropdownMenuRadioItemFrame = MenuPrimitive.RadioItem

const DropdownMenuRadioItem = DropdownMenuRadioItemFrame.styleable<
  ScopedProps<DropdownMenuRadioItemProps>
>((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...radioItemProps } = props
  return (
    // @ts-ignore explanation: deeply nested types typescript limitation
    <DropdownMenuRadioItemFrame
      componentName={RADIO_ITEM_NAME}
      __scopeMenu={__scopeDropdownMenu || DROPDOWN_MENU_CONTEXT}
      {...radioItemProps}
      ref={forwardedRef}
    />
  )
})

DropdownMenuRadioItem.displayName = RADIO_ITEM_NAME

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuItemIndicator
 * -----------------------------------------------------------------------------------------------*/

const INDICATOR_NAME = 'DropdownMenuItemIndicator'

type MenuItemIndicatorProps = React.ComponentPropsWithoutRef<
  typeof MenuPrimitive.ItemIndicator
>
interface DropdownMenuItemIndicatorProps extends MenuItemIndicatorProps {}

const DropdownMenuItemIndicatorFrame = MenuPrimitive.ItemIndicator

const DropdownMenuItemIndicator = DropdownMenuItemIndicatorFrame.styleable<
  ScopedProps<DropdownMenuItemIndicatorProps>
>((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...itemIndicatorProps } = props
  return (
    <DropdownMenuItemIndicatorFrame
      componentName={INDICATOR_NAME}
      __scopeMenu={__scopeDropdownMenu || DROPDOWN_MENU_CONTEXT}
      {...itemIndicatorProps}
      ref={forwardedRef}
    />
  )
})

DropdownMenuItemIndicator.displayName = INDICATOR_NAME

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuSeparator
 * -----------------------------------------------------------------------------------------------*/

const SEPARATOR_NAME = 'DropdownMenuSeparator'

type MenuSeparatorProps = React.ComponentPropsWithoutRef<typeof MenuPrimitive.Separator>
type DropdownMenuSeparatorProps = MenuSeparatorProps & {}

const DropdownMenuSeparator = MenuPrimitive.Separator

DropdownMenuSeparator.displayName = SEPARATOR_NAME

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuArrow
 * -----------------------------------------------------------------------------------------------*/

const ARROW_NAME = 'DropdownMenuArrow'

// type DropdownMenuArrowElement = React.ElementRef<typeof MenuPrimitive.Arrow>
type MenuArrowProps = React.ComponentPropsWithoutRef<typeof MenuPrimitive.Arrow>
type DropdownMenuArrowProps = MenuArrowProps & {}

const DropdownMenuArrow = React.forwardRef<
  TamaguiElement,
  ScopedProps<DropdownMenuArrowProps>
>((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...arrowProps } = props
  return (
    <MenuPrimitive.Arrow
      componentName={ARROW_NAME}
      __scopePopper={__scopeDropdownMenu || DROPDOWN_MENU_CONTEXT}
      {...arrowProps}
      ref={forwardedRef}
    />
  )
})

DropdownMenuArrow.displayName = ARROW_NAME

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuSub
 * -----------------------------------------------------------------------------------------------*/

interface DropdownMenuSubProps extends MenuPrimitive.MenuSubProps {
  children?: React.ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?(open: boolean): void
}

const DropdownMenuSub = (props: ScopedProps<DropdownMenuSubProps>) => {
  const {
    __scopeDropdownMenu,
    children,
    open: openProp,
    onOpenChange,
    defaultOpen,
    ...rest
  } = props
  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen!,
    onChange: onOpenChange,
  })

  return (
    <MenuPrimitive.Sub
      __scopeMenu={__scopeDropdownMenu || DROPDOWN_MENU_CONTEXT}
      open={open}
      onOpenChange={setOpen}
      {...rest}
    >
      {children}
    </MenuPrimitive.Sub>
  )
}

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuSubTrigger
 * -----------------------------------------------------------------------------------------------*/

const SUB_TRIGGER_NAME = 'DropdownMenuSubTrigger'

// type DropdownMenuSubTriggerElement = React.ElementRef<typeof MenuPrimitive.SubTrigger>
type MenuSubTriggerProps = React.ComponentPropsWithoutRef<typeof MenuPrimitive.SubTrigger>
interface DropdownMenuSubTriggerProps extends MenuSubTriggerProps {}

const DropdownMenuSubTrigger = YStack.styleable<ScopedProps<DropdownMenuSubTriggerProps>>(
  (props, forwardedRef) => {
    // TODO: having asChild will create a problem, find a fix for that
    const { __scopeDropdownMenu, asChild, ...subTriggerProps } = props
    return (
      <MenuPrimitive.SubTrigger
        componentName={SUB_TRIGGER_NAME}
        __scopeMenu={__scopeDropdownMenu || DROPDOWN_MENU_CONTEXT}
        {...subTriggerProps}
        ref={forwardedRef}
      />
    )
  }
)

DropdownMenuSubTrigger.displayName = SUB_TRIGGER_NAME

/* -------------------------------------------------------------------------------------------------
 * DropdownMenuSubContent
 * -----------------------------------------------------------------------------------------------*/

const SUB_CONTENT_NAME = 'DropdownMenuSubContent'

type DropdownMenuSubContentElement = React.ElementRef<typeof MenuPrimitive.Content>
type MenuSubContentProps = React.ComponentPropsWithoutRef<typeof MenuPrimitive.SubContent>
interface DropdownMenuSubContentProps extends MenuSubContentProps {}

const DropdownMenuSubContent = React.forwardRef<
  DropdownMenuSubContentElement,
  ScopedProps<DropdownMenuSubContentProps>
>((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...subContentProps } = props

  return (
    <MenuPrimitive.SubContent
      __scopeMenu={__scopeDropdownMenu || DROPDOWN_MENU_CONTEXT}
      {...subContentProps}
      ref={forwardedRef}
      style={
        isWeb
          ? {
              ...(props.style as Object),
              // re-namespace exposed content custom properties
              // TODO: find a better way to do this, or maybe not do it at all
              ...({
                '--tamagui-dropdown-menu-content-transform-origin':
                  'var(--tamagui-popper-transform-origin)',
                '--tamagui-dropdown-menu-content-available-width':
                  'var(--tamagui-popper-available-width)',
                '--tamagui-dropdown-menu-content-available-height':
                  'var(--tamagui-popper-available-height)',
                '--tamagui-dropdown-menu-trigger-width':
                  'var(--tamagui-popper-anchor-width)',
                '--tamagui-dropdown-menu-trigger-height':
                  'var(--tamagui-popper-anchor-height)',
              } as React.CSSProperties),
            }
          : null
      }
    />
  )
})

DropdownMenuSubContent.displayName = SUB_CONTENT_NAME

/* -----------------------------------------------------------------------------------------------*/

const Root = DropdownMenu
const Trigger = DropdownMenuTrigger
const Portal = DropdownMenuPortal
const Content = DropdownMenuContent
const Group = DropdownMenuGroup
const Label = DropdownMenuLabel
const Item = DropdownMenuItem
const CheckboxItem = DropdownMenuCheckboxItem
const RadioGroup = DropdownMenuRadioGroup
const RadioItem = DropdownMenuRadioItem
const ItemIndicator = DropdownMenuItemIndicator
const Separator = DropdownMenuSeparator
const Arrow = DropdownMenuArrow
const Sub = DropdownMenuSub
const SubTrigger = DropdownMenuSubTrigger
const SubContent = DropdownMenuSubContent

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuItemIndicator,
  DropdownMenuSeparator,
  DropdownMenuArrow,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  //
  Root,
  Trigger,
  Portal,
  Content,
  Group,
  Label,
  Item,
  CheckboxItem,
  RadioGroup,
  RadioItem,
  ItemIndicator,
  Separator,
  Arrow,
  Sub,
  SubTrigger,
  SubContent,
}
export type {
  DropdownMenuProps,
  DropdownMenuTriggerProps,
  DropdownMenuPortalProps,
  DropdownMenuContentProps,
  DropdownMenuGroupProps,
  DropdownMenuLabelProps,
  DropdownMenuItemProps,
  DropdownMenuCheckboxItemProps,
  DropdownMenuRadioGroupProps,
  DropdownMenuRadioItemProps,
  DropdownMenuItemIndicatorProps,
  DropdownMenuSeparatorProps,
  DropdownMenuArrowProps,
  DropdownMenuSubProps,
  DropdownMenuSubTriggerProps,
  DropdownMenuSubContentProps,
}
