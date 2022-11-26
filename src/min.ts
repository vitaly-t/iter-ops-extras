/**
 * Emits minimum value.
 */
import {Operation, reduce} from 'iter-ops';

export function min<T>(): Operation<T, T> {
    return reduce((p, c) => p < c ? p : c);
}
