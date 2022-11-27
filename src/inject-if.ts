import {IterationState, Operation, SyncValue, UnknownIterable, map, spread} from 'iter-ops';

/**
 * Conditionally injects value(s) after current value.
 */
export function appendIf<T, R>(value: SyncValue<R>, predicate: (value: T, index: number, state: IterationState) => boolean): Operation<T, T | R> {
    return injectIf(predicate, current => [current, ...safeIterable<R>(value)]);
}

/**
 * Conditionally injects value(s) before current value.
 */
export function prependIf<T, R>(value: SyncValue<R>, predicate: (value: T, index: number, state: IterationState) => boolean): Operation<T, T | R> {
    return injectIf(predicate, current => [...safeIterable<R>(value), current]);
}

/**
 * Conditionally injects value(s) in place of the current value.
 */
export function replaceIf<T, R>(value: SyncValue<R>, predicate: (value: T, index: number, state: IterationState) => boolean): Operation<T, T | R> {
    return injectIf(predicate, () => safeIterable<R>(value));
}

/**
 * Conditional injector of synchronous iterables.
 */
function injectIf<T, R>(predicate: (value: T, index: number, state: IterationState) => boolean, cb: (current: T) => SyncValue<R>): Operation<T, T | R> {
    return i => {
        const m = map((a: T, index: number, state: IterationState) => predicate(a, index, state) ? cb(a) : [a])(i) as UnknownIterable<any>;
        return spread()(m) as UnknownIterable<T | R>;
    };
}

/**
 * Makes value a safe iterable.
 */
function safeIterable<T>(value: SyncValue<T>): Iterable<T> {
    return (value && typeof (value as any)[Symbol.iterator] === 'function' ? value : [value]) as Iterable<T>;
}
