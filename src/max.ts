import {Operation, reduce} from 'iter-ops';

export function max<T>(): Operation<T, T>;
export function max<T, R>(keySelector?: (value: T) => R): Operation<T, R>;

/**
 * Emits maximum value, with optional key selector.
 */
export function max<T, R>(keySelector?: (value: T) => R): Operation<T, T | R> {
    const cb = keySelector ? (p: any, c: T, idx: number) => {
        const a = idx > 1 ? p : keySelector(p);
        const b = keySelector(c);
        return a > b ? a : b;
    } : (p: T, c: T) => p > c ? p : c;
    return reduce(cb);
}
