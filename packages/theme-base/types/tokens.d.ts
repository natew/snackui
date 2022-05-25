export declare const sizeKeys: readonly ["true", "0", "0.25", "0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "11", "12", "13", "14"];
export declare const getSizeAt: (index: number) => number;
export declare const size: {
    [key in typeof sizeKeys[any]]: number;
};
declare type Sizes = typeof size;
declare type SizeKeys = keyof Sizes;
export declare const space: {
    [Key in `-${SizeKeys}` | SizeKeys]: Key extends keyof Sizes ? Sizes[Key] : number;
};
export declare const zIndex: {
    0: number;
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
};
export declare const color: {
    teal1Dark: string;
    teal2Dark: string;
    teal3Dark: string;
    teal4Dark: string;
    teal5Dark: string;
    teal6Dark: string;
    teal7Dark: string;
    teal8Dark: string;
    teal9Dark: string;
    teal10Dark: string;
    teal11Dark: string;
    teal12Dark: string;
    yellow1Dark: string;
    yellow2Dark: string;
    yellow3Dark: string;
    yellow4Dark: string;
    yellow5Dark: string;
    yellow6Dark: string;
    yellow7Dark: string;
    yellow8Dark: string;
    yellow9Dark: string;
    yellow10Dark: string;
    yellow11Dark: string;
    yellow12Dark: string;
    violet1Dark: string;
    violet2Dark: string;
    violet3Dark: string;
    violet4Dark: string;
    violet5Dark: string;
    violet6Dark: string;
    violet7Dark: string;
    violet8Dark: string;
    violet9Dark: string;
    violet10Dark: string;
    violet11Dark: string;
    violet12Dark: string;
    red1Dark: string;
    red2Dark: string;
    red3Dark: string;
    red4Dark: string;
    red5Dark: string;
    red6Dark: string;
    red7Dark: string;
    red8Dark: string;
    red9Dark: string;
    red10Dark: string;
    red11Dark: string;
    red12Dark: string;
    purple1Dark: string;
    purple2Dark: string;
    purple3Dark: string;
    purple4Dark: string;
    purple5Dark: string;
    purple6Dark: string;
    purple7Dark: string;
    purple8Dark: string;
    purple9Dark: string;
    purple10Dark: string;
    purple11Dark: string;
    purple12Dark: string;
    pink1Dark: string;
    pink2Dark: string;
    pink3Dark: string;
    pink4Dark: string;
    pink5Dark: string;
    pink6Dark: string;
    pink7Dark: string;
    pink8Dark: string;
    pink9Dark: string;
    pink10Dark: string;
    pink11Dark: string;
    pink12Dark: string;
    orange1Dark: string;
    orange2Dark: string;
    orange3Dark: string;
    orange4Dark: string;
    orange5Dark: string;
    orange6Dark: string;
    orange7Dark: string;
    orange8Dark: string;
    orange9Dark: string;
    orange10Dark: string;
    orange11Dark: string;
    orange12Dark: string;
    indigo1Dark: string;
    indigo2Dark: string;
    indigo3Dark: string;
    indigo4Dark: string;
    indigo5Dark: string;
    indigo6Dark: string;
    indigo7Dark: string;
    indigo8Dark: string;
    indigo9Dark: string;
    indigo10Dark: string;
    indigo11Dark: string;
    indigo12Dark: string;
    green1Dark: string;
    green2Dark: string;
    green3Dark: string;
    green4Dark: string;
    green5Dark: string;
    green6Dark: string;
    green7Dark: string;
    green8Dark: string;
    green9Dark: string;
    green10Dark: string;
    green11Dark: string;
    green12Dark: string;
    grayA1Dark: string;
    grayA2Dark: string;
    grayA3Dark: string;
    grayA4Dark: string;
    grayA5Dark: string;
    grayA6Dark: string;
    grayA7Dark: string;
    grayA8Dark: string;
    grayA9Dark: string;
    grayA10Dark: string;
    grayA11Dark: string;
    grayA12Dark: string;
    gray1Dark: string;
    gray2Dark: string;
    gray3Dark: string;
    gray4Dark: string;
    gray5Dark: string;
    gray6Dark: string;
    gray7Dark: string;
    gray8Dark: string;
    gray9Dark: string;
    gray10Dark: string;
    gray11Dark: string;
    gray12Dark: string;
    blue1Dark: string;
    blue2Dark: string;
    blue3Dark: string;
    blue4Dark: string;
    blue5Dark: string;
    blue6Dark: string;
    blue7Dark: string;
    blue8Dark: string;
    blue9Dark: string;
    blue10Dark: string;
    blue11Dark: string;
    blue12Dark: string;
    teal1: string;
    teal2: string;
    teal3: string;
    teal4: string;
    teal5: string;
    teal6: string;
    teal7: string;
    teal8: string;
    teal9: string;
    teal10: string;
    teal11: string;
    teal12: string;
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
    violet1: string;
    violet2: string;
    violet3: string;
    violet4: string;
    violet5: string;
    violet6: string;
    violet7: string;
    violet8: string;
    violet9: string;
    violet10: string;
    violet11: string;
    violet12: string;
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
    indigo1: string;
    indigo2: string;
    indigo3: string;
    indigo4: string;
    indigo5: string;
    indigo6: string;
    indigo7: string;
    indigo8: string;
    indigo9: string;
    indigo10: string;
    indigo11: string;
    indigo12: string;
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
    grayA1: string;
    grayA2: string;
    grayA3: string;
    grayA4: string;
    grayA5: string;
    grayA6: string;
    grayA7: string;
    grayA8: string;
    grayA9: string;
    grayA10: string;
    grayA11: string;
    grayA12: string;
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
export declare const radius: {
    0: number;
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
    7: number;
    8: number;
    9: number;
    10: number;
    11: number;
    12: number;
};
export {};
//# sourceMappingURL=tokens.d.ts.map