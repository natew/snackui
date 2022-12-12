import { MediaQueryList } from '@tamagui/core';
type Orientation = 'landscape' | 'portrait';
type Listener = (orientation: Orientation) => void;
export declare class NativeMediaQueryList implements MediaQueryList {
    private query;
    private listeners;
    private get orientation();
    constructor(query: string);
    private notify;
    addListener(listener: Listener): void;
    removeListener(listener: Listener): void;
    get matches(): boolean;
}
export {};
//# sourceMappingURL=mediaQueryList.d.ts.map