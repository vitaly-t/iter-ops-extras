import {filter, Operation} from 'iter-ops';

////////////////////////////////////////////////////////////////////
// Helpers for removing basic-type values, with strict type casting.
////////////////////////////////////////////////////////////////////

/**
 * Removes all string values.
 */
export function removeString<T>(): Operation<T, Exclude<T, string>> {
    return filter<any>(a => typeof a !== 'string');
}

/**
 * Removes all non-string values.
 */
export function removeNotString<T>(): Operation<T, string> {
    return filter<any>(a => typeof a === 'string');
}

/**
 * Removes all number values.
 */
export function removeNumber<T>(): Operation<T, Exclude<T, number>> {
    return filter<any>(a => typeof a !== 'number');
}

/**
 * Removes all non-number values.
 */
export function removeNotNumber<T>(): Operation<T, number> {
    return filter<any>(a => typeof a === 'number');
}

/**
 * Removes all boolean values.
 */
export function removeBoolean<T>(): Operation<T, Exclude<T, boolean>> {
    return filter<any>(a => typeof a !== 'boolean');
}

/**
 * Removes all non-boolean values.
 */
export function removeNotBoolean<T>(): Operation<T, boolean> {
    return filter<any>(a => typeof a === 'boolean');
}

/**
 * Removes all bigint values.
 */
export function removeBigInt<T>(): Operation<T, Exclude<T, bigint>> {
    return filter<any>(a => typeof a !== 'bigint');
}

/**
 * Removes all non-bigint values.
 */
export function removeNotBigInt<T>(): Operation<T, bigint> {
    return filter<any>(a => typeof a === 'bigint');
}
