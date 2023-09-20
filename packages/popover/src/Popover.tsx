import "@tamagui/polyfill-dev";

import { Adapt, useAdaptParent } from "@tamagui/adapt";
import { Animate } from "@tamagui/animate";
import { hideOthers } from "@tamagui/aria-hidden";
import { useComposedRefs } from "@tamagui/compose-refs";
import {
  MediaQueryKey,
  Scoped,
  SizeTokens,
  Stack,
  StackProps,
  TamaguiElement,
  Theme,
  View,
  composeEventHandlers,
  createStyledContext,
  isWeb,
  useEvent,
  useGet,
  useMedia,
  useThemeName,
  withStaticProperties,
} from "@tamagui/core";
import { DismissableProps } from "@tamagui/dismissable";
import { FloatingOverrideContext } from "@tamagui/floating";
import { FocusScope, FocusScopeProps } from "@tamagui/focus-scope";
import {
  Popper,
  PopperAnchor,
  PopperArrow,
  PopperArrowProps,
  PopperContent,
  PopperContentFrame,
  PopperContentProps,
  PopperContext,
  PopperProps,
  usePopperContext,
} from "@tamagui/popper";
import { Portal, PortalHost, PortalItem } from "@tamagui/portal";
import { RemoveScroll, RemoveScrollProps } from "@tamagui/remove-scroll";
import { Sheet, SheetController } from "@tamagui/sheet";
import { YStack, YStackProps } from "@tamagui/stacks";
import { useControllableState } from "@tamagui/use-controllable-state";
import * as React from "react";
import { Freeze } from "react-freeze";
import { Platform, ScrollView } from "react-native";

import { useFloatingContext } from "./useFloatingContext";

// adapted from radix-ui popover

export type PopoverProps = PopperProps & {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  keepChildrenMounted?: boolean;
};

type PopoverContextValue = {
  id: string;
  triggerRef: React.RefObject<any>;
  contentId?: string;
  open: boolean;
  onOpenChange(open: boolean): void;
  onOpenToggle(): void;
  hasCustomAnchor: boolean;
  onCustomAnchorAdd(): void;
  onCustomAnchorRemove(): void;
  size?: SizeTokens;
  sheetBreakpoint: any;
  breakpointActive?: boolean;
  keepChildrenMounted?: boolean;
};

const CONTEXT_SCOPE = "PopoverScope";

export const PopoverContext = createStyledContext<PopoverContextValue>({} as any);

export const usePopoverContext = PopoverContext.useStyledContext;

/* -------------------------------------------------------------------------------------------------
 * PopoverAnchor
 * -----------------------------------------------------------------------------------------------*/

export type PopoverAnchorProps = YStackProps;

export const PopoverAnchor = React.forwardRef<TamaguiElement, Scoped<PopoverAnchorProps>>(
  function PopoverAnchor(props: Scoped<PopoverAnchorProps>, forwardedRef) {
    const { scope, ...rest } = props;
    const context = usePopoverContext(scope);
    const { onCustomAnchorAdd, onCustomAnchorRemove } = context || {};

    React.useEffect(() => {
      onCustomAnchorAdd();
      return () => onCustomAnchorRemove();
    }, [onCustomAnchorAdd, onCustomAnchorRemove]);

    return <PopperAnchor scope={scope || CONTEXT_SCOPE} {...rest} ref={forwardedRef} />;
  },
);

/* -------------------------------------------------------------------------------------------------
 * PopoverTrigger
 * -----------------------------------------------------------------------------------------------*/

export type PopoverTriggerProps = StackProps;

export const PopoverTrigger = React.forwardRef<TamaguiElement, Scoped<PopoverTriggerProps>>(
  function PopoverTrigger(props: Scoped<PopoverTriggerProps>, forwardedRef) {
    const { scope, ...rest } = props;
    const context = usePopoverContext(scope);
    const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);

    const trigger = (
      <View
        aria-haspopup="dialog"
        aria-expanded={context.open}
        // TODO not matching
        // aria-controls={context.contentId}
        data-state={getState(context.open)}
        {...rest}
        // @ts-ignore
        ref={composedTriggerRef}
        onPress={composeEventHandlers(props.onPress as any, context.onOpenToggle)}
      />
    );

    return context.hasCustomAnchor ? (
      trigger
    ) : (
      <PopperAnchor scope={scope || CONTEXT_SCOPE} asChild>
        {trigger}
      </PopperAnchor>
    );
  },
);

/* -------------------------------------------------------------------------------------------------
 * PopoverContent
 * -----------------------------------------------------------------------------------------------*/

export type PopoverContentProps = PopoverContentTypeProps;

type PopoverContentTypeElement = PopoverContentImplElement;

