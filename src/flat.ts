import {flat as _flat, map, IterationState} from 'iter-ops';

/**
 * Replacement for the default `flat` and `flatMap` with ones that replicate `Array.flat`
 * and `Array.flatMap` precisely, in case such behaviour is preferred.
 *
 * The library's own implementation expands all iterables, including strings. This implementation
 * makes strings non-expandable.
 */

export function flat<T>(depth = 1) {
    return _flat(depth, v => typeof v === 'string');
}

export function flatMap<T, R>(cb: (value: T, index: number, state: IterationState) => R | Promise<R>) {
    return (i: Iterable<T> | AsyncIterable<T>) => {
        const m = map(cb)(i);
        return flat()(m);
    }
}
