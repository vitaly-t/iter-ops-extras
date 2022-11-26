import {Operation, reduce} from 'iter-ops';

export type MinMaxResult<T> = { min?: T, max?: T };

export function minMax<T>(): Operation<T, MinMaxResult<T>>;
export function minMax<T, R>(keySelector?: (value: T) => R): Operation<T, MinMaxResult<R>>;

/**
 * Emits {min, max} in one iteration, with optional key selector.
 */
export function minMax<T, R>(keySelector?: (value: T) => R): Operation<T, MinMaxResult<R>> {
    let cb;
    if (keySelector) {
        cb = (p, c) => {
            const a = keySelector(c);
            p.min = a < p.min ? a : p.min ?? a;
            p.max = a > p.max ? a : p.max ?? a;
            return p;
        }
    } else {
        cb = (p, c) => {
            p.min = c < p.min ? c : p.min ?? c;
            p.max = c > p.max ? c : p.max ?? c;
            return p;
        }
    }
    return reduce(cb, {min: undefined, max: undefined});
}
