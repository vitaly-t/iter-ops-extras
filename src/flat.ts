import {flat as _flat, Operation, map, IterationState, UnknownIterable} from 'iter-ops';

/**
 * Replacement for the default `flat` and `flatMap` with ones that replicate `Array.flat`
 * and `Array.flatMap` precisely, in case such behaviour is preferred.
 *
 * The library's own implementation expands all iterables, including strings. This implementation
 * makes strings non-expandable.
 */

export function flat<T>(depth = 1): Operation<T, T> {
    return _flat(depth, v => typeof v === 'string');
}

export function flatMap<T, R>(cb: (value: T, index: number, state: IterationState) => R | Promise<R>): Operation<T, R extends UnknownIterable<infer E> ? E : R> {
    return i => {
        const m = map(cb)(i);
        return _flat(1, v => typeof v === 'string')(m);
    }
}
