import {Operation, reduce} from 'iter-ops';

/**
 * Emits maximum value, with optional key-selector.
 *
 * See also: operator `numberStats` that supersedes it.
 */
export function max<T>(): Operation<T, T>;
export function max<T, R>(keySelector?: (value: T) => R): Operation<T, R>;

export function max<T, R>(keySelector?: (value: T) => R): Operation<T, T | R> {
    const hasSelector = typeof keySelector === 'function';
    const cb = hasSelector ? (p: any, c: T, idx: number) => {
        const a = idx > 1 ? p : keySelector(p);
        const b = keySelector(c);
        return a > b ? a : b;
    } : (p: T, c: T) => p > c ? p : c;
    return reduce(cb);
}
