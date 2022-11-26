import {Operation, repeat, spread, toArray} from 'iter-ops';

/**
 * Repeats the entire iterable N times.
 *
 * LIMITATIONS:
 *
 * Because it aggregates values, using it against very long iterators will consume too much memory,
 * and using it against an infinite iterator will crash the process.
 *
 * A dedicated operator would be able to emit values right away, while aggregating them in parallel.
 */
export function repeatAll<T>(n: number): Operation<T, T> {
    return i => {
        const a = toArray<T>()(i);
        const r = repeat<T[]>(n)(a);
        return spread<T[]>()(r);
    };
}
