import React from 'react';
import { SpaceDirection, SpaceTokens, SpacerProps, StaticConfig, StaticConfigParsed, StylableComponent, TamaguiComponent, TamaguiElement } from './types';
export declare const mouseUps: Set<Function>;
export declare function createComponent<ComponentPropTypes extends Object = {}, Ref = TamaguiElement, BaseProps = never>(configIn: Partial<StaticConfig> | StaticConfigParsed, ParentComponent?: StylableComponent): TamaguiComponent<ComponentPropTypes, Ref, BaseProps, {}>;
export declare const Unspaced: {
    (props: {
        children?: any;
    }): any;
    isUnspaced: boolean;
};
export declare const Spacer: TamaguiComponent<SpacerProps, TamaguiElement, never, {}>;
export declare type SpacedChildrenProps = {
    isZStack?: boolean;
    children?: React.ReactNode;
    space?: SpaceTokens | number | null;
    spaceFlex?: boolean | number;
    direction?: SpaceDirection;
    separator?: React.ReactNode;
};
export declare function spacedChildren({ isZStack, children, space, direction, spaceFlex, separator, }: SpacedChildrenProps): React.ReactNode;
export declare function processIDRefList(idRefList: string | Array<string>): string;
export declare const accessibilityRoleToWebRole: {
    adjustable: string;
    button: string;
    header: string;
    image: string;
    imagebutton: null;
    keyboardkey: null;
    label: null;
    link: string;
    none: string;
    search: string;
    summary: string;
    text: null;
};
//# sourceMappingURL=createComponent.d.ts.map