/**
 * Infer
 */

type FuncA = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;

type B = ReturnType<FuncB>;

type C = ReturnType<number>;

/**
 * Example
 */

type PromiseUnPack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnPack<Promise<number>>;

type PromiseB = PromiseUnPack<Promise<string>>;