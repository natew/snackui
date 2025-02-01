import type { GetProps } from '@tamagui/core';
import { TextInput } from 'react-native';
export declare const defaultStyles: {
    readonly borderColor: "$borderColor";
    readonly backgroundColor: "$background";
    readonly minWidth: 0;
    readonly hoverStyle: {
        readonly borderColor: "$borderColorHover";
    };
    readonly focusStyle: {
        readonly borderColor: "$borderColorFocus";
    };
    readonly focusVisibleStyle: {
        readonly outlineColor: "$outlineColor";
        readonly outlineWidth: 2;
        readonly outlineStyle: "solid";
    };
    readonly tabIndex: 0;
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
    readonly focusStyle: {
        readonly borderColor: "$borderColorFocus";
    };
    readonly focusVisibleStyle: {
        readonly outlineColor: "$outlineColor";
        readonly outlineWidth: 2;
        readonly outlineStyle: "solid";
    };
    readonly focusable: boolean;
    readonly size: "$true";
    readonly fontFamily: "$body";
    readonly borderWidth: 1;
    readonly outlineWidth: 0;
    readonly color: "$color";
};
export declare const InputFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, TextInput, import("@tamagui/core").TamaguiComponentPropsBaseBase & import("react-native").TextInputProps, import("@tamagui/core").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
}, {
    size?: import("@tamagui/core").SizeTokens | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
}, {
    isInput: true;
    accept: {
        readonly placeholderTextColor: "color";
        readonly selectionColor: "color";
    };
}>;
export type Input = TextInput;
export type InputFrameProps = GetProps<typeof InputFrame>;
export type InputExtraProps = {
    rows?: number;
};
export type InputProps = InputFrameProps & InputExtraProps;
export declare const Input: import("@tamagui/core").TamaguiComponent<Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").TamaguiComponentPropsBaseBase & import("react-native").TextInputProps, import("@tamagui/core").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
}, {
    size?: import("@tamagui/core").SizeTokens | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
}>, "rows"> & InputExtraProps, TextInput, import("@tamagui/core").TamaguiComponentPropsBaseBase & import("react-native").TextInputProps & InputExtraProps, import("@tamagui/core").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
}, {
    size?: import("@tamagui/core").SizeTokens | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
}, {
    isInput: true;
    accept: {
        readonly placeholderTextColor: "color";
        readonly selectionColor: "color";
    };
}>;
export declare function useInputProps(props: InputProps, ref: any): {
    placeholderTextColor: any;
    onChangeText: (value: any) => void;
    theme?: (import("@tamagui/core").ThemeName | null) | undefined;
    debug?: import("@tamagui/core").DebugProp | undefined;
    children?: any | any[];
    className?: string | undefined;
    onPress?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").NativeTouchEvent>) => void) | undefined | undefined;
    onPressIn?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").NativeTouchEvent>) => void) | undefined | undefined;
    onPressOut?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").NativeTouchEvent>) => void) | undefined | undefined;
    onFocus?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").TextInputFocusEventData>) => void) | undefined | undefined;
    onBlur?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").TextInputFocusEventData>) => void) | undefined | undefined;
    onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined | undefined;
    onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined | undefined;
    onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined | undefined;
    onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined | undefined;
    onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined | undefined;
    onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined | undefined;
    onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined | undefined;
    onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined | undefined;
    onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined | undefined;
    onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined | undefined;
    onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined | undefined;
    onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined | undefined;
    onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined | undefined;
    style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    allowFontScaling?: boolean | undefined | undefined;
    id?: string | undefined;
    numberOfLines?: number | undefined | undefined;
    testID?: string | undefined | undefined;
    nativeID?: string | undefined | undefined;
    maxFontSizeMultiplier?: number | null | undefined | undefined;
    lineBreakStrategyIOS?: "none" | "standard" | "hangul-word" | "push-out" | undefined | undefined;
    textBreakStrategy?: "simple" | "highQuality" | "balanced" | undefined | undefined;
    accessible?: boolean | undefined | undefined;
    accessibilityActions?: readonly Readonly<{
        name: import("react-native").AccessibilityActionName | string;
        label?: string | undefined;
    }>[] | undefined;
    accessibilityLabel?: string | undefined | undefined;
    'aria-label'?: string | undefined | undefined;
    accessibilityRole?: import("react-native").AccessibilityRole | undefined;
    accessibilityState?: import("react-native").AccessibilityState | undefined;
    'aria-busy'?: boolean | undefined | undefined;
    'aria-checked'?: boolean | "mixed" | undefined | undefined;
    'aria-disabled'?: boolean | undefined | undefined;
    'aria-expanded'?: boolean | undefined | undefined;
    'aria-selected'?: boolean | undefined | undefined;
    accessibilityHint?: string | undefined | undefined;
    accessibilityValue?: import("react-native").AccessibilityValue | undefined;
    'aria-valuemax'?: number | undefined;
    'aria-valuemin'?: number | undefined;
    'aria-valuenow'?: number | undefined;
    'aria-valuetext'?: string | undefined;
    onAccessibilityAction?: ((event: import("react-native").AccessibilityActionEvent) => void) | undefined | undefined;
    importantForAccessibility?: ("auto" | "yes" | "no" | "no-hide-descendants") | undefined | undefined;
    'aria-hidden'?: boolean | undefined | undefined;
    'aria-modal'?: boolean | undefined | undefined;
    role?: "row" | "none" | "link" | "group" | "separator" | "article" | "button" | "dialog" | "figure" | "form" | "img" | "main" | "menu" | "meter" | "option" | "summary" | "table" | "alert" | "checkbox" | "combobox" | "menubar" | "menuitem" | "progressbar" | "radio" | "radiogroup" | "scrollbar" | "spinbutton" | "switch" | "tab" | "tablist" | "timer" | "list" | "toolbar" | "grid" | "alertdialog" | "application" | "banner" | "cell" | "columnheader" | "complementary" | "contentinfo" | "definition" | "directory" | "document" | "feed" | "heading" | "listitem" | "log" | "marquee" | "math" | "navigation" | "note" | "presentation" | "region" | "rowgroup" | "rowheader" | "searchbox" | "slider" | "status" | "tabpanel" | "term" | "tooltip" | "tree" | "treegrid" | "treeitem" | undefined;
    accessibilityLabelledBy?: string | string[] | undefined | undefined;
    'aria-labelledby'?: string | undefined | undefined;
    accessibilityLiveRegion?: "none" | "polite" | "assertive" | undefined | undefined;
    'aria-live'?: ("polite" | "assertive" | "off") | undefined | undefined;
    accessibilityElementsHidden?: boolean | undefined | undefined;
    accessibilityViewIsModal?: boolean | undefined | undefined;
    onAccessibilityEscape?: (() => void) | undefined | undefined;
    onAccessibilityTap?: (() => void) | undefined | undefined;
    onMagicTap?: (() => void) | undefined | undefined;
    accessibilityIgnoresInvertColors?: boolean | undefined | undefined;
    accessibilityLanguage?: string | undefined | undefined;
    accessibilityShowsLargeContentViewer?: boolean | undefined | undefined;
    accessibilityLargeContentTitle?: string | undefined | undefined;
    target?: string | undefined;
    htmlFor?: string | undefined;
    asChild?: boolean | "except-style" | "except-style-web" | "web" | undefined;
    dangerouslySetInnerHTML?: {
        __html: string;
    } | undefined;
    themeShallow?: boolean | undefined;
    themeInverse?: boolean | undefined;
    tag?: (keyof HTMLElementTagNameMap | (string & {})) | undefined;
    group?: (import("@tamagui/core").GroupNames | boolean) | undefined;
    untilMeasured?: "hide" | "show" | undefined;
    componentName?: string | undefined;
    tabIndex?: 0 | -1 | undefined;
    disableOptimization?: boolean | undefined;
    forceStyle?: "hover" | "press" | "focus" | "focusVisible" | "focusWithin" | undefined;
    disableClassName?: boolean | undefined;
    hitSlop?: ((number | import("@tamagui/core").Insets) & (number | import("react-native").Insets)) | null | undefined;
    needsOffscreenAlphaCompositing?: boolean | undefined | undefined;
    removeClippedSubviews?: boolean | undefined | undefined;
    collapsable?: boolean | undefined | undefined;
    collapsableChildren?: boolean | undefined | undefined;
    renderToHardwareTextureAndroid?: boolean | undefined | undefined;
    focusable?: boolean | undefined | undefined;
    shouldRasterizeIOS?: boolean | undefined | undefined;
    isTVSelectable?: boolean | undefined | undefined;
    hasTVPreferredFocus?: boolean | undefined | undefined;
    tvParallaxShiftDistanceX?: number | undefined | undefined;
    tvParallaxShiftDistanceY?: number | undefined | undefined;
    tvParallaxTiltAngle?: number | undefined | undefined;
    tvParallaxMagnification?: number | undefined | undefined;
    onTouchStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined | undefined;
    onTouchMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined | undefined;
    onTouchEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined | undefined;
    onTouchCancel?: ((event: import("react-native").GestureResponderEvent) => void) | undefined | undefined;
    onTouchEndCapture?: ((event: import("react-native").GestureResponderEvent) => void) | undefined | undefined;
    onPointerEnter?: ((event: import("react-native").PointerEvent) => void) | undefined | undefined;
    onPointerEnterCapture?: ((event: import("react-native").PointerEvent) => void) | undefined | undefined;
    onPointerLeave?: ((event: import("react-native").PointerEvent) => void) | undefined | undefined;
    onPointerLeaveCapture?: ((event: import("react-native").PointerEvent) => void) | undefined | undefined;
    onPointerMove?: ((event: import("react-native").PointerEvent) => void) | undefined | undefined;
    onPointerMoveCapture?: ((event: import("react-native").PointerEvent) => void) | undefined | undefined;
    onPointerCancel?: ((event: import("react-native").PointerEvent) => void) | undefined | undefined;
    onPointerCancelCapture?: ((event: import("react-native").PointerEvent) => void) | undefined | undefined;
    onPointerDown?: ((event: import("react-native").PointerEvent) => void) | undefined | undefined;
    onPointerDownCapture?: ((event: import("react-native").PointerEvent) => void) | undefined | undefined;
    onPointerUp?: ((event: import("react-native").PointerEvent) => void) | undefined | undefined;
    onPointerUpCapture?: ((event: import("react-native").PointerEvent) => void) | undefined | undefined;
    autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined | undefined;
    autoComplete?: "additional-name" | "address-line1" | "address-line2" | "birthdate-day" | "birthdate-full" | "birthdate-month" | "birthdate-year" | "cc-csc" | "cc-exp" | "cc-exp-day" | "cc-exp-month" | "cc-exp-year" | "cc-number" | "cc-name" | "cc-given-name" | "cc-middle-name" | "cc-family-name" | "cc-type" | "country" | "current-password" | "email" | "family-name" | "gender" | "given-name" | "honorific-prefix" | "honorific-suffix" | "name" | "name-family" | "name-given" | "name-middle" | "name-middle-initial" | "name-prefix" | "name-suffix" | "new-password" | "nickname" | "one-time-code" | "organization" | "organization-title" | "password" | "password-new" | "postal-address" | "postal-address-country" | "postal-address-extended" | "postal-address-extended-postal-code" | "postal-address-locality" | "postal-address-region" | "postal-code" | "street-address" | "sms-otp" | "tel" | "tel-country-code" | "tel-national" | "tel-device" | "url" | "username" | "username-new" | "off" | undefined | undefined;
    autoCorrect?: boolean | undefined | undefined;
    autoFocus?: boolean | undefined | undefined;
    blurOnSubmit?: boolean | undefined | undefined;
    submitBehavior?: import("react-native").SubmitBehavior | undefined;
    caretHidden?: boolean | undefined | undefined;
    contextMenuHidden?: boolean | undefined | undefined;
    defaultValue?: string | undefined | undefined;
    editable?: boolean | undefined | undefined;
    keyboardType?: import("react-native").KeyboardTypeOptions | undefined;
    inputMode?: import("react-native").InputModeOptions | undefined;
    maxLength?: number | undefined | undefined;
    multiline?: boolean | undefined | undefined;
    onChange?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").TextInputChangeEventData>) => void) | undefined | undefined;
    onContentSizeChange?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").TextInputContentSizeChangeEventData>) => void) | undefined | undefined;
    onEndEditing?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").TextInputEndEditingEventData>) => void) | undefined | undefined;
    onSelectionChange?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").TextInputSelectionChangeEventData>) => void) | undefined | undefined;
    onSubmitEditing?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").TextInputSubmitEditingEventData>) => void) | undefined | undefined;
    onScroll?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").TextInputScrollEventData>) => void) | undefined | undefined;
    onKeyPress?: ((e: import("react-native").NativeSyntheticEvent<import("react-native").TextInputKeyPressEventData>) => void) | undefined | undefined;
    placeholder?: string | undefined | undefined;
    readOnly: boolean | undefined;
    returnKeyType?: import("react-native").ReturnKeyTypeOptions | undefined;
    enterKeyHint?: import("react-native").EnterKeyHintTypeOptions | undefined;
    secureTextEntry?: boolean | undefined | undefined;
    selectTextOnFocus?: boolean | undefined | undefined;
    selection?: {
        start: number;
        end?: number | undefined;
    } | undefined | undefined;
    inputAccessoryViewID?: string | undefined | undefined;
    value?: string | undefined | undefined;
    clearButtonMode?: "never" | "while-editing" | "unless-editing" | "always" | undefined | undefined;
    clearTextOnFocus?: boolean | undefined | undefined;
    dataDetectorTypes?: import("react-native").DataDetectorTypes | import("react-native").DataDetectorTypes[] | undefined;
    enablesReturnKeyAutomatically?: boolean | undefined | undefined;
    keyboardAppearance?: "default" | "light" | "dark" | undefined | undefined;
    passwordRules?: string | null | undefined | undefined;
    rejectResponderTermination?: boolean | null | undefined | undefined;
    selectionState?: import("react-native").DocumentSelectionState | undefined;
    spellCheck?: boolean | undefined | undefined;
    textContentType?: "none" | "URL" | "addressCity" | "addressCityAndState" | "addressState" | "countryName" | "creditCardNumber" | "creditCardExpiration" | "creditCardExpirationMonth" | "creditCardExpirationYear" | "creditCardSecurityCode" | "creditCardType" | "creditCardName" | "creditCardGivenName" | "creditCardMiddleName" | "creditCardFamilyName" | "emailAddress" | "familyName" | "fullStreetAddress" | "givenName" | "jobTitle" | "location" | "middleName" | "name" | "namePrefix" | "nameSuffix" | "nickname" | "organizationName" | "postalCode" | "streetAddressLine1" | "streetAddressLine2" | "sublocality" | "telephoneNumber" | "username" | "password" | "newPassword" | "oneTimeCode" | "birthdate" | "birthdateDay" | "birthdateMonth" | "birthdateYear" | undefined | undefined;
    scrollEnabled?: boolean | undefined | undefined;
    smartInsertDelete?: boolean | undefined | undefined;
    cursorColor?: import("react-native").ColorValue | null | undefined;
    selectionHandleColor?: import("react-native").ColorValue | null | undefined;
    importantForAutofill?: "auto" | "no" | "noExcludeDescendants" | "yes" | "yesExcludeDescendants" | undefined | undefined;
    disableFullscreenUI?: boolean | undefined | undefined;
    inlineImageLeft?: string | undefined | undefined;
    inlineImagePadding?: number | undefined | undefined;
    returnKeyLabel?: string | undefined | undefined;
    underlineColorAndroid?: import("react-native").ColorValue | undefined;
    showSoftInputOnFocus?: boolean | undefined | undefined;
    ellipsis?: boolean | "unset" | undefined;
    textDecorationDistance?: number | "unset" | undefined;
    textOverflow?: import("csstype").Property.TextOverflow | undefined;
    whiteSpace?: import("csstype").Property.WhiteSpace | undefined;
    wordWrap?: import("csstype").Property.WordWrap | undefined;
    color?: "unset" | import("react-native").OpaqueColorValue | import("@tamagui/core").GetThemeValueForKey<"color"> | undefined;
    borderColor?: "unset" | import("react-native").OpaqueColorValue | import("@tamagui/core").GetThemeValueForKey<"borderColor"> | undefined;
    shadowColor?: "unset" | import("react-native").OpaqueColorValue | import("@tamagui/core").GetThemeValueForKey<"shadowColor"> | undefined;
    zIndex?: "unset" | import("@tamagui/core").GetThemeValueForKey<"zIndex"> | undefined;
    width?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"width"> | null | undefined;
    height?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"height"> | null | undefined;
    padding?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"padding"> | null | undefined;
    paddingTop?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"paddingTop"> | null | undefined;
    paddingBottom?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"paddingBottom"> | null | undefined;
    paddingLeft?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"paddingLeft"> | null | undefined;
    paddingRight?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"paddingRight"> | null | undefined;
    paddingHorizontal?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"paddingHorizontal"> | null | undefined;
    paddingVertical?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"paddingVertical"> | null | undefined;
    margin?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"margin"> | null | undefined;
    marginTop?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"marginTop"> | null | undefined;
    marginBottom?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"marginBottom"> | null | undefined;
    marginLeft?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"marginLeft"> | null | undefined;
    marginRight?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"marginRight"> | null | undefined;
    marginHorizontal?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"marginHorizontal"> | null | undefined;
    marginVertical?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"marginVertical"> | null | undefined;
    flex?: number | "unset" | undefined;
    flexDirection?: "unset" | "row" | "column" | "row-reverse" | "column-reverse" | undefined;
    flexWrap?: "unset" | "wrap" | "nowrap" | "wrap-reverse" | undefined;
    flexGrow?: number | "unset" | undefined;
    flexShrink?: number | "unset" | undefined;
    flexBasis?: "unset" | import("react-native").DimensionValue | undefined;
    alignItems?: "unset" | import("react-native").FlexAlignType | undefined;
    alignContent?: "unset" | "flex-start" | "flex-end" | "center" | "stretch" | "space-between" | "space-around" | "space-evenly" | undefined;
    justifyContent?: "unset" | "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | undefined;
    alignSelf?: "unset" | "auto" | import("react-native").FlexAlignType | undefined;
    backgroundColor?: "unset" | import("react-native").OpaqueColorValue | import("@tamagui/core").GetThemeValueForKey<"backgroundColor"> | undefined;
    borderRadius?: number | "unset" | import("react-native").Animated.AnimatedNode | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").UnionableString | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableNumber | undefined;
    borderTopRightRadius?: number | "unset" | import("react-native").Animated.AnimatedNode | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").UnionableString | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableNumber | undefined;
    borderBottomRightRadius?: number | "unset" | import("react-native").Animated.AnimatedNode | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").UnionableString | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableNumber | undefined;
    borderBottomLeftRadius?: number | "unset" | import("react-native").Animated.AnimatedNode | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").UnionableString | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableNumber | undefined;
    borderTopLeftRadius?: number | "unset" | import("react-native").Animated.AnimatedNode | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").UnionableString | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableNumber | undefined;
    textAlign?: "unset" | "auto" | "center" | "left" | "right" | "justify" | undefined;
    left?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"left"> | null | undefined;
    right?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"right"> | null | undefined;
    fontSize?: "unset" | import("@tamagui/core").GetThemeValueForKey<"fontSize"> | undefined;
    lineHeight?: "unset" | import("@tamagui/core").GetThemeValueForKey<"lineHeight"> | undefined;
    fontFamily?: "unset" | import("@tamagui/core").GetThemeValueForKey<"fontFamily"> | undefined;
    fontStyle?: "unset" | "normal" | "italic" | undefined;
    fontWeight?: "unset" | import("@tamagui/core").GetThemeValueForKey<"fontWeight"> | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
    letterSpacing?: "unset" | import("@tamagui/core").GetThemeValueForKey<"letterSpacing"> | undefined;
    textDecorationLine?: "unset" | "none" | "underline" | "line-through" | "underline line-through" | undefined;
    textDecorationStyle?: "unset" | "solid" | "double" | "dotted" | "dashed" | undefined;
    textDecorationColor?: import("react-native").ColorValue | undefined;
    textShadowColor?: "unset" | import("react-native").OpaqueColorValue | import("@tamagui/core").GetThemeValueForKey<"textShadowColor"> | undefined;
    textShadowOffset?: "unset" | {
        width: number;
        height: number;
    } | undefined;
    textShadowRadius?: number | "unset" | undefined;
    textTransform?: "unset" | "none" | "capitalize" | "uppercase" | "lowercase" | undefined;
    fontVariant?: "unset" | import("react-native").FontVariant[] | undefined;
    writingDirection?: "unset" | "auto" | "ltr" | "rtl" | undefined;
    backfaceVisibility?: "unset" | "visible" | "hidden" | undefined;
    borderBlockColor?: "unset" | import("react-native").OpaqueColorValue | import("@tamagui/core").GetThemeValueForKey<"borderBlockColor"> | undefined;
    borderBlockEndColor?: "unset" | import("react-native").OpaqueColorValue | import("@tamagui/core").GetThemeValueForKey<"borderBlockEndColor"> | undefined;
    borderBlockStartColor?: "unset" | import("react-native").OpaqueColorValue | import("@tamagui/core").GetThemeValueForKey<"borderBlockStartColor"> | undefined;
    borderBottomColor?: "unset" | import("react-native").OpaqueColorValue | import("@tamagui/core").GetThemeValueForKey<"borderBottomColor"> | undefined;
    borderBottomEndRadius?: number | "unset" | import("react-native").Animated.AnimatedNode | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").UnionableString | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableNumber | undefined;
    borderBottomStartRadius?: number | "unset" | import("react-native").Animated.AnimatedNode | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").UnionableString | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableNumber | undefined;
    borderCurve?: "unset" | "circular" | "continuous" | undefined;
    borderEndColor?: import("react-native").ColorValue | undefined;
    borderEndEndRadius?: number | "unset" | import("react-native").Animated.AnimatedNode | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").UnionableString | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableNumber | undefined;
    borderEndStartRadius?: number | "unset" | import("react-native").Animated.AnimatedNode | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").UnionableString | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableNumber | undefined;
    borderLeftColor?: "unset" | import("react-native").OpaqueColorValue | import("@tamagui/core").GetThemeValueForKey<"borderLeftColor"> | undefined;
    borderRightColor?: "unset" | import("react-native").OpaqueColorValue | import("@tamagui/core").GetThemeValueForKey<"borderRightColor"> | undefined;
    borderStartColor?: import("react-native").ColorValue | undefined;
    borderStartEndRadius?: number | "unset" | import("react-native").Animated.AnimatedNode | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").UnionableString | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableNumber | undefined;
    borderStartStartRadius?: number | "unset" | import("react-native").Animated.AnimatedNode | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").UnionableString | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableNumber | undefined;
    borderStyle?: "unset" | "solid" | "dotted" | "dashed" | undefined;
    borderTopColor?: "unset" | import("react-native").OpaqueColorValue | import("@tamagui/core").GetThemeValueForKey<"borderTopColor"> | undefined;
    borderTopEndRadius?: number | "unset" | import("react-native").Animated.AnimatedNode | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").UnionableString | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableNumber | undefined;
    borderTopStartRadius?: number | "unset" | import("react-native").Animated.AnimatedNode | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").UnionableString | import("@tamagui/core").Variable<any> | import("@tamagui/core").UnionableNumber | undefined;
    opacity?: "unset" | import("react-native").AnimatableNumericValue | undefined;
    elevation?: number | "unset" | undefined;
    isolation?: "unset" | "auto" | "isolate" | undefined;
    boxShadow?: string | readonly import("react-native").BoxShadowValue[] | undefined;
    filter?: string | readonly import("react-native").FilterFunction[] | undefined;
    aspectRatio?: number | string | undefined | undefined;
    borderBottomWidth?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"borderBottomWidth"> | undefined;
    borderEndWidth?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"borderEndWidth"> | undefined;
    borderLeftWidth?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"borderLeftWidth"> | undefined;
    borderRightWidth?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"borderRightWidth"> | undefined;
    borderStartWidth?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"borderStartWidth"> | undefined;
    borderTopWidth?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"borderTopWidth"> | undefined;
    borderWidth?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"borderWidth"> | undefined;
    bottom?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"bottom"> | null | undefined;
    end?: "unset" | import("react-native").DimensionValue | undefined;
    rowGap?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"rowGap"> | undefined;
    gap?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"gap"> | undefined;
    columnGap?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"columnGap"> | undefined;
    marginEnd?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"marginEnd"> | null | undefined;
    marginStart?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"marginStart"> | null | undefined;
    maxHeight?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"maxHeight"> | null | undefined;
    maxWidth?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"maxWidth"> | null | undefined;
    minHeight?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"minHeight"> | null | undefined;
    minWidth?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"minWidth"> | null | undefined;
    overflow?: "unset" | "visible" | "hidden" | "scroll" | undefined;
    paddingEnd?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"paddingEnd"> | null | undefined;
    paddingStart?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"paddingStart"> | null | undefined;
    position?: "unset" | "absolute" | "relative" | "static" | undefined;
    start?: "unset" | import("react-native").DimensionValue | undefined;
    top?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"top"> | null | undefined;
    direction?: "unset" | "inherit" | "ltr" | "rtl" | undefined;
    shadowOffset?: "unset" | import("@tamagui/core").GetThemeValueForKey<"shadowOffset"> | Readonly<{
        width: number;
        height: number;
    }> | undefined;
    shadowOpacity?: "unset" | import("react-native").AnimatableNumericValue | undefined;
    shadowRadius?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"shadowRadius"> | undefined;
    transform?: string | readonly (({
        perspective: import("react-native").AnimatableNumericValue;
    } & {
        scale?: undefined;
        scaleX?: undefined;
        scaleY?: undefined;
        skewX?: undefined;
        skewY?: undefined;
        matrix?: undefined;
        rotate?: undefined;
        rotateY?: undefined;
        rotateX?: undefined;
        rotateZ?: undefined;
        translateX?: undefined;
        translateY?: undefined;
    }) | ({
        scale: import("react-native").AnimatableNumericValue;
    } & {
        perspective?: undefined;
        scaleX?: undefined;
        scaleY?: undefined;
        skewX?: undefined;
        skewY?: undefined;
        matrix?: undefined;
        rotate?: undefined;
        rotateY?: undefined;
        rotateX?: undefined;
        rotateZ?: undefined;
        translateX?: undefined;
        translateY?: undefined;
    }) | ({
        scaleX: import("react-native").AnimatableNumericValue;
    } & {
        perspective?: undefined;
        scale?: undefined;
        scaleY?: undefined;
        skewX?: undefined;
        skewY?: undefined;
        matrix?: undefined;
        rotate?: undefined;
        rotateY?: undefined;
        rotateX?: undefined;
        rotateZ?: undefined;
        translateX?: undefined;
        translateY?: undefined;
    }) | ({
        scaleY: import("react-native").AnimatableNumericValue;
    } & {
        perspective?: undefined;
        scale?: undefined;
        scaleX?: undefined;
        skewX?: undefined;
        skewY?: undefined;
        matrix?: undefined;
        rotate?: undefined;
        rotateY?: undefined;
        rotateX?: undefined;
        rotateZ?: undefined;
        translateX?: undefined;
        translateY?: undefined;
    }) | ({
        skewX: import("react-native").AnimatableStringValue;
    } & {
        perspective?: undefined;
        scale?: undefined;
        scaleX?: undefined;
        scaleY?: undefined;
        skewY?: undefined;
        matrix?: undefined;
        rotate?: undefined;
        rotateY?: undefined;
        rotateX?: undefined;
        rotateZ?: undefined;
        translateX?: undefined;
        translateY?: undefined;
    }) | ({
        skewY: import("react-native").AnimatableStringValue;
    } & {
        perspective?: undefined;
        scale?: undefined;
        scaleX?: undefined;
        scaleY?: undefined;
        skewX?: undefined;
        matrix?: undefined;
        rotate?: undefined;
        rotateY?: undefined;
        rotateX?: undefined;
        rotateZ?: undefined;
        translateX?: undefined;
        translateY?: undefined;
    }) | ({
        matrix: import("react-native").AnimatableNumericValue[];
    } & {
        perspective?: undefined;
        scale?: undefined;
        scaleX?: undefined;
        scaleY?: undefined;
        skewX?: undefined;
        skewY?: undefined;
        rotate?: undefined;
        rotateY?: undefined;
        rotateX?: undefined;
        rotateZ?: undefined;
        translateX?: undefined;
        translateY?: undefined;
    }) | ({
        rotate: import("react-native").AnimatableStringValue;
    } & {
        perspective?: undefined;
        scale?: undefined;
        scaleX?: undefined;
        scaleY?: undefined;
        skewX?: undefined;
        skewY?: undefined;
        matrix?: undefined;
        rotateY?: undefined;
        rotateX?: undefined;
        rotateZ?: undefined;
        translateX?: undefined;
        translateY?: undefined;
    }) | ({
        rotateY: import("react-native").AnimatableStringValue;
    } & {
        perspective?: undefined;
        scale?: undefined;
        scaleX?: undefined;
        scaleY?: undefined;
        skewX?: undefined;
        skewY?: undefined;
        matrix?: undefined;
        rotate?: undefined;
        rotateX?: undefined;
        rotateZ?: undefined;
        translateX?: undefined;
        translateY?: undefined;
    }) | ({
        rotateX: import("react-native").AnimatableStringValue;
    } & {
        perspective?: undefined;
        scale?: undefined;
        scaleX?: undefined;
        scaleY?: undefined;
        skewX?: undefined;
        skewY?: undefined;
        matrix?: undefined;
        rotate?: undefined;
        rotateY?: undefined;
        rotateZ?: undefined;
        translateX?: undefined;
        translateY?: undefined;
    }) | ({
        rotateZ: import("react-native").AnimatableStringValue;
    } & {
        perspective?: undefined;
        scale?: undefined;
        scaleX?: undefined;
        scaleY?: undefined;
        skewX?: undefined;
        skewY?: undefined;
        matrix?: undefined;
        rotate?: undefined;
        rotateY?: undefined;
        rotateX?: undefined;
        translateX?: undefined;
        translateY?: undefined;
    }) | ({
        translateX: `${number}%` | import("react-native").AnimatableNumericValue;
    } & {
        perspective?: undefined;
        scale?: undefined;
        scaleX?: undefined;
        scaleY?: undefined;
        skewX?: undefined;
        skewY?: undefined;
        matrix?: undefined;
        rotate?: undefined;
        rotateY?: undefined;
        rotateX?: undefined;
        rotateZ?: undefined;
        translateY?: undefined;
    }) | ({
        translateY: `${number}%` | import("react-native").AnimatableNumericValue;
    } & {
        perspective?: undefined;
        scale?: undefined;
        scaleX?: undefined;
        scaleY?: undefined;
        skewX?: undefined;
        skewY?: undefined;
        matrix?: undefined;
        rotate?: undefined;
        rotateY?: undefined;
        rotateX?: undefined;
        rotateZ?: undefined;
        translateX?: undefined;
    }))[] | undefined;
    transformMatrix?: "unset" | number[] | undefined;
    rotation?: "unset" | import("react-native").AnimatableNumericValue | undefined;
    translateX?: "unset" | import("react-native").AnimatableNumericValue | undefined;
    translateY?: "unset" | import("react-native").AnimatableNumericValue | undefined;
    textAlignVertical?: "unset" | "auto" | "center" | "bottom" | "top" | undefined;
    verticalAlign?: "unset" | "auto" | "bottom" | "top" | "middle" | undefined;
    includeFontPadding?: boolean | "unset" | undefined;
    display?: "unset" | "inherit" | "flex" | "none" | "inline" | "block" | "contents" | "inline-flex" | undefined;
    x?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"x"> | undefined;
    y?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"y"> | undefined;
    perspective?: number | "unset" | undefined;
    scale?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"scale"> | undefined;
    scaleX?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"scaleX"> | undefined;
    scaleY?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"scaleY"> | undefined;
    skewX?: string | undefined;
    skewY?: string | undefined;
    matrix?: "unset" | number[] | undefined;
    rotate?: "unset" | import("@tamagui/core").UnionableString | `${number}deg` | undefined;
    rotateY?: "unset" | import("@tamagui/core").UnionableString | `${number}deg` | undefined;
    rotateX?: "unset" | import("@tamagui/core").UnionableString | `${number}deg` | undefined;
    rotateZ?: "unset" | import("@tamagui/core").UnionableString | `${number}deg` | undefined;
    contain?: import("csstype").Property.Contain | undefined;
    cursor?: import("csstype").Property.Cursor | undefined;
    outlineColor?: "unset" | import("@tamagui/core").GetThemeValueForKey<"outlineColor"> | undefined;
    outlineOffset?: "unset" | import("@tamagui/core").SpaceValue | undefined;
    outlineStyle?: import("csstype").Property.OutlineStyle | undefined;
    outlineWidth?: "unset" | import("@tamagui/core").SpaceValue | undefined;
    userSelect?: import("csstype").Property.UserSelect | undefined;
    backdropFilter?: import("csstype").Property.BackdropFilter | undefined;
    background?: import("csstype").Property.Background<0 | (string & {})> | undefined;
    backgroundImage?: import("csstype").Property.BackgroundImage | undefined;
    backgroundOrigin?: import("csstype").Property.BackgroundOrigin | undefined;
    backgroundPosition?: import("csstype").Property.BackgroundPosition<0 | (string & {})> | undefined;
    backgroundRepeat?: import("csstype").Property.BackgroundRepeat | undefined;
    backgroundSize?: import("csstype").Property.BackgroundSize<0 | (string & {})> | undefined;
    containerType?: import("csstype").Property.ContainerType | undefined;
    boxSizing?: import("csstype").Property.BoxSizing | undefined;
    overflowX?: import("csstype").Property.BoxSizing | undefined;
    overflowY?: import("csstype").Property.BoxSizing | undefined;
    pointerEvents?: "unset" | "auto" | "box-none" | "none" | "box-only" | undefined;
    transformOrigin?: "unset" | "center" | "left" | "right" | "bottom" | "top" | (`${number}%` | `${string}%` | `${string}px` | `${number}px`) | "center center" | "center bottom" | "center top" | `center ${number}%` | `center ${string}%` | `center ${string}px` | `center ${number}px` | "left center" | "left bottom" | "left top" | `left ${number}%` | `left ${string}%` | `left ${string}px` | `left ${number}px` | "right center" | "right bottom" | "right top" | `right ${number}%` | `right ${string}%` | `right ${string}px` | `right ${number}px` | `${number}% center` | `${number}% bottom` | `${number}% top` | `${number}% ${number}%` | `${number}% ${string}%` | `${number}% ${string}px` | `${number}% ${number}px` | `${string}% center` | `${string}% bottom` | `${string}% top` | `${string}% ${number}%` | `${string}% ${string}%` | `${string}% ${string}px` | `${string}% ${number}px` | `${string}px center` | `${string}px bottom` | `${string}px top` | `${string}px ${number}%` | `${string}px ${string}%` | `${string}px ${string}px` | `${string}px ${number}px` | `${number}px center` | `${number}px bottom` | `${number}px top` | `${number}px ${number}%` | `${number}px ${string}%` | `${number}px ${string}px` | `${number}px ${number}px` | `center center ${string}px` | `center center ${number}px` | `center bottom ${string}px` | `center bottom ${number}px` | `center top ${string}px` | `center top ${number}px` | `center ${number}% ${string}px` | `center ${number}% ${number}px` | `center ${string}% ${string}px` | `center ${string}% ${number}px` | `center ${string}px ${string}px` | `center ${string}px ${number}px` | `center ${number}px ${string}px` | `center ${number}px ${number}px` | `left center ${string}px` | `left center ${number}px` | `left bottom ${string}px` | `left bottom ${number}px` | `left top ${string}px` | `left top ${number}px` | `left ${number}% ${string}px` | `left ${number}% ${number}px` | `left ${string}% ${string}px` | `left ${string}% ${number}px` | `left ${string}px ${string}px` | `left ${string}px ${number}px` | `left ${number}px ${string}px` | `left ${number}px ${number}px` | `right center ${string}px` | `right center ${number}px` | `right bottom ${string}px` | `right bottom ${number}px` | `right top ${string}px` | `right top ${number}px` | `right ${number}% ${string}px` | `right ${number}% ${number}px` | `right ${string}% ${string}px` | `right ${string}% ${number}px` | `right ${string}px ${string}px` | `right ${string}px ${number}px` | `right ${number}px ${string}px` | `right ${number}px ${number}px` | `${number}% center ${string}px` | `${number}% center ${number}px` | `${number}% bottom ${string}px` | `${number}% bottom ${number}px` | `${number}% top ${string}px` | `${number}% top ${number}px` | `${number}% ${number}% ${string}px` | `${number}% ${number}% ${number}px` | `${number}% ${string}% ${string}px` | `${number}% ${string}% ${number}px` | `${number}% ${string}px ${string}px` | `${number}% ${string}px ${number}px` | `${number}% ${number}px ${string}px` | `${number}% ${number}px ${number}px` | `${string}% center ${string}px` | `${string}% center ${number}px` | `${string}% bottom ${string}px` | `${string}% bottom ${number}px` | `${string}% top ${string}px` | `${string}% top ${number}px` | `${string}% ${number}% ${string}px` | `${string}% ${number}% ${number}px` | `${string}% ${string}% ${string}px` | `${string}% ${string}% ${number}px` | `${string}% ${string}px ${string}px` | `${string}% ${string}px ${number}px` | `${string}% ${number}px ${string}px` | `${string}% ${number}px ${number}px` | `${string}px center ${string}px` | `${string}px center ${number}px` | `${string}px bottom ${string}px` | `${string}px bottom ${number}px` | `${string}px top ${string}px` | `${string}px top ${number}px` | `${string}px ${number}% ${string}px` | `${string}px ${number}% ${number}px` | `${string}px ${string}% ${string}px` | `${string}px ${string}% ${number}px` | `${string}px ${string}px ${string}px` | `${string}px ${string}px ${number}px` | `${string}px ${number}px ${string}px` | `${string}px ${number}px ${number}px` | `${number}px center ${string}px` | `${number}px center ${number}px` | `${number}px bottom ${string}px` | `${number}px bottom ${number}px` | `${number}px top ${string}px` | `${number}px top ${number}px` | `${number}px ${number}% ${string}px` | `${number}px ${number}% ${number}px` | `${number}px ${string}% ${string}px` | `${number}px ${string}% ${number}px` | `${number}px ${string}px ${string}px` | `${number}px ${string}px ${number}px` | `${number}px ${number}px ${string}px` | `${number}px ${number}px ${number}px` | undefined;
    borderBlockWidth?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"borderBlockWidth"> | undefined;
    borderBlockStartWidth?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"borderBlockStartWidth"> | undefined;
    borderBlockEndWidth?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"borderBlockEndWidth"> | undefined;
    borderInlineWidth?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"borderInlineWidth"> | undefined;
    borderInlineStartWidth?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"borderInlineStartWidth"> | undefined;
    borderInlineEndWidth?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"borderInlineEndWidth"> | undefined;
    borderBlockStyle?: "unset" | "solid" | "dotted" | "dashed" | undefined;
    borderBlockStartStyle?: "unset" | "solid" | "dotted" | "dashed" | undefined;
    borderBlockEndStyle?: "unset" | "solid" | "dotted" | "dashed" | undefined;
    borderInlineStyle?: "unset" | "solid" | "dotted" | "dashed" | undefined;
    borderInlineStartStyle?: "unset" | "solid" | "dotted" | "dashed" | undefined;
    borderInlineEndStyle?: "unset" | "solid" | "dotted" | "dashed" | undefined;
    marginBlock?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"marginBlock"> | undefined;
    marginBlockStart?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"marginBlockStart"> | undefined;
    marginBlockEnd?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"marginBlockEnd"> | undefined;
    marginInline?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"marginInline"> | undefined;
    marginInlineStart?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"marginInlineStart"> | undefined;
    marginInlineEnd?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"marginInlineEnd"> | undefined;
    paddingBlock?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"paddingBlock"> | undefined;
    paddingBlockStart?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"paddingBlockStart"> | undefined;
    paddingBlockEnd?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"paddingBlockEnd"> | undefined;
    paddingInline?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"paddingInline"> | undefined;
    paddingInlineStart?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"paddingInlineStart"> | undefined;
    paddingInlineEnd?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"paddingInlineEnd"> | undefined;
    inset?: number | "unset" | import("@tamagui/core").SpaceTokens | undefined;
    insetBlock?: number | "unset" | import("@tamagui/core").SpaceTokens | undefined;
    insetBlockStart?: number | "unset" | import("@tamagui/core").SpaceTokens | undefined;
    insetBlockEnd?: number | "unset" | import("@tamagui/core").SpaceTokens | undefined;
    insetInline?: number | "unset" | import("@tamagui/core").SpaceTokens | undefined;
    insetInlineStart?: number | "unset" | import("@tamagui/core").SpaceTokens | undefined;
    insetInlineEnd?: number | "unset" | import("@tamagui/core").SpaceTokens | undefined;
    animation?: (import("@tamagui/core").AnimationProp | null) | undefined;
    animateOnly?: string[] | "unset" | undefined;
    animatePresence?: boolean | "unset" | undefined;
    selectionColor?: "unset" | Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
    size?: import("@tamagui/core").SizeTokens | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
    hoverStyle?: (import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase & {
        readonly placeholderTextColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
        readonly selectionColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
    }> & {
        size?: import("@tamagui/core").SizeTokens | undefined;
        disabled?: boolean | undefined;
        unstyled?: boolean | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase & {
        readonly placeholderTextColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
        readonly selectionColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
    }>>) | null | undefined;
    pressStyle?: (import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase & {
        readonly placeholderTextColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
        readonly selectionColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
    }> & {
        size?: import("@tamagui/core").SizeTokens | undefined;
        disabled?: boolean | undefined;
        unstyled?: boolean | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase & {
        readonly placeholderTextColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
        readonly selectionColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
    }>>) | null | undefined;
    focusStyle?: (import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase & {
        readonly placeholderTextColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
        readonly selectionColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
    }> & {
        size?: import("@tamagui/core").SizeTokens | undefined;
        disabled?: boolean | undefined;
        unstyled?: boolean | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase & {
        readonly placeholderTextColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
        readonly selectionColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
    }>>) | null | undefined;
    focusWithinStyle?: (import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase & {
        readonly placeholderTextColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
        readonly selectionColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
    }> & {
        size?: import("@tamagui/core").SizeTokens | undefined;
        disabled?: boolean | undefined;
        unstyled?: boolean | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase & {
        readonly placeholderTextColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
        readonly selectionColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
    }>>) | null | undefined;
    focusVisibleStyle?: (import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase & {
        readonly placeholderTextColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
        readonly selectionColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
    }> & {
        size?: import("@tamagui/core").SizeTokens | undefined;
        disabled?: boolean | undefined;
        unstyled?: boolean | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase & {
        readonly placeholderTextColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
        readonly selectionColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
    }>>) | null | undefined;
    disabledStyle?: (import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase & {
        readonly placeholderTextColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
        readonly selectionColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
    }> & {
        size?: import("@tamagui/core").SizeTokens | undefined;
        disabled?: boolean | undefined;
        unstyled?: boolean | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase & {
        readonly placeholderTextColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
        readonly selectionColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
    }>>) | null | undefined;
    exitStyle?: (import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase & {
        readonly placeholderTextColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
        readonly selectionColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
    }> & {
        size?: import("@tamagui/core").SizeTokens | undefined;
        disabled?: boolean | undefined;
        unstyled?: boolean | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase & {
        readonly placeholderTextColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
        readonly selectionColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
    }>>) | null | undefined;
    enterStyle?: (import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase & {
        readonly placeholderTextColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
        readonly selectionColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
    }> & {
        size?: import("@tamagui/core").SizeTokens | undefined;
        disabled?: boolean | undefined;
        unstyled?: boolean | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase & {
        readonly placeholderTextColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
        readonly selectionColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
    }>>) | null | undefined;
    rows?: number;
    ref: (node: any) => void;
};
//# sourceMappingURL=Input.d.ts.map
