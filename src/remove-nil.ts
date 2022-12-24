import {filter, Operation} from 'iter-ops';

/**
 * Removes all `null` and `undefined` values, with type recasting.
 *
 * Equivalent: removeType('null', 'undefined')
 */
export function removeNil<T>(): Operation<T, NonNullable<T>> {
    return filter((a: any) => a !== null && a !== undefined);
}
