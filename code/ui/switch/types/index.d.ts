export * from './createSwitch';
export * from './StyledContext';
export * from './Switch';
export declare const Switch: import("react").ForwardRefExoticComponent<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    size?: import("@tamagui/web").SizeTokens | undefined;
    elevation?: number | import("@tamagui/web").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
    unstyled?: boolean | undefined;
    checked?: boolean | undefined;
}>, "theme" | "native" | "debug" | "size" | "zIndex" | `$${string}` | `$${number}` | `$group-${string}` | `$group-${number}` | `$group-${string}-hover` | `$group-${string}-press` | `$group-${string}-focus` | `$group-${string}-focusVisible` | `$group-${string}-focusWithin` | `$group-${number}-hover` | `$group-${number}-press` | `$group-${number}-focus` | `$group-${number}-focusVisible` | `$group-${number}-focusWithin` | `$theme-${string}` | `$theme-${number}` | "name" | "hitSlop" | "pointerEvents" | "display" | "children" | "target" | "htmlFor" | "asChild" | "dangerouslySetInnerHTML" | "disabled" | "className" | "themeShallow" | "themeInverse" | "id" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "role" | "disableOptimization" | "forceStyle" | "disableClassName" | "style" | "needsOffscreenAlphaCompositing" | "removeClippedSubviews" | "testID" | "nativeID" | "collapsable" | "collapsableChildren" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-modal" | "accessibilityLabelledBy" | "aria-labelledby" | "accessibilityLiveRegion" | "aria-live" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "accessibilityShowsLargeContentViewer" | "accessibilityLargeContentTitle" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "x" | "y" | "perspective" | "scale" | "scaleX" | "scaleY" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "userSelect" | "backdropFilter" | "background" | "backgroundImage" | "backgroundOrigin" | "backgroundPosition" | "backgroundRepeat" | "backgroundSize" | "containerType" | "boxSizing" | "overflowX" | "overflowY" | "transformOrigin" | "borderBlockWidth" | "borderBlockStartWidth" | "borderBlockEndWidth" | "borderInlineWidth" | "borderInlineStartWidth" | "borderInlineEndWidth" | "borderBlockStyle" | "borderBlockStartStyle" | "borderBlockEndStyle" | "borderInlineStyle" | "borderInlineStartStyle" | "borderInlineEndStyle" | "marginBlock" | "marginBlockStart" | "marginBlockEnd" | "marginInline" | "marginInlineStart" | "marginInlineEnd" | "paddingBlock" | "paddingBlockStart" | "paddingBlockEnd" | "paddingInline" | "paddingInlineStart" | "paddingInlineEnd" | "inset" | "insetBlock" | "insetBlockStart" | "insetBlockEnd" | "insetInline" | "insetInlineStart" | "insetInlineEnd" | "animation" | "animateOnly" | "animatePresence" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "isolation" | "boxShadow" | "filter" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "translateX" | "translateY" | "hoverStyle" | "pressStyle" | "focusStyle" | "focusWithinStyle" | "focusVisibleStyle" | "disabledStyle" | "exitStyle" | "enterStyle" | "unstyled" | "checked" | "value" | "labeledBy" | "defaultChecked" | "required" | "onCheckedChange" | "nativeProps"> & import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {}>> & {
    size?: import("@tamagui/web").SizeTokens | number;
    unstyled?: boolean;
} & import("@tamagui/switch-headless").SwitchExtraProps & {
    native?: import("@tamagui/helpers").NativeValue<"mobile" | "ios" | "android">;
    nativeProps?: import("react-native").SwitchProps;
} & import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & import("@tamagui/web").StaticComponentObject<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    size?: import("@tamagui/web").SizeTokens | undefined;
    elevation?: number | import("@tamagui/web").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
    unstyled?: boolean | undefined;
    checked?: boolean | undefined;
}>, "theme" | "native" | "debug" | "size" | "zIndex" | `$${string}` | `$${number}` | `$group-${string}` | `$group-${number}` | `$group-${string}-hover` | `$group-${string}-press` | `$group-${string}-focus` | `$group-${string}-focusVisible` | `$group-${string}-focusWithin` | `$group-${number}-hover` | `$group-${number}-press` | `$group-${number}-focus` | `$group-${number}-focusVisible` | `$group-${number}-focusWithin` | `$theme-${string}` | `$theme-${number}` | "name" | "hitSlop" | "pointerEvents" | "display" | "children" | "target" | "htmlFor" | "asChild" | "dangerouslySetInnerHTML" | "disabled" | "className" | "themeShallow" | "themeInverse" | "id" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "role" | "disableOptimization" | "forceStyle" | "disableClassName" | "style" | "needsOffscreenAlphaCompositing" | "removeClippedSubviews" | "testID" | "nativeID" | "collapsable" | "collapsableChildren" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-modal" | "accessibilityLabelledBy" | "aria-labelledby" | "accessibilityLiveRegion" | "aria-live" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "accessibilityShowsLargeContentViewer" | "accessibilityLargeContentTitle" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "x" | "y" | "perspective" | "scale" | "scaleX" | "scaleY" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "userSelect" | "backdropFilter" | "background" | "backgroundImage" | "backgroundOrigin" | "backgroundPosition" | "backgroundRepeat" | "backgroundSize" | "containerType" | "boxSizing" | "overflowX" | "overflowY" | "transformOrigin" | "borderBlockWidth" | "borderBlockStartWidth" | "borderBlockEndWidth" | "borderInlineWidth" | "borderInlineStartWidth" | "borderInlineEndWidth" | "borderBlockStyle" | "borderBlockStartStyle" | "borderBlockEndStyle" | "borderInlineStyle" | "borderInlineStartStyle" | "borderInlineEndStyle" | "marginBlock" | "marginBlockStart" | "marginBlockEnd" | "marginInline" | "marginInlineStart" | "marginInlineEnd" | "paddingBlock" | "paddingBlockStart" | "paddingBlockEnd" | "paddingInline" | "paddingInlineStart" | "paddingInlineEnd" | "inset" | "insetBlock" | "insetBlockStart" | "insetBlockEnd" | "insetInline" | "insetInlineStart" | "insetInlineEnd" | "animation" | "animateOnly" | "animatePresence" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "isolation" | "boxShadow" | "filter" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "translateX" | "translateY" | "hoverStyle" | "pressStyle" | "focusStyle" | "focusWithinStyle" | "focusVisibleStyle" | "disabledStyle" | "exitStyle" | "enterStyle" | "unstyled" | "checked" | "value" | "labeledBy" | "defaultChecked" | "required" | "onCheckedChange" | "nativeProps"> & import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {}>> & {
    size?: import("@tamagui/web").SizeTokens | number;
    unstyled?: boolean;
} & import("@tamagui/switch-headless").SwitchExtraProps & {
    native?: import("@tamagui/helpers").NativeValue<"mobile" | "ios" | "android">;
    nativeProps?: import("react-native").SwitchProps;
}, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {}>> & {
    size?: import("@tamagui/web").SizeTokens | number;
    unstyled?: boolean;
} & import("@tamagui/switch-headless").SwitchExtraProps & {
    native?: import("@tamagui/helpers").NativeValue<"mobile" | "ios" | "android">;
    nativeProps?: import("react-native").SwitchProps;
}, import("@tamagui/web").StackStyleBase, {
    size?: import("@tamagui/web").SizeTokens | undefined;
    elevation?: number | import("@tamagui/web").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
    unstyled?: boolean | undefined;
    checked?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic> & Omit<import("@tamagui/web").StaticConfigPublic, "staticConfig" | "styleable"> & {
    __tama: [Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
        size?: import("@tamagui/web").SizeTokens | undefined;
        elevation?: number | import("@tamagui/web").SizeTokens | undefined;
        fullscreen?: boolean | undefined;
        unstyled?: boolean | undefined;
        checked?: boolean | undefined;
    }>, "theme" | "native" | "debug" | "size" | "zIndex" | `$${string}` | `$${number}` | `$group-${string}` | `$group-${number}` | `$group-${string}-hover` | `$group-${string}-press` | `$group-${string}-focus` | `$group-${string}-focusVisible` | `$group-${string}-focusWithin` | `$group-${number}-hover` | `$group-${number}-press` | `$group-${number}-focus` | `$group-${number}-focusVisible` | `$group-${number}-focusWithin` | `$theme-${string}` | `$theme-${number}` | "name" | "hitSlop" | "pointerEvents" | "display" | "children" | "target" | "htmlFor" | "asChild" | "dangerouslySetInnerHTML" | "disabled" | "className" | "themeShallow" | "themeInverse" | "id" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "role" | "disableOptimization" | "forceStyle" | "disableClassName" | "style" | "needsOffscreenAlphaCompositing" | "removeClippedSubviews" | "testID" | "nativeID" | "collapsable" | "collapsableChildren" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-modal" | "accessibilityLabelledBy" | "aria-labelledby" | "accessibilityLiveRegion" | "aria-live" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "accessibilityShowsLargeContentViewer" | "accessibilityLargeContentTitle" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "x" | "y" | "perspective" | "scale" | "scaleX" | "scaleY" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "userSelect" | "backdropFilter" | "background" | "backgroundImage" | "backgroundOrigin" | "backgroundPosition" | "backgroundRepeat" | "backgroundSize" | "containerType" | "boxSizing" | "overflowX" | "overflowY" | "transformOrigin" | "borderBlockWidth" | "borderBlockStartWidth" | "borderBlockEndWidth" | "borderInlineWidth" | "borderInlineStartWidth" | "borderInlineEndWidth" | "borderBlockStyle" | "borderBlockStartStyle" | "borderBlockEndStyle" | "borderInlineStyle" | "borderInlineStartStyle" | "borderInlineEndStyle" | "marginBlock" | "marginBlockStart" | "marginBlockEnd" | "marginInline" | "marginInlineStart" | "marginInlineEnd" | "paddingBlock" | "paddingBlockStart" | "paddingBlockEnd" | "paddingInline" | "paddingInlineStart" | "paddingInlineEnd" | "inset" | "insetBlock" | "insetBlockStart" | "insetBlockEnd" | "insetInline" | "insetInlineStart" | "insetInlineEnd" | "animation" | "animateOnly" | "animatePresence" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "isolation" | "boxShadow" | "filter" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "translateX" | "translateY" | "hoverStyle" | "pressStyle" | "focusStyle" | "focusWithinStyle" | "focusVisibleStyle" | "disabledStyle" | "exitStyle" | "enterStyle" | "unstyled" | "checked" | "value" | "labeledBy" | "defaultChecked" | "required" | "onCheckedChange" | "nativeProps"> & import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {}>> & {
        size?: import("@tamagui/web").SizeTokens | number;
        unstyled?: boolean;
    } & import("@tamagui/switch-headless").SwitchExtraProps & {
        native?: import("@tamagui/helpers").NativeValue<"mobile" | "ios" | "android">;
        nativeProps?: import("react-native").SwitchProps;
    }, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {}>> & {
        size?: import("@tamagui/web").SizeTokens | number;
        unstyled?: boolean;
    } & import("@tamagui/switch-headless").SwitchExtraProps & {
        native?: import("@tamagui/helpers").NativeValue<"mobile" | "ios" | "android">;
        nativeProps?: import("react-native").SwitchProps;
    }, import("@tamagui/web").StackStyleBase, {
        size?: import("@tamagui/web").SizeTokens | undefined;
        elevation?: number | import("@tamagui/web").SizeTokens | undefined;
        fullscreen?: boolean | undefined;
        unstyled?: boolean | undefined;
        checked?: boolean | undefined;
    }, import("@tamagui/web").StaticConfigPublic];
} & {
    Thumb: import("@tamagui/web").TamaguiComponent<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
        size?: import("@tamagui/web").SizeTokens | undefined;
        elevation?: number | import("@tamagui/web").SizeTokens | undefined;
        fullscreen?: boolean | undefined;
        unstyled?: boolean | undefined;
        checked?: boolean | undefined;
    }>, `$${string}` | `$${number}` | import("@tamagui/web").GroupMediaKeys | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").StackNonStyleProps | keyof import("@tamagui/web").StackStyleBase | keyof import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> | keyof {
        size?: import("@tamagui/web").SizeTokens | number;
        unstyled?: boolean;
    }> & import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {}>> & {
        size?: import("@tamagui/web").SizeTokens | number;
        unstyled?: boolean;
    }, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {}>> & {
        size?: import("@tamagui/web").SizeTokens | number;
        unstyled?: boolean;
    }, import("@tamagui/web").StackStyleBase, {
        size?: import("@tamagui/web").SizeTokens | undefined;
        elevation?: number | import("@tamagui/web").SizeTokens | undefined;
        fullscreen?: boolean | undefined;
        unstyled?: boolean | undefined;
        checked?: boolean | undefined;
    }, import("@tamagui/web").StaticConfigPublic>;
};
//# sourceMappingURL=index.d.ts.map