import React from 'react';
import type { ComponentContextI, DebugProp, SpaceDirection, SpaceValue, SpacerProps, SpacerStyleProps, StackNonStyleProps, StaticConfig, TamaguiComponent, TamaguiElement } from './types';
import type { TamaguiComponentState } from './interfaces/TamaguiComponentState';
export declare const mouseUps: Set<Function>;
export declare function createComponent<ComponentPropTypes extends Record<string, any> = {}, Ref extends TamaguiElement = TamaguiElement, BaseProps = never, BaseStyles extends Object = never>(staticConfig: StaticConfig): TamaguiComponent<ComponentPropTypes, Ref, BaseProps, BaseStyles, {}>;
export declare function Unspaced(props: {
    children?: any;
}): any;
export declare namespace Unspaced {
    var isUnspaced: boolean;
}
export declare const Spacer: TamaguiComponent<SpacerProps, TamaguiElement, StackNonStyleProps, SpacerStyleProps, {}>;
export type SpacedChildrenProps = {
    isZStack?: boolean;
    children?: React.ReactNode;
    space?: SpaceValue;
    spaceFlex?: boolean | number;
    direction?: SpaceDirection | 'unset';
    separator?: React.ReactNode;
    debug?: DebugProp;
};
export declare function spacedChildren(props: SpacedChildrenProps): React.ReactNode;
export declare const useSubscribeToGroup: ({ isDisabled, shouldEnter, setStateShallow, pseudoGroups, mediaGroups, componentContext, state, unPress, }: {
    isDisabled?: boolean | undefined;
    shouldEnter: boolean | string;
    setStateShallow: (next?: Partial<TamaguiComponentState> | undefined) => void;
    pseudoGroups?: Set<string> | undefined;
    mediaGroups?: Set<string> | undefined;
    componentContext: ComponentContextI;
    state: TamaguiComponentState;
    unPress?: Function | undefined;
}) => void;
//# sourceMappingURL=createComponent.d.ts.map