export interface PopoverContentTypeProps
  extends Omit<PopoverContentImplProps, "disableOutsidePointerEvents"> {
  /**
   * @see https://github.com/theKashey/react-remove-scroll#usage
   */
  allowPinchZoom?: RemoveScrollProps["allowPinchZoom"];
}

export const PopoverContent = PopperContentFrame.extractable(
  React.forwardRef<PopoverContentTypeElement, Scoped<PopoverContentTypeProps>>(
    function PopoverContent(props: Scoped<PopoverContentTypeProps>, forwardedRef) {
      const {
        allowPinchZoom,
        trapFocus,
        disableRemoveScroll = true,
        zIndex,
        scope,
        ...contentImplProps
      } = props;
      const context = usePopoverContext(scope);
      const contentRef = React.useRef<any>(null);
      const composedRefs = useComposedRefs(forwardedRef, contentRef);
      const isRightClickOutsideRef = React.useRef(false);

      // aria-hide everything except the content (better supported equivalent to setting aria-modal)
      React.useEffect(() => {
        if (!context.open) return;
        const content = contentRef.current;
        if (content) return hideOthers(content);
      }, [context.open]);

      return (
        <PopoverContentPortal zIndex={props.zIndex}>
          <Stack pointerEvents={context.open ? "auto" : "none"}>
            <PopoverContentImpl
              {...contentImplProps}
              disableRemoveScroll={disableRemoveScroll}
              ref={composedRefs}
              scope={scope}
              // we make sure we're not trapping once it's been closed
              // (closed !== unmounted when animating out)
              trapFocus={trapFocus ?? context.open}
              disableOutsidePointerEvents
              onCloseAutoFocus={composeEventHandlers(props.onCloseAutoFocus, (event) => {
                event.preventDefault();
                if (!isRightClickOutsideRef.current) context.triggerRef.current?.focus();
              })}
              onPointerDownOutside={composeEventHandlers(
                props.onPointerDownOutside,
                (event) => {
                  const originalEvent = event.detail.originalEvent;
                  const ctrlLeftClick =
                    originalEvent.button === 0 && originalEvent.ctrlKey === true;
                  const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
                  isRightClickOutsideRef.current = isRightClick;
                },
                { checkDefaultPrevented: false },
              )}
              // When focus is trapped, a `focusout` event may still happen.
              // We make sure we don't trigger our `onDismiss` in such case.
              onFocusOutside={composeEventHandlers(
                props.onFocusOutside,
                (event) => event.preventDefault(),
                { checkDefaultPrevented: false },
              )}
            />
          </Stack>
        </PopoverContentPortal>
      );
    },
  ),
);

function PopoverRepropagateContext(props: {
  children: any;
  context: any;
  popperContext: any;
}) {
  return (
    <PopperContext.Provider {...props.popperContext}>
      <PopoverContext.Provider {...props.context}>{props.children}</PopoverContext.Provider>
    </PopperContext.Provider>
  );
}

function PopoverContentPortal(props: PopoverContentTypeProps) {
  const zIndex = props.zIndex ?? 150_000;
  const context = usePopoverContext();
  const popperContext = usePopperContext();
  const themeName = useThemeName();

  let contents = props.children;

  // native doesnt support portals
  if (Platform.OS === "android" || Platform.OS === "ios") {
    contents = (
      <PopoverRepropagateContext popperContext={popperContext} context={context}>
        {props.children}
      </PopoverRepropagateContext>
    );
  }

  // Portal the contents and add a transparent bg overlay to handle dismiss on native
  return (
    <Portal zIndex={zIndex}>
      <Theme forceClassName name={themeName}>
        {!!context.open && !context.breakpointActive && (
          <YStack
            fullscreen
            onPress={composeEventHandlers(props.onPress as any, context.onOpenToggle)}
          />
        )}
        {contents}
      </Theme>
    </Portal>
  );
}

/* -----------------------------------------------------------------------------------------------*/

type PopoverContentImplElement = React.ElementRef<typeof PopperContent>;

export interface PopoverContentImplProps
  extends PopperContentProps,
    Omit<DismissableProps, "onDismiss" | "children" | "onPointerDownCapture"> {
  /**
   * Whether focus should be trapped within the `Popover`
   * @default false
   */
  trapFocus?: FocusScopeProps["trapped"];

  /**
   * Whether popover should not focus contents on open
   * @default false
   */
  disableFocusScope?: boolean;

  /**
   * Event handler called when auto-focusing on open.
   * Can be prevented.
   */
  onOpenAutoFocus?: FocusScopeProps["onMountAutoFocus"];

  /**
   * Event handler called when auto-focusing on close.
   * Can be prevented.
   */
  onCloseAutoFocus?: FocusScopeProps["onUnmountAutoFocus"];

  disableRemoveScroll?: boolean;

  freezeContentsWhenHidden?: boolean;
}

