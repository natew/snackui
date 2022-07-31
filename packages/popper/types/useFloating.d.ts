/// <reference types="react" />
import * as Floating from './floating';
export declare type UseFloatingFn = typeof Floating.useFloating;
declare type UseFloatingProps = UseFloatingFn extends (props: infer Props) => any ? Props : never;
export declare type UseFloatingReturn = Floating.UseFloatingReturn & {
    context?: any;
    getFloatingProps?: (props: {
        ref: any;
        [key: string]: any;
    }) => any;
    getReferenceProps?: (props: {
        ref: any;
        [key: string]: any;
    }) => any;
};
export declare const FloatingOverrideContext: import("react").Context<typeof Floating.useFloating | null>;
export declare const useFloating: (props: UseFloatingProps) => UseFloatingReturn;
export {};
//# sourceMappingURL=useFloating.d.ts.map