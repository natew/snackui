import { TextContextStyles, TextParentStyles } from '@tamagui/text';
import { FontSizeTokens, GetProps, SizeTokens, ThemeableProps } from '@tamagui/web';
import { FunctionComponent } from 'react';
export declare const ButtonContext: import("@tamagui/web").StyledContext<Partial<TextContextStyles & {
    size: SizeTokens;
    variant?: "outlined" | undefined;
}>>;
type ButtonIconProps = {
    color?: string;
    size?: number;
};
type IconProp = JSX.Element | FunctionComponent<ButtonIconProps> | null;
type ButtonExtraProps = TextParentStyles & ThemeableProps & {
    /**
     * add icon before, passes color and size automatically if Component
     */
    icon?: IconProp;
    /**
     * add icon after, passes color and size automatically if Component
     */
    iconAfter?: IconProp;
    /**
     * adjust icon relative to size
     *
     * @default 1
     */
    scaleIcon?: number;
    /**
     * make the spacing elements flex
     */
    spaceFlex?: number | boolean;
    /**
     * adjust internal space relative to icon size
     */
    scaleSpace?: number;
    /**
     * remove default styles
     */
    unstyled?: boolean;
};
type ButtonProps = ButtonExtraProps & GetProps<typeof ButtonFrame>;
declare const ButtonFrame: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    size?: SizeTokens | undefined;
    elevation?: number | SizeTokens | undefined;
    variant?: "outlined" | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
    transparent?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    backgrounded?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}, {}>;
declare const ButtonText: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
    size?: FontSizeTokens | undefined;
    unstyled?: boolean | undefined;
}, {}>;
declare const ButtonIcon: (props: {
    children: React.ReactNode;
    scaleIcon?: number;
}) => any;
/**
 * @deprecated Instead of useButton, see the Button docs for the newer and much improved Advanced customization pattern: https://tamagui.dev/docs/components/button
 */
