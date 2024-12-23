import type { GetProps, SizeTokens, TamaguiElement } from '@tamagui/core';
import type { Scope } from '@tamagui/create-context';
import type { ImageProps } from '@tamagui/image';
import * as React from 'react';
declare const createAvatarScope: import("@tamagui/create-context").CreateScope;
type ImageLoadingStatus = 'idle' | 'loading' | 'loaded' | 'error';
type AvatarImageProps = Partial<ImageProps> & {
    onLoadingStatusChange?: (status: ImageLoadingStatus) => void;
};
declare const AvatarImage: React.ForwardRefExoticComponent<Partial<ImageProps> & {
    onLoadingStatusChange?: (status: ImageLoadingStatus) => void;
} & React.RefAttributes<TamaguiElement>>;
export declare const AvatarFallbackFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    elevation?: number | SizeTokens | undefined;
    fullscreen?: boolean | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
type AvatarFallbackExtraProps = {
    delayMs?: number;
};
type AvatarFallbackProps = GetProps<typeof AvatarFallbackFrame> & AvatarFallbackExtraProps;
declare const AvatarFallback: import("@tamagui/core").TamaguiComponent<Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    elevation?: number | SizeTokens | undefined;
    fullscreen?: boolean | undefined;
}>, "delayMs" | "__scopeAvatar"> & AvatarFallbackExtraProps & {
    __scopeAvatar?: Scope;
}, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & AvatarFallbackExtraProps & {
    __scopeAvatar?: Scope;
}, import("@tamagui/core").StackStyleBase, {
    elevation?: number | SizeTokens | undefined;
    fullscreen?: boolean | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const AvatarFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    elevation?: number | import("@tamagui/web").SizeTokens | undefined;
    size?: number | import("@tamagui/web").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
type AvatarProps = GetProps<typeof AvatarFrame>;
declare const Avatar: React.ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "size" | "elevation" | keyof import("@tamagui/core").StackStyleBase | "fullscreen" | "circular"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
    elevation?: number | import("@tamagui/web").SizeTokens | undefined;
    size?: number | import("@tamagui/web").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
} & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
    elevation?: number | import("@tamagui/web").SizeTokens | undefined;
    size?: number | import("@tamagui/web").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
} & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {
    elevation?: number | import("@tamagui/web").SizeTokens | undefined;
    size?: number | import("@tamagui/web").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
}>> & React.RefAttributes<TamaguiElement>> & {
    Image: React.ForwardRefExoticComponent<Partial<ImageProps> & {
        onLoadingStatusChange?: (status: ImageLoadingStatus) => void;
    } & React.RefAttributes<TamaguiElement>>;
    Fallback: import("@tamagui/core").TamaguiComponent<Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
        elevation?: number | SizeTokens | undefined;
        fullscreen?: boolean | undefined;
    }>, "delayMs" | "__scopeAvatar"> & AvatarFallbackExtraProps & {
        __scopeAvatar?: Scope;
    }, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & AvatarFallbackExtraProps & {
        __scopeAvatar?: Scope;
    }, import("@tamagui/core").StackStyleBase, {
        elevation?: number | SizeTokens | undefined;
        fullscreen?: boolean | undefined;
    }, import("@tamagui/core").StaticConfigPublic>;
};
export { createAvatarScope, Avatar, AvatarImage, AvatarFallback };
export type { AvatarProps, AvatarImageProps, AvatarFallbackProps };
//# sourceMappingURL=Avatar.d.ts.map