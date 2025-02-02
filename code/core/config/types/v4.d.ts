export { shorthands } from '@tamagui/shorthands/v4';
export { createThemes } from '@tamagui/theme-builder';
export { tamaguiThemes, tokens } from '@tamagui/themes/v4';
export { animations } from './v4-animations';
export { createSystemFont, fonts } from './v4-fonts';
export { breakpoints, media, mediaQueryDefaultActive } from './v4-media';
declare const generatedThemes: Record<"light" | "dark" | "light_yellow" | "light_green" | "light_blue" | "light_red" | "dark_yellow" | "dark_green" | "dark_blue" | "dark_red" | "light_accent" | "dark_accent" | "dark_black" | "dark_white" | "light_black" | "light_white", {
    color: string;
    color5: string;
    color11: string;
    borderColor: string;
    shadowColor: string;
    color1: string;
    color2: string;
    color3: string;
    color4: string;
    color6: string;
    color7: string;
    color8: string;
    color9: string;
    color10: string;
    color12: string;
    background: string;
    backgroundHover: string;
    backgroundPress: string;
    backgroundFocus: string;
    colorHover: string;
    colorPress: string;
    colorFocus: string;
    colorTransparent: string;
    borderColorHover: string;
    borderColorFocus: string;
    borderColorPress: string;
    placeholderColor: string;
    blue1: string;
    blue2: string;
    blue3: string;
    blue4: string;
    blue5: string;
    blue6: string;
    blue7: string;
    blue8: string;
    blue9: string;
    blue10: string;
    blue11: string;
    blue12: string;
    green1: string;
    green2: string;
    green3: string;
    green4: string;
    green5: string;
    green6: string;
    green7: string;
    green8: string;
    green9: string;
    green10: string;
    green11: string;
    green12: string;
    red1: string;
    red2: string;
    red3: string;
    red4: string;
    red5: string;
    red6: string;
    red7: string;
    red8: string;
    red9: string;
    red10: string;
    red11: string;
    red12: string;
    yellow1: string;
    yellow2: string;
    yellow3: string;
    yellow4: string;
    yellow5: string;
    yellow6: string;
    yellow7: string;
    yellow8: string;
    yellow9: string;
    yellow10: string;
    yellow11: string;
    yellow12: string;
    outlineColor: string;
    accentBackground: string;
    accentColor: string;
    background0: string;
    color0: string;
    white1: string;
    white2: string;
    white3: string;
    white4: string;
    white5: string;
    white6: string;
    white7: string;
    white8: string;
    white9: string;
    white10: string;
    white11: string;
    white12: string;
    black1: string;
    black2: string;
    black3: string;
    black4: string;
    black5: string;
    black6: string;
    black7: string;
    black8: string;
    black9: string;
    black10: string;
    black11: string;
    black12: string;
    shadow1: string;
    shadow2: string;
    shadow3: string;
    shadow4: string;
    shadow5: string;
    shadow6: string;
    background02: string;
    background04: string;
    background06: string;
    background08: string;
    color02: string;
    color04: string;
    color06: string;
    color08: string;
    accent0: string;
    accent2: string;
    accent1: string;
    accent3: string;
    accent4: string;
    accent5: string;
    accent6: string;
    accent7: string;
    accent8: string;
    accent9: string;
    accent10: string;
    accent11: string;
    accent12: string;
}>;
export type TamaguiThemes = typeof generatedThemes;
/**
 * This is an optional production optimization: themes JS can get to 20Kb or more.
 * Tamagui has ~1Kb of logic to hydrate themes from CSS, so you can remove the JS.
 * So long as you server render your Tamagui CSS, this will save you bundle size:
 */