declare const buttonStaticConfig: {
    inlineProps: Set<string>;
};
declare const Button: import("react").ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps & TextContextStyles & {
    textProps?: Partial<Omit<import("@tamagui/web").TextNonStyleProps, keyof import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase, {
        size?: FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase, {
        size?: FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase, {
        size?: FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase, {
        size?: FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase, {
        size?: FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }>>> | undefined;
    noTextWrap?: boolean | undefined;
} & ThemeableProps & {
    /**
     * add icon before, passes color and size automatically if Component
     */
    icon?: IconProp | undefined;
    /**
     * add icon after, passes color and size automatically if Component
     */
    iconAfter?: IconProp | undefined;
    /**
     * adjust icon relative to size
     *
     * @default 1
     */
    scaleIcon?: number | undefined;
    /**
     * make the spacing elements flex
     */
    spaceFlex?: number | boolean | undefined;
    /**
     * adjust internal space relative to icon size
     */
    scaleSpace?: number | undefined;
    /**
     * remove default styles
     */
    unstyled?: boolean | undefined;
}, "space" | "zIndex" | "display" | "x" | "y" | "perspective" | "scale" | "scaleX" | "scaleY" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "pointerEvents" | "userSelect" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "transformOrigin" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderColor" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "translateX" | "translateY"> & import("@tamagui/web").WithThemeValues<Omit<import("@tamagui/web").StackStyleBase, keyof TextContextStyles | "unstyled" | "textProps" | "noTextWrap" | keyof ThemeableProps | "icon" | "iconAfter" | "scaleIcon" | "spaceFlex" | "scaleSpace">, {
    size?: SizeTokens | undefined;
    elevation?: number | SizeTokens | undefined;
    variant?: "outlined" | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
    transparent?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    backgrounded?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<Omit<import("@tamagui/web").StackStyleBase, keyof TextContextStyles | "unstyled" | "textProps" | "noTextWrap" | keyof ThemeableProps | "icon" | "iconAfter" | "scaleIcon" | "spaceFlex" | "scaleSpace">, {
    size?: SizeTokens | undefined;
    elevation?: number | SizeTokens | undefined;
    variant?: "outlined" | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
    transparent?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    backgrounded?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<Omit<import("@tamagui/web").StackStyleBase, keyof TextContextStyles | "unstyled" | "textProps" | "noTextWrap" | keyof ThemeableProps | "icon" | "iconAfter" | "scaleIcon" | "spaceFlex" | "scaleSpace">, {
    size?: SizeTokens | undefined;
    elevation?: number | SizeTokens | undefined;
    variant?: "outlined" | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
    transparent?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    backgrounded?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<Omit<import("@tamagui/web").StackStyleBase, keyof TextContextStyles | "unstyled" | "textProps" | "noTextWrap" | keyof ThemeableProps | "icon" | "iconAfter" | "scaleIcon" | "spaceFlex" | "scaleSpace">, {
    size?: SizeTokens | undefined;
    elevation?: number | SizeTokens | undefined;
    variant?: "outlined" | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
    transparent?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    backgrounded?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<Omit<import("@tamagui/web").StackStyleBase, keyof TextContextStyles | "unstyled" | "textProps" | "noTextWrap" | keyof ThemeableProps | "icon" | "iconAfter" | "scaleIcon" | "spaceFlex" | "scaleSpace">, {
    size?: SizeTokens | undefined;
    elevation?: number | SizeTokens | undefined;
    variant?: "outlined" | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
    transparent?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    backgrounded?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}>> & import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & import("@tamagui/web").StaticComponentObject<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & TextContextStyles & {
    textProps?: Partial<Omit<import("@tamagui/web").TextNonStyleProps, keyof import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase, {
        size?: FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase, {
        size?: FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase, {
        size?: FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase, {
        size?: FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase, {
        size?: FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }>>> | undefined;
    noTextWrap?: boolean | undefined;
} & ThemeableProps & {
    /**
     * add icon before, passes color and size automatically if Component
     */
    icon?: IconProp | undefined;
    /**
     * add icon after, passes color and size automatically if Component
     */
    iconAfter?: IconProp | undefined;
    /**
     * adjust icon relative to size
     *
     * @default 1
     */
    scaleIcon?: number | undefined;
    /**
     * make the spacing elements flex
     */
    spaceFlex?: number | boolean | undefined;
    /**
     * adjust internal space relative to icon size
     */
    scaleSpace?: number | undefined;
    /**
     * remove default styles
     */
    unstyled?: boolean | undefined;
}, Omit<import("@tamagui/web").StackStyleBase, keyof TextContextStyles | "unstyled" | "textProps" | "noTextWrap" | keyof ThemeableProps | "icon" | "iconAfter" | "scaleIcon" | "spaceFlex" | "scaleSpace">, {
    size?: SizeTokens | undefined;
    elevation?: number | SizeTokens | undefined;
    variant?: "outlined" | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
    transparent?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    backgrounded?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}, {}> & Omit<{}, "staticConfig" | "extractable" | "styleable"> & {
    __tama: [import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & TextContextStyles & {
        textProps?: Partial<Omit<import("@tamagui/web").TextNonStyleProps, keyof import("@tamagui/web").TextStylePropsBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase, {
            size?: FontSizeTokens | undefined;
            unstyled?: boolean | undefined;
        }> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase, {
            size?: FontSizeTokens | undefined;
            unstyled?: boolean | undefined;
        }>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase, {
            size?: FontSizeTokens | undefined;
            unstyled?: boolean | undefined;
        }> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase, {
            size?: FontSizeTokens | undefined;
            unstyled?: boolean | undefined;
        }>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase, {
            size?: FontSizeTokens | undefined;
            unstyled?: boolean | undefined;
        }>>> | undefined;
        noTextWrap?: boolean | undefined;
    } & ThemeableProps & {
        /**
         * add icon before, passes color and size automatically if Component
         */
        icon?: IconProp | undefined;
        /**
         * add icon after, passes color and size automatically if Component
         */
        iconAfter?: IconProp | undefined;
        /**
         * adjust icon relative to size
         *
         * @default 1
         */
        scaleIcon?: number | undefined;
        /**
         * make the spacing elements flex
         */
        spaceFlex?: number | boolean | undefined;
        /**
         * adjust internal space relative to icon size
         */
        scaleSpace?: number | undefined;
        /**
         * remove default styles
         */
        unstyled?: boolean | undefined;
    }, Omit<import("@tamagui/web").StackStyleBase, keyof TextContextStyles | "unstyled" | "textProps" | "noTextWrap" | keyof ThemeableProps | "icon" | "iconAfter" | "scaleIcon" | "spaceFlex" | "scaleSpace">, {
        size?: SizeTokens | undefined;
        elevation?: number | SizeTokens | undefined;
        variant?: "outlined" | undefined;
        disabled?: boolean | undefined;
        unstyled?: boolean | undefined;
        transparent?: boolean | undefined;
        hoverTheme?: boolean | undefined;
        pressTheme?: boolean | undefined;
        backgrounded?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    }, {}];
} & {
    Text: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
        size?: FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }, {}>;
    Icon: (props: {
        children: React.ReactNode;
        scaleIcon?: number;
    }) => any;
};
/**
 * @deprecated Instead of useButton, see the Button docs for the newer and much improved Advanced customization pattern: https://tamagui.dev/docs/components/button
 */
declare function useButton<Props extends ButtonProps>({ textProps, ...propsIn }: Props, { Text }?: {
    Text: any;
}): {
    spaceSize: number | boolean | "unset" | import("@tamagui/web").UnionableString | import("@tamagui/web").Variable<any>;
    isNested: boolean;
    props: Props;
};
export { Button, ButtonFrame, ButtonIcon, ButtonText, buttonStaticConfig, useButton, };
export type { ButtonProps };
//# sourceMappingURL=Button.d.ts.map