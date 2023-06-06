import { Variable } from '@tamagui/web';
export declare const size: {
    $0: number;
    '$0.25': number;
    '$0.5': number;
    '$0.75': number;
    $1: number;
    '$1.5': number;
    $2: number;
    '$2.5': number;
    $3: number;
    '$3.5': number;
    $4: number;
    $true: number;
    '$4.5': number;
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
type SizeKeysIn = keyof typeof size;
type Sizes = {
    [Key in SizeKeysIn extends `$${infer Key}` ? Key : SizeKeysIn]: number;
};
type SizeKeys = `${keyof Sizes extends `${infer K}` ? K : never}`;
type SizeKeysWithNegatives = Exclude<`-${SizeKeys extends `$${infer Key}` ? Key : SizeKeys}`, '-0'> | SizeKeys;
export declare const space: {
    [Key in SizeKeysWithNegatives]: Key extends keyof Sizes ? Sizes[Key] : number;
};
export declare const zIndex: {
    0: number;
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
};
export declare const colorTokens: {
    light: {
        blue: {
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
        };
        gray: {
            gray1: string;
            gray2: string;
            gray3: string;
            gray4: string;
            gray5: string;
            gray6: string;
            gray7: string;
            gray8: string;
            gray9: string;
            gray10: string;
            gray11: string;
            gray12: string;
        };
        green: {
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
        };
        orange: {
            orange1: string;
            orange2: string;
            orange3: string;
            orange4: string;
            orange5: string;
            orange6: string;
            orange7: string;
            orange8: string;
            orange9: string;
            orange10: string;
            orange11: string;
            orange12: string;
        };
        pink: {
            pink1: string;
            pink2: string;
            pink3: string;
            pink4: string;
            pink5: string;
            pink6: string;
            pink7: string;
            pink8: string;
            pink9: string;
            pink10: string;
            pink11: string;
            pink12: string;
        };
        purple: {
            purple1: string;
            purple2: string;
            purple3: string;
            purple4: string;
            purple5: string;
            purple6: string;
            purple7: string;
            purple8: string;
            purple9: string;
            purple10: string;
            purple11: string;
            purple12: string;
        };
        red: {
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
        };
        yellow: {
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
        };
    };
    dark: {
        blue: {
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
        };
        gray: {
            gray1: string;
            gray2: string;
            gray3: string;
            gray4: string;
            gray5: string;
            gray6: string;
            gray7: string;
            gray8: string;
            gray9: string;
            gray10: string;
            gray11: string;
            gray12: string;
        };
        green: {
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
        };
        orange: {
            orange1: string;
            orange2: string;
            orange3: string;
            orange4: string;
            orange5: string;
            orange6: string;
            orange7: string;
            orange8: string;
            orange9: string;
            orange10: string;
            orange11: string;
            orange12: string;
        };
        pink: {
            pink1: string;
            pink2: string;
            pink3: string;
            pink4: string;
            pink5: string;
            pink6: string;
            pink7: string;
            pink8: string;
            pink9: string;
            pink10: string;
            pink11: string;
            pink12: string;
        };
        purple: {
            purple1: string;
            purple2: string;
            purple3: string;
            purple4: string;
            purple5: string;
            purple6: string;
            purple7: string;
            purple8: string;
            purple9: string;
            purple10: string;
            purple11: string;
            purple12: string;
        };
        red: {
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
        };
        yellow: {
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
        };
    };
};
export declare const darkColors: {
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
    purple1: string;
    purple2: string;
    purple3: string;
    purple4: string;
    purple5: string;
    purple6: string;
    purple7: string;
    purple8: string;
    purple9: string;
    purple10: string;
    purple11: string;
    purple12: string;
    pink1: string;
    pink2: string;
    pink3: string;
    pink4: string;
    pink5: string;
    pink6: string;
    pink7: string;
    pink8: string;
    pink9: string;
    pink10: string;
    pink11: string;
    pink12: string;
    orange1: string;
    orange2: string;
    orange3: string;
    orange4: string;
    orange5: string;
    orange6: string;
    orange7: string;
    orange8: string;
    orange9: string;
    orange10: string;
    orange11: string;
    orange12: string;
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
    gray1: string;
    gray2: string;
    gray3: string;
    gray4: string;
    gray5: string;
    gray6: string;
    gray7: string;
    gray8: string;
    gray9: string;
    gray10: string;
    gray11: string;
    gray12: string;
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
};
export declare const lightColors: {
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
    purple1: string;
    purple2: string;
    purple3: string;
    purple4: string;
    purple5: string;
    purple6: string;
    purple7: string;
    purple8: string;
    purple9: string;
    purple10: string;
    purple11: string;
    purple12: string;
    pink1: string;
    pink2: string;
    pink3: string;
    pink4: string;
    pink5: string;
    pink6: string;
    pink7: string;
    pink8: string;
    pink9: string;
    pink10: string;
    pink11: string;
    pink12: string;
    orange1: string;
    orange2: string;
    orange3: string;
    orange4: string;
    orange5: string;
    orange6: string;
    orange7: string;
    orange8: string;
    orange9: string;
    orange10: string;
    orange11: string;
    orange12: string;
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
    gray1: string;
    gray2: string;
    gray3: string;
    gray4: string;
    gray5: string;
    gray6: string;
    gray7: string;
    gray8: string;
    gray9: string;
    gray10: string;
    gray11: string;
    gray12: string;
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
};
export declare const color: {
    yellow1Dark: string | Variable<string>;
    yellow2Dark: string | Variable<string>;
    yellow3Dark: string | Variable<string>;
    yellow4Dark: string | Variable<string>;
    yellow5Dark: string | Variable<string>;
    yellow6Dark: string | Variable<string>;
    yellow7Dark: string | Variable<string>;
    yellow8Dark: string | Variable<string>;
    yellow9Dark: string | Variable<string>;
    yellow10Dark: string | Variable<string>;
    yellow11Dark: string | Variable<string>;
    yellow12Dark: string | Variable<string>;
    red1Dark: string | Variable<string>;
    red2Dark: string | Variable<string>;
    red3Dark: string | Variable<string>;
    red4Dark: string | Variable<string>;
    red5Dark: string | Variable<string>;
    red6Dark: string | Variable<string>;
    red7Dark: string | Variable<string>;
    red8Dark: string | Variable<string>;
    red9Dark: string | Variable<string>;
    red10Dark: string | Variable<string>;
    red11Dark: string | Variable<string>;
    red12Dark: string | Variable<string>;
    purple1Dark: string | Variable<string>;
    purple2Dark: string | Variable<string>;
    purple3Dark: string | Variable<string>;
    purple4Dark: string | Variable<string>;
    purple5Dark: string | Variable<string>;
    purple6Dark: string | Variable<string>;
    purple7Dark: string | Variable<string>;
    purple8Dark: string | Variable<string>;
    purple9Dark: string | Variable<string>;
    purple10Dark: string | Variable<string>;
    purple11Dark: string | Variable<string>;
    purple12Dark: string | Variable<string>;
    pink1Dark: string | Variable<string>;
    pink2Dark: string | Variable<string>;
    pink3Dark: string | Variable<string>;
    pink4Dark: string | Variable<string>;
    pink5Dark: string | Variable<string>;
    pink6Dark: string | Variable<string>;
    pink7Dark: string | Variable<string>;
    pink8Dark: string | Variable<string>;
    pink9Dark: string | Variable<string>;
    pink10Dark: string | Variable<string>;
    pink11Dark: string | Variable<string>;
    pink12Dark: string | Variable<string>;
    orange1Dark: string | Variable<string>;
    orange2Dark: string | Variable<string>;
    orange3Dark: string | Variable<string>;
    orange4Dark: string | Variable<string>;
    orange5Dark: string | Variable<string>;
    orange6Dark: string | Variable<string>;
    orange7Dark: string | Variable<string>;
    orange8Dark: string | Variable<string>;
    orange9Dark: string | Variable<string>;
    orange10Dark: string | Variable<string>;
    orange11Dark: string | Variable<string>;
    orange12Dark: string | Variable<string>;
    green1Dark: string | Variable<string>;
    green2Dark: string | Variable<string>;
    green3Dark: string | Variable<string>;
    green4Dark: string | Variable<string>;
    green5Dark: string | Variable<string>;
    green6Dark: string | Variable<string>;
    green7Dark: string | Variable<string>;
    green8Dark: string | Variable<string>;
    green9Dark: string | Variable<string>;
    green10Dark: string | Variable<string>;
    green11Dark: string | Variable<string>;
    green12Dark: string | Variable<string>;
    gray1Dark: string | Variable<string>;
    gray2Dark: string | Variable<string>;
    gray3Dark: string | Variable<string>;
    gray4Dark: string | Variable<string>;
    gray5Dark: string | Variable<string>;
    gray6Dark: string | Variable<string>;
    gray7Dark: string | Variable<string>;
    gray8Dark: string | Variable<string>;
    gray9Dark: string | Variable<string>;
    gray10Dark: string | Variable<string>;
    gray11Dark: string | Variable<string>;
    gray12Dark: string | Variable<string>;
    blue1Dark: string | Variable<string>;
    blue2Dark: string | Variable<string>;
    blue3Dark: string | Variable<string>;
    blue4Dark: string | Variable<string>;
    blue5Dark: string | Variable<string>;
    blue6Dark: string | Variable<string>;
    blue7Dark: string | Variable<string>;
    blue8Dark: string | Variable<string>;
    blue9Dark: string | Variable<string>;
    blue10Dark: string | Variable<string>;
    blue11Dark: string | Variable<string>;
    blue12Dark: string | Variable<string>;
    yellow1Light: string | Variable<string>;
    yellow2Light: string | Variable<string>;
    yellow3Light: string | Variable<string>;
    yellow4Light: string | Variable<string>;
    yellow5Light: string | Variable<string>;
    yellow6Light: string | Variable<string>;
    yellow7Light: string | Variable<string>;
    yellow8Light: string | Variable<string>;
    yellow9Light: string | Variable<string>;
    yellow10Light: string | Variable<string>;
    yellow11Light: string | Variable<string>;
    yellow12Light: string | Variable<string>;
    red1Light: string | Variable<string>;
    red2Light: string | Variable<string>;
    red3Light: string | Variable<string>;
    red4Light: string | Variable<string>;
    red5Light: string | Variable<string>;
    red6Light: string | Variable<string>;
    red7Light: string | Variable<string>;
    red8Light: string | Variable<string>;
    red9Light: string | Variable<string>;
    red10Light: string | Variable<string>;
    red11Light: string | Variable<string>;
    red12Light: string | Variable<string>;
    purple1Light: string | Variable<string>;
    purple2Light: string | Variable<string>;
    purple3Light: string | Variable<string>;
    purple4Light: string | Variable<string>;
    purple5Light: string | Variable<string>;
    purple6Light: string | Variable<string>;
    purple7Light: string | Variable<string>;
    purple8Light: string | Variable<string>;
    purple9Light: string | Variable<string>;
    purple10Light: string | Variable<string>;
    purple11Light: string | Variable<string>;
    purple12Light: string | Variable<string>;
    pink1Light: string | Variable<string>;
    pink2Light: string | Variable<string>;
    pink3Light: string | Variable<string>;
    pink4Light: string | Variable<string>;
    pink5Light: string | Variable<string>;
    pink6Light: string | Variable<string>;
    pink7Light: string | Variable<string>;
    pink8Light: string | Variable<string>;
    pink9Light: string | Variable<string>;
    pink10Light: string | Variable<string>;
    pink11Light: string | Variable<string>;
    pink12Light: string | Variable<string>;
    orange1Light: string | Variable<string>;
    orange2Light: string | Variable<string>;
    orange3Light: string | Variable<string>;
    orange4Light: string | Variable<string>;
    orange5Light: string | Variable<string>;
    orange6Light: string | Variable<string>;
    orange7Light: string | Variable<string>;
    orange8Light: string | Variable<string>;
    orange9Light: string | Variable<string>;
    orange10Light: string | Variable<string>;
    orange11Light: string | Variable<string>;
    orange12Light: string | Variable<string>;
    green1Light: string | Variable<string>;
    green2Light: string | Variable<string>;
    green3Light: string | Variable<string>;
    green4Light: string | Variable<string>;
    green5Light: string | Variable<string>;
    green6Light: string | Variable<string>;
    green7Light: string | Variable<string>;
    green8Light: string | Variable<string>;
    green9Light: string | Variable<string>;
    green10Light: string | Variable<string>;
    green11Light: string | Variable<string>;
    green12Light: string | Variable<string>;
    gray1Light: string | Variable<string>;
    gray2Light: string | Variable<string>;
    gray3Light: string | Variable<string>;
    gray4Light: string | Variable<string>;
    gray5Light: string | Variable<string>;
    gray6Light: string | Variable<string>;
    gray7Light: string | Variable<string>;
    gray8Light: string | Variable<string>;
    gray9Light: string | Variable<string>;
    gray10Light: string | Variable<string>;
    gray11Light: string | Variable<string>;
    gray12Light: string | Variable<string>;
    blue1Light: string | Variable<string>;
    blue2Light: string | Variable<string>;
    blue3Light: string | Variable<string>;
    blue4Light: string | Variable<string>;
    blue5Light: string | Variable<string>;
    blue6Light: string | Variable<string>;
    blue7Light: string | Variable<string>;
    blue8Light: string | Variable<string>;
    blue9Light: string | Variable<string>;
    blue10Light: string | Variable<string>;
    blue11Light: string | Variable<string>;
    blue12Light: string | Variable<string>;
};
export declare const radius: {
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
export declare const tokens: {
    color: {
        yellow1Light: Variable<string>;
        yellow2Light: Variable<string>;
        yellow3Light: Variable<string>;
        yellow4Light: Variable<string>;
        yellow5Light: Variable<string>;
        yellow6Light: Variable<string>;
        yellow7Light: Variable<string>;
        yellow8Light: Variable<string>;
        yellow9Light: Variable<string>;
        yellow10Light: Variable<string>;
        yellow11Light: Variable<string>;
        yellow12Light: Variable<string>;
        red1Light: Variable<string>;
        red2Light: Variable<string>;
        red3Light: Variable<string>;
        red4Light: Variable<string>;
        red5Light: Variable<string>;
        red6Light: Variable<string>;
        red7Light: Variable<string>;
        red8Light: Variable<string>;
        red9Light: Variable<string>;
        red10Light: Variable<string>;
        red11Light: Variable<string>;
        red12Light: Variable<string>;
        purple1Light: Variable<string>;
        purple2Light: Variable<string>;
        purple3Light: Variable<string>;
        purple4Light: Variable<string>;
        purple5Light: Variable<string>;
        purple6Light: Variable<string>;
        purple7Light: Variable<string>;
        purple8Light: Variable<string>;
        purple9Light: Variable<string>;
        purple10Light: Variable<string>;
        purple11Light: Variable<string>;
        purple12Light: Variable<string>;
        pink1Light: Variable<string>;
        pink2Light: Variable<string>;
        pink3Light: Variable<string>;
        pink4Light: Variable<string>;
        pink5Light: Variable<string>;
        pink6Light: Variable<string>;
        pink7Light: Variable<string>;
        pink8Light: Variable<string>;
        pink9Light: Variable<string>;
        pink10Light: Variable<string>;
        pink11Light: Variable<string>;
        pink12Light: Variable<string>;
        orange1Light: Variable<string>;
        orange2Light: Variable<string>;
        orange3Light: Variable<string>;
        orange4Light: Variable<string>;
        orange5Light: Variable<string>;
        orange6Light: Variable<string>;
        orange7Light: Variable<string>;
        orange8Light: Variable<string>;
        orange9Light: Variable<string>;
        orange10Light: Variable<string>;
        orange11Light: Variable<string>;
        orange12Light: Variable<string>;
        green1Light: Variable<string>;
        green2Light: Variable<string>;
        green3Light: Variable<string>;
        green4Light: Variable<string>;
        green5Light: Variable<string>;
        green6Light: Variable<string>;
        green7Light: Variable<string>;
        green8Light: Variable<string>;
        green9Light: Variable<string>;
        green10Light: Variable<string>;
        green11Light: Variable<string>;
        green12Light: Variable<string>;
        gray1Light: Variable<string>;
        gray2Light: Variable<string>;
        gray3Light: Variable<string>;
        gray4Light: Variable<string>;
        gray5Light: Variable<string>;
        gray6Light: Variable<string>;
        gray7Light: Variable<string>;
        gray8Light: Variable<string>;
        gray9Light: Variable<string>;
        gray10Light: Variable<string>;
        gray11Light: Variable<string>;
        gray12Light: Variable<string>;
        blue1Light: Variable<string>;
        blue2Light: Variable<string>;
        blue3Light: Variable<string>;
        blue4Light: Variable<string>;
        blue5Light: Variable<string>;
        blue6Light: Variable<string>;
        blue7Light: Variable<string>;
        blue8Light: Variable<string>;
        blue9Light: Variable<string>;
        blue10Light: Variable<string>;
        blue11Light: Variable<string>;
        blue12Light: Variable<string>;
        yellow1Dark: Variable<string>;
        yellow2Dark: Variable<string>;
        yellow3Dark: Variable<string>;
        yellow4Dark: Variable<string>;
        yellow5Dark: Variable<string>;
        yellow6Dark: Variable<string>;
        yellow7Dark: Variable<string>;
        yellow8Dark: Variable<string>;
        yellow9Dark: Variable<string>;
        yellow10Dark: Variable<string>;
        yellow11Dark: Variable<string>;
        yellow12Dark: Variable<string>;
        red1Dark: Variable<string>;
        red2Dark: Variable<string>;
        red3Dark: Variable<string>;
        red4Dark: Variable<string>;
        red5Dark: Variable<string>;
        red6Dark: Variable<string>;
        red7Dark: Variable<string>;
        red8Dark: Variable<string>;
        red9Dark: Variable<string>;
        red10Dark: Variable<string>;
        red11Dark: Variable<string>;
        red12Dark: Variable<string>;
        purple1Dark: Variable<string>;
        purple2Dark: Variable<string>;
        purple3Dark: Variable<string>;
        purple4Dark: Variable<string>;
        purple5Dark: Variable<string>;
        purple6Dark: Variable<string>;
        purple7Dark: Variable<string>;
        purple8Dark: Variable<string>;
        purple9Dark: Variable<string>;
        purple10Dark: Variable<string>;
        purple11Dark: Variable<string>;
        purple12Dark: Variable<string>;
        pink1Dark: Variable<string>;
        pink2Dark: Variable<string>;
        pink3Dark: Variable<string>;
        pink4Dark: Variable<string>;
        pink5Dark: Variable<string>;
        pink6Dark: Variable<string>;
        pink7Dark: Variable<string>;
        pink8Dark: Variable<string>;
        pink9Dark: Variable<string>;
        pink10Dark: Variable<string>;
        pink11Dark: Variable<string>;
        pink12Dark: Variable<string>;
        orange1Dark: Variable<string>;
        orange2Dark: Variable<string>;
        orange3Dark: Variable<string>;
        orange4Dark: Variable<string>;
        orange5Dark: Variable<string>;
        orange6Dark: Variable<string>;
        orange7Dark: Variable<string>;
        orange8Dark: Variable<string>;
        orange9Dark: Variable<string>;
        orange10Dark: Variable<string>;
        orange11Dark: Variable<string>;
        orange12Dark: Variable<string>;
        green1Dark: Variable<string>;
        green2Dark: Variable<string>;
        green3Dark: Variable<string>;
        green4Dark: Variable<string>;
        green5Dark: Variable<string>;
        green6Dark: Variable<string>;
        green7Dark: Variable<string>;
        green8Dark: Variable<string>;
        green9Dark: Variable<string>;
        green10Dark: Variable<string>;
        green11Dark: Variable<string>;
        green12Dark: Variable<string>;
        gray1Dark: Variable<string>;
        gray2Dark: Variable<string>;
        gray3Dark: Variable<string>;
        gray4Dark: Variable<string>;
        gray5Dark: Variable<string>;
        gray6Dark: Variable<string>;
        gray7Dark: Variable<string>;
        gray8Dark: Variable<string>;
        gray9Dark: Variable<string>;
        gray10Dark: Variable<string>;
        gray11Dark: Variable<string>;
        gray12Dark: Variable<string>;
        blue1Dark: Variable<string>;
        blue2Dark: Variable<string>;
        blue3Dark: Variable<string>;
        blue4Dark: Variable<string>;
        blue5Dark: Variable<string>;
        blue6Dark: Variable<string>;
        blue7Dark: Variable<string>;
        blue8Dark: Variable<string>;
        blue9Dark: Variable<string>;
        blue10Dark: Variable<string>;
        blue11Dark: Variable<string>;
        blue12Dark: Variable<string>;
    };
    space: {
        0: Variable<number>;
        0.25: Variable<number>;
        0.5: Variable<number>;
        0.75: Variable<number>;
        1: Variable<number>;
        1.5: Variable<number>;
        2: Variable<number>;
        2.5: Variable<number>;
        3: Variable<number>;
        3.5: Variable<number>;
        4: Variable<number>;
        true: Variable<number>;
        4.5: Variable<number>;
        5: Variable<number>;
        6: Variable<number>;
        7: Variable<number>;
        8: Variable<number>;
        9: Variable<number>;
        10: Variable<number>;
        11: Variable<number>;
        12: Variable<number>;
        13: Variable<number>;
        14: Variable<number>;
        15: Variable<number>;
        16: Variable<number>;
        17: Variable<number>;
        18: Variable<number>;
        19: Variable<number>;
        20: Variable<number>;
        [-0.25]: Variable<number>;
        [-0.5]: Variable<number>;
        [-0.75]: Variable<number>;
        [-1]: Variable<number>;
        [-1.5]: Variable<number>;
        [-2]: Variable<number>;
        [-2.5]: Variable<number>;
        [-3]: Variable<number>;
        [-3.5]: Variable<number>;
        [-4]: Variable<number>;
        "-true": Variable<number>;
        [-4.5]: Variable<number>;
        [-5]: Variable<number>;
        [-6]: Variable<number>;
        [-7]: Variable<number>;
        [-8]: Variable<number>;
        [-9]: Variable<number>;
        [-10]: Variable<number>;
        [-11]: Variable<number>;
        [-12]: Variable<number>;
        [-13]: Variable<number>;
        [-14]: Variable<number>;
        [-15]: Variable<number>;
        [-16]: Variable<number>;
        [-17]: Variable<number>;
        [-18]: Variable<number>;
        [-19]: Variable<number>;
        [-20]: Variable<number>;
    };
    size: {
        0: Variable<number>;
        0.25: Variable<number>;
        0.5: Variable<number>;
        0.75: Variable<number>;
        1: Variable<number>;
        1.5: Variable<number>;
        2: Variable<number>;
        2.5: Variable<number>;
        3: Variable<number>;
        3.5: Variable<number>;
        4: Variable<number>;
        true: Variable<number>;
        4.5: Variable<number>;
        5: Variable<number>;
        6: Variable<number>;
        7: Variable<number>;
        8: Variable<number>;
        9: Variable<number>;
        10: Variable<number>;
        11: Variable<number>;
        12: Variable<number>;
        13: Variable<number>;
        14: Variable<number>;
        15: Variable<number>;
        16: Variable<number>;
        17: Variable<number>;
        18: Variable<number>;
        19: Variable<number>;
        20: Variable<number>;
    };
    radius: {
        0: Variable<number>;
        2: Variable<number>;
        1: Variable<number>;
        4: Variable<number>;
        8: Variable<number>;
        true: Variable<number>;
        12: Variable<number>;
        3: Variable<number>;
        5: Variable<number>;
        7: Variable<number>;
        9: Variable<number>;
        10: Variable<number>;
        6: Variable<number>;
        11: Variable<number>;
    };
    zIndex: {
        0: Variable<number>;
        2: Variable<number>;
        1: Variable<number>;
        4: Variable<number>;
        3: Variable<number>;
        5: Variable<number>;
    };
};
export {};
//# sourceMappingURL=tokens.d.ts.map