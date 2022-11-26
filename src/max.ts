/**
 * Emits maximum value.
 */
import {Operation, reduce} from 'iter-ops';

export function max<T>(): Operation<T, T> {
    return reduce((p, c) => p > c ? p : c);
}
