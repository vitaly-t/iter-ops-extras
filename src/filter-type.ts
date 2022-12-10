import {filter, Operation} from 'iter-ops';

///////////////////////////////////////////////////////////////////////////////////////
// Helpers for removing values that are not of specific type, with strict type casting.
///////////////////////////////////////////////////////////////////////////////////////

/**
 * Removes all non-string values.
 */
export function filterString<T>(): Operation<T, string> {
    return filter<any>(a => typeof a === 'string');
}

/**
 * Removes all non-number values.
 */
export function filterNumber<T>(): Operation<T, number> {
    return filter<any>(a => typeof a === 'number');
}

/**
 * Removes all non-boolean values.
 */
export function filterBoolean<T>(): Operation<T, boolean> {
    return filter<any>(a => typeof a === 'boolean');
}

/**
 * Removes all non-bigint values.
 */
export function filterBigInt<T>(): Operation<T, bigint> {
    return filter<any>(a => typeof a === 'bigint');
}
