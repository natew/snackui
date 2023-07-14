import { Stack } from '@tamagui/core';
import * as React from 'react';
type PrimitiveDivProps = React.ComponentPropsWithoutRef<typeof Stack>;
interface RovingFocusGroupImplProps extends Omit<PrimitiveDivProps, 'dir'>, RovingFocusGroupOptions {
    currentTabStopId?: string | null;
    defaultCurrentTabStopId?: string;
    onCurrentTabStopIdChange?: (tabStopId: string | null) => void;
    onEntryFocus?: (event: Event) => void;
}
type PrimitiveSpanProps = React.ComponentPropsWithoutRef<typeof Stack>;
interface RovingFocusItemProps extends PrimitiveSpanProps {
    tabStopId?: string;
    focusable?: boolean;
    active?: boolean;
}
declare const createRovingFocusGroupScope: import("@tamagui/create-context").CreateScope;
type Orientation = React.AriaAttributes['aria-orientation'];
type Direction = 'ltr' | 'rtl';
interface RovingFocusGroupOptions {
    /**
     * The orientation of the group.
     * Mainly so arrow navigation is done accordingly (left & right vs. up & down)
     */
    orientation?: Orientation;
    /**
     * The direction of navigation between items.
     */
    dir?: Direction;
    /**
     * Whether keyboard navigation should loop around
     * @defaultValue false
     */
    loop?: boolean;
}
interface RovingFocusGroupProps extends RovingFocusGroupImplProps {
}
declare const RovingFocusGroup: React.ForwardRefExoticComponent<RovingFocusGroupProps & React.RefAttributes<import("@tamagui/core").TamaguiElement>> & {
    Item: React.ForwardRefExoticComponent<RovingFocusItemProps & React.RefAttributes<import("@tamagui/core").TamaguiElement>>;
};
export { createRovingFocusGroupScope, RovingFocusGroup };
export type { RovingFocusGroupProps, RovingFocusItemProps };
//# sourceMappingURL=RovingFocusGroup.d.ts.map