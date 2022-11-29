import {IterationState, Operation, SyncValue, map, spread, wait, concurrencyFork} from 'iter-ops';

/**
 * NOTE: This operator requires "iter-ops" v2.8.0 or later, as it uses operator "concurrencyFork"
 */

/**
 * Conditionally injects value(s) after current value.
 */
export function appendIf<T, R>(value: SyncValue<R>, predicate: (value: T, index: number, state: IterationState) => boolean | Promise<boolean>): Operation<T, T | R> {
    return injectIf(predicate, current => [current, ...safeIterable(value)]);
}

/**
 * Conditionally injects value(s) before current value.
 */
export function prependIf<T, R>(value: SyncValue<R>, predicate: (value: T, index: number, state: IterationState) => boolean | Promise<boolean>): Operation<T, T | R> {
    return injectIf(predicate, current => [...safeIterable(value), current]);
}

/**
 * Conditionally injects value(s) in place of the current value.
 */
export function replaceIf<T, R>(value: SyncValue<R>, predicate: (value: T, index: number, state: IterationState) => boolean | Promise<boolean>): Operation<T, T | R> {
    return injectIf(predicate, () => safeIterable(value));
}

/**
 * Conditional injector of synchronous iterables, with support for asynchronous predicate result.
 */
function injectIf<T, R>(predicate: (value: T, index: number, state: IterationState) => boolean | Promise<boolean>, cb: (current: T) => SyncValue<R>): Operation<T, T | R> {
    return source => concurrencyFork({
        onSync(i: Iterable<T>) {
            const m = map((a: T, index, state) => predicate(a, index, state) ? cb(a) : [a])(i);
            return spread()(m as Iterable<Array<T | R>>) as Iterable<T | R>;
        },
        onAsync(i: AsyncIterable<T>) {
            const m = map((a: T, index, state) => {
                const r = predicate(a, index, state) as any;
                const isPromise = r && typeof r.then === 'function';
                const out = (pass: boolean) => pass ? cb(a) : [a];
                return isPromise ? r.then(out) : out(r);
            })(i) as AsyncIterable<Array<T | R> | Promise<Array<T | R>>>;
            const w = wait()(m) as AsyncIterable<Array<T | R>>;
            return spread()(w) as AsyncIterable<T | R>;
        }
    })(source);
}

/**
 * Makes value a safe iterable.
 */
function safeIterable<T>(value: SyncValue<T>): Iterable<T> {
    return (value && typeof (value as any)[Symbol.iterator] === 'function' ? value : [value]) as Iterable<T>;
}
