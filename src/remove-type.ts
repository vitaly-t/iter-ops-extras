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
 * Removes elements of specified type(s), and re-casts the type:
 *
 * pipe([1, 2, 'three', false], removeType('string', 'boolean')) //=> Iterable<number>
 */
export function removeType<T>(): Operation<T, T>;
export function removeType<T extends Primitives, R extends PrimitivesAsStrings>(...t: R[]): Operation<T, Exclude<T, PrimitiveMap[R]>>;

export function removeType(...t: string[]): any {
    return filter(a => t.indexOf(typeof a) < 0);
}

/**
 * Removes elements that are not of specified type(s), and re-casts the type:
 *
 * pipe([1, 2, 'three', false], removeNotType('number', 'boolean')) //=> Iterable<number|boolean>
 */
export function removeNotType<T>(): Operation<T, T>;
export function removeNotType<T extends Primitives, R extends PrimitivesAsStrings>(...t: R[]): Operation<T, PrimitiveMap[R]>;

export function removeNotType(...t: string[]): any {
    return filter(a => t.indexOf(typeof a) >= 0);
}
