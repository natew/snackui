import React from 'react';
import { View } from 'react-native';
import type { IPopoverProps } from './types';
export declare const Popover: React.NamedExoticComponent<IPopoverProps & React.RefAttributes<unknown>> & {
    readonly type: React.ForwardRefExoticComponent<IPopoverProps & React.RefAttributes<unknown>>;
} & {
    Arrow: React.MemoExoticComponent<React.ForwardRefExoticComponent<Pick<Omit<import("@tamagui/core").RNWInternalProps, "children"> & Omit<import("react-native").ViewProps, "children" | "display"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & {} & import("@tamagui/core").PseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & {}> & import("@tamagui/core").MediaProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & {} & import("@tamagui/core").PseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & {}>> & {
        animation?: string | undefined;
    } & {
        disabled?: boolean | undefined;
        className?: string | undefined;
        tag?: string | undefined;
        animated?: boolean | undefined;
        onHoverIn?: ((e: MouseEvent) => any) | undefined;
        onHoverOut?: ((e: MouseEvent) => any) | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => any) | undefined;
        onPressIn?: ((e: import("react-native").GestureResponderEvent) => any) | undefined;
        onPressOut?: ((e: import("react-native").GestureResponderEvent) => any) | undefined;
        onMouseEnter?: ((e: import("react-native").GestureResponderEvent) => any) | undefined;
        onMouseLeave?: ((e: import("react-native").GestureResponderEvent) => any) | undefined;
        space?: string | number | boolean | import("@tamagui/core").Variable | undefined;
        pointerEvents?: string | undefined;
    } & {
        ref?: React.RefObject<HTMLElement | View> | ((node: HTMLElement | View) => any) | undefined;
        children?: any;
    } & {
        placement?: import("../Popper").IPlacement | undefined;
    }, "width" | "height" | "padding" | "paddingTop" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingHorizontal" | "paddingVertical" | "margin" | "marginTop" | "marginBottom" | "marginLeft" | "marginRight" | "marginHorizontal" | "marginVertical" | "flex" | "flexDirection" | "flexWrap" | "flexGrow" | "flexShrink" | "flexBasis" | "alignItems" | "alignContent" | "justifyContent" | "alignSelf" | "backgroundColor" | "borderRadius" | "borderTopRightRadius" | "borderBottomRightRadius" | "borderBottomLeftRadius" | "borderTopLeftRadius" | "zIndex" | "left" | "right" | "onLayout" | "children" | "accessibilityState" | "accessibilityValue" | "focusable" | "nativeID" | "onBlur" | "onClick" | "onClickCapture" | "onContextMenu" | "onFocus" | "onKeyDown" | "onKeyUp" | "onMoveShouldSetResponder" | "onMoveShouldSetResponderCapture" | "onResponderEnd" | "onResponderGrant" | "onResponderMove" | "onResponderReject" | "onResponderRelease" | "onResponderStart" | "onResponderTerminate" | "onResponderTerminationRequest" | "onScrollShouldSetResponder" | "onScrollShouldSetResponderCapture" | "onSelectionChangeShouldSetResponder" | "onSelectionChangeShouldSetResponderCapture" | "onStartShouldSetResponder" | "onStartShouldSetResponderCapture" | "pointerEvents" | "testID" | "dataSet" | "onMouseDown" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseOver" | "onMouseOut" | "onMouseUp" | "onScroll" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onWheel" | "href" | "hrefAttrs" | "display" | "hitSlop" | "removeClippedSubviews" | "style" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityHint" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | `$${string}` | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomStartRadius" | "borderBottomWidth" | "borderColor" | "borderEndColor" | "borderLeftColor" | "borderLeftWidth" | "borderRightColor" | "borderRightWidth" | "borderStartColor" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopStartRadius" | "borderTopWidth" | "borderWidth" | "opacity" | "aspectRatio" | "borderEndWidth" | "borderStartWidth" | "bottom" | "end" | "marginEnd" | "marginStart" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "paddingEnd" | "paddingStart" | "position" | "start" | "top" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "cursor" | "contain" | "space" | "hoverStyle" | "pressStyle" | "focusStyle" | "animation" | "disabled" | "className" | "tag" | "animated" | "onHoverIn" | "onHoverOut" | "onPress" | "onPressIn" | "onPressOut" | "placement"> & React.RefAttributes<unknown>>>;
    Content: React.ForwardRefExoticComponent<Pick<Omit<import("@tamagui/core").RNWInternalProps, "children"> & Omit<import("react-native").ViewProps, "children" | "display"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & {} & import("@tamagui/core").PseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & {}> & import("@tamagui/core").MediaProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & {} & import("@tamagui/core").PseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & {}>> & {
        animation?: string | undefined;
    } & {
        disabled?: boolean | undefined;
        className?: string | undefined;
        tag?: string | undefined;
        animated?: boolean | undefined;
        onHoverIn?: ((e: MouseEvent) => any) | undefined;
        onHoverOut?: ((e: MouseEvent) => any) | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => any) | undefined;
        onPressIn?: ((e: import("react-native").GestureResponderEvent) => any) | undefined;
        onPressOut?: ((e: import("react-native").GestureResponderEvent) => any) | undefined;
        onMouseEnter?: ((e: import("react-native").GestureResponderEvent) => any) | undefined;
        onMouseLeave?: ((e: import("react-native").GestureResponderEvent) => any) | undefined;
        space?: string | number | boolean | import("@tamagui/core").Variable | undefined;
        pointerEvents?: string | undefined;
    } & {
        ref?: React.RefObject<HTMLElement | View> | ((node: HTMLElement | View) => any) | undefined;
        children?: any;
    }, "width" | "height" | "padding" | "paddingTop" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingHorizontal" | "paddingVertical" | "margin" | "marginTop" | "marginBottom" | "marginLeft" | "marginRight" | "marginHorizontal" | "marginVertical" | "flex" | "flexDirection" | "flexWrap" | "flexGrow" | "flexShrink" | "flexBasis" | "alignItems" | "alignContent" | "justifyContent" | "alignSelf" | "backgroundColor" | "borderRadius" | "borderTopRightRadius" | "borderBottomRightRadius" | "borderBottomLeftRadius" | "borderTopLeftRadius" | "zIndex" | "left" | "right" | "onLayout" | "children" | "accessibilityState" | "accessibilityValue" | "focusable" | "nativeID" | "onBlur" | "onClick" | "onClickCapture" | "onContextMenu" | "onFocus" | "onKeyDown" | "onKeyUp" | "onMoveShouldSetResponder" | "onMoveShouldSetResponderCapture" | "onResponderEnd" | "onResponderGrant" | "onResponderMove" | "onResponderReject" | "onResponderRelease" | "onResponderStart" | "onResponderTerminate" | "onResponderTerminationRequest" | "onScrollShouldSetResponder" | "onScrollShouldSetResponderCapture" | "onSelectionChangeShouldSetResponder" | "onSelectionChangeShouldSetResponderCapture" | "onStartShouldSetResponder" | "onStartShouldSetResponderCapture" | "pointerEvents" | "testID" | "dataSet" | "onMouseDown" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseOver" | "onMouseOut" | "onMouseUp" | "onScroll" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onWheel" | "href" | "hrefAttrs" | "display" | "hitSlop" | "removeClippedSubviews" | "style" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityHint" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | `$${string}` | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomStartRadius" | "borderBottomWidth" | "borderColor" | "borderEndColor" | "borderLeftColor" | "borderLeftWidth" | "borderRightColor" | "borderRightWidth" | "borderStartColor" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopStartRadius" | "borderTopWidth" | "borderWidth" | "opacity" | "aspectRatio" | "borderEndWidth" | "borderStartWidth" | "bottom" | "end" | "marginEnd" | "marginStart" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "paddingEnd" | "paddingStart" | "position" | "start" | "top" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "cursor" | "contain" | "space" | "hoverStyle" | "pressStyle" | "focusStyle" | "animation" | "disabled" | "className" | "tag" | "animated" | "onHoverIn" | "onHoverOut" | "onPress" | "onPressIn" | "onPressOut"> & React.RefAttributes<unknown>>;
};
//# sourceMappingURL=Popover.d.ts.map