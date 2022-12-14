import {filter, Operation} from 'iter-ops';

///////////////////////////////////////////////////////////
// Filters out values of basic types, with type re-casting.
///////////////////////////////////////////////////////////

type PrimitiveMap = {
    string: string;
    number: number;
    bigint: bigint;
    boolean: boolean;
    symbol: symbol;
    undefined: undefined;
}

type PrimitivesAsStrings = keyof PrimitiveMap;
type Primitives = PrimitiveMap[PrimitivesAsStrings];

/**
 * Removes elements of specified type(s), and re-casts the type.
 *
 * ```ts
 * pipe([1, 2, 'three', false], removeType('string', 'boolean')) //=> Iterable<number>
 * ```
 */
export function removeType<T extends Primitives, R extends PrimitivesAsStrings>(...t: R[]): Operation<T, Exclude<T, PrimitiveMap[R]>> {
    return filter(a => t.indexOf(typeof a as any) < 0) as any;
}

/**
 * Removes elements that are not of specified type(s), and re-casts the type.
 *
 * ```ts
 * pipe([1, 2, 'three', false], removeNotType('number', 'boolean')) //=> Iterable<number|boolean>
 * ```
 */
export function removeNotType<T extends Primitives, R extends PrimitivesAsStrings>(...t: R[]): Operation<T, PrimitiveMap[R]> {
    return filter(a => t.indexOf(typeof a as any) >= 0) as any;
}
