import {Operation, reduce} from 'iter-ops';

/**
 * Emits maximum value.
 */
export function max<T>(): Operation<T, T> {
    return reduce((p, c) => p > c ? p : c);
}