const PopoverContentImpl = React.forwardRef<
  PopoverContentImplElement,
  Scoped<PopoverContentImplProps>
>(function PopoverContentImpl(props: Scoped<PopoverContentImplProps>, forwardedRef) {
  const {
    trapFocus,
    scope,
    onOpenAutoFocus,
    onCloseAutoFocus,
    disableOutsidePointerEvents,
    disableFocusScope,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside,
    onInteractOutside,
    children,
    disableRemoveScroll,
    freezeContentsWhenHidden,
    ...contentProps
  } = props;

  const context = usePopoverContext(scope);
  const { open, keepChildrenMounted } = context;
  const popperContext = usePopperContext(scope || CONTEXT_SCOPE);
  const [isFullyHidden, setIsFullyHidden] = React.useState(!context.open);

  const contents = React.useMemo(() => {
    return isWeb ? <div style={{ display: "contents" }}>{children}</div> : children;
  }, [children]);

  if (open && isFullyHidden) {
    setIsFullyHidden(false);
  }

  if (!keepChildrenMounted) {
    if (isFullyHidden) {
      return null;
    }
  }

  if (context.breakpointActive) {
    // unwrap the PopoverScrollView if used, as it will use the SheetScrollView if that exists
    // TODO this should be disabled through context
    const childrenWithoutScrollView = React.Children.toArray(children).map((child) => {
      if (React.isValidElement(child)) {
        if (child.type === ScrollView) {
          return child.props.children;
        }
      }
      return child;
    });

    let content = childrenWithoutScrollView as any;

    if (Platform.OS === "android" || Platform.OS === "ios") {
      content = (
        <PopperContext.Provider scope={scope || CONTEXT_SCOPE} {...popperContext}>
          {childrenWithoutScrollView}
        </PopperContext.Provider>
      );
    }

    // doesn't show as popover yet on native, must use as sheet
    return <PortalItem hostName={`${context.id}PopoverContents`}>{content}</PortalItem>;
  }

  // const handleDismiss = React.useCallback((event: GestureResponderEvent) =>{
  //   context.onOpenChange(false);
  // }, [])
  // <Dismissable
  //     disableOutsidePointerEvents={disableOutsidePointerEvents}
  //     // onInteractOutside={onInteractOutside}
  //     onEscapeKeyDown={onEscapeKeyDown}
  //     // onPointerDownOutside={onPointerDownOutside}
  //     // onFocusOutside={onFocusOutside}
  //     onDismiss={handleDismiss}
  //   >

  const freeze = Boolean(isFullyHidden && freezeContentsWhenHidden);

  return (
    <Animate
      type="presence"
      present={Boolean(open)}
      keepChildrenMounted={keepChildrenMounted}
      onExitComplete={() => {
        setIsFullyHidden(true);
      }}
    >
      <FreezeToLastContents
        // freeze if fully hidden but fallback to last contents
        // if keepChildrenMounted then mount it on the first
        freeze={freeze}
      >
        <PopperContent
          scope={scope || CONTEXT_SCOPE}
          key={context.contentId}
          data-state={getState(open)}
          id={context.contentId}
          ref={forwardedRef}
          {...contentProps}
        >
          <RemoveScroll
            enabled={disableRemoveScroll ? false : open}
            allowPinchZoom
            // causes lots of bugs on touch web on site
            removeScrollBar={false}
            style={{
              display: "contents",
            }}
          >
            <FocusScope
              loop
              enabled={disableFocusScope ? false : open}
              trapped={trapFocus}
              onMountAutoFocus={onOpenAutoFocus}
              onUnmountAutoFocus={onCloseAutoFocus}
            >
              {contents}
            </FocusScope>
          </RemoveScroll>
        </PopperContent>
      </FreezeToLastContents>
    </Animate>
  );
});

const FreezeToLastContents = (props: { freeze: boolean; children: any }) => {
  const last = React.useRef();

  if (!props.freeze) {
    last.current = props.children;
  }

  return <Freeze placeholder={last.current} {...props} />;
};

/* -------------------------------------------------------------------------------------------------
 * PopoverClose
 * -----------------------------------------------------------------------------------------------*/

export type PopoverCloseProps = YStackProps;

export const PopoverClose = React.forwardRef<TamaguiElement, Scoped<PopoverCloseProps>>(
  function PopoverClose(props: Scoped<PopoverCloseProps>, forwardedRef) {
    const { scope, ...rest } = props;
    const context = usePopoverContext(scope);
    return (
      <YStack
        {...rest}
        ref={forwardedRef}
        componentName="PopoverClose"
        onPress={composeEventHandlers(props.onPress as any, () => context.onOpenChange(false))}
      />
    );
  },
);

