import {IterationState, Operation, SyncValue, UnknownIterable, map, spread} from 'iter-ops';

/**
 * Conditionally injects value(s) after current value.
 */
export function appendIf<T>(value: SyncValue<T>, predicate: (value: T, index: number, state: IterationState) => boolean): Operation<T, T> {
    return injectIf(predicate, current => [current, ...safeIterable(value)]);
}

/**
 * Conditionally injects value(s) before current value.
 */
export function prependIf<T>(value: SyncValue<T>, predicate: (value: T, index: number, state: IterationState) => boolean): Operation<T, T> {
    return injectIf(predicate, current => [...safeIterable(value), current]);
}

/**
 * Conditionally injects value(s) in place of the current value.
 */
export function replaceIf<T>(value: SyncValue<T>, predicate: (value: T, index: number, state: IterationState) => boolean): Operation<T, T> {
    return injectIf(predicate, () => safeIterable(value));
}

/**
 * Conditional injector of synchronous iterables.
 */
function injectIf<T>(predicate: (value: T, index: number, state: IterationState) => boolean, cb: (current: T) => SyncValue<T>): Operation<T, T> {
    return i => {
        const m = map((a: T, index: number, state: IterationState) => predicate(a, index, state) ? cb(a) : [a])(i) as UnknownIterable<Iterable<T>>;
        return spread()(m) as any;
    };
}

/**
 * Makes value a safe iterable.
 */
function safeIterable<T>(value: SyncValue<T>): Iterable<T> {
    return (value && (typeof value as any)[Symbol.iterator] === 'function' ? value : [value]) as Iterable<T>;
}
