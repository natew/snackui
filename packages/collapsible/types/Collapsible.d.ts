import { AnimatePresenceProps } from '@tamagui/animate-presence/types/types';
import { StackProps, TamaguiElement } from '@tamagui/core';
import { ThemeableStackProps } from '@tamagui/stacks';
import * as React from 'react';
import type { ReactNode } from 'react';
declare const createCollapsibleScope: import("tamagui").CreateScope;
interface CollapsibleProps extends StackProps {
    defaultOpen?: boolean;
    open?: boolean;
    disabled?: boolean;
    onOpenChange?(open: boolean): void;
}
interface CollapsibleTriggerProps extends StackProps {
    children: ReactNode | ((props: {
        open: boolean;
    }) => ReactNode);
    unstyled?: boolean;
}
declare const CollapsibleTrigger: React.ForwardRefExoticComponent<CollapsibleTriggerProps & React.RefAttributes<TamaguiElement>>;
interface CollapsibleContentProps extends AnimatePresenceProps, ThemeableStackProps {
    /**
     * Used to force mounting when more control is needed. Useful when
     * controlling animation with React animation libraries.
     */
    forceMount?: true;
    unstyled?: boolean;
}
declare const CollapsibleContent: React.ForwardRefExoticComponent<CollapsibleContentProps & React.RefAttributes<TamaguiElement>>;
declare const Collapsible: React.ForwardRefExoticComponent<CollapsibleProps & React.RefAttributes<TamaguiElement>> & {
    Trigger: React.ForwardRefExoticComponent<CollapsibleTriggerProps & React.RefAttributes<TamaguiElement>>;
    Content: React.ForwardRefExoticComponent<CollapsibleContentProps & React.RefAttributes<TamaguiElement>>;
};
export { Collapsible, CollapsibleContent, CollapsibleTrigger, createCollapsibleScope };
export type { CollapsibleProps, CollapsibleContentProps, CollapsibleTriggerProps };
//# sourceMappingURL=Collapsible.d.ts.map