/* -------------------------------------------------------------------------------------------------
 * PopoverArrow
 * -----------------------------------------------------------------------------------------------*/

export type PopoverArrowProps = PopperArrowProps;

export const PopoverArrow = React.forwardRef<TamaguiElement, Scoped<PopoverArrowProps>>(
  function PopoverArrow(props: Scoped<PopoverArrowProps>, forwardedRef) {
    const { scope, ...rest } = props;
    return (
      <PopperArrow
        scope={scope || CONTEXT_SCOPE}
        componentName="PopoverArrow"
        {...rest}
        ref={forwardedRef}
      />
    );
  },
);

/* -------------------------------------------------------------------------------------------------
 * Popover
 * -----------------------------------------------------------------------------------------------*/

export const Popover = withStaticProperties(
  function Popover(props: Scoped<PopoverProps>) {
    const {
      children,
      open: openProp,
      defaultOpen,
      onOpenChange,
      scope,
      keepChildrenMounted,
      ...restProps
    } = props;

    const id = React.useId();
    const { when, AdaptProvider } = useAdaptParent({
      Contents: React.useCallback(() => {
        return <PortalHost name={`${id}PopoverContents`} />;
      }, []),
    });

    const sheetBreakpoint = when;
    const triggerRef = React.useRef<TamaguiElement>(null);
    const [hasCustomAnchor, setHasCustomAnchor] = React.useState(false);
    const [open, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen || false,
      onChange: onOpenChange,
    });

    const breakpointActive = useSheetBreakpointActive(sheetBreakpoint);

    const floatingContext = useFloatingContext({ open, setOpen, breakpointActive }) as any;

    const popoverContext = {
      id,
      sheetBreakpoint,
      contentId: React.useId(),
      triggerRef,
      open,
      breakpointActive,
      onOpenChange: setOpen,
      onOpenToggle: useEvent(() => {
        if (open && breakpointActive) {
          return;
        }
        setOpen(!open);
      }),
      hasCustomAnchor,
      onCustomAnchorAdd: React.useCallback(() => setHasCustomAnchor(true), []),
      onCustomAnchorRemove: React.useCallback(() => setHasCustomAnchor(false), []),
      keepChildrenMounted,
    };

    // debug if changing too often
    // if (process.env.NODE_ENV === 'development') {
    //   Object.keys(popoverContext).forEach((key) => {
    //     React.useEffect(() => console.log(`changed`, key), [popoverContext[key]])
    //   })
    // }

    const contents = (
      <Popper scope={scope || CONTEXT_SCOPE} stayInFrame {...restProps}>
        <PopoverContext.Provider scope={scope} {...popoverContext}>
          <PopoverSheetController onOpenChange={setOpen}>{children}</PopoverSheetController>
        </PopoverContext.Provider>
      </Popper>
    );

    return (
      <AdaptProvider>
        {isWeb ? (
          <FloatingOverrideContext.Provider value={floatingContext}>
            {contents}
          </FloatingOverrideContext.Provider>
        ) : (
          contents
        )}
      </AdaptProvider>
    );
  } as React.FC<PopoverProps>,
  {
    Anchor: PopoverAnchor,
    Arrow: PopoverArrow,
    Trigger: PopoverTrigger,
    Content: PopoverContent,
    Close: PopoverClose,
    Adapt,
    ScrollView: ScrollView,
    Sheet: Sheet.Controlled,
  },
);

/* -----------------------------------------------------------------------------------------------*/

function getState(open: boolean) {
  return open ? "open" : "closed";
}

const PopoverSheetController = ({
  scope,
  ...props
}: Scoped<{
  children: React.ReactNode;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}>) => {
  const context = usePopoverContext(scope);
  const showSheet = useShowPopoverSheet(context);
  const breakpointActive = context.breakpointActive;
  const getShowSheet = useGet(showSheet);

  return (
    <SheetController
      onOpenChange={(val) => {
        if (getShowSheet()) {
          props.onOpenChange(val);
        }
      }}
      open={context.open}
      hidden={breakpointActive === false}
    >
      {props.children}
    </SheetController>
  );
};

const useSheetBreakpointActive = (breakpoint?: MediaQueryKey | null | boolean) => {
  const media = useMedia();
  if (typeof breakpoint === "boolean" || !breakpoint) {
    return !!breakpoint;
  }
  return media[breakpoint];
};

const useShowPopoverSheet = (context: PopoverContextValue) => {
  const breakpointActive = useSheetBreakpointActive(context.sheetBreakpoint);
  return context.open === false ? false : breakpointActive;
};
