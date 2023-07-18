import React from 'react';
import { ChangedThemeResponse } from '../hooks/useTheme';
import type { DebugProp, ThemeProps } from '../types';
export declare const Theme: React.ForwardRefExoticComponent<ThemeProps & React.RefAttributes<unknown>>;
export declare function useThemedChildren(themeState: ChangedThemeResponse, children: any, props: {
    forceClassName?: boolean;
    shallow?: boolean;
    passPropsToChildren?: boolean;
    debug?: DebugProp;
}, isRoot?: boolean): any;
export declare function wrapThemeElements({ children, themeState, }: {
    children?: React.ReactNode;
    themeState: ChangedThemeResponse;
}): JSX.Element;
//# sourceMappingURL=Theme.d.ts.map