/// <reference types="react" />
export declare const elevate: {
    true: (_: boolean, extras: any) => {
        [x: `$${string}`]: (import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>>>) | import("@tamagui/web").Variable<any> | undefined;
        [x: `$${number}`]: (import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/web").PseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>>>) | import("@tamagui/web").Variable<any> | undefined;
        hitSlop?: import("react-native").Insets | (import("react-native").Insets & number) | import("@tamagui/web").Variable<any> | undefined;
        id?: string | import("@tamagui/web").Variable<any> | undefined;
        pointerEvents?: "box-none" | "none" | "box-only" | "auto" | import("@tamagui/web").Variable<any> | undefined;
        removeClippedSubviews?: boolean | import("@tamagui/web").Variable<any> | undefined;
        testID?: string | import("@tamagui/web").Variable<any> | undefined;
        nativeID?: string | import("@tamagui/web").Variable<any> | undefined;
        collapsable?: boolean | import("@tamagui/web").Variable<any> | undefined;
        needsOffscreenAlphaCompositing?: boolean | import("@tamagui/web").Variable<any> | undefined;
        renderToHardwareTextureAndroid?: boolean | import("@tamagui/web").Variable<any> | undefined;
        focusable?: boolean | import("@tamagui/web").Variable<any> | undefined;
        shouldRasterizeIOS?: boolean | import("@tamagui/web").Variable<any> | undefined;
        isTVSelectable?: boolean | import("@tamagui/web").Variable<any> | undefined;
        hasTVPreferredFocus?: boolean | import("@tamagui/web").Variable<any> | undefined;
        tvParallaxProperties?: import("@tamagui/web").Variable<any> | import("react-native").TVParallaxProperties | undefined;
        tvParallaxShiftDistanceX?: number | import("@tamagui/web").Variable<any> | undefined;
        tvParallaxShiftDistanceY?: number | import("@tamagui/web").Variable<any> | undefined;
        tvParallaxTiltAngle?: number | import("@tamagui/web").Variable<any> | undefined;
        tvParallaxMagnification?: number | import("@tamagui/web").Variable<any> | undefined;
        onTouchStart?: import("@tamagui/web").Variable<any> | ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onTouchMove?: import("@tamagui/web").Variable<any> | ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onTouchEnd?: import("@tamagui/web").Variable<any> | ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onTouchCancel?: import("@tamagui/web").Variable<any> | ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onTouchEndCapture?: import("@tamagui/web").Variable<any> | ((event: import("react-native").GestureResponderEvent) => void) | undefined;
        onPointerEnter?: import("@tamagui/web").Variable<any> | ((event: import("react-native").PointerEvent) => void) | undefined;
        onPointerEnterCapture?: import("@tamagui/web").Variable<any> | ((event: import("react-native").PointerEvent) => void) | undefined;
        onPointerLeave?: import("@tamagui/web").Variable<any> | ((event: import("react-native").PointerEvent) => void) | undefined;
        onPointerLeaveCapture?: import("@tamagui/web").Variable<any> | ((event: import("react-native").PointerEvent) => void) | undefined;
        onPointerMove?: import("@tamagui/web").Variable<any> | ((event: import("react-native").PointerEvent) => void) | undefined;
        onPointerMoveCapture?: import("@tamagui/web").Variable<any> | ((event: import("react-native").PointerEvent) => void) | undefined;
        onPointerCancel?: import("@tamagui/web").Variable<any> | ((event: import("react-native").PointerEvent) => void) | undefined;
        onPointerCancelCapture?: import("@tamagui/web").Variable<any> | ((event: import("react-native").PointerEvent) => void) | undefined;
        onPointerDown?: import("@tamagui/web").Variable<any> | ((event: import("react-native").PointerEvent) => void) | undefined;
        onPointerDownCapture?: import("@tamagui/web").Variable<any> | ((event: import("react-native").PointerEvent) => void) | undefined;
        onPointerUp?: import("@tamagui/web").Variable<any> | ((event: import("react-native").PointerEvent) => void) | undefined;
        onPointerUpCapture?: import("@tamagui/web").Variable<any> | ((event: import("react-native").PointerEvent) => void) | undefined;
        accessible?: boolean | import("@tamagui/web").Variable<any> | undefined;
        accessibilityActions?: import("@tamagui/web").Variable<any> | readonly Readonly<{
            name: string;
            label?: string | undefined;
        }>[] | undefined;
        accessibilityLabel?: string | import("@tamagui/web").Variable<any> | undefined;
        'aria-label'?: string | import("@tamagui/web").Variable<any> | undefined;
        accessibilityRole?: import("@tamagui/web").Variable<any> | import("react-native").AccessibilityRole | undefined;
        accessibilityState?: import("@tamagui/web").Variable<any> | import("react-native").AccessibilityState | undefined;
        'aria-busy'?: boolean | import("@tamagui/web").Variable<any> | undefined;
        'aria-checked'?: boolean | import("@tamagui/web").Variable<any> | "mixed" | undefined;
        'aria-disabled'?: boolean | import("@tamagui/web").Variable<any> | undefined;
        'aria-expanded'?: boolean | import("@tamagui/web").Variable<any> | undefined;
        'aria-selected'?: boolean | import("@tamagui/web").Variable<any> | undefined;
        'aria-labelledby'?: string | import("@tamagui/web").Variable<any> | undefined;
        accessibilityHint?: string | import("@tamagui/web").Variable<any> | undefined;
        accessibilityValue?: import("@tamagui/web").Variable<any> | import("react-native").AccessibilityValue | undefined;
        'aria-valuemax'?: number | import("@tamagui/web").Variable<any> | undefined;
        'aria-valuemin'?: number | import("@tamagui/web").Variable<any> | undefined;
        'aria-valuenow'?: number | import("@tamagui/web").Variable<any> | undefined;
        'aria-valuetext'?: string | import("@tamagui/web").Variable<any> | undefined;
        onAccessibilityAction?: import("@tamagui/web").Variable<any> | ((event: import("react-native").AccessibilityActionEvent) => void) | undefined;
        importantForAccessibility?: "auto" | import("@tamagui/web").Variable<any> | "yes" | "no" | "no-hide-descendants" | undefined;
        'aria-hidden'?: boolean | import("@tamagui/web").Variable<any> | undefined;
        'aria-live'?: import("@tamagui/web").Variable<any> | "polite" | "assertive" | "off" | undefined;
        'aria-modal'?: boolean | import("@tamagui/web").Variable<any> | undefined;
        role?: "none" | "alert" | "alertdialog" | "application" | "article" | "banner" | "button" | "cell" | "checkbox" | "columnheader" | "combobox" | "complementary" | "contentinfo" | "definition" | "dialog" | "directory" | "document" | "feed" | "figure" | "form" | "grid" | "group" | "heading" | "img" | "link" | "list" | "listitem" | "log" | "main" | "marquee" | "math" | "menu" | "menubar" | "menuitem" | "meter" | "navigation" | "note" | "option" | "presentation" | "progressbar" | "radio" | "radiogroup" | "region" | "row" | "rowgroup" | "rowheader" | "scrollbar" | "searchbox" | "separator" | "slider" | "spinbutton" | "status" | "summary" | "switch" | "tab" | "table" | "tablist" | "tabpanel" | "term" | "timer" | "toolbar" | "tooltip" | "tree" | "treegrid" | "treeitem" | import("@tamagui/web").Variable<any> | undefined;
        accessibilityLiveRegion?: "none" | import("@tamagui/web").Variable<any> | "polite" | "assertive" | undefined;
        accessibilityLabelledBy?: string | import("@tamagui/web").Variable<any> | string[] | undefined;
        accessibilityElementsHidden?: boolean | import("@tamagui/web").Variable<any> | undefined;
        accessibilityViewIsModal?: boolean | import("@tamagui/web").Variable<any> | undefined;
        onAccessibilityEscape?: import("@tamagui/web").Variable<any> | (() => void) | undefined;
        onAccessibilityTap?: import("@tamagui/web").Variable<any> | (() => void) | undefined;
        onMagicTap?: import("@tamagui/web").Variable<any> | (() => void) | undefined;
        accessibilityIgnoresInvertColors?: boolean | import("@tamagui/web").Variable<any> | undefined;
        accessibilityLanguage?: string | import("@tamagui/web").Variable<any> | undefined;
        target?: string | import("@tamagui/web").Variable<any> | undefined;
        asChild?: boolean | import("@tamagui/web").Variable<any> | "except-style" | undefined;
        space?: import("@tamagui/web").Variable<any> | import("@tamagui/web").SpaceTokens | null | undefined;
        spaceDirection?: import("@tamagui/web").Variable<any> | import("@tamagui/web").SpaceDirection | undefined;
        separator?: import("@tamagui/web").Variable<any> | import("react").ReactNode;
        dangerouslySetInnerHTML?: import("@tamagui/web").Variable<any> | {
            __html: string;
        } | undefined;
        animation?: import("@tamagui/web").Variable<any> | import("@tamagui/web").AnimationProp | null | undefined;
        animateOnly?: import("@tamagui/web").Variable<any> | string[] | undefined;
        children?: any;
        debug?: import("@tamagui/web").Variable<any> | import("@tamagui/web").DebugProp | undefined;
        disabled?: boolean | import("@tamagui/web").Variable<any> | undefined;
        className?: string | import("@tamagui/web").Variable<any> | undefined;
        themeShallow?: boolean | import("@tamagui/web").Variable<any> | undefined;
        tag?: string | import("@tamagui/web").Variable<any> | undefined;
        theme?: string | import("@tamagui/web").Variable<any> | null | undefined;
        componentName?: string | import("@tamagui/web").Variable<any> | undefined;
        tabIndex?: string | number | import("@tamagui/web").Variable<any> | undefined;
        forceStyle?: import("@tamagui/web").Variable<any> | "hover" | "press" | "focus" | undefined;
        onPress?: import("@tamagui/web").Variable<any> | ((event: import("react-native").GestureResponderEvent) => void) | null | undefined;
        onPressIn?: import("@tamagui/web").Variable<any> | ((event: import("react-native").GestureResponderEvent) => void) | null | undefined;
        onPressOut?: import("@tamagui/web").Variable<any> | ((event: import("react-native").GestureResponderEvent) => void) | null | undefined;
        onHoverIn?: import("@tamagui/web").Variable<any> | import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onHoverOut?: import("@tamagui/web").Variable<any> | import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onMouseEnter?: import("@tamagui/web").Variable<any> | import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onMouseLeave?: import("@tamagui/web").Variable<any> | import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onMouseDown?: import("@tamagui/web").Variable<any> | import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onMouseUp?: import("@tamagui/web").Variable<any> | import("react").MouseEventHandler<HTMLDivElement> | undefined;
        onFocus?: import("@tamagui/web").Variable<any> | ((event: import("react").FocusEvent<HTMLDivElement, Element>) => void) | undefined;
        onScroll?: import("@tamagui/web").Variable<any> | ((event: import("react").UIEvent<HTMLDivElement, UIEvent>) => void) | undefined;
        style?: import("@tamagui/web").Variable<any> | import("@tamagui/web").StyleProp<import("react").CSSProperties & import("react-native").ViewStyle>;
        backgroundColor?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallback | import("react-native").OpaqueColorValue | undefined;
        borderBottomColor?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallback | import("react-native").OpaqueColorValue | undefined;
        borderBottomEndRadius?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").RadiusTokens | undefined;
        borderBottomLeftRadius?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").RadiusTokens | undefined;
        borderBottomRightRadius?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").RadiusTokens | undefined;
        borderBottomStartRadius?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").RadiusTokens | undefined;
        borderBottomWidth?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        borderColor?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallback | import("react-native").OpaqueColorValue | undefined;
        borderEndColor?: import("@tamagui/web").Variable<any> | import("react-native").ColorValue | undefined;
        borderLeftColor?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallback | import("react-native").OpaqueColorValue | undefined;
        borderLeftWidth?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        borderRadius?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").RadiusTokens | undefined;
        borderRightColor?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallback | import("react-native").OpaqueColorValue | undefined;
        borderRightWidth?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        borderStartColor?: import("@tamagui/web").Variable<any> | import("react-native").ColorValue | undefined;
        borderStyle?: import("@tamagui/web").Variable<any> | "solid" | "dotted" | "dashed" | undefined;
        borderTopColor?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallback | import("react-native").OpaqueColorValue | undefined;
        borderTopEndRadius?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").RadiusTokens | undefined;
        borderTopLeftRadius?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").RadiusTokens | undefined;
        borderTopRightRadius?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").RadiusTokens | undefined;
        borderTopStartRadius?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").RadiusTokens | undefined;
        borderTopWidth?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        borderWidth?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        opacity?: number | import("@tamagui/web").Variable<any> | undefined;
        alignContent?: import("@tamagui/web").Variable<any> | "flex-start" | "flex-end" | "center" | "stretch" | "space-between" | "space-around" | undefined;
        alignItems?: import("@tamagui/web").Variable<any> | import("react-native").FlexAlignType | undefined;
        alignSelf?: "auto" | import("@tamagui/web").Variable<any> | import("react-native").FlexAlignType | undefined;
        aspectRatio?: string | number | import("@tamagui/web").Variable<any> | undefined;
        borderEndWidth?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        borderStartWidth?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        bottom?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        end?: string | number | import("@tamagui/web").Variable<any> | undefined;
        flex?: number | import("@tamagui/web").Variable<any> | undefined;
        flexBasis?: string | number | import("@tamagui/web").Variable<any> | undefined;
        flexDirection?: "row" | import("@tamagui/web").Variable<any> | "column" | "row-reverse" | "column-reverse" | undefined;
        flexGrow?: number | import("@tamagui/web").Variable<any> | undefined;
        flexShrink?: number | import("@tamagui/web").Variable<any> | undefined;
        flexWrap?: import("@tamagui/web").Variable<any> | "wrap" | "nowrap" | "wrap-reverse" | undefined;
        height?: import("@tamagui/web").SizeTokens | import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | undefined;
        justifyContent?: import("@tamagui/web").Variable<any> | "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | undefined;
        left?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        margin?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        marginBottom?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        marginEnd?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        marginHorizontal?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        marginLeft?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        marginRight?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        marginStart?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        marginTop?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        marginVertical?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        maxHeight?: import("@tamagui/web").SizeTokens | import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | undefined;
        maxWidth?: import("@tamagui/web").SizeTokens | import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | undefined;
        minHeight?: import("@tamagui/web").SizeTokens | import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | undefined;
        minWidth?: import("@tamagui/web").SizeTokens | import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | undefined;
        overflow?: import("@tamagui/web").Variable<any> | "visible" | "hidden" | "scroll" | undefined;
        padding?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        paddingBottom?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        paddingEnd?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        paddingHorizontal?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        paddingLeft?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        paddingRight?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        paddingStart?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        paddingTop?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        paddingVertical?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        position?: import("@tamagui/web").Variable<any> | "absolute" | "relative" | undefined;
        right?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        start?: string | number | import("@tamagui/web").Variable<any> | undefined;
        top?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        width?: import("@tamagui/web").SizeTokens | import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | undefined;
        zIndex?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").ZIndexTokens | undefined;
        direction?: import("@tamagui/web").Variable<any> | "inherit" | "ltr" | "rtl" | undefined;
        shadowColor?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallback | import("react-native").OpaqueColorValue | undefined;
        shadowOffset?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | {
            width: import("@tamagui/web").SpaceTokens;
            height: import("@tamagui/web").SpaceTokens;
        } | {
            width: number;
            height: number;
        } | undefined;
        shadowOpacity?: number | import("@tamagui/web").Variable<any> | undefined;
        shadowRadius?: import("@tamagui/web").SizeTokens | import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | undefined;
        transform?: import("@tamagui/web").Variable<any> | (import("react-native").PerpectiveTransform | import("react-native").RotateTransform | import("react-native").RotateXTransform | import("react-native").RotateYTransform | import("react-native").RotateZTransform | import("react-native").ScaleTransform | import("react-native").ScaleXTransform | import("react-native").ScaleYTransform | import("react-native").TranslateXTransform | import("react-native").TranslateYTransform | import("react-native").SkewXTransform | import("react-native").SkewYTransform | import("react-native").MatrixTransform)[] | undefined;
        transformMatrix?: import("@tamagui/web").Variable<any> | number[] | undefined;
        rotation?: number | import("@tamagui/web").Variable<any> | undefined;
        scaleX?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        scaleY?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        translateX?: number | import("@tamagui/web").Variable<any> | undefined;
        translateY?: number | import("@tamagui/web").Variable<any> | undefined;
        x?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        y?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        perspective?: number | import("@tamagui/web").Variable<any> | undefined;
        scale?: import("@tamagui/web").Variable<any> | import("@tamagui/web").ThemeValueFallback | import("@tamagui/web").SpaceTokens | undefined;
        skewX?: string | import("@tamagui/web").Variable<any> | undefined;
        skewY?: string | import("@tamagui/web").Variable<any> | undefined;
        matrix?: import("@tamagui/web").Variable<any> | number[] | undefined;
        rotate?: string | import("@tamagui/web").Variable<any> | undefined;
        rotateY?: string | import("@tamagui/web").Variable<any> | undefined;
        rotateX?: string | import("@tamagui/web").Variable<any> | undefined;
        rotateZ?: string | import("@tamagui/web").Variable<any> | undefined;
        cursor?: import("@tamagui/web").Variable<any> | import("csstype").Property.Cursor | undefined;
        contain?: import("@tamagui/web").Variable<any> | import("csstype").Property.Contain | undefined;
        display?: "flex" | "none" | import("@tamagui/web").Variable<any> | "inherit" | "inline" | "block" | "contents" | "inline-flex" | undefined;
        gap?: import("@tamagui/web").Variable<any> | import("@tamagui/web").SpaceTokens | undefined;
        columnGap?: import("@tamagui/web").Variable<any> | import("@tamagui/web").SpaceTokens | undefined;
        rowGap?: import("@tamagui/web").Variable<any> | import("@tamagui/web").SpaceTokens | undefined;
        userSelect?: import("@tamagui/web").Variable<any> | import("csstype").Property.UserSelect | undefined;
        outlineColor?: import("@tamagui/web").Variable<any> | import("csstype").Property.OutlineColor | undefined;
        outlineStyle?: import("@tamagui/web").Variable<any> | import("csstype").Property.OutlineStyle | undefined;
        outlineOffset?: import("@tamagui/web").Variable<any> | import("@tamagui/web").SpaceTokens | undefined;
        outlineWidth?: import("@tamagui/web").Variable<any> | import("@tamagui/web").SpaceTokens | undefined;
        hoverStyle?: (import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>>) | import("@tamagui/web").Variable<any> | null | undefined;
        pressStyle?: (import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>>) | import("@tamagui/web").Variable<any> | null | undefined;
        focusStyle?: (import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>>) | import("@tamagui/web").Variable<any> | null | undefined;
        exitStyle?: (import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>>) | import("@tamagui/web").Variable<any> | null | undefined;
        enterStyle?: (import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>>) | import("@tamagui/web").Variable<any> | null | undefined;
    } | null | undefined;
};
export declare const bordered: (val: boolean | number, { props }: {
    props: any;
}) => any;
export declare const padded: {
    true: (_: any, extras: any) => {
        padding: any;
    };
};
export declare const radiused: {
    true: (_: any, extras: any) => {
        borderRadius: any;
    };
};
export declare const circular: {
    true: (_: any, { props, tokens }: {
        props: any;
        tokens: any;
    }) => {
        width: any;
        height: any;
        maxWidth: any;
        maxHeight: any;
        minWidth: any;
        minHeight: any;
        borderRadius: number;
        padding: number;
    };
};
export declare const hoverTheme: {
    true: {
        hoverStyle: {
            backgroundColor: string;
            borderColor: string;
        };
    };
    false: {};
};
export declare const pressTheme: {
    true: {
        cursor: string;
        pressStyle: {
            backgroundColor: string;
            borderColor: string;
        };
    };
    false: {};
};
export declare const focusTheme: {
    true: {
        focusStyle: {
            backgroundColor: string;
            borderColor: string;
        };
    };
    false: {};
};
//# sourceMappingURL=variants.d.ts.map