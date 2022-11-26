/**
 * Emits an average value.
 */
import {Operation, reduce} from 'iter-ops';

export function average<T>(): Operation<T, T> {
    return reduce((p, c, idx, state) => {
        state.sum = (state.sum ?? p) + c;
        return p && state.sum / (idx + 1) as any;
    });
}
