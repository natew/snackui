/// <reference types="react" />
import { ColorStyleProp, GetProps } from '@tamagui/core';
import { Scope } from '@tamagui/create-context';
import { TextInput } from 'react-native';
type ScopedProps<P> = P & {
    __scopeGroup?: Scope;
};
export type InputProps = ScopedProps<Omit<GetProps<typeof InputControlMain>, 'placeholderTextColor'> & {
    placeholderTextColor?: ColorStyleProp;
    rows?: number;
}>;
export declare const defaultStyles: {
    readonly borderColor: "$borderColor";
    readonly backgroundColor: "$background";
    readonly minWidth: 0;
    readonly hoverStyle: {
        readonly borderColor: "$borderColorHover";
    };
    readonly tabIndex: number;
    readonly size: "$true";
    readonly fontFamily: "$body";
    readonly borderWidth: 1;
    readonly outlineWidth: 0;
    readonly color: "$color";
} | {
    readonly borderColor: "$borderColor";
    readonly backgroundColor: "$background";
    readonly minWidth: 0;
    readonly hoverStyle: {
        readonly borderColor: "$borderColorHover";
    };
    readonly focusable: boolean;
    readonly size: "$true";
    readonly fontFamily: "$body";
    readonly borderWidth: 1;
    readonly outlineWidth: 0;
    readonly color: "$color";
};
export declare const InputFrame: import("@tamagui/core").TamaguiComponent<Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
    style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
} & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & Omit<{}, "size" | "unstyled" | "isFocused"> & {
    readonly unstyled?: boolean | undefined;
    readonly size?: import("@tamagui/core").SizeTokens | undefined;
    readonly isFocused?: boolean | undefined;
} & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
    style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
} & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & Omit<{}, "size" | "unstyled" | "isFocused"> & {
    readonly unstyled?: boolean | undefined;
    readonly size?: import("@tamagui/core").SizeTokens | undefined;
    readonly isFocused?: boolean | undefined;
}>> & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
    style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
} & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & Omit<{}, "size" | "unstyled" | "isFocused"> & {
    readonly unstyled?: boolean | undefined;
    readonly size?: import("@tamagui/core").SizeTokens | undefined;
    readonly isFocused?: boolean | undefined;
}>>, import("@tamagui/core").TamaguiElement, Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
    style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
} & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps, {
    readonly unstyled?: boolean | undefined;
    readonly size?: import("@tamagui/core").SizeTokens | undefined;
    readonly isFocused?: boolean | undefined;
}, {
    displayName: string | undefined;
    __baseProps: Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
        style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
    } & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps;
    __variantProps: {};
}>;
declare const InputControlMain: import("@tamagui/core").TamaguiComponent<import("react-native").TextInputProps & Omit<import("@tamagui/core").TextProps, keyof import("react-native").TextInputProps> & Omit<{}, "size" | "unstyled" | "fill"> & {
    readonly unstyled?: boolean | undefined;
    readonly fill?: boolean | undefined;
    readonly size?: import("@tamagui/core").SizeTokens | undefined;
} & import("@tamagui/core").PseudoProps<Partial<import("react-native").TextInputProps & Omit<import("@tamagui/core").TextProps, keyof import("react-native").TextInputProps> & Omit<{}, "size" | "unstyled" | "fill"> & {
    readonly unstyled?: boolean | undefined;
    readonly fill?: boolean | undefined;
    readonly size?: import("@tamagui/core").SizeTokens | undefined;
}>> & import("@tamagui/core").MediaProps<Partial<import("react-native").TextInputProps & Omit<import("@tamagui/core").TextProps, keyof import("react-native").TextInputProps> & Omit<{}, "size" | "unstyled" | "fill"> & {
    readonly unstyled?: boolean | undefined;
    readonly fill?: boolean | undefined;
    readonly size?: import("@tamagui/core").SizeTokens | undefined;
}>>, TextInput, import("react-native").TextInputProps & Omit<import("@tamagui/core").TextProps, keyof import("react-native").TextInputProps>, {
    readonly unstyled?: boolean | undefined;
    readonly fill?: boolean | undefined;
    readonly size?: import("@tamagui/core").SizeTokens | undefined;
}, {
    prototype: TextInput;
    State: import("react-native").TextInputState;
    contextType: import("react").Context<any> | undefined;
}>;
export declare const Input: import("@tamagui/core").ReactComponentWithRef<Omit<import("react-native").TextInputProps & Omit<import("@tamagui/core").TextProps, keyof import("react-native").TextInputProps> & Omit<{}, "size" | "unstyled" | "fill"> & {
    readonly unstyled?: boolean | undefined;
    readonly fill?: boolean | undefined;
    readonly size?: import("@tamagui/core").SizeTokens | undefined;
} & import("@tamagui/core").PseudoProps<Partial<import("react-native").TextInputProps & Omit<import("@tamagui/core").TextProps, keyof import("react-native").TextInputProps> & Omit<{}, "size" | "unstyled" | "fill"> & {
    readonly unstyled?: boolean | undefined;
    readonly fill?: boolean | undefined;
    readonly size?: import("@tamagui/core").SizeTokens | undefined;
}>> & import("@tamagui/core").MediaProps<Partial<import("react-native").TextInputProps & Omit<import("@tamagui/core").TextProps, keyof import("react-native").TextInputProps> & Omit<{}, "size" | "unstyled" | "fill"> & {
    readonly unstyled?: boolean | undefined;
    readonly fill?: boolean | undefined;
    readonly size?: import("@tamagui/core").SizeTokens | undefined;
}>>, "placeholderTextColor"> & {
    placeholderTextColor?: ColorStyleProp | undefined;
    rows?: number | undefined;
} & {
    __scopeGroup?: Scope;
} & Omit<Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
    style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
} & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & Omit<{}, "size" | "unstyled" | "isFocused"> & {
    readonly unstyled?: boolean | undefined;
    readonly size?: import("@tamagui/core").SizeTokens | undefined;
    readonly isFocused?: boolean | undefined;
} & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
    style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
} & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & Omit<{}, "size" | "unstyled" | "isFocused"> & {
    readonly unstyled?: boolean | undefined;
    readonly size?: import("@tamagui/core").SizeTokens | undefined;
    readonly isFocused?: boolean | undefined;
}>> & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
    style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
} & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & Omit<{}, "size" | "unstyled" | "isFocused"> & {
    readonly unstyled?: boolean | undefined;
    readonly size?: import("@tamagui/core").SizeTokens | undefined;
    readonly isFocused?: boolean | undefined;
}>>, "color" | "borderColor" | "shadowColor" | "size" | "space" | "zIndex" | "width" | "height" | "padding" | "paddingTop" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingHorizontal" | "paddingVertical" | "margin" | "marginTop" | "marginBottom" | "marginLeft" | "marginRight" | "marginHorizontal" | "marginVertical" | "flex" | "flexDirection" | "flexWrap" | "flexGrow" | "flexShrink" | "flexBasis" | "alignItems" | "alignContent" | "justifyContent" | "alignSelf" | "backgroundColor" | "borderRadius" | "borderTopRightRadius" | "borderBottomRightRadius" | "borderBottomLeftRadius" | "borderTopLeftRadius" | "textAlign" | "left" | "right" | "fontSize" | "lineHeight" | "children" | "className" | "style" | "ellipse" | "group" | "separator" | "onLayout" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "display" | "gap" | "columnGap" | "rowGap" | "contain" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "pointerEvents" | "spaceDirection" | "animation" | "animateOnly" | "userSelect" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "fontFamily" | "fontStyle" | "fontWeight" | "letterSpacing" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "fontVariant" | "writingDirection" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomStartRadius" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopStartRadius" | "opacity" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "marginEnd" | "marginStart" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "paddingEnd" | "paddingStart" | "position" | "start" | "top" | "direction" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "unstyled" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "theme" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "themeShallow" | "tag" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle" | "fill" | "autoCapitalize" | "autoComplete" | "autoCorrect" | "autoFocus" | "blurOnSubmit" | "caretHidden" | "contextMenuHidden" | "defaultValue" | "editable" | "keyboardType" | "inputMode" | "maxLength" | "multiline" | "onBlur" | "onChange" | "onChangeText" | "onContentSizeChange" | "onEndEditing" | "onSelectionChange" | "onSubmitEditing" | "onTextInput" | "onKeyPress" | "placeholder" | "placeholderTextColor" | "returnKeyType" | "secureTextEntry" | "selectTextOnFocus" | "selection" | "inputAccessoryViewID" | "value" | "clearButtonMode" | "clearTextOnFocus" | "dataDetectorTypes" | "enablesReturnKeyAutomatically" | "keyboardAppearance" | "passwordRules" | "rejectResponderTermination" | "selectionState" | "spellCheck" | "textContentType" | "scrollEnabled" | "cursorColor" | "importantForAutofill" | "disableFullscreenUI" | "inlineImageLeft" | "inlineImagePadding" | "returnKeyLabel" | "underlineColorAndroid" | "showSoftInputOnFocus" | "rows" | "__scopeGroup">, import("@tamagui/core").TamaguiElement> & {
    staticConfig: import("@tamagui/core").StaticConfig;
    styleable: import("@tamagui/core").Styleable<Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
        style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
    } & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & Omit<{}, "size" | "unstyled" | "isFocused"> & {
        readonly unstyled?: boolean | undefined;
        readonly size?: import("@tamagui/core").SizeTokens | undefined;
        readonly isFocused?: boolean | undefined;
    } & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
        style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
    } & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & Omit<{}, "size" | "unstyled" | "isFocused"> & {
        readonly unstyled?: boolean | undefined;
        readonly size?: import("@tamagui/core").SizeTokens | undefined;
        readonly isFocused?: boolean | undefined;
    }>> & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
        style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
    } & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & Omit<{}, "size" | "unstyled" | "isFocused"> & {
        readonly unstyled?: boolean | undefined;
        readonly size?: import("@tamagui/core").SizeTokens | undefined;
        readonly isFocused?: boolean | undefined;
    }>>, import("@tamagui/core").TamaguiElement>;
} & {
    Start: import("@tamagui/core").TamaguiComponent<(Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
        style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
    } & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").PseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>> & import("@tamagui/core").MediaProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").PseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>>> & import("@tamagui/core").RNViewProps) | (Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
        style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
    } & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & Omit<{}, string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
        style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
    } & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & Omit<{}, string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
        style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
    } & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & Omit<{}, string | number> & {
        [x: string]: undefined;
    }>>) | (Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
        style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
    } & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & Omit<{} | {
        [x: string]: undefined;
    }, string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
        style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
    } & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & Omit<{} | {
        [x: string]: undefined;
    }, string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
        style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
    } & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & Omit<{} | {
        [x: string]: undefined;
    }, string | number> & {
        [x: string]: undefined;
    }>>) | (Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
        style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
    } & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & Omit<{} | {
        [x: string]: undefined;
    }, string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
        style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
    } & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & Omit<{} | {
        [x: string]: undefined;
    }, string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
        style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
    } & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & Omit<{} | {
        [x: string]: undefined;
    }, string | number> & {
        [x: string]: undefined;
    }>>), import("@tamagui/core").TamaguiElement, Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
        style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
    } & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps, ({} | {
        [x: string]: undefined;
    }) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), {
        displayName: string | undefined;
        __baseProps: Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
            style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
        } & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps;
        __variantProps: {} | {
            [x: string]: undefined;
        };
    }>;
    Control: import("@tamagui/core").ReactComponentWithRef<Omit<import("react-native").TextInputProps & Omit<import("@tamagui/core").TextProps, keyof import("react-native").TextInputProps> & Omit<{}, "size" | "unstyled" | "fill"> & {
        readonly unstyled?: boolean | undefined;
        readonly fill?: boolean | undefined;
        readonly size?: import("@tamagui/core").SizeTokens | undefined;
    } & import("@tamagui/core").PseudoProps<Partial<import("react-native").TextInputProps & Omit<import("@tamagui/core").TextProps, keyof import("react-native").TextInputProps> & Omit<{}, "size" | "unstyled" | "fill"> & {
        readonly unstyled?: boolean | undefined;
        readonly fill?: boolean | undefined;
        readonly size?: import("@tamagui/core").SizeTokens | undefined;
    }>> & import("@tamagui/core").MediaProps<Partial<import("react-native").TextInputProps & Omit<import("@tamagui/core").TextProps, keyof import("react-native").TextInputProps> & Omit<{}, "size" | "unstyled" | "fill"> & {
        readonly unstyled?: boolean | undefined;
        readonly fill?: boolean | undefined;
        readonly size?: import("@tamagui/core").SizeTokens | undefined;
    }>>, "placeholderTextColor"> & {
        placeholderTextColor?: ColorStyleProp | undefined;
        rows?: number | undefined;
    } & {
        __scopeGroup?: Scope;
    } & Omit<import("react-native").TextInputProps & Omit<import("@tamagui/core").TextProps, keyof import("react-native").TextInputProps> & Omit<{}, "size" | "unstyled" | "fill"> & {
        readonly unstyled?: boolean | undefined;
        readonly fill?: boolean | undefined;
        readonly size?: import("@tamagui/core").SizeTokens | undefined;
    } & import("@tamagui/core").PseudoProps<Partial<import("react-native").TextInputProps & Omit<import("@tamagui/core").TextProps, keyof import("react-native").TextInputProps> & Omit<{}, "size" | "unstyled" | "fill"> & {
        readonly unstyled?: boolean | undefined;
        readonly fill?: boolean | undefined;
        readonly size?: import("@tamagui/core").SizeTokens | undefined;
    }>> & import("@tamagui/core").MediaProps<Partial<import("react-native").TextInputProps & Omit<import("@tamagui/core").TextProps, keyof import("react-native").TextInputProps> & Omit<{}, "size" | "unstyled" | "fill"> & {
        readonly unstyled?: boolean | undefined;
        readonly fill?: boolean | undefined;
        readonly size?: import("@tamagui/core").SizeTokens | undefined;
    }>>, "color" | "borderColor" | "shadowColor" | "size" | "space" | "zIndex" | "width" | "height" | "padding" | "paddingTop" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingHorizontal" | "paddingVertical" | "margin" | "marginTop" | "marginBottom" | "marginLeft" | "marginRight" | "marginHorizontal" | "marginVertical" | "flex" | "flexDirection" | "flexWrap" | "flexGrow" | "flexShrink" | "flexBasis" | "alignItems" | "alignContent" | "justifyContent" | "alignSelf" | "backgroundColor" | "borderRadius" | "borderTopRightRadius" | "borderBottomRightRadius" | "borderBottomLeftRadius" | "borderTopLeftRadius" | "textAlign" | "left" | "right" | "fontSize" | "lineHeight" | "children" | "className" | "style" | "ellipse" | "group" | "separator" | "onLayout" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "allowFontScaling" | "ellipsizeMode" | "id" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "dynamicTypeRamp" | "minimumFontScale" | "suppressHighlighting" | "lineBreakStrategyIOS" | "disabled" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "display" | "gap" | "columnGap" | "rowGap" | "contain" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "pointerEvents" | "spaceDirection" | "animation" | "animateOnly" | "userSelect" | "textDecorationDistance" | "textOverflow" | "whiteSpace" | "wordWrap" | "fontFamily" | "fontStyle" | "fontWeight" | "letterSpacing" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "fontVariant" | "writingDirection" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomStartRadius" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopStartRadius" | "opacity" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "marginEnd" | "marginStart" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "paddingEnd" | "paddingStart" | "position" | "start" | "top" | "direction" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "textAlignVertical" | "verticalAlign" | "includeFontPadding" | "unstyled" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "theme" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | "target" | "asChild" | "dangerouslySetInnerHTML" | "debug" | "themeShallow" | "tag" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onScroll" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle" | "fill" | "autoCapitalize" | "autoComplete" | "autoCorrect" | "autoFocus" | "blurOnSubmit" | "caretHidden" | "contextMenuHidden" | "defaultValue" | "editable" | "keyboardType" | "inputMode" | "maxLength" | "multiline" | "onBlur" | "onChange" | "onChangeText" | "onContentSizeChange" | "onEndEditing" | "onSelectionChange" | "onSubmitEditing" | "onTextInput" | "onKeyPress" | "placeholder" | "placeholderTextColor" | "returnKeyType" | "secureTextEntry" | "selectTextOnFocus" | "selection" | "inputAccessoryViewID" | "value" | "clearButtonMode" | "clearTextOnFocus" | "dataDetectorTypes" | "enablesReturnKeyAutomatically" | "keyboardAppearance" | "passwordRules" | "rejectResponderTermination" | "selectionState" | "spellCheck" | "textContentType" | "scrollEnabled" | "cursorColor" | "importantForAutofill" | "disableFullscreenUI" | "inlineImageLeft" | "inlineImagePadding" | "returnKeyLabel" | "underlineColorAndroid" | "showSoftInputOnFocus" | "rows" | "__scopeGroup">, TextInput> & {
        staticConfig: import("@tamagui/core").StaticConfig;
        styleable: import("@tamagui/core").Styleable<import("react-native").TextInputProps & Omit<import("@tamagui/core").TextProps, keyof import("react-native").TextInputProps> & Omit<{}, "size" | "unstyled" | "fill"> & {
            readonly unstyled?: boolean | undefined;
            readonly fill?: boolean | undefined;
            readonly size?: import("@tamagui/core").SizeTokens | undefined;
        } & import("@tamagui/core").PseudoProps<Partial<import("react-native").TextInputProps & Omit<import("@tamagui/core").TextProps, keyof import("react-native").TextInputProps> & Omit<{}, "size" | "unstyled" | "fill"> & {
            readonly unstyled?: boolean | undefined;
            readonly fill?: boolean | undefined;
            readonly size?: import("@tamagui/core").SizeTokens | undefined;
        }>> & import("@tamagui/core").MediaProps<Partial<import("react-native").TextInputProps & Omit<import("@tamagui/core").TextProps, keyof import("react-native").TextInputProps> & Omit<{}, "size" | "unstyled" | "fill"> & {
            readonly unstyled?: boolean | undefined;
            readonly fill?: boolean | undefined;
            readonly size?: import("@tamagui/core").SizeTokens | undefined;
        }>>, TextInput>;
    };
    End: import("@tamagui/core").TamaguiComponent<(Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
        style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
    } & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").PseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>> & import("@tamagui/core").MediaProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").PseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>>> & import("@tamagui/core").RNViewProps) | (Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
        style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
    } & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & Omit<{}, string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
        style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
    } & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & Omit<{}, string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
        style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
    } & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & Omit<{}, string | number> & {
        [x: string]: undefined;
    }>>) | (Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
        style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
    } & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & Omit<{} | {
        [x: string]: undefined;
    }, string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
        style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
    } & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & Omit<{} | {
        [x: string]: undefined;
    }, string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
        style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
    } & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & Omit<{} | {
        [x: string]: undefined;
    }, string | number> & {
        [x: string]: undefined;
    }>>) | (Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
        style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
    } & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & Omit<{} | {
        [x: string]: undefined;
    }, string | number> & {
        [x: string]: undefined;
    } & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
        style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
    } & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & Omit<{} | {
        [x: string]: undefined;
    }, string | number> & {
        [x: string]: undefined;
    }>> & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
        style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
    } & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & Omit<{} | {
        [x: string]: undefined;
    }, string | number> & {
        [x: string]: undefined;
    }>>), import("@tamagui/core").TamaguiElement, Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
        style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
    } & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps, ({} | {
        [x: string]: undefined;
    }) & ({} | {
        [x: string]: undefined;
    } | {
        [x: string]: undefined;
    }), {
        displayName: string | undefined;
        __baseProps: Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
            style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
        } & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps;
        __variantProps: {} | {
            [x: string]: undefined;
        };
    }>;
};
export declare function useInputProps(props: InputProps, ref: any): {
    placeholderTextColor: any;
    onChangeText: (value: any) => void;
    color?: import("react-native").OpaqueColorValue | import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor | undefined;
    borderColor?: import("react-native").OpaqueColorValue | import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor | undefined;
    shadowColor?: import("react-native").OpaqueColorValue | import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor | undefined;
    size?: import("@tamagui/core").SizeTokens | undefined;
    space?: number | boolean | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | undefined;
    zIndex?: import("@tamagui/core").ZIndexTokens | import("@tamagui/core").ThemeValueFallbackZIndex | undefined;
    width?: number | import("react-native").Animated.AnimatedNode | import("@tamagui/core").Variable<any> | import("@tamagui/core").SizeTokens | null | undefined;
    height?: number | import("react-native").Animated.AnimatedNode | import("@tamagui/core").Variable<any> | import("@tamagui/core").SizeTokens | null | undefined;
    padding?: number | boolean | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | null | undefined;
    paddingTop?: number | boolean | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | null | undefined;
    paddingBottom?: number | boolean | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | null | undefined;
    paddingLeft?: number | boolean | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | null | undefined;
    paddingRight?: number | boolean | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | null | undefined;
    paddingHorizontal?: number | boolean | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | null | undefined;
    paddingVertical?: number | boolean | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | null | undefined;
    margin?: number | boolean | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | null | undefined;
    marginTop?: number | boolean | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | null | undefined;
    marginBottom?: number | boolean | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | null | undefined;
    marginLeft?: number | boolean | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | null | undefined;
    marginRight?: number | boolean | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | null | undefined;
    marginHorizontal?: number | boolean | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | null | undefined;
    marginVertical?: number | boolean | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | null | undefined;
    flex?: number | undefined;
    flexDirection?: "row" | "column" | "row-reverse" | "column-reverse" | undefined;
    flexWrap?: "wrap" | "nowrap" | "wrap-reverse" | undefined;
    flexGrow?: number | undefined;
    flexShrink?: number | undefined;
    flexBasis?: import("react-native").DimensionValue | undefined;
    alignItems?: import("react-native").FlexAlignType | undefined;
    alignContent?: "flex-start" | "flex-end" | "center" | "stretch" | "space-between" | "space-around" | undefined;
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | undefined;
    alignSelf?: "auto" | import("react-native").FlexAlignType | undefined;
    backgroundColor?: import("react-native").OpaqueColorValue | import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor | undefined;
    borderRadius?: number | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableNumber | undefined;
    borderTopRightRadius?: number | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableNumber | undefined;
    borderBottomRightRadius?: number | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableNumber | undefined;
    borderBottomLeftRadius?: number | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableNumber | undefined;
    borderTopLeftRadius?: number | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableNumber | undefined;
    textAlign?: "center" | "left" | "right" | undefined;
    left?: number | boolean | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | null | undefined;
    right?: number | boolean | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | null | undefined;
    fontSize?: import("@tamagui/core").FontSizeTokens | import("@tamagui/core").Variable<any> | undefined;
    lineHeight?: number | import("@tamagui/core").Variable<any> | undefined;
    children?: import("react").ReactNode;
    className?: string | undefined;
    style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    ellipse?: boolean | undefined;
    group?: undefined;
    separator?: import("react").ReactNode;
    onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
    onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
    allowFontScaling?: boolean | undefined;
    ellipsizeMode?: "head" | "middle" | "tail" | "clip" | undefined;
    id?: string | undefined;
    lineBreakMode?: "head" | "middle" | "tail" | "clip" | undefined;
    numberOfLines?: number | undefined;
    onTextLayout?: ((event: import("react-native").NativeSyntheticEvent<import("react-native").TextLayoutEventData>) => void) | undefined;
    onPress?: (((event: import("react-native").GestureResponderEvent) => void) & ((event: import("react-native").GestureResponderEvent) => void)) | undefined;
    onPressIn?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").NativeTouchEvent>) => void) | undefined;
    onPressOut?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").NativeTouchEvent>) => void) | undefined;
    onLongPress?: (((event: import("react-native").GestureResponderEvent) => void) & ((event: import("react-native").GestureResponderEvent) => void)) | undefined;
    testID?: string | undefined;
    nativeID?: string | undefined;
    maxFontSizeMultiplier?: number | null | undefined;
    adjustsFontSizeToFit?: boolean | undefined;
    dynamicTypeRamp?: "body" | "caption2" | "caption1" | "footnote" | "subheadline" | "callout" | "headline" | "title3" | "title2" | "title1" | "largeTitle" | undefined;
    minimumFontScale?: number | undefined;
    suppressHighlighting?: boolean | undefined;
    lineBreakStrategyIOS?: "none" | "standard" | "hangul-word" | "push-out" | undefined;
    disabled?: boolean | undefined;
    selectable?: boolean | undefined;
    selectionColor?: import("react-native").ColorValue | undefined;
    textBreakStrategy?: "simple" | "highQuality" | "balanced" | undefined;
    dataDetectorType?: "none" | "link" | "email" | "phoneNumber" | "all" | null | undefined;
    android_hyphenationFrequency?: "none" | "normal" | "full" | undefined;
    accessible?: boolean | undefined;
    accessibilityActions?: readonly Readonly<{
        name: string;
        label?: string | undefined;
    }>[] | undefined;
    accessibilityLabel?: string | undefined;
    'aria-label'?: string | undefined;
    accessibilityRole?: import("react-native").AccessibilityRole | undefined;
    accessibilityState?: import("react-native").AccessibilityState | undefined;
    'aria-busy'?: boolean | undefined;
    'aria-checked'?: boolean | "mixed" | undefined;
    'aria-disabled'?: boolean | undefined;
    'aria-expanded'?: boolean | undefined;
    'aria-selected'?: boolean | undefined;
    'aria-labelledby'?: string | undefined;
    accessibilityHint?: string | undefined;
    accessibilityValue?: import("react-native").AccessibilityValue | undefined;
    'aria-valuemax'?: number | undefined;
    'aria-valuemin'?: number | undefined;
    'aria-valuenow'?: number | undefined;
    'aria-valuetext'?: string | undefined;
    onAccessibilityAction?: ((event: import("react-native").AccessibilityActionEvent) => void) | undefined;
    importantForAccessibility?: "auto" | "no" | "yes" | "no-hide-descendants" | undefined;
    'aria-hidden'?: boolean | undefined;
    'aria-live'?: "off" | "polite" | "assertive" | undefined;
    'aria-modal'?: boolean | undefined;
    role?: import("react-native").Role | undefined;
    accessibilityLiveRegion?: "none" | "polite" | "assertive" | undefined;
    accessibilityLabelledBy?: string | string[] | undefined;
    accessibilityElementsHidden?: boolean | undefined;
    accessibilityViewIsModal?: boolean | undefined;
    onAccessibilityEscape?: (() => void) | undefined;
    onAccessibilityTap?: (() => void) | undefined;
    onMagicTap?: (() => void) | undefined;
    accessibilityIgnoresInvertColors?: boolean | undefined;
    accessibilityLanguage?: string | undefined;
    display?: "flex" | "none" | "inherit" | "block" | "inline" | "inline-flex" | "contents" | undefined;
    gap?: import("@tamagui/core").SpaceValue | undefined;
    columnGap?: import("@tamagui/core").SpaceValue | undefined;
    rowGap?: import("@tamagui/core").SpaceValue | undefined;
    contain?: import("csstype").Property.Contain | undefined;
    cursor?: import("csstype").Property.Cursor | undefined;
    outlineColor?: import("csstype").Property.OutlineColor | undefined;
    outlineOffset?: import("@tamagui/core").SpaceValue | undefined;
    outlineStyle?: import("csstype").Property.OutlineStyle | undefined;
    outlineWidth?: import("@tamagui/core").SpaceValue | undefined;
    pointerEvents?: "auto" | "box-none" | "none" | "box-only" | undefined;
    spaceDirection?: import("@tamagui/core").SpaceDirection | undefined;
    animation?: import("@tamagui/core").AnimationProp | null | undefined;
    animateOnly?: string[] | undefined;
    userSelect?: import("csstype").Property.UserSelect | undefined;
    textDecorationDistance?: number | undefined;
    textOverflow?: import("csstype").Property.TextOverflow | undefined;
    whiteSpace?: import("csstype").Property.WhiteSpace | undefined;
    wordWrap?: import("csstype").Property.WordWrap | undefined;
    fontFamily?: `$${string}` | import("@tamagui/core").Variable<any> | undefined;
    fontStyle?: "normal" | "italic" | undefined;
    fontWeight?: import("@tamagui/core").Variable<any> | import("@tamagui/core").FontWeightTokens | undefined;
    letterSpacing?: number | import("@tamagui/core").Variable<any> | undefined;
    textDecorationLine?: "none" | "line-through" | "underline" | "underline line-through" | undefined;
    textDecorationStyle?: "dashed" | "dotted" | "double" | "solid" | undefined;
    textDecorationColor?: import("react-native").ColorValue | undefined;
    textShadowColor?: import("react-native").OpaqueColorValue | import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor | undefined;
    textShadowOffset?: {
        width: number;
        height: number;
    } | undefined;
    textShadowRadius?: number | undefined;
    textTransform?: "none" | "capitalize" | "lowercase" | "uppercase" | undefined;
    fontVariant?: import("react-native").FontVariant[] | undefined;
    writingDirection?: "auto" | "ltr" | "rtl" | undefined;
    borderBlockColor?: import("react-native").OpaqueColorValue | import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor | undefined;
    borderBlockEndColor?: import("react-native").OpaqueColorValue | import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor | undefined;
    borderBlockStartColor?: import("react-native").OpaqueColorValue | import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor | undefined;
    borderBottomColor?: import("react-native").OpaqueColorValue | import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor | undefined;
    borderBottomEndRadius?: number | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableNumber | undefined;
    borderBottomStartRadius?: number | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableNumber | undefined;
    borderCurve?: "circular" | "continuous" | undefined;
    borderEndColor?: import("react-native").ColorValue | undefined;
    borderEndEndRadius?: number | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableNumber | undefined;
    borderEndStartRadius?: number | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableNumber | undefined;
    borderLeftColor?: import("react-native").OpaqueColorValue | import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor | undefined;
    borderRightColor?: import("react-native").OpaqueColorValue | import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor | undefined;
    borderStartColor?: import("react-native").ColorValue | undefined;
    borderStartEndRadius?: number | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableNumber | undefined;
    borderStartStartRadius?: number | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableNumber | undefined;
    borderStyle?: "dashed" | "dotted" | "solid" | undefined;
    borderTopColor?: import("react-native").OpaqueColorValue | import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor | undefined;
    borderTopEndRadius?: number | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableNumber | undefined;
    borderTopStartRadius?: number | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableNumber | undefined;
    opacity?: import("react-native").AnimatableNumericValue | undefined;
    aspectRatio?: string | number | undefined;
    borderBottomWidth?: number | boolean | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | undefined;
    borderEndWidth?: number | boolean | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | undefined;
    borderLeftWidth?: number | boolean | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | undefined;
    borderRightWidth?: number | boolean | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | undefined;
    borderStartWidth?: number | boolean | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | undefined;
    borderTopWidth?: number | boolean | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | undefined;
    borderWidth?: number | boolean | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | undefined;
    bottom?: number | boolean | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | null | undefined;
    end?: import("react-native").DimensionValue | undefined;
    marginEnd?: number | boolean | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | null | undefined;
    marginStart?: number | boolean | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | null | undefined;
    maxHeight?: number | import("react-native").Animated.AnimatedNode | import("@tamagui/core").Variable<any> | import("@tamagui/core").SizeTokens | null | undefined;
    maxWidth?: number | import("react-native").Animated.AnimatedNode | import("@tamagui/core").Variable<any> | import("@tamagui/core").SizeTokens | null | undefined;
    minHeight?: number | import("react-native").Animated.AnimatedNode | import("@tamagui/core").Variable<any> | import("@tamagui/core").SizeTokens | null | undefined;
    minWidth?: number | import("react-native").Animated.AnimatedNode | import("@tamagui/core").Variable<any> | import("@tamagui/core").SizeTokens | null | undefined;
    overflow?: "hidden" | "visible" | "scroll" | undefined;
    paddingEnd?: number | boolean | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | null | undefined;
    paddingStart?: number | boolean | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | null | undefined;
    position?: "absolute" | "relative" | undefined;
    start?: import("react-native").DimensionValue | undefined;
    top?: number | boolean | import("react-native").Animated.AnimatedNode | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | null | undefined;
    direction?: "inherit" | "ltr" | "rtl" | undefined;
    shadowOffset?: import("@tamagui/core").Variable<any> | {
        width: import("@tamagui/core").SpaceTokens;
        height: import("@tamagui/core").SpaceTokens;
    } | Readonly<{
        width: number;
        height: number;
    }> | undefined;
    shadowOpacity?: import("react-native").AnimatableNumericValue | undefined;
    shadowRadius?: number | import("@tamagui/core").Variable<any> | import("@tamagui/core").SizeTokens | undefined;
    transform?: (import("react-native").PerpectiveTransform | import("react-native").RotateTransform | import("react-native").RotateXTransform | import("react-native").RotateYTransform | import("react-native").RotateZTransform | import("react-native").ScaleTransform | import("react-native").ScaleXTransform | import("react-native").ScaleYTransform | import("react-native").TranslateXTransform | import("react-native").TranslateYTransform | import("react-native").SkewXTransform | import("react-native").SkewYTransform | import("react-native").MatrixTransform)[] | undefined;
    transformMatrix?: number[] | undefined;
    rotation?: import("react-native").AnimatableNumericValue | undefined;
    scaleX?: boolean | (import("react-native").AnimatableNumericValue & number) | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | undefined;
    scaleY?: boolean | (import("react-native").AnimatableNumericValue & number) | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | undefined;
    translateX?: import("react-native").AnimatableNumericValue | undefined;
    translateY?: import("react-native").AnimatableNumericValue | undefined;
    textAlignVertical?: "auto" | "center" | "bottom" | "top" | undefined;
    verticalAlign?: "auto" | "middle" | "bottom" | "top" | undefined;
    includeFontPadding?: boolean | undefined;
    unstyled?: boolean | undefined;
    x?: number | boolean | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | undefined;
    y?: number | boolean | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | undefined;
    perspective?: number | undefined;
    scale?: number | boolean | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | undefined;
    skewX?: string | undefined;
    skewY?: string | undefined;
    matrix?: number[] | undefined;
    rotate?: string | undefined;
    rotateY?: string | undefined;
    rotateX?: string | undefined;
    rotateZ?: string | undefined;
    theme?: string | null | undefined;
    hitSlop?: import("react-native").Insets | undefined;
    removeClippedSubviews?: boolean | undefined;
    collapsable?: boolean | undefined;
    needsOffscreenAlphaCompositing?: boolean | undefined;
    renderToHardwareTextureAndroid?: boolean | undefined;
    focusable?: boolean | undefined;
    shouldRasterizeIOS?: boolean | undefined;
    isTVSelectable?: boolean | undefined;
    hasTVPreferredFocus?: boolean | undefined;
    tvParallaxProperties?: import("react-native").TVParallaxProperties | undefined;
    tvParallaxShiftDistanceX?: number | undefined;
    tvParallaxShiftDistanceY?: number | undefined;
    tvParallaxTiltAngle?: number | undefined;
    tvParallaxMagnification?: number | undefined;
    onTouchStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onTouchMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onTouchEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onTouchCancel?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onTouchEndCapture?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
    onPointerEnter?: ((event: import("react-native").PointerEvent) => void) | undefined;
    onPointerEnterCapture?: ((event: import("react-native").PointerEvent) => void) | undefined;
    onPointerLeave?: ((event: import("react-native").PointerEvent) => void) | undefined;
    onPointerLeaveCapture?: ((event: import("react-native").PointerEvent) => void) | undefined;
    onPointerMove?: ((event: import("react-native").PointerEvent) => void) | undefined;
    onPointerMoveCapture?: ((event: import("react-native").PointerEvent) => void) | undefined;
    onPointerCancel?: ((event: import("react-native").PointerEvent) => void) | undefined;
    onPointerCancelCapture?: ((event: import("react-native").PointerEvent) => void) | undefined;
    onPointerDown?: ((event: import("react-native").PointerEvent) => void) | undefined;
    onPointerDownCapture?: ((event: import("react-native").PointerEvent) => void) | undefined;
    onPointerUp?: ((event: import("react-native").PointerEvent) => void) | undefined;
    onPointerUpCapture?: ((event: import("react-native").PointerEvent) => void) | undefined;
    target?: string | undefined;
    asChild?: boolean | "except-style" | undefined;
    dangerouslySetInnerHTML?: {
        __html: string;
    } | undefined;
    debug?: import("@tamagui/core").DebugProp | undefined;
    themeShallow?: boolean | undefined;
    tag?: string | undefined;
    untilMeasured?: "hide" | "show" | undefined;
    componentName?: string | undefined;
    tabIndex?: string | number | undefined;
    disableOptimization?: boolean | undefined;
    forceStyle?: "hover" | "press" | "focus" | undefined;
    disableClassName?: boolean | undefined;
    onHoverIn?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
    onHoverOut?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
    onMouseEnter?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
    onMouseLeave?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
    onMouseDown?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
    onMouseUp?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
    onFocus?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").TextInputFocusEventData>) => void) | undefined;
    onScroll?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").TextInputScrollEventData>) => void) | undefined;
    hoverStyle?: (import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Partial<import("react-native").TextInputProps & Omit<import("@tamagui/core").TextProps, keyof import("react-native").TextInputProps> & Omit<{}, "size" | "unstyled" | "fill"> & {
        readonly unstyled?: boolean | undefined;
        readonly fill?: boolean | undefined;
        readonly size?: import("@tamagui/core").SizeTokens | undefined;
    }>) | null | undefined;
    pressStyle?: (import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Partial<import("react-native").TextInputProps & Omit<import("@tamagui/core").TextProps, keyof import("react-native").TextInputProps> & Omit<{}, "size" | "unstyled" | "fill"> & {
        readonly unstyled?: boolean | undefined;
        readonly fill?: boolean | undefined;
        readonly size?: import("@tamagui/core").SizeTokens | undefined;
    }>) | null | undefined;
    focusStyle?: (import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Partial<import("react-native").TextInputProps & Omit<import("@tamagui/core").TextProps, keyof import("react-native").TextInputProps> & Omit<{}, "size" | "unstyled" | "fill"> & {
        readonly unstyled?: boolean | undefined;
        readonly fill?: boolean | undefined;
        readonly size?: import("@tamagui/core").SizeTokens | undefined;
    }>) | null | undefined;
    exitStyle?: (import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Partial<import("react-native").TextInputProps & Omit<import("@tamagui/core").TextProps, keyof import("react-native").TextInputProps> & Omit<{}, "size" | "unstyled" | "fill"> & {
        readonly unstyled?: boolean | undefined;
        readonly fill?: boolean | undefined;
        readonly size?: import("@tamagui/core").SizeTokens | undefined;
    }>) | null | undefined;
    enterStyle?: (import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Partial<import("react-native").TextInputProps & Omit<import("@tamagui/core").TextProps, keyof import("react-native").TextInputProps> & Omit<{}, "size" | "unstyled" | "fill"> & {
        readonly unstyled?: boolean | undefined;
        readonly fill?: boolean | undefined;
        readonly size?: import("@tamagui/core").SizeTokens | undefined;
    }>) | null | undefined;
    fill?: boolean | undefined;
    autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
    autoComplete?: "email" | "password" | "tel" | "url" | "off" | "name" | "additional-name" | "address-line1" | "address-line2" | "birthdate-day" | "birthdate-full" | "birthdate-month" | "birthdate-year" | "cc-csc" | "cc-exp" | "cc-exp-day" | "cc-exp-month" | "cc-exp-year" | "cc-number" | "country" | "current-password" | "family-name" | "gender" | "given-name" | "honorific-prefix" | "honorific-suffix" | "name-family" | "name-given" | "name-middle" | "name-middle-initial" | "name-prefix" | "name-suffix" | "new-password" | "nickname" | "one-time-code" | "organization" | "organization-title" | "password-new" | "postal-address" | "postal-address-country" | "postal-address-extended" | "postal-address-extended-postal-code" | "postal-address-locality" | "postal-address-region" | "postal-code" | "street-address" | "sms-otp" | "tel-country-code" | "tel-national" | "tel-device" | "username" | "username-new" | undefined;
    autoCorrect?: boolean | undefined;
    autoFocus?: boolean | undefined;
    blurOnSubmit?: boolean | undefined;
    caretHidden?: boolean | undefined;
    contextMenuHidden?: boolean | undefined;
    defaultValue?: string | undefined;
    editable: boolean;
    keyboardType?: import("react-native").KeyboardTypeOptions | undefined;
    inputMode?: import("react-native").InputModeOptions | undefined;
    maxLength?: number | undefined;
    multiline?: boolean | undefined;
    onBlur?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").TextInputFocusEventData>) => void) | undefined;
    onChange?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").TextInputChangeEventData>) => void) | undefined;
    onContentSizeChange?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").TextInputContentSizeChangeEventData>) => void) | undefined;
    onEndEditing?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").TextInputEndEditingEventData>) => void) | undefined;
    onSelectionChange?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").TextInputSelectionChangeEventData>) => void) | undefined;
    onSubmitEditing?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").TextInputSubmitEditingEventData>) => void) | undefined;
    onTextInput?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").TextInputTextInputEventData>) => void) | undefined;
    onKeyPress?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").TextInputKeyPressEventData>) => void) | undefined;
    placeholder?: string | undefined;
    returnKeyType?: import("react-native").ReturnKeyTypeOptions | undefined;
    secureTextEntry?: boolean | undefined;
    selectTextOnFocus?: boolean | undefined;
    selection?: {
        start: number;
        end?: number | undefined;
    } | undefined;
    inputAccessoryViewID?: string | undefined;
    value?: string | undefined;
    clearButtonMode?: "always" | "never" | "while-editing" | "unless-editing" | undefined;
    clearTextOnFocus?: boolean | undefined;
    dataDetectorTypes?: import("react-native").DataDetectorTypes | import("react-native").DataDetectorTypes[] | undefined;
    enablesReturnKeyAutomatically?: boolean | undefined;
    keyboardAppearance?: "default" | "dark" | "light" | undefined;
    passwordRules?: string | null | undefined;
    rejectResponderTermination?: boolean | null | undefined;
    selectionState?: import("react-native").DocumentSelectionState | undefined;
    spellCheck?: boolean | undefined;
    textContentType?: "none" | "password" | "name" | "nickname" | "username" | "URL" | "addressCity" | "addressCityAndState" | "addressState" | "countryName" | "creditCardNumber" | "emailAddress" | "familyName" | "fullStreetAddress" | "givenName" | "jobTitle" | "location" | "middleName" | "namePrefix" | "nameSuffix" | "organizationName" | "postalCode" | "streetAddressLine1" | "streetAddressLine2" | "sublocality" | "telephoneNumber" | "newPassword" | "oneTimeCode" | undefined;
    scrollEnabled?: boolean | undefined;
    cursorColor?: import("react-native").ColorValue | null | undefined;
    importantForAutofill?: "auto" | "no" | "yes" | "noExcludeDescendants" | "yesExcludeDescendants" | undefined;
    disableFullscreenUI?: boolean | undefined;
    inlineImageLeft?: string | undefined;
    inlineImagePadding?: number | undefined;
    returnKeyLabel?: string | undefined;
    underlineColorAndroid?: import("react-native").ColorValue | undefined;
    showSoftInputOnFocus?: boolean | undefined;
    rows?: number | undefined;
    __scopeGroup?: Scope;
    ref: (node: any) => void;
};
export {};
//# sourceMappingURL=Input.d.ts.map