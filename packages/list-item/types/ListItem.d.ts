import { FontSizeTokens, GetProps, TamaguiElement, ThemeableProps } from '@tamagui/core';
import { TextParentStyles } from '@tamagui/text';
import React, { FunctionComponent } from 'react';
type ListItemIconProps = {
    color?: string;
    size?: number;
};
type IconProp = JSX.Element | FunctionComponent<ListItemIconProps> | null;
export type ListItemProps = Omit<TextParentStyles, 'TextComponent' | 'noTextWrap'> & GetProps<typeof ListItemFrame> & ThemeableProps & {
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
     */
    /**
     * default: -1
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
     * title
     */
    title?: React.ReactNode;
    /**
     * subtitle
     */
    subTitle?: React.ReactNode;
    /**
     * will not wrap text around `children` only, "all" will not wrap title or subTitle
     */
    noTextWrap?: boolean | 'all';
};
export declare const ListItemFrame: import("@tamagui/core").TamaguiComponent<Omit<import("react-native/types").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
} & {
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
}, "disabled" | "size" | "unstyled" | "active"> & {
    readonly unstyled?: boolean | undefined;
    readonly size?: import("@tamagui/core").SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
} & {
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
}, "disabled" | "size" | "unstyled" | "active"> & {
    readonly unstyled?: boolean | undefined;
    readonly size?: import("@tamagui/core").SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
} & {
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
}, "disabled" | "size" | "unstyled" | "active"> & {
    readonly unstyled?: boolean | undefined;
    readonly size?: import("@tamagui/core").SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
}>>, TamaguiElement, Omit<import("react-native/types").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps, {
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
} & {
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
} & {
    readonly unstyled?: boolean | undefined;
    readonly size?: import("@tamagui/core").SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
}, {
    displayName: string | undefined;
    styleable: <CustomProps, X extends React.FunctionComponent<Omit<import("react-native/types").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
    }, "transparent" | "hoverTheme" | "pressTheme" | "focusTheme" | "elevate" | "bordered" | "circular" | "backgrounded" | "radiused" | "padded" | "chromeless"> & {
        readonly backgrounded?: boolean | undefined;
        readonly radiused?: boolean | undefined;
        readonly hoverTheme?: boolean | undefined;
        readonly pressTheme?: boolean | undefined;
        readonly focusTheme?: boolean | undefined;
        readonly circular?: boolean | undefined; /**
         * adjust internal space relative to icon size
         */
        readonly padded?: boolean | undefined;
        readonly elevate?: boolean | undefined;
        /**
         * title
         */
        readonly bordered?: number | boolean | undefined;
        readonly transparent?: boolean | undefined;
        readonly chromeless?: boolean | "all" | undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
    }, "transparent" | "hoverTheme" | "pressTheme" | "focusTheme" | "elevate" | "bordered" | "circular" | "backgrounded" | "radiused" | "padded" | "chromeless"> & {
        readonly backgrounded?: boolean | undefined;
        readonly radiused?: boolean | undefined;
        readonly hoverTheme?: boolean | undefined;
        readonly pressTheme?: boolean | undefined;
        readonly focusTheme?: boolean | undefined;
        readonly circular?: boolean | undefined;
        readonly padded?: boolean | undefined;
        readonly elevate?: boolean | undefined;
        readonly bordered?: number | boolean | undefined;
        readonly transparent?: boolean | undefined;
        readonly chromeless?: boolean | "all" | undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
    }, "transparent" | "hoverTheme" | "pressTheme" | "focusTheme" | "elevate" | "bordered" | "circular" | "backgrounded" | "radiused" | "padded" | "chromeless"> & {
        readonly backgrounded?: boolean | undefined;
        readonly radiused?: boolean | undefined;
        readonly hoverTheme?: boolean | undefined;
        readonly pressTheme?: boolean | undefined;
        readonly focusTheme?: boolean | undefined;
        readonly circular?: boolean | undefined;
        readonly padded?: boolean | undefined;
        readonly elevate?: boolean | undefined;
        readonly bordered?: number | boolean | undefined;
        readonly transparent?: boolean | undefined;
        readonly chromeless?: boolean | "all" | undefined;
    }>>> = React.FunctionComponent<Omit<import("react-native/types").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
    }, "transparent" | "hoverTheme" | "pressTheme" | "focusTheme" | "elevate" | "bordered" | "circular" | "backgrounded" | "radiused" | "padded" | "chromeless"> & {
        readonly backgrounded?: boolean | undefined;
        readonly radiused?: boolean | undefined;
        readonly hoverTheme?: boolean | undefined;
        readonly pressTheme?: boolean | undefined;
        readonly focusTheme?: boolean | undefined;
        readonly circular?: boolean | undefined; /**
         * adjust internal space relative to icon size
         */
        readonly padded?: boolean | undefined;
        readonly elevate?: boolean | undefined;
        /**
         * title
         */
        readonly bordered?: number | boolean | undefined;
        readonly transparent?: boolean | undefined;
        readonly chromeless?: boolean | "all" | undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
    }, "transparent" | "hoverTheme" | "pressTheme" | "focusTheme" | "elevate" | "bordered" | "circular" | "backgrounded" | "radiused" | "padded" | "chromeless"> & {
        readonly backgrounded?: boolean | undefined;
        readonly radiused?: boolean | undefined;
        readonly hoverTheme?: boolean | undefined;
        readonly pressTheme?: boolean | undefined;
        readonly focusTheme?: boolean | undefined;
        readonly circular?: boolean | undefined;
        readonly padded?: boolean | undefined;
        readonly elevate?: boolean | undefined;
        readonly bordered?: number | boolean | undefined;
        readonly transparent?: boolean | undefined;
        readonly chromeless?: boolean | "all" | undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
    }, "transparent" | "hoverTheme" | "pressTheme" | "focusTheme" | "elevate" | "bordered" | "circular" | "backgrounded" | "radiused" | "padded" | "chromeless"> & {
        readonly backgrounded?: boolean | undefined;
        readonly radiused?: boolean | undefined;
        readonly hoverTheme?: boolean | undefined;
        readonly pressTheme?: boolean | undefined;
        readonly focusTheme?: boolean | undefined;
        readonly circular?: boolean | undefined;
        readonly padded?: boolean | undefined;
        readonly elevate?: boolean | undefined;
        readonly bordered?: number | boolean | undefined;
        readonly transparent?: boolean | undefined;
        readonly chromeless?: boolean | "all" | undefined;
    }>>>>(a: X) => import("@tamagui/core").ReactComponentWithRef<CustomProps & Omit<import("react-native/types").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
    }, "transparent" | "hoverTheme" | "pressTheme" | "focusTheme" | "elevate" | "bordered" | "circular" | "backgrounded" | "radiused" | "padded" | "chromeless"> & {
        readonly backgrounded?: boolean | undefined;
        readonly radiused?: boolean | undefined;
        readonly hoverTheme?: boolean | undefined;
        readonly pressTheme?: boolean | undefined;
        readonly focusTheme?: boolean | undefined;
        readonly circular?: boolean | undefined; /**
         * adjust internal space relative to icon size
         */
        readonly padded?: boolean | undefined;
        readonly elevate?: boolean | undefined;
        /**
         * title
         */
        readonly bordered?: number | boolean | undefined;
        readonly transparent?: boolean | undefined;
        readonly chromeless?: boolean | "all" | undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
    }, "transparent" | "hoverTheme" | "pressTheme" | "focusTheme" | "elevate" | "bordered" | "circular" | "backgrounded" | "radiused" | "padded" | "chromeless"> & {
        readonly backgrounded?: boolean | undefined;
        readonly radiused?: boolean | undefined;
        readonly hoverTheme?: boolean | undefined;
        readonly pressTheme?: boolean | undefined;
        readonly focusTheme?: boolean | undefined;
        readonly circular?: boolean | undefined;
        readonly padded?: boolean | undefined;
        readonly elevate?: boolean | undefined;
        readonly bordered?: number | boolean | undefined;
        readonly transparent?: boolean | undefined;
        readonly chromeless?: boolean | "all" | undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
    }, "transparent" | "hoverTheme" | "pressTheme" | "focusTheme" | "elevate" | "bordered" | "circular" | "backgrounded" | "radiused" | "padded" | "chromeless"> & {
        readonly backgrounded?: boolean | undefined;
        readonly radiused?: boolean | undefined;
        readonly hoverTheme?: boolean | undefined;
        readonly pressTheme?: boolean | undefined;
        readonly focusTheme?: boolean | undefined;
        readonly circular?: boolean | undefined;
        readonly padded?: boolean | undefined;
        readonly elevate?: boolean | undefined;
        readonly bordered?: number | boolean | undefined;
        readonly transparent?: boolean | undefined;
        readonly chromeless?: boolean | "all" | undefined;
    }>>, TamaguiElement>;
}>;
export declare const ListItemText: import("@tamagui/core").TamaguiComponent<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: FontSizeTokens | undefined;
}, "unstyled"> & {
    unstyled?: boolean | undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: FontSizeTokens | undefined;
}, "unstyled"> & {
    unstyled?: boolean | undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: FontSizeTokens | undefined;
}, "unstyled"> & {
    unstyled?: boolean | undefined;
}>>, TamaguiElement, import("@tamagui/core").TextPropsBase, {
    readonly size?: FontSizeTokens | undefined;
} & {
    unstyled?: boolean | undefined;
}, {
    displayName: string | undefined;
    styleable: <CustomProps, X extends React.FunctionComponent<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: FontSizeTokens | undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: FontSizeTokens | undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: FontSizeTokens | undefined;
    }>>> = React.FunctionComponent<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: FontSizeTokens | undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: FontSizeTokens | undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: FontSizeTokens | undefined;
    }>>>>(a: X) => import("@tamagui/core").ReactComponentWithRef<CustomProps & Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: FontSizeTokens | undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: FontSizeTokens | undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: FontSizeTokens | undefined;
    }>>, TamaguiElement>;
}>;
export declare const ListItemSubtitle: import("@tamagui/core").TamaguiComponent<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: FontSizeTokens | undefined;
} & {
    unstyled?: boolean | undefined;
}, "unstyled"> & {
    readonly unstyled?: boolean | undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: FontSizeTokens | undefined;
} & {
    unstyled?: boolean | undefined;
}, "unstyled"> & {
    readonly unstyled?: boolean | undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: FontSizeTokens | undefined;
} & {
    unstyled?: boolean | undefined;
}, "unstyled"> & {
    readonly unstyled?: boolean | undefined;
}>>, TamaguiElement, import("@tamagui/core").TextPropsBase, {
    readonly size?: FontSizeTokens | undefined;
} & {
    unstyled?: boolean | undefined;
} & {
    readonly unstyled?: boolean | undefined;
}, {
    displayName: string | undefined;
    styleable: (<CustomProps, X extends React.FunctionComponent<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: FontSizeTokens | undefined;
    }, "unstyled"> & {
        unstyled?: boolean | undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: FontSizeTokens | undefined;
    }, "unstyled"> & {
        unstyled?: boolean | undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: FontSizeTokens | undefined;
    }, "unstyled"> & {
        unstyled?: boolean | undefined;
    }>>> = React.FunctionComponent<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: FontSizeTokens | undefined;
    }, "unstyled"> & {
        unstyled?: boolean | undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: FontSizeTokens | undefined;
    }, "unstyled"> & {
        unstyled?: boolean | undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: FontSizeTokens | undefined;
    }, "unstyled"> & {
        unstyled?: boolean | undefined;
    }>>>>(a: X) => import("@tamagui/core").ReactComponentWithRef<CustomProps & Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: FontSizeTokens | undefined;
    }, "unstyled"> & {
        unstyled?: boolean | undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: FontSizeTokens | undefined;
    }, "unstyled"> & {
        unstyled?: boolean | undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: FontSizeTokens | undefined;
    }, "unstyled"> & {
        unstyled?: boolean | undefined;
    }>>, TamaguiElement>) & (<CustomProps_1, X_1 extends React.FunctionComponent<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: FontSizeTokens | undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: FontSizeTokens | undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: FontSizeTokens | undefined;
    }>>> = React.FunctionComponent<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: FontSizeTokens | undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: FontSizeTokens | undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: FontSizeTokens | undefined;
    }>>>>(a: X_1) => import("@tamagui/core").ReactComponentWithRef<CustomProps_1 & Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: FontSizeTokens | undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: FontSizeTokens | undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: FontSizeTokens | undefined;
    }>>, TamaguiElement>);
}>;
export declare const ListItemTitle: import("@tamagui/core").TamaguiComponent<(Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: FontSizeTokens | undefined;
}, "unstyled"> & {
    unstyled?: boolean | undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: FontSizeTokens | undefined;
}, "unstyled"> & {
    unstyled?: boolean | undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: FontSizeTokens | undefined;
}, "unstyled"> & {
    unstyled?: boolean | undefined;
}>>) | (Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: FontSizeTokens | undefined;
} & {
    unstyled?: boolean | undefined;
}, string | number> & {
    [x: string]: undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: FontSizeTokens | undefined;
} & {
    unstyled?: boolean | undefined;
}, string | number> & {
    [x: string]: undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
    readonly size?: FontSizeTokens | undefined;
} & {
    unstyled?: boolean | undefined;
}, string | number> & {
    [x: string]: undefined;
}>>), TamaguiElement, import("@tamagui/core").TextPropsBase, {
    readonly size?: FontSizeTokens | undefined;
} & {
    unstyled?: boolean | undefined;
} & ({} | {
    [x: string]: undefined;
}), {
    displayName: string | undefined;
    styleable: (<CustomProps, X extends React.FunctionComponent<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: FontSizeTokens | undefined;
    }, "unstyled"> & {
        unstyled?: boolean | undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: FontSizeTokens | undefined;
    }, "unstyled"> & {
        unstyled?: boolean | undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: FontSizeTokens | undefined;
    }, "unstyled"> & {
        unstyled?: boolean | undefined;
    }>>> = React.FunctionComponent<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: FontSizeTokens | undefined;
    }, "unstyled"> & {
        unstyled?: boolean | undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: FontSizeTokens | undefined;
    }, "unstyled"> & {
        unstyled?: boolean | undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: FontSizeTokens | undefined;
    }, "unstyled"> & {
        unstyled?: boolean | undefined;
    }>>>>(a: X) => import("@tamagui/core").ReactComponentWithRef<CustomProps & Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: FontSizeTokens | undefined;
    }, "unstyled"> & {
        unstyled?: boolean | undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: FontSizeTokens | undefined;
    }, "unstyled"> & {
        unstyled?: boolean | undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: FontSizeTokens | undefined;
    }, "unstyled"> & {
        unstyled?: boolean | undefined;
    }>>, TamaguiElement>) & (<CustomProps_1, X_1 extends React.FunctionComponent<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: FontSizeTokens | undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: FontSizeTokens | undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: FontSizeTokens | undefined;
    }>>> = React.FunctionComponent<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: FontSizeTokens | undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: FontSizeTokens | undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: FontSizeTokens | undefined;
    }>>>>(a: X_1) => import("@tamagui/core").ReactComponentWithRef<CustomProps_1 & Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: FontSizeTokens | undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: FontSizeTokens | undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
        readonly size?: FontSizeTokens | undefined;
    }>>, TamaguiElement>);
}>;
export declare const useListItem: (props: ListItemProps, { Text, Subtitle, Title, }?: {
    Title?: any;
    Subtitle?: any;
    Text?: any;
}) => {
    props: {
        children: JSX.Element;
        fontStyle?: "normal" | "italic" | undefined;
        hitSlop?: import("react-native/types").Insets | (import("react-native/types").Insets & number) | undefined;
        id?: string | undefined;
        pointerEvents?: "box-none" | "none" | "box-only" | "auto" | undefined;
        removeClippedSubviews?: boolean | undefined;
        style?: import("react-native/types").StyleProp<import("react-native/types").ViewStyle>;
        testID?: string | undefined;
        nativeID?: string | undefined;
        collapsable?: boolean | undefined;
        needsOffscreenAlphaCompositing?: boolean | undefined;
        renderToHardwareTextureAndroid?: boolean | undefined;
        focusable?: boolean | undefined;
        shouldRasterizeIOS?: boolean | undefined;
        isTVSelectable?: boolean | undefined;
        hasTVPreferredFocus?: boolean | undefined;
        tvParallaxProperties?: import("react-native/types").TVParallaxProperties | undefined;
        tvParallaxShiftDistanceX?: number | undefined;
        tvParallaxShiftDistanceY?: number | undefined;
        tvParallaxTiltAngle?: number | undefined;
        tvParallaxMagnification?: number | undefined;
        onTouchStart?: ((event: import("react-native/types").GestureResponderEvent) => void) | undefined;
        onTouchMove?: ((event: import("react-native/types").GestureResponderEvent) => void) | undefined;
        onTouchEnd?: ((event: import("react-native/types").GestureResponderEvent) => void) | undefined;
        onTouchCancel?: ((event: import("react-native/types").GestureResponderEvent) => void) | undefined;
        onTouchEndCapture?: ((event: import("react-native/types").GestureResponderEvent) => void) | undefined;
        onPointerEnter?: ((event: import("react-native/types").PointerEvent) => void) | undefined;
        onPointerEnterCapture?: ((event: import("react-native/types").PointerEvent) => void) | undefined;
        onPointerLeave?: ((event: import("react-native/types").PointerEvent) => void) | undefined;
        onPointerLeaveCapture?: ((event: import("react-native/types").PointerEvent) => void) | undefined;
        onPointerMove?: ((event: import("react-native/types").PointerEvent) => void) | undefined;
        onPointerMoveCapture?: ((event: import("react-native/types").PointerEvent) => void) | undefined;
        onPointerCancel?: ((event: import("react-native/types").PointerEvent) => void) | undefined;
        onPointerCancelCapture?: ((event: import("react-native/types").PointerEvent) => void) | undefined;
        onPointerDown?: ((event: import("react-native/types").PointerEvent) => void) | undefined;
        onPointerDownCapture?: ((event: import("react-native/types").PointerEvent) => void) | undefined;
        onPointerUp?: ((event: import("react-native/types").PointerEvent) => void) | undefined;
        onPointerUpCapture?: ((event: import("react-native/types").PointerEvent) => void) | undefined;
        accessible?: boolean | undefined;
        accessibilityActions?: readonly Readonly<{
            name: string;
            label?: string | undefined;
        }>[] | undefined;
        accessibilityLabel?: string | undefined;
        'aria-label'?: string | undefined;
        accessibilityRole?: import("react-native/types").AccessibilityRole | undefined;
        accessibilityState?: import("react-native/types").AccessibilityState | undefined;
        'aria-busy'?: boolean | undefined;
        'aria-checked'?: boolean | "mixed" | undefined;
        'aria-disabled'?: boolean | undefined;
        'aria-expanded'?: boolean | undefined;
        'aria-selected'?: boolean | undefined;
        'aria-labelledby'?: string | undefined;
        accessibilityHint?: string | undefined;
        accessibilityValue?: import("react-native/types").AccessibilityValue | undefined;
        'aria-valuemax'?: number | undefined;
        'aria-valuemin'?: number | undefined;
        'aria-valuenow'?: number | undefined;
        'aria-valuetext'?: string | undefined;
        onAccessibilityAction?: ((event: import("react-native/types").AccessibilityActionEvent) => void) | undefined;
        importantForAccessibility?: "auto" | "yes" | "no" | "no-hide-descendants" | undefined;
        'aria-hidden'?: boolean | undefined;
        'aria-live'?: "polite" | "assertive" | "off" | undefined;
        'aria-modal'?: boolean | undefined;
        role?: "none" | "alert" | "alertdialog" | "application" | "article" | "banner" | "button" | "cell" | "checkbox" | "columnheader" | "combobox" | "complementary" | "contentinfo" | "definition" | "dialog" | "directory" | "document" | "feed" | "figure" | "form" | "grid" | "group" | "heading" | "img" | "link" | "list" | "listitem" | "log" | "main" | "marquee" | "math" | "menu" | "menubar" | "menuitem" | "meter" | "navigation" | "note" | "option" | "presentation" | "progressbar" | "radio" | "radiogroup" | "region" | "row" | "rowgroup" | "rowheader" | "scrollbar" | "searchbox" | "separator" | "slider" | "spinbutton" | "status" | "summary" | "switch" | "tab" | "table" | "tablist" | "tabpanel" | "term" | "timer" | "toolbar" | "tooltip" | "tree" | "treegrid" | "treeitem" | undefined;
        accessibilityLiveRegion?: "none" | "polite" | "assertive" | undefined;
        accessibilityLabelledBy?: string | string[] | undefined;
        accessibilityElementsHidden?: boolean | undefined;
        accessibilityViewIsModal?: boolean | undefined;
        onAccessibilityEscape?: (() => void) | undefined;
        onAccessibilityTap?: (() => void) | undefined;
        onMagicTap?: (() => void) | undefined;
        accessibilityIgnoresInvertColors?: boolean | undefined;
        accessibilityLanguage?: string | undefined;
        target?: string | undefined;
        asChild?: boolean | undefined;
        spaceDirection?: import("@tamagui/core").SpaceDirection | undefined;
        separator?: React.ReactNode;
        dangerouslySetInnerHTML?: {
            __html: string;
        } | undefined;
        animation?: import("@tamagui/core").AnimationProp | null | undefined;
        animateOnly?: string[] | undefined;
        debug?: import("@tamagui/core").DebugProp | undefined;
        disabled?: boolean | undefined;
        className?: string | undefined;
        themeShallow?: boolean | undefined;
        tag?: string | undefined;
        componentName?: string | undefined;
        tabIndex?: string | number | undefined;
        forceStyle?: "hover" | "press" | "focus" | undefined;
        onPress?: ((event: import("react-native/types").GestureResponderEvent) => void) | null | undefined;
        onPressIn?: ((event: import("react-native/types").GestureResponderEvent) => void) | null | undefined;
        onPressOut?: ((event: import("react-native/types").GestureResponderEvent) => void) | null | undefined;
        onHoverIn?: React.MouseEventHandler<HTMLDivElement> | undefined;
        onHoverOut?: React.MouseEventHandler<HTMLDivElement> | undefined;
        onMouseEnter?: React.MouseEventHandler<HTMLDivElement> | undefined;
        onMouseLeave?: React.MouseEventHandler<HTMLDivElement> | undefined;
        onMouseDown?: React.MouseEventHandler<HTMLDivElement> | undefined;
        onMouseUp?: React.MouseEventHandler<HTMLDivElement> | undefined;
        onFocus?: ((event: React.FocusEvent<HTMLDivElement, Element>) => void) | undefined;
        onScroll?: ((event: React.UIEvent<HTMLDivElement, UIEvent>) => void) | undefined;
        backgroundColor?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").ColorTokens | import("react-native/types").OpaqueColorValue | undefined;
        borderBottomColor?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").ColorTokens | import("react-native/types").OpaqueColorValue | undefined;
        borderBottomEndRadius?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").RadiusTokens | undefined;
        borderBottomLeftRadius?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").RadiusTokens | undefined;
        borderBottomRightRadius?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").RadiusTokens | undefined;
        borderBottomStartRadius?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").RadiusTokens | undefined;
        borderBottomWidth?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        borderColor?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").ColorTokens | import("react-native/types").OpaqueColorValue | undefined;
        borderEndColor?: import("react-native/types").ColorValue | undefined;
        borderLeftColor?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").ColorTokens | import("react-native/types").OpaqueColorValue | undefined;
        borderLeftWidth?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        borderRadius?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").RadiusTokens | undefined;
        borderRightColor?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").ColorTokens | import("react-native/types").OpaqueColorValue | undefined;
        borderRightWidth?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        borderStartColor?: import("react-native/types").ColorValue | undefined;
        borderStyle?: "solid" | "dotted" | "dashed" | undefined;
        borderTopColor?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").ColorTokens | import("react-native/types").OpaqueColorValue | undefined;
        borderTopEndRadius?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").RadiusTokens | undefined;
        borderTopLeftRadius?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").RadiusTokens | undefined;
        borderTopRightRadius?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").RadiusTokens | undefined;
        borderTopStartRadius?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").RadiusTokens | undefined;
        borderTopWidth?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        borderWidth?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        opacity?: number | undefined;
        alignContent?: "center" | "flex-start" | "flex-end" | "stretch" | "space-between" | "space-around" | undefined;
        alignItems?: import("react-native/types").FlexAlignType | undefined;
        alignSelf?: "auto" | import("react-native/types").FlexAlignType | undefined;
        aspectRatio?: string | number | undefined;
        borderEndWidth?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        borderStartWidth?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        bottom?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        end?: string | number | undefined;
        flex?: number | undefined;
        flexBasis?: string | number | undefined;
        flexDirection?: "row" | "column" | "row-reverse" | "column-reverse" | undefined;
        flexGrow?: number | undefined;
        flexShrink?: number | undefined;
        flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
        height?: import("@tamagui/core").SizeTokens | import("@tamagui/core").ThemeValueFallback | undefined;
        justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | undefined;
        left?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        margin?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        marginBottom?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        marginEnd?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        marginHorizontal?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        marginLeft?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        marginRight?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        marginStart?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        marginTop?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        marginVertical?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        maxHeight?: import("@tamagui/core").SizeTokens | import("@tamagui/core").ThemeValueFallback | undefined;
        maxWidth?: import("@tamagui/core").SizeTokens | import("@tamagui/core").ThemeValueFallback | undefined;
        minHeight?: import("@tamagui/core").SizeTokens | import("@tamagui/core").ThemeValueFallback | undefined;
        minWidth?: import("@tamagui/core").SizeTokens | import("@tamagui/core").ThemeValueFallback | undefined;
        overflow?: "hidden" | "visible" | "scroll" | undefined;
        padding?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        paddingBottom?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        paddingEnd?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        paddingHorizontal?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        paddingLeft?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        paddingRight?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        paddingStart?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        paddingTop?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        paddingVertical?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        position?: "absolute" | "relative" | undefined;
        right?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        start?: string | number | undefined;
        top?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        width?: import("@tamagui/core").SizeTokens | import("@tamagui/core").ThemeValueFallback | undefined;
        zIndex?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").ZIndexTokens | undefined;
        direction?: "inherit" | "ltr" | "rtl" | undefined;
        shadowColor?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").ColorTokens | import("react-native/types").OpaqueColorValue | undefined;
        shadowOffset?: import("@tamagui/core").ThemeValueFallback | {
            width: import("@tamagui/core").SpaceTokens;
            height: import("@tamagui/core").SpaceTokens;
        } | {
            width: number;
            height: number;
        } | undefined;
        shadowOpacity?: number | undefined;
        shadowRadius?: import("@tamagui/core").SizeTokens | import("@tamagui/core").ThemeValueFallback | undefined;
        transform?: (import("react-native/types").PerpectiveTransform | import("react-native/types").RotateTransform | import("react-native/types").RotateXTransform | import("react-native/types").RotateYTransform | import("react-native/types").RotateZTransform | import("react-native/types").ScaleTransform | import("react-native/types").ScaleXTransform | import("react-native/types").ScaleYTransform | import("react-native/types").TranslateXTransform | import("react-native/types").TranslateYTransform | import("react-native/types").SkewXTransform | import("react-native/types").SkewYTransform | import("react-native/types").MatrixTransform)[] | undefined;
        transformMatrix?: number[] | undefined;
        rotation?: number | undefined;
        scaleX?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        scaleY?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        translateX?: number | undefined;
        translateY?: number | undefined;
        x?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        y?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        perspective?: number | undefined;
        scale?: import("@tamagui/core").ThemeValueFallback | import("@tamagui/core").SpaceTokens | undefined;
        skewX?: string | undefined;
        skewY?: string | undefined;
        matrix?: number[] | undefined;
        rotate?: string | undefined;
        rotateY?: string | undefined;
        rotateX?: string | undefined;
        rotateZ?: string | undefined;
        cursor?: import("csstype").Property.Cursor | undefined;
        contain?: import("csstype").Property.Contain | undefined;
        display?: "flex" | "none" | "inherit" | "inline" | "block" | "contents" | "inline-flex" | undefined;
        gap?: import("@tamagui/core").SpaceTokens | undefined;
        columnGap?: import("@tamagui/core").SpaceTokens | undefined;
        rowGap?: import("@tamagui/core").SpaceTokens | undefined;
        userSelect?: import("csstype").Property.UserSelect | undefined;
        outlineColor?: import("csstype").Property.OutlineColor | undefined;
        outlineStyle?: import("csstype").Property.OutlineStyle | undefined;
        outlineOffset?: import("@tamagui/core").SpaceTokens | undefined;
        outlineWidth?: import("@tamagui/core").SpaceTokens | undefined;
        rel?: any;
        download?: any;
        onStartShouldSetResponder?: ((event: import("react-native/types").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponder?: ((event: import("react-native/types").GestureResponderEvent) => boolean) | undefined;
        onResponderEnd?: ((event: import("react-native/types").GestureResponderEvent) => void) | undefined;
        onResponderGrant?: ((event: import("react-native/types").GestureResponderEvent) => void) | undefined;
        onResponderReject?: ((event: import("react-native/types").GestureResponderEvent) => void) | undefined;
        onResponderMove?: ((event: import("react-native/types").GestureResponderEvent) => void) | undefined;
        onResponderRelease?: ((event: import("react-native/types").GestureResponderEvent) => void) | undefined;
        onResponderStart?: ((event: import("react-native/types").GestureResponderEvent) => void) | undefined;
        onResponderTerminationRequest?: ((event: import("react-native/types").GestureResponderEvent) => boolean) | undefined;
        onResponderTerminate?: ((event: import("react-native/types").GestureResponderEvent) => void) | undefined;
        onStartShouldSetResponderCapture?: ((event: import("react-native/types").GestureResponderEvent) => boolean) | undefined;
        onMoveShouldSetResponderCapture?: ((event: import("react-native/types").GestureResponderEvent) => boolean) | undefined;
        dataSet?: Record<string, string | number | null | undefined> | undefined;
        onScrollShouldSetResponder?: unknown;
        onScrollShouldSetResponderCapture?: unknown;
        onSelectionChangeShouldSetResponder?: unknown;
        onSelectionChangeShouldSetResponderCapture?: unknown;
        onLayout?: ((event: import("react-native/types").LayoutChangeEvent) => void) | undefined;
        href?: string | undefined;
        hrefAttrs?: {
            target?: "top" | "_blank" | "_self" | "_top" | "blank" | "self" | undefined;
            rel?: string | undefined;
            download?: boolean | undefined;
        } | undefined;
        elevationAndroid?: string | number | undefined;
        elevation?: import("@tamagui/core").SizeTokens | undefined;
        transparent?: boolean | undefined;
        hoverTheme?: boolean | undefined;
        pressTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        circular?: boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
        fullscreen?: boolean | undefined;
        unstyled?: boolean | undefined;
        size?: import("@tamagui/core").SizeTokens | undefined;
        active?: boolean | undefined;
        hoverStyle?: Partial<Omit<import("react-native/types").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
        } & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        }, "disabled" | "size" | "unstyled" | "active"> & {
            readonly unstyled?: boolean | undefined;
            readonly size?: import("@tamagui/core").SizeTokens | undefined;
            readonly active?: boolean | undefined;
            readonly disabled?: boolean | undefined;
        }> | null | undefined;
        pressStyle?: Partial<Omit<import("react-native/types").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
        } & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        }, "disabled" | "size" | "unstyled" | "active"> & {
            readonly unstyled?: boolean | undefined;
            readonly size?: import("@tamagui/core").SizeTokens | undefined;
            readonly active?: boolean | undefined;
            readonly disabled?: boolean | undefined;
        }> | null | undefined;
        focusStyle?: Partial<Omit<import("react-native/types").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
        } & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        }, "disabled" | "size" | "unstyled" | "active"> & {
            readonly unstyled?: boolean | undefined;
            readonly size?: import("@tamagui/core").SizeTokens | undefined;
            readonly active?: boolean | undefined;
            readonly disabled?: boolean | undefined;
        }> | null | undefined;
        exitStyle?: Partial<Omit<import("react-native/types").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
        } & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        }, "disabled" | "size" | "unstyled" | "active"> & {
            readonly unstyled?: boolean | undefined;
            readonly size?: import("@tamagui/core").SizeTokens | undefined;
            readonly active?: boolean | undefined;
            readonly disabled?: boolean | undefined;
        }> | null | undefined;
        enterStyle?: Partial<Omit<import("react-native/types").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
            readonly fullscreen?: boolean | undefined;
            readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
        } & {
            readonly backgrounded?: boolean | undefined;
            readonly radiused?: boolean | undefined;
            readonly hoverTheme?: boolean | undefined;
            readonly pressTheme?: boolean | undefined;
            readonly focusTheme?: boolean | undefined;
            readonly circular?: boolean | undefined;
            readonly padded?: boolean | undefined;
            readonly elevate?: boolean | undefined;
            readonly bordered?: number | boolean | undefined;
            readonly transparent?: boolean | undefined;
            readonly chromeless?: boolean | "all" | undefined;
        }, "disabled" | "size" | "unstyled" | "active"> & {
            readonly unstyled?: boolean | undefined;
            readonly size?: import("@tamagui/core").SizeTokens | undefined;
            readonly active?: boolean | undefined;
            readonly disabled?: boolean | undefined;
        }> | null | undefined;
        themeInverse?: boolean | undefined;
        themeReset?: boolean | undefined;
        fontFamily: `$${string}` | import("@tamagui/core").ThemeValueFallback | undefined;
    };
};
export declare const listItemStaticConfig: {
    inlineProps: Set<string>;
};
export declare const ListItem: import("@tamagui/core").ReactComponentWithRef<Omit<import("react-native/types").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
} & {
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
}, "disabled" | "size" | "unstyled" | "active"> & {
    readonly unstyled?: boolean | undefined;
    readonly size?: import("@tamagui/core").SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
} & {
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
}, "disabled" | "size" | "unstyled" | "active"> & {
    readonly unstyled?: boolean | undefined;
    readonly size?: import("@tamagui/core").SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").ViewProps, "display" | "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
} & {
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
}, "disabled" | "size" | "unstyled" | "active"> & {
    readonly unstyled?: boolean | undefined;
    readonly size?: import("@tamagui/core").SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
}>>, TamaguiElement> & {
    Text: import("@tamagui/core").TamaguiComponent<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: FontSizeTokens | undefined;
    }, "unstyled"> & {
        unstyled?: boolean | undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: FontSizeTokens | undefined;
    }, "unstyled"> & {
        unstyled?: boolean | undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: FontSizeTokens | undefined;
    }, "unstyled"> & {
        unstyled?: boolean | undefined;
    }>>, TamaguiElement, import("@tamagui/core").TextPropsBase, {
        readonly size?: FontSizeTokens | undefined;
    } & {
        unstyled?: boolean | undefined;
    }, {
        displayName: string | undefined;
        styleable: <CustomProps, X extends React.FunctionComponent<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
            readonly size?: FontSizeTokens | undefined;
        } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
            readonly size?: FontSizeTokens | undefined;
        }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
            readonly size?: FontSizeTokens | undefined;
        }>>> = React.FunctionComponent<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
            readonly size?: FontSizeTokens | undefined;
        } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
            readonly size?: FontSizeTokens | undefined;
        }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
            readonly size?: FontSizeTokens | undefined;
        }>>>>(a: X) => import("@tamagui/core").ReactComponentWithRef<CustomProps & Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
            readonly size?: FontSizeTokens | undefined;
        } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
            readonly size?: FontSizeTokens | undefined;
        }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
            readonly size?: FontSizeTokens | undefined;
        }>>, TamaguiElement>;
    }>;
    Subtitle: import("@tamagui/core").TamaguiComponent<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: FontSizeTokens | undefined;
    } & {
        unstyled?: boolean | undefined;
    }, "unstyled"> & {
        readonly unstyled?: boolean | undefined;
    } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: FontSizeTokens | undefined;
    } & {
        unstyled?: boolean | undefined;
    }, "unstyled"> & {
        readonly unstyled?: boolean | undefined;
    }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
        readonly size?: FontSizeTokens | undefined;
    } & {
        unstyled?: boolean | undefined;
    }, "unstyled"> & {
        readonly unstyled?: boolean | undefined;
    }>>, TamaguiElement, import("@tamagui/core").TextPropsBase, {
        readonly size?: FontSizeTokens | undefined;
    } & {
        unstyled?: boolean | undefined;
    } & {
        readonly unstyled?: boolean | undefined;
    }, {
        displayName: string | undefined;
        styleable: (<CustomProps_1, X_1 extends React.FunctionComponent<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
            readonly size?: FontSizeTokens | undefined;
        }, "unstyled"> & {
            unstyled?: boolean | undefined;
        } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
            readonly size?: FontSizeTokens | undefined;
        }, "unstyled"> & {
            unstyled?: boolean | undefined;
        }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
            readonly size?: FontSizeTokens | undefined;
        }, "unstyled"> & {
            unstyled?: boolean | undefined;
        }>>> = React.FunctionComponent<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
            readonly size?: FontSizeTokens | undefined;
        }, "unstyled"> & {
            unstyled?: boolean | undefined;
        } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
            readonly size?: FontSizeTokens | undefined;
        }, "unstyled"> & {
            unstyled?: boolean | undefined;
        }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
            readonly size?: FontSizeTokens | undefined;
        }, "unstyled"> & {
            unstyled?: boolean | undefined;
        }>>>>(a: X_1) => import("@tamagui/core").ReactComponentWithRef<CustomProps_1 & Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
            readonly size?: FontSizeTokens | undefined;
        }, "unstyled"> & {
            unstyled?: boolean | undefined;
        } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
            readonly size?: FontSizeTokens | undefined;
        }, "unstyled"> & {
            unstyled?: boolean | undefined;
        }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | ("onLayout" | keyof import("react-native/types").GestureResponderHandlers)> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{
            readonly size?: FontSizeTokens | undefined;
        }, "unstyled"> & {
            unstyled?: boolean | undefined;
        }>>, TamaguiElement>) & (<CustomProps, X extends React.FunctionComponent<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
            readonly size?: FontSizeTokens | undefined;
        } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
            readonly size?: FontSizeTokens | undefined;
        }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
            readonly size?: FontSizeTokens | undefined;
        }>>> = React.FunctionComponent<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
            readonly size?: FontSizeTokens | undefined;
        } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
            readonly size?: FontSizeTokens | undefined;
        }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
            readonly size?: FontSizeTokens | undefined;
        }>>>>(a: X) => import("@tamagui/core").ReactComponentWithRef<CustomProps & Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
            readonly size?: FontSizeTokens | undefined;
        } & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
            readonly size?: FontSizeTokens | undefined;
        }>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native/types").TextProps, "children" | "onLayout" | keyof import("react-native/types").GestureResponderHandlers> & import("@tamagui/core").ExtendsBaseTextProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase>> & Omit<{}, "size"> & {
            readonly size?: FontSizeTokens | undefined;
        }>>, TamaguiElement>);
    }>;
};
export {};
//# sourceMappingURL=ListItem.d.ts.map