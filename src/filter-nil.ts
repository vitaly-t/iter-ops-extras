import {filter, Operation} from 'iter-ops';

/**
 * Filters out all `null` and `undefined` values.
 */
export function filterNil<T>(): Operation<T | undefined | null, T> {
    return filter((a: any) => a !== null && a !== undefined);
}
