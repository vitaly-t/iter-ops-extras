import {filter, Operation} from 'iter-ops';

/**
 * Removes all `null` and `undefined` values.
 */
export function removeNil<T>(): Operation<T | undefined | null, T> {
    return filter((a: any) => a !== null && a !== undefined);
}
