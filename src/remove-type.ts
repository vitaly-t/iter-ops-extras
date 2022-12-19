import {filter, Operation} from 'iter-ops';

/**
 * All primitive types that exist in JavaScript.
 */
type PrimitiveMap = {
    null: null;
    string: string;
    number: number;
    bigint: bigint;
    boolean: boolean;
    symbol: symbol;
    object: object;
    undefined: undefined;
}

type PrimitivesAsStrings = keyof PrimitiveMap;
type Primitives = PrimitiveMap[PrimitivesAsStrings];

export function removeType<T>(): Operation<T, T>;

/**
 * Removes values of specified primitive type(s), with recasting:
 *
 * pipe([1, 2, 'three', false], removeType('string', 'boolean')) //=> Iterable<number>
 */
export function removeType<T extends Primitives, R extends PrimitivesAsStrings>(...t: R[]): Operation<T, Exclude<T, PrimitiveMap[R]>>;

export function removeType(...t: string[]): any {
    const hasNull = t.indexOf('null') >= 0;
    return filter(a => t.indexOf(typeof a) < 0 && (a !== null || !hasNull));
}

export function removeNotType<T>(): Operation<T, never>;

/**
 * Removes values that are not of specified primitive type(s), with recasting:
 *
 * pipe([1, 2, 'three', false], removeNotType('number', 'boolean')) //=> Iterable<number | boolean>
 */
export function removeNotType<T extends Primitives, R extends PrimitivesAsStrings>(...t: R[]): Operation<T, PrimitiveMap[R]>;

export function removeNotType(...t: string[]): any {
    const hasNull = t.indexOf('null') >= 0;
    return filter(a => t.indexOf(typeof a) >= 0 || (a === null && hasNull));
}
