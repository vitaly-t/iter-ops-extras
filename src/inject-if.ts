import {IterationState, Operation, map, spread, wait, concurrencyFork, toIterable} from 'iter-ops';

/**
 * Conditionally injects value(s) after the current value.
 */
export function appendIf<T>(value: T | Iterable<T>, predicate: (value: T, index: number, state: IterationState) => boolean | Promise<boolean>): Operation<T, T> {
    const i = toIterable(value as T);
    return injectIf(predicate, current => [current, ...i]);
}

/**
 * Conditionally injects value(s) before the current value.
 */
export function prependIf<T>(value: T | Iterable<T>, predicate: (value: T, index: number, state: IterationState) => boolean | Promise<boolean>): Operation<T, T> {
    const i = toIterable(value as T);
    return injectIf(predicate, current => [...i, current]);
}

/**
 * Conditionally injects value(s) in place of the current value.
 */
export function replaceIf<T>(value: T | Iterable<T>, predicate: (value: T, index: number, state: IterationState) => boolean | Promise<boolean>): Operation<T, T> {
    const i = toIterable(value as T);
    return injectIf(predicate, () => i);
}

/**
 * Conditional injector of synchronous iterables, with support for asynchronous predicate result.
 */
function injectIf<T>(predicate: (value: T, index: number, state: IterationState) => boolean | Promise<boolean>, cb: (current: T) => Iterable<T>): Operation<T, T> {
    return source => concurrencyFork({
        onSync(i: Iterable<T>) {
            const m = map((a: T, index, state) => predicate(a, index, state) ? cb(a) : [a])(i);
            return spread()(m) as Iterable<T>;
        },
        onAsync(i: AsyncIterable<T>) {
            const m = map((a: T, index, state) => {
                const r = predicate(a, index, state) as any;
                const isPromise = r && typeof r.then === 'function';
                const out = (pass: boolean) => pass ? cb(a) : [a];
                return isPromise ? r.then(out) : out(r);
            })(i);
            const w = wait()(m) as AsyncIterable<Array<T>>;
            return spread()(w) as AsyncIterable<T>;
        }
    })(source);
}
