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
export declare const spaces: (readonly [string, any])[];
export declare const spacesNegative: (string | number)[][];
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
};
export {};
//# sourceMappingURL=v3-tokens.d.ts.map