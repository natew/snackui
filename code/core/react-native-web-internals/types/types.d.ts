/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */
export type ColorValue = null | string;
export type DimensionValue = null | number | string | `${number}%` | `${number}px` | `${number}vh` | `${number}vw` | `${number}vmin` | `${number}vmax` | `${number}ch`;
export type EdgeInsetsValue = {
    top: number | `${number}%`;
    left: number | `${number}%`;
    right: number | `${number}%`;
    bottom: number | `${number}%`;
};
export type GenericStyleProp<T> = null | void | T | false | '' | ReadonlyArray<GenericStyleProp<T>>;
export type LayoutValue = {
    x: number;
    y: number;
    width: number;
    height: number;
};
export type LayoutEvent = {
    nativeEvent: {
        layout: LayoutValue;
        target: any;
    };
    timeStamp: number;
};
export type PointValue = {
    x: number;
    y: number;
};
type LayoutCallback = (x: number, y: number, width: number, height: number, left: number, top: number) => void;
type MeasureInWindowCallback = (left: number, top: number, width: number, height: number) => void;
export interface PlatformMethods {
    blur: () => void;
    focus: () => void;
    measure: (callback: LayoutCallback) => void;
    measureInWindow: (callback: MeasureInWindowCallback) => void;
    measureLayout: (relativeToNativeNode: {}, onSuccess: LayoutCallback, onFail: () => void) => void;
    setNativeProps: (nativeProps: {}) => void;
}
export {};
//# sourceMappingURL=types.d.ts.map