import {Operation, reduce} from 'iter-ops';

export function sum<T>(): Operation<T, T>;
export function sum<T, R>(keySelector: (value: T) => R): Operation<T, R>;

/**
 * Sums up values, with optional key selector.
 */
export function sum<T, R>(keySelector?: (value: T) => R): Operation<T, R> {
    const cb = keySelector ? (p: T, c: T, idx: number) =>
        (idx > 1 ? p : keySelector(p)) as any + keySelector(c) : (p: T, c: T) => p as any + c;

    return reduce(cb) as Operation<T, any>;
}
