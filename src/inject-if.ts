import {IterationState, Operation, map, spread} from 'iter-ops';

/**
 * Conditionally injects values after current value.
 */
export function appendIf<T>(values: T[], predicate: (value: T, index: number, state: IterationState) => boolean): Operation<T, T> {
    return injectIf(values, predicate, current => [current, ...values]);
}

/**
 * Conditionally injects values before current value.
 */
export function prependIf<T>(values: T[], predicate: (value: T, index: number, state: IterationState) => boolean): Operation<T, T> {
    return injectIf(values, predicate, current => [...values, current]);
}

/**
 * Conditionally injects values in place of the current value.
 */
export function replaceIf<T>(values: T[], predicate: (value: T, index: number, state: IterationState) => boolean): Operation<T, T> {
    return injectIf(values, predicate, current => [...values]);
}

/**
 * Conditional values-injecting helper.
 */
function injectIf<T>(values: T[], test: (value: T, index: number, state: IterationState) => boolean, cb: (current: T) => T[]): Operation<T, T> {
    return i => {
        const m = map((a: T, index: number, state: IterationState) => test(a, index, state) ? cb(a) : [a])(i);
        return spread()(m) as any;
    };
}
