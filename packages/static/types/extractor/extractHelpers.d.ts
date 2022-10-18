import type { NodePath } from '@babel/traverse';
import * as t from '@babel/types';
import type { ExtractedAttr, TamaguiOptionsWithFileInfo, Ternary } from '../types.js';
export declare function isPresent<T extends Object>(input: null | void | undefined | T): input is T;
export declare function isSimpleSpread(node: t.JSXSpreadAttribute): boolean;
export declare const attrStr: (attr?: ExtractedAttr) => string | t.JSXIdentifier;
export declare const objToStr: (obj: any, spacer?: string) => any;
export declare const ternaryStr: (x: Ternary) => string;
export declare function findComponentName(scope: any): string | undefined;
export declare function isValidThemeHook(props: TamaguiOptionsWithFileInfo, jsxPath: NodePath<t.JSXElement>, n: t.MemberExpression, sourcePath: string): boolean;
export declare const isInsideComponentPackage: (props: TamaguiOptionsWithFileInfo, moduleName: string) => boolean;
export declare const isComponentPackage: (props: TamaguiOptionsWithFileInfo, srcName: string) => boolean;
export declare function getValidComponent(props: TamaguiOptionsWithFileInfo, moduleName: string, componentName: string): false | {
    staticConfig: import("@tamagui/core-node").StaticConfigParsed;
} | null;
export declare const isValidModule: (props: TamaguiOptionsWithFileInfo, moduleName: string) => {
    isLocal: boolean;
    isValid: boolean;
};
export declare const getValidImport: (props: TamaguiOptionsWithFileInfo, moduleName: string, componentName?: string) => {
    staticConfig: import("@tamagui/core-node").StaticConfigParsed;
} | null;
export declare const isValidImport: (props: TamaguiOptionsWithFileInfo, moduleName: string, componentName?: string) => boolean;
//# sourceMappingURL=extractHelpers.d.ts.map