import type { ListItemProps } from '@tamagui/list-item';
import * as React from 'react';
type SelectItemContextValue = {
    value: string;
    textId: string;
    isSelected: boolean;
};
export declare const SelectItemContextProvider: {
    (props: SelectItemContextValue & {
        scope: import("@tamagui/create-context").Scope<SelectItemContextValue>;
        children: React.ReactNode;
    }): JSX.Element;
    displayName: string;
}, useSelectItemContext: (consumerName: string, scope: import("@tamagui/create-context").Scope<SelectItemContextValue | undefined>, options?: {
    warn?: boolean | undefined;
    fallback?: Partial<SelectItemContextValue> | undefined;
} | undefined) => SelectItemContextValue;
export interface SelectItemExtraProps {
    value: string;
    index: number;
    disabled?: boolean;
    textValue?: string;
}
export interface SelectItemProps extends Omit<ListItemProps, keyof SelectItemExtraProps>, SelectItemExtraProps {
}
export declare const SelectItem: import("@tamagui/web").TamaguiComponent<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    unstyled?: boolean | undefined;
    size?: import("@tamagui/web").SizeTokens | undefined;
    disabled?: boolean | undefined;
    elevation?: number | import("@tamagui/web").SizeTokens | undefined;
    transparent?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    inset?: number | import("@tamagui/web").SizeTokens | {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    } | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
    active?: boolean | undefined;
}>, keyof SelectItemExtraProps> & SelectItemExtraProps, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & SelectItemExtraProps, import("@tamagui/web").StackStyleBase, {
    unstyled?: boolean | undefined;
    size?: import("@tamagui/web").SizeTokens | undefined;
    disabled?: boolean | undefined;
    elevation?: number | import("@tamagui/web").SizeTokens | undefined;
    transparent?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    inset?: number | import("@tamagui/web").SizeTokens | {
        top?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    } | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
    active?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export {};
//# sourceMappingURL=SelectItem.d.ts.map