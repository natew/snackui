import { ResolveVariableAs, StaticConfig } from '../types';
type UsePropsOptions = {
    disableExpandShorthands?: boolean;
    resolveValues?: ResolveVariableAs;
    forComponent?: {
        staticConfig: StaticConfig;
    };
};
type FlattenedProps<A> = {
    [Key in keyof A extends `$${string}` ? never : keyof A]?: A[Key];
};
/**
 * Returns props and style as a single object, expanding and merging shorthands and media queries.
 *
 * Use sparingly, it will loop props and trigger re-render on all media queries you access.
 *
 * */
export declare function useProps<A extends Object>(props: A, opts?: UsePropsOptions): FlattenedProps<A>;
/**
 * Returns only style values fully resolved and flattened with merged media queries and shorthands with all theme and token values resolved.
 *
 * Use sparingly, it will loop props and trigger re-render on all media queries you access.
 *
 * */
export declare function useStyle<A extends Object>(props: A, opts?: UsePropsOptions): FlattenedProps<A>;
/**
 * Returns [props, styles] fully resolved and flattened with merged media queries and shorthands with all theme and token values resolved.
 *
 * Use sparingly, it will loop props and trigger re-render on all media queries you access.
 *
 * */
export declare function useSplitPropsAndStyle<A extends Object>(props: A, opts?: UsePropsOptions): [FlattenedProps<A>, FlattenedProps<A>];
export {};
//# sourceMappingURL=useProps.d.ts.map