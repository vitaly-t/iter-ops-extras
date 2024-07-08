import {IterationState, Operation, repeat, spread, toArray} from 'iter-ops';

/**
 * Repeats the entire iterable N times.
 *
 * It also supports a callback - see operator "repeat": https://vitaly-t.github.io/iter-ops/functions/repeat
 *
 * LIMITATIONS:
 *
 * Because it aggregates values, using it against a very long iterator may consume too much memory.
 *
 * A dedicated operator would be able to emit values right away, while aggregating them in parallel.
 */
export function repeatAll<T>(n: number): Operation<T, T>;
export function repeatAll<T>(cb: (value: T, index: number, count: number, state: IterationState) => boolean | Promise<boolean>): Operation<T, T>;
export function repeatAll<T>(repeatParam: any): Operation<T, T> {
    return i => {
        const a = toArray<T>()(i);
        const r = repeat<T[]>(repeatParam)(a);
        return spread<T[]>()(r);
    };
}
