/// <reference types="react" />
import type { GetProps, SizeTokens } from '@tamagui/core';
import { RadioGroupFrame, RadioGroupIndicatorFrame, RadioGroupItemFrame } from './RadioGroup';
type RadioIndicatorProps = GetProps<typeof RadioGroupIndicatorFrame> & {
    forceMount?: boolean;
    unstyled?: boolean;
};
type RadioGroupItemProps = GetProps<typeof RadioGroupItemFrame> & {
    value: string;
    id?: string;
    labelledBy?: string;
    disabled?: boolean;
};
type RadioGroupProps = GetProps<typeof RadioGroupFrame> & {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    required?: boolean;
    disabled?: boolean;
    name?: string;
    native?: boolean;
    accentColor?: string;
};
type RadioGroupComponent = (props: RadioGroupProps) => any;
type RadioGroupIndicatorComponent = (props: RadioIndicatorProps) => any;
type RadioGroupItemComponent = (props: RadioGroupItemProps) => any;
export declare function createRadioGroup<F extends RadioGroupComponent, D extends RadioGroupIndicatorComponent, I extends RadioGroupItemComponent>(createProps: {
    disableActiveTheme?: boolean;
    Frame?: F;
    Indicator?: D;
    Item?: I;
}): import("react").ForwardRefExoticComponent<Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    pressTheme?: boolean | undefined;
    elevation?: number | SizeTokens | undefined;
    transparent?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    inset?: number | SizeTokens | {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    } | undefined;
    hoverTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
    orientation?: "horizontal" | "vertical" | undefined;
}>, "native" | "name" | `$${string}` | `$${number}` | import("@tamagui/core").GroupMediaKeys | `$theme-${string}` | `$theme-${number}` | "pressTheme" | keyof import("@tamagui/core").RNTamaguiViewNonStyleProps | "elevation" | keyof import("@tamagui/core").StackStyleBase | "transparent" | "fullscreen" | "circular" | "inset" | "hoverTheme" | "focusTheme" | "elevate" | "bordered" | "backgrounded" | "radiused" | "padded" | "chromeless" | "value" | "required" | "defaultValue" | "accentColor" | "orientation" | "onValueChange" | keyof import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
    pressTheme?: boolean | undefined;
    elevation?: number | SizeTokens | undefined;
    transparent?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    inset?: number | SizeTokens | {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    } | undefined;
    hoverTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
    orientation?: "horizontal" | "vertical" | undefined;
} & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>>> & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "pressTheme" | "elevation" | keyof import("@tamagui/core").StackStyleBase | "transparent" | "fullscreen" | "circular" | "inset" | "hoverTheme" | "focusTheme" | "elevate" | "bordered" | "backgrounded" | "radiused" | "padded" | "chromeless" | "orientation"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
    pressTheme?: boolean | undefined;
    elevation?: number | SizeTokens | undefined;
    transparent?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    inset?: number | SizeTokens | {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    } | undefined;
    hoverTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
    orientation?: "horizontal" | "vertical" | undefined;
} & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
    pressTheme?: boolean | undefined;
    elevation?: number | SizeTokens | undefined;
    transparent?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    inset?: number | SizeTokens | {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    } | undefined;
    hoverTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
    orientation?: "horizontal" | "vertical" | undefined;
} & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {
    pressTheme?: boolean | undefined;
    elevation?: number | SizeTokens | undefined;
    transparent?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    inset?: number | SizeTokens | {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    } | undefined;
    hoverTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
    orientation?: "horizontal" | "vertical" | undefined;
}>> & {
    value?: string | undefined;
    defaultValue?: string | undefined;
    onValueChange?: ((value: string) => void) | undefined;
    required?: boolean | undefined;
    disabled?: boolean | undefined;
    name?: string | undefined;
    native?: boolean | undefined;
    accentColor?: string | undefined;
} & import("react").RefAttributes<import("@tamagui/core").TamaguiElement>> & import("@tamagui/core").StaticComponentObject<Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    pressTheme?: boolean | undefined;
    elevation?: number | SizeTokens | undefined;
    transparent?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    inset?: number | SizeTokens | {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    } | undefined;
    hoverTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
    orientation?: "horizontal" | "vertical" | undefined;
}>, "native" | "name" | `$${string}` | `$${number}` | import("@tamagui/core").GroupMediaKeys | `$theme-${string}` | `$theme-${number}` | "pressTheme" | keyof import("@tamagui/core").RNTamaguiViewNonStyleProps | "elevation" | keyof import("@tamagui/core").StackStyleBase | "transparent" | "fullscreen" | "circular" | "inset" | "hoverTheme" | "focusTheme" | "elevate" | "bordered" | "backgrounded" | "radiused" | "padded" | "chromeless" | "value" | "required" | "defaultValue" | "accentColor" | "orientation" | "onValueChange" | keyof import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
    pressTheme?: boolean | undefined;
    elevation?: number | SizeTokens | undefined;
    transparent?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    inset?: number | SizeTokens | {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    } | undefined;
    hoverTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
    orientation?: "horizontal" | "vertical" | undefined;
} & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>>> & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "pressTheme" | "elevation" | keyof import("@tamagui/core").StackStyleBase | "transparent" | "fullscreen" | "circular" | "inset" | "hoverTheme" | "focusTheme" | "elevate" | "bordered" | "backgrounded" | "radiused" | "padded" | "chromeless" | "orientation"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
    pressTheme?: boolean | undefined;
    elevation?: number | SizeTokens | undefined;
    transparent?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    inset?: number | SizeTokens | {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    } | undefined;
    hoverTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
    orientation?: "horizontal" | "vertical" | undefined;
} & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
    pressTheme?: boolean | undefined;
    elevation?: number | SizeTokens | undefined;
    transparent?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    inset?: number | SizeTokens | {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    } | undefined;
    hoverTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
    orientation?: "horizontal" | "vertical" | undefined;
} & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {
    pressTheme?: boolean | undefined;
    elevation?: number | SizeTokens | undefined;
    transparent?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    inset?: number | SizeTokens | {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    } | undefined;
    hoverTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
    orientation?: "horizontal" | "vertical" | undefined;
}>> & {
    value?: string | undefined;
    defaultValue?: string | undefined;
    onValueChange?: ((value: string) => void) | undefined;
    required?: boolean | undefined;
    disabled?: boolean | undefined;
    name?: string | undefined;
    native?: boolean | undefined;
    accentColor?: string | undefined;
}, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "pressTheme" | "elevation" | keyof import("@tamagui/core").StackStyleBase | "transparent" | "fullscreen" | "circular" | "inset" | "hoverTheme" | "focusTheme" | "elevate" | "bordered" | "backgrounded" | "radiused" | "padded" | "chromeless" | "orientation"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
    pressTheme?: boolean | undefined;
    elevation?: number | SizeTokens | undefined;
    transparent?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    inset?: number | SizeTokens | {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    } | undefined;
    hoverTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
    orientation?: "horizontal" | "vertical" | undefined;
} & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
    pressTheme?: boolean | undefined;
    elevation?: number | SizeTokens | undefined;
    transparent?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    inset?: number | SizeTokens | {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    } | undefined;
    hoverTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
    orientation?: "horizontal" | "vertical" | undefined;
} & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {
    pressTheme?: boolean | undefined;
    elevation?: number | SizeTokens | undefined;
    transparent?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    inset?: number | SizeTokens | {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    } | undefined;
    hoverTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
    orientation?: "horizontal" | "vertical" | undefined;
}>> & {
    value?: string | undefined;
    defaultValue?: string | undefined;
    onValueChange?: ((value: string) => void) | undefined;
    required?: boolean | undefined;
    disabled?: boolean | undefined;
    name?: string | undefined;
    native?: boolean | undefined;
    accentColor?: string | undefined;
}, import("@tamagui/core").StackStyleBase, {
    pressTheme?: boolean | undefined;
    elevation?: number | SizeTokens | undefined;
    transparent?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    inset?: number | SizeTokens | {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    } | undefined;
    hoverTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
    orientation?: "horizontal" | "vertical" | undefined;
}, import("@tamagui/core").StaticConfigPublic> & Omit<import("@tamagui/core").StaticConfigPublic, "staticConfig" | "extractable" | "styleable"> & {
    __tama: [Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
        pressTheme?: boolean | undefined;
        elevation?: number | SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
        orientation?: "horizontal" | "vertical" | undefined;
    }>, "native" | "name" | `$${string}` | `$${number}` | import("@tamagui/core").GroupMediaKeys | `$theme-${string}` | `$theme-${number}` | "pressTheme" | keyof import("@tamagui/core").RNTamaguiViewNonStyleProps | "elevation" | keyof import("@tamagui/core").StackStyleBase | "transparent" | "fullscreen" | "circular" | "inset" | "hoverTheme" | "focusTheme" | "elevate" | "bordered" | "backgrounded" | "radiused" | "padded" | "chromeless" | "value" | "required" | "defaultValue" | "accentColor" | "orientation" | "onValueChange" | keyof import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        pressTheme?: boolean | undefined;
        elevation?: number | SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
        orientation?: "horizontal" | "vertical" | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>>> & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "pressTheme" | "elevation" | keyof import("@tamagui/core").StackStyleBase | "transparent" | "fullscreen" | "circular" | "inset" | "hoverTheme" | "focusTheme" | "elevate" | "bordered" | "backgrounded" | "radiused" | "padded" | "chromeless" | "orientation"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        pressTheme?: boolean | undefined;
        elevation?: number | SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
        orientation?: "horizontal" | "vertical" | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        pressTheme?: boolean | undefined;
        elevation?: number | SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
        orientation?: "horizontal" | "vertical" | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {
        pressTheme?: boolean | undefined;
        elevation?: number | SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
        orientation?: "horizontal" | "vertical" | undefined;
    }>> & {
        value?: string | undefined;
        defaultValue?: string | undefined;
        onValueChange?: ((value: string) => void) | undefined;
        required?: boolean | undefined;
        disabled?: boolean | undefined;
        name?: string | undefined;
        native?: boolean | undefined;
        accentColor?: string | undefined;
    }, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "pressTheme" | "elevation" | keyof import("@tamagui/core").StackStyleBase | "transparent" | "fullscreen" | "circular" | "inset" | "hoverTheme" | "focusTheme" | "elevate" | "bordered" | "backgrounded" | "radiused" | "padded" | "chromeless" | "orientation"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        pressTheme?: boolean | undefined;
        elevation?: number | SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
        orientation?: "horizontal" | "vertical" | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        pressTheme?: boolean | undefined;
        elevation?: number | SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
        orientation?: "horizontal" | "vertical" | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {
        pressTheme?: boolean | undefined;
        elevation?: number | SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
        orientation?: "horizontal" | "vertical" | undefined;
    }>> & {
        value?: string | undefined;
        defaultValue?: string | undefined;
        onValueChange?: ((value: string) => void) | undefined;
        required?: boolean | undefined;
        disabled?: boolean | undefined;
        name?: string | undefined;
        native?: boolean | undefined;
        accentColor?: string | undefined;
    }, import("@tamagui/core").StackStyleBase, {
        pressTheme?: boolean | undefined;
        elevation?: number | SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
        orientation?: "horizontal" | "vertical" | undefined;
    }, import("@tamagui/core").StaticConfigPublic];
} & {
    Item: import("@tamagui/core").TamaguiComponent<Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
        unstyled?: boolean | undefined;
        pressTheme?: boolean | undefined;
        size?: SizeTokens | undefined;
        disabled?: boolean | undefined;
        elevation?: number | SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    }>, "theme" | "debug" | `$${string}` | `$${number}` | import("@tamagui/core").GroupMediaKeys | `$theme-${string}` | `$theme-${number}` | "unstyled" | "pressTheme" | "size" | "hitSlop" | "children" | "onStartShouldSetResponder" | "dataSet" | "onScrollShouldSetResponder" | "onScrollShouldSetResponderCapture" | "onSelectionChangeShouldSetResponder" | "onSelectionChangeShouldSetResponderCapture" | "onLayout" | "href" | "hrefAttrs" | "elevationAndroid" | "rel" | "download" | "focusable" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "style" | "id" | "removeClippedSubviews" | "testID" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "target" | "asChild" | "dangerouslySetInnerHTML" | "disabled" | "className" | "themeShallow" | "themeInverse" | "tag" | "group" | "untilMeasured" | "componentName" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "elevation" | keyof import("@tamagui/core").StackStyleBase | "transparent" | "fullscreen" | "circular" | "inset" | "hoverTheme" | "focusTheme" | "elevate" | "bordered" | "backgrounded" | "radiused" | "padded" | "chromeless" | "value" | "labelledBy" | keyof import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        unstyled?: boolean | undefined;
        pressTheme?: boolean | undefined;
        size?: SizeTokens | undefined;
        disabled?: boolean | undefined;
        elevation?: number | SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>>> & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "unstyled" | "pressTheme" | "size" | "disabled" | "elevation" | keyof import("@tamagui/core").StackStyleBase | "transparent" | "fullscreen" | "circular" | "inset" | "hoverTheme" | "focusTheme" | "elevate" | "bordered" | "backgrounded" | "radiused" | "padded" | "chromeless"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        unstyled?: boolean | undefined;
        pressTheme?: boolean | undefined;
        size?: SizeTokens | undefined;
        disabled?: boolean | undefined;
        elevation?: number | SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        unstyled?: boolean | undefined;
        pressTheme?: boolean | undefined;
        size?: SizeTokens | undefined;
        disabled?: boolean | undefined;
        elevation?: number | SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {
        unstyled?: boolean | undefined;
        pressTheme?: boolean | undefined;
        size?: SizeTokens | undefined;
        disabled?: boolean | undefined;
        elevation?: number | SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    }>> & {
        value: string;
        id?: string | undefined;
        labelledBy?: string | undefined;
        disabled?: boolean | undefined;
    }, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "unstyled" | "pressTheme" | "size" | "disabled" | "elevation" | keyof import("@tamagui/core").StackStyleBase | "transparent" | "fullscreen" | "circular" | "inset" | "hoverTheme" | "focusTheme" | "elevate" | "bordered" | "backgrounded" | "radiused" | "padded" | "chromeless"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        unstyled?: boolean | undefined;
        pressTheme?: boolean | undefined;
        size?: SizeTokens | undefined;
        disabled?: boolean | undefined;
        elevation?: number | SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        unstyled?: boolean | undefined;
        pressTheme?: boolean | undefined;
        size?: SizeTokens | undefined;
        disabled?: boolean | undefined;
        elevation?: number | SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {
        unstyled?: boolean | undefined;
        pressTheme?: boolean | undefined;
        size?: SizeTokens | undefined;
        disabled?: boolean | undefined;
        elevation?: number | SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    }>> & {
        value: string;
        id?: string | undefined;
        labelledBy?: string | undefined;
        disabled?: boolean | undefined;
    }, import("@tamagui/core").StackStyleBase, {
        unstyled?: boolean | undefined;
        pressTheme?: boolean | undefined;
        size?: SizeTokens | undefined;
        disabled?: boolean | undefined;
        elevation?: number | SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    }, import("@tamagui/core").StaticConfigPublic>;
    Indicator: import("@tamagui/core").TamaguiComponent<Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
        unstyled?: boolean | undefined;
        pressTheme?: boolean | undefined;
        elevation?: number | SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    }>, `$${string}` | `$${number}` | import("@tamagui/core").GroupMediaKeys | `$theme-${string}` | `$theme-${number}` | "unstyled" | "pressTheme" | keyof import("@tamagui/core").RNTamaguiViewNonStyleProps | "elevation" | keyof import("@tamagui/core").StackStyleBase | "transparent" | "fullscreen" | "circular" | "inset" | "hoverTheme" | "focusTheme" | "elevate" | "bordered" | "backgrounded" | "radiused" | "padded" | "chromeless" | "forceMount" | keyof import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        unstyled?: boolean | undefined;
        pressTheme?: boolean | undefined;
        elevation?: number | SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>>> & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "unstyled" | "pressTheme" | "elevation" | keyof import("@tamagui/core").StackStyleBase | "transparent" | "fullscreen" | "circular" | "inset" | "hoverTheme" | "focusTheme" | "elevate" | "bordered" | "backgrounded" | "radiused" | "padded" | "chromeless"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        unstyled?: boolean | undefined;
        pressTheme?: boolean | undefined;
        elevation?: number | SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        unstyled?: boolean | undefined;
        pressTheme?: boolean | undefined;
        elevation?: number | SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {
        unstyled?: boolean | undefined;
        pressTheme?: boolean | undefined;
        elevation?: number | SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    }>> & {
        forceMount?: boolean | undefined;
        unstyled?: boolean | undefined;
    }, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "unstyled" | "pressTheme" | "elevation" | keyof import("@tamagui/core").StackStyleBase | "transparent" | "fullscreen" | "circular" | "inset" | "hoverTheme" | "focusTheme" | "elevate" | "bordered" | "backgrounded" | "radiused" | "padded" | "chromeless"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        unstyled?: boolean | undefined;
        pressTheme?: boolean | undefined;
        elevation?: number | SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        unstyled?: boolean | undefined;
        pressTheme?: boolean | undefined;
        elevation?: number | SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {
        unstyled?: boolean | undefined;
        pressTheme?: boolean | undefined;
        elevation?: number | SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    }>> & {
        forceMount?: boolean | undefined;
        unstyled?: boolean | undefined;
    }, import("@tamagui/core").StackStyleBase, {
        unstyled?: boolean | undefined;
        pressTheme?: boolean | undefined;
        elevation?: number | SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        inset?: number | SizeTokens | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        hoverTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    }, import("@tamagui/core").StaticConfigPublic>;
};
export {};
//# sourceMappingURL=createRadioGroup.d.ts.map