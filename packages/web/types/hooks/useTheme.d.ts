import { Variable } from '../createVariable';
import { ThemeManager, ThemeManagerState } from '../helpers/ThemeManager';
import type { DebugProp, ThemeParsed, ThemeProps, UseThemeWithStateProps, VariableVal, VariableValGeneric } from '../types';
export type ChangedThemeResponse = {
    state?: ThemeManagerState;
    themeManager?: ThemeManager | null;
    isNewTheme: boolean;
    mounted?: boolean;
};
export type ThemeGettable<Val> = Val & {
    get: () => string | (Val extends Variable<infer X> ? X extends VariableValGeneric ? any : Exclude<X, Variable> : Val extends VariableVal ? string | number : unknown);
};
export type UseThemeResult = {
    [Key in keyof ThemeParsed]: ThemeGettable<ThemeParsed[Key]>;
};
export declare const useTheme: (props?: ThemeProps) => UseThemeResult;
export declare const useThemeWithState: (props: UseThemeWithStateProps) => [ChangedThemeResponse, ThemeParsed];
export declare function getThemeProxied({ theme, name }: ThemeManagerState, deopt?: boolean, themeManager?: ThemeManager, keys?: string[], debug?: DebugProp): UseThemeResult;
export declare const activeThemeManagers: Set<ThemeManager>;
export declare const useChangeThemeEffect: (props: UseThemeWithStateProps, isRoot?: boolean, keys?: string[], shouldUpdate?: () => boolean | undefined) => ChangedThemeResponse;
//# sourceMappingURL=useTheme.d.ts.map