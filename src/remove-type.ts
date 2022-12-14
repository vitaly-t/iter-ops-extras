import {filter, Operation} from 'iter-ops';

type PrimitiveMap = {
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

/**
 * Removes values of specified basic type(s), with recasting:
 *
 * pipe([1, 2, 'three', false], removeType('string', 'boolean')) //=> Iterable<number>
 *
 * When used without parameters, it will do nothing.
 */
export function removeType<T>(): Operation<T, T>;
export function removeType<T extends Primitives, R extends PrimitivesAsStrings>(...t: R[]): Operation<T, Exclude<T, PrimitiveMap[R]>>;

export function removeType(...t: string[]): any {
    return filter(a => t.indexOf(typeof a) < 0);
}

/**
 * Removes values that are not of specified type(s), with recasting:
 *
 * pipe([1, 2, 'three', false], removeNotType('number', 'boolean')) //=> Iterable<number | boolean>
 *
 * When used without parameters, it will remove everything.
 */
export function removeNotType<T>(): Operation<T, never>;
export function removeNotType<T extends Primitives, R extends PrimitivesAsStrings>(...t: R[]): Operation<T, PrimitiveMap[R]>;

export function removeNotType(...t: string[]): any {
    return filter(a => t.indexOf(typeof a) >= 0);
}