export declare const themes: TamaguiThemes;
export declare const selectionStyles: (theme: any) => {
    backgroundColor: any;
    color: any;
} | null;
export declare const settings: {
    mediaQueryDefaultActive: {
        '2xl': boolean;
        xl: boolean;
        lg: boolean;
        md: boolean;
        sm: boolean;
        xs: boolean;
        '2xs': boolean;
    };
    defaultFont: string;
    fastSchemeChange: true;
    shouldAddPrefersColorThemes: true;
    allowedStyleValues: "somewhat-strict-web";
    themeClassNameOnRoot: true;
    onlyAllowShorthands: true;
    maxDarkLightNesting: number;
};
export declare const defaultConfig: {
    animations: import("@tamagui/web").AnimationDriver<{
        '75ms': string;
        '100ms': string;
        '200ms': string;
        bouncy: string;
        superBouncy: string;
        lazy: string;
        medium: string;
        slow: string;
        quick: string;
        quicker: string;
        quickest: string;
        tooltip: string;
    }>;
    media: {
        readonly '2xl': {
            readonly minWidth: number;
        };
        readonly xl: {
            readonly minWidth: number;
        };
        readonly lg: {
            readonly minWidth: number;
        };
        readonly md: {
            readonly minWidth: number;
        };
        readonly sm: {
            readonly minWidth: number;
        };
        readonly xs: {
            readonly minWidth: number;
        };
        readonly '2xs': {
            readonly minWidth: number;
        };
    };
    shorthands: {
        text: "textAlign";
        b: "bottom";
        bg: "backgroundColor";
        content: "alignContent";
        grow: "flexGrow";
        items: "alignItems";
        justify: "justifyContent";
        l: "left";
        m: "margin";
        maxH: "maxHeight";
        maxW: "maxWidth";
        mb: "marginBottom";
        minH: "minHeight";
        minW: "minWidth";
        ml: "marginLeft";
        mr: "marginRight";
        mt: "marginTop";
        mx: "marginHorizontal";
        my: "marginVertical";
        p: "padding";
        pb: "paddingBottom";
        pl: "paddingLeft";
        pr: "paddingRight";
        pt: "paddingTop";
        px: "paddingHorizontal";
        py: "paddingVertical";
        r: "right";
        rounded: "borderRadius";
        select: "userSelect";
        self: "alignSelf";
        shrink: "flexShrink";
        t: "top";
        z: "zIndex";
    };
    themes: Record<"light" | "dark" | "light_yellow" | "light_green" | "light_blue" | "light_red" | "dark_yellow" | "dark_green" | "dark_blue" | "dark_red" | "light_accent" | "dark_accent" | "dark_black" | "dark_white" | "light_black" | "light_white", {
        color: string;
        color5: string;
        color11: string;
        borderColor: string;
        shadowColor: string;
        color1: string;
        color2: string;
        color3: string;
        color4: string;
        color6: string;
        color7: string;
        color8: string;
        color9: string;
        color10: string;
        color12: string;
        background: string;
        backgroundHover: string;
        backgroundPress: string;
        backgroundFocus: string;
        colorHover: string;
        colorPress: string;
        colorFocus: string;
        colorTransparent: string;
        borderColorHover: string;
        borderColorFocus: string;
        borderColorPress: string;
        placeholderColor: string;
        blue1: string;
        blue2: string;
        blue3: string;
        blue4: string;
        blue5: string;
        blue6: string;
        blue7: string;
        blue8: string;
        blue9: string;
        blue10: string;
        blue11: string;
        blue12: string;
        green1: string;
        green2: string;
        green3: string;
        green4: string;
        green5: string;
        green6: string;
        green7: string;
        green8: string;
        green9: string;
        green10: string;
        green11: string;
        green12: string;
        red1: string;
        red2: string;
        red3: string;
        red4: string;
        red5: string;
        red6: string;
        red7: string;
        red8: string;
        red9: string;
        red10: string;
        red11: string;
        red12: string;
        yellow1: string;
        yellow2: string;
        yellow3: string;
        yellow4: string;
        yellow5: string;
        yellow6: string;
        yellow7: string;
        yellow8: string;
        yellow9: string;
        yellow10: string;
        yellow11: string;
        yellow12: string;
        outlineColor: string;
        accentBackground: string;
        accentColor: string;
        background0: string;
        color0: string;
        white1: string;
        white2: string;
        white3: string;
        white4: string;
        white5: string;
        white6: string;
        white7: string;
        white8: string;
        white9: string;
        white10: string;
        white11: string;
        white12: string;
        black1: string;
        black2: string;
        black3: string;
        black4: string;
        black5: string;
        black6: string;
        black7: string;
        black8: string;
        black9: string;
        black10: string;
        black11: string;
        black12: string;
        shadow1: string;
        shadow2: string;
        shadow3: string;
        shadow4: string;
        shadow5: string;
        shadow6: string;
        background02: string;
        background04: string;
        background06: string;
        background08: string;
        color02: string;
        color04: string;
        color06: string;
        color08: string;
        accent0: string;
        accent2: string;
        accent1: string;
        accent3: string;
        accent4: string;
        accent5: string;
        accent6: string;
        accent7: string;
        accent8: string;
        accent9: string;
        accent10: string;
        accent11: string;
        accent12: string;
    }>;
    tokens: {
        readonly radius: {
            0: number;
            1: number;
            2: number;
            3: number;
            4: number;
            true: number;
            5: number;
            6: number;
            7: number;
            8: number;
            9: number;
            10: number;
            11: number;
            12: number;
        };
        readonly zIndex: {
            0: number;
            1: number;
            2: number;
            3: number;
            4: number;
            5: number;
        };
        readonly space: {
            0: number;
            0.25: number;
            0.5: number;
            0.75: number;
            1: number;
            1.5: number;
            2: number;
            2.5: number;
            3: number;
            3.5: number;
            4: number;
            true: number;
            4.5: number;
            5: number;
            6: number;
            7: number;
            8: number;
            9: number;
            10: number;
            11: number;
            12: number;
            13: number;
            14: number;
            15: number;
            16: number;
            17: number;
            18: number;
            19: number;
            20: number;
            [-0.25]: number;
            [-0.5]: number;
            [-0.75]: number;
            [-1]: number;
            [-1.5]: number;
            [-2]: number;
            [-2.5]: number;
            [-3]: number;
            [-3.5]: number;
            [-4]: number;
            "-true": number;
            [-4.5]: number;
            [-5]: number;
            [-6]: number;
            [-7]: number;
            [-8]: number;
            [-9]: number;
            [-10]: number;
            [-11]: number;
            [-12]: number;
            [-13]: number;
            [-14]: number;
            [-15]: number;
            [-16]: number;
            [-17]: number;
            [-18]: number;
            [-19]: number;
            [-20]: number;
        };
        readonly size: {
            $0: number;
            "$0.25": number;
            "$0.5": number;
            "$0.75": number;
            $1: number;
            "$1.5": number;
            $2: number;
            "$2.5": number;
            $3: number;
            "$3.5": number;
            $4: number;
            $true: number;
            "$4.5": number;
            $5: number;
            $6: number;
            $7: number;
            $8: number;
            $9: number;
            $10: number;
            $11: number;
            $12: number;
            $13: number;
            $14: number;
            $15: number;
            $16: number;
            $17: number;
            $18: number;
            $19: number;
            $20: number;
        };
    };
    fonts: {
        body: import("@tamagui/web").FillInFont<import("@tamagui/web").GenericFont, 2 | 9 | 15 | 1 | 10 | 5 | 14 | 11 | 12 | 16 | 3 | 4 | 6 | 7 | 8 | 13 | "true">;
        heading: import("@tamagui/web").FillInFont<import("@tamagui/web").GenericFont, 2 | 9 | 15 | 1 | 10 | 5 | 14 | 11 | 12 | 16 | 3 | 4 | 6 | 7 | 8 | 13 | "true">;
    };
    selectionStyles: (theme: any) => {
        backgroundColor: any;
        color: any;
    } | null;
    settings: {
        mediaQueryDefaultActive: {
            '2xl': boolean;
            xl: boolean;
            lg: boolean;
            md: boolean;
            sm: boolean;
            xs: boolean;
            '2xs': boolean;
        };
        defaultFont: string;
        fastSchemeChange: true;
        shouldAddPrefersColorThemes: true;
        allowedStyleValues: "somewhat-strict-web";
        themeClassNameOnRoot: true;
        onlyAllowShorthands: true;
        maxDarkLightNesting: number;
    };
};
//# sourceMappingURL=v4.d.ts.map