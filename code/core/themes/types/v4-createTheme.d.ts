import { type ThemeBuilder } from '@tamagui/theme-builder';
import type { BuildPalettes, BuildTemplates, BuildThemeSuiteProps } from './types';
import { defaultTemplates } from './v4-defaultTemplates';
export { getThemeSuitePalettes, PALETTE_BACKGROUND_OFFSET } from './getThemeSuitePalettes';
export type * from './types';
export { defaultTemplates } from './v4-defaultTemplates';
type ExtraThemeValues = Record<string, string>;
type ExtraThemeValuesByScheme<Values extends ExtraThemeValues = ExtraThemeValues> = {
    dark: Values;
    light: Values;
};
type SimpleThemeDefinition = {
    palette?: Palette;
    template?: string;
};
type BaseThemeDefinition<Extra extends ExtraThemeValuesByScheme> = {
    palette: Palette;
    template?: string;
    extra?: Extra;
};
type SimpleThemesDefinition = Record<string, SimpleThemeDefinition>;
type SimplePaletteDefinitions = Record<string, string[]>;
type SinglePalette = string[];
type SchemePalette = {
    light: SinglePalette;
    dark: SinglePalette;
};
type Palette = SinglePalette | SchemePalette;
export type CreateThemesProps<Extra extends ExtraThemeValuesByScheme = ExtraThemeValuesByScheme, ChildrenThemes extends SimpleThemesDefinition = SimpleThemesDefinition, GrandChildrenThemes extends SimpleThemesDefinition = SimpleThemesDefinition, ComponentThemes extends SimpleThemesDefinition = SimpleThemesDefinition, Templates extends BuildTemplates = typeof defaultTemplates> = {
    base: BaseThemeDefinition<Extra>;
    accent: BaseThemeDefinition<Extra>;
    childrenThemes?: ChildrenThemes;
    grandChildrenThemes?: GrandChildrenThemes;
    templates?: Templates;
    componentThemes?: ComponentThemes;
    colorsToTheme?: (props: {
        colors: string[];
        name: string;
        scheme?: 'light' | 'dark';
    }) => Record<string, string>;
};
export declare function createThemesWithSubThemes<Extra extends ExtraThemeValuesByScheme, SubThemes extends SimpleThemesDefinition, ComponentThemes extends SimpleThemesDefinition>(props: CreateThemesProps<Extra, SubThemes, ComponentThemes>): { [Key in "light" | "dark" | "light_accent" | "dark_accent" | (keyof SubThemes extends string ? `light_${string & keyof SubThemes}` | `light_accent_${string & keyof SubThemes}` | `light_${keyof ComponentThemes extends infer T ? T extends keyof ComponentThemes ? T extends string ? `${string & keyof SubThemes}_${T}` : never : never : never}` | `light_accent_${keyof ComponentThemes extends infer T_1 ? T_1 extends keyof ComponentThemes ? T_1 extends string ? `${string & keyof SubThemes}_${T_1}` : never : never : never}` | `dark_${string & keyof SubThemes}` | `dark_accent_${string & keyof SubThemes}` | `dark_${keyof ComponentThemes extends infer T_2 ? T_2 extends keyof ComponentThemes ? T_2 extends string ? `${string & keyof SubThemes}_${T_2}` : never : never : never}` | `dark_accent_${keyof ComponentThemes extends infer T_3 ? T_3 extends keyof ComponentThemes ? T_3 extends string ? `${string & keyof SubThemes}_${T_3}` : never : never : never}` : never)]: { [ThemeKey in "borderColor" | "borderColorHover" | "borderColorPress" | "borderColorFocus" | "color" | "shadowColor" | "shadowColorHover" | "shadowColorPress" | "shadowColorFocus" | "colorHover" | "colorFocus" | "colorPress" | "color1" | "color2" | "color3" | "color4" | "color5" | "color6" | "color7" | "color8" | "color9" | "color10" | "color11" | "color12" | "background" | "backgroundHover" | "backgroundPress" | "backgroundFocus" | "colorTransparent" | "placeholderColor" | "outlineColor" | "accentBackground" | "accentColor" | "background0" | "background025" | "background05" | "background075" | "color0" | "color025" | "color05" | "color075" | keyof Extra["dark"]]: string; }; };
type NamesWithChildrenNames<ParentNames extends string, ChildNames> = ParentNames | (ChildNames extends string ? `${ParentNames}_${ChildNames}` : never);
export declare function createSimpleThemeBuilder<Extra extends ExtraThemeValuesByScheme, Templates extends BuildTemplates, Palettes extends SimplePaletteDefinitions, ChildrenThemes extends Record<string, {
    template: keyof Templates extends string ? keyof Templates : never;
    palette?: string;
}>, GrandChildrenThemes extends Record<string, {
    template: keyof Templates extends string ? keyof Templates : never;
    palette?: string;
}>, HasAccent extends boolean, ComponentThemes extends SimpleThemesDefinition, FullTheme = {
    [ThemeKey in keyof Templates['light_base'] | keyof Extra['dark']]: string;
}>(props: {
    palettes?: Palettes;
    accentTheme?: HasAccent;
    templates?: Templates;
    childrenThemes?: ChildrenThemes;
    grandChildrenThemes?: GrandChildrenThemes;
    componentThemes?: ComponentThemes;
    extra?: Extra;
}): {
    themeBuilder: ThemeBuilder<any>;
    themes: {
        [Key in 'light' | 'dark' | (HasAccent extends true ? 'light_accent' | 'dark_accent' : never) | (keyof ChildrenThemes extends string ? `${'light' | 'dark'}_${HasAccent extends true ? `accent_` | '' : ''}${NamesWithChildrenNames<keyof ChildrenThemes, keyof GrandChildrenThemes>}` : never)]: FullTheme;
    };
};
export declare function createThemes(props: BuildThemeSuiteProps): {
    themeBuilder: ThemeBuilder<any>;
    themes: {
        [x: `light_${string}`]: {
            [x: string]: string;
            [x: number]: string;
        };
        [x: `dark_${string}`]: {
            [x: string]: string;
            [x: number]: string;
        };
        [x: `light_accent_${string}`]: {
            [x: string]: string;
            [x: number]: string;
        };
        [x: `light_${string}_${string}`]: {
            [x: string]: string;
            [x: number]: string;
        };
        [x: `light_accent_${string}_${string}`]: {
            [x: string]: string;
            [x: number]: string;
        };
        [x: `dark_accent_${string}`]: {
            [x: string]: string;
            [x: number]: string;
        };
        [x: `dark_${string}_${string}`]: {
            [x: string]: string;
            [x: number]: string;
        };
        [x: `dark_accent_${string}_${string}`]: {
            [x: string]: string;
            [x: number]: string;
        };
        light: {
            [x: string]: string;
            [x: number]: string;
        };
        dark: {
            [x: string]: string;
            [x: number]: string;
        };
    };
};
export declare const getComponentThemes: (components: SimpleThemesDefinition) => {
    [k: string]: {
        parent: string;
        template: string;
    };
};
export declare const defaultComponentThemes: {
    ListItem: {
        template: string;
    };
    SelectTrigger: {
        template: string;
    };
    Card: {
        template: string;
    };
    Button: {
        template: string;
    };
    Checkbox: {
        template: string;
    };
    Switch: {
        template: string;
    };
    SwitchThumb: {
        template: string;
    };
    TooltipContent: {
        template: string;
    };
    Progress: {
        template: string;
    };
    RadioGroupItem: {
        template: string;
    };
    TooltipArrow: {
        template: string;
    };
    SliderTrackActive: {
        template: string;
    };
    SliderTrack: {
        template: string;
    };
    SliderThumb: {
        template: string;
    };
    Tooltip: {
        template: string;
    };
    ProgressIndicator: {
        template: string;
    };
    Input: {
        template: string;
    };
    TextArea: {
        template: string;
    };
};
export declare function createPalettes(palettes: BuildPalettes): SimplePaletteDefinitions;
//# sourceMappingURL=v4-createTheme.d.ts.map