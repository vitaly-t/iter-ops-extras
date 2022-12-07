import {filter, Operation} from 'iter-ops';

/**
 * Filters out all `null` and `undefined` values.
 */
export function filterNil<T>(): Operation<T, T> {
    return filter(a => a !== null && a !== undefined);
}
