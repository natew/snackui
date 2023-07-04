import { GenericFont } from '@tamagui/core';
export declare const createCherryBombFont: <A extends GenericFont = GenericFont<11 | 12 | 13 | 14 | 16 | 1 | 2 | 3 | 4 | "true" | 5 | 6 | 7 | 8 | 9 | 10 | 15>>(font?: { [Key in keyof Partial<A>]?: Partial<A[Key]> | undefined; }, { sizeLineHeight, sizeSize, }?: {
    sizeLineHeight?: ((fontSize: number) => number) | undefined;
    sizeSize?: ((size: number) => number) | undefined;
}) => A;
//# sourceMappingURL=index.d.ts.map