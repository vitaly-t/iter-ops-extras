/**
 * Emits {min, max} in one iteration.
 */
import {Operation, reduce} from 'iter-ops';

export function minMax<T>(): Operation<T, { min?: T, max?: T }> {
    return reduce((p, c) => {
        p.min = c < p.min ? c : p.min ?? c;
        p.max = c > p.max ? c : p.max ?? c;
        return p;
    }, {min: undefined, max: undefined});
}
