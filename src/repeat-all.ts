import {Operation, repeat, spread, toArray} from 'iter-ops';

/**
 * Repeats the entire iterable N times.
 *
 * See also operator "repeat" - https://vitaly-t.github.io/iter-ops/functions/repeat
 *
 * LIMITATIONS:
 *
 * Because it aggregates values, using it against a very long iterator will consume too much memory.
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
