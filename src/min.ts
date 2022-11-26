import {Operation, reduce} from 'iter-ops';

/**
 * Emits minimum value.
 */
export function min<T>(): Operation<T, T> {
    return reduce((p, c) => p < c ? p : c);
}
