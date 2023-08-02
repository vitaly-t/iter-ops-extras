import {Operation, reduce} from 'iter-ops';

/**
 * Gets all basic number statistics, in a single iteration:
 * - `numberStats` for `number` iterables;
 * - `bigIntStats` for `bigint` iterables.
 */

export type NumberStatsResult<T> = {
    min?: T, // minimum value (undefined, when count is 0)
    max?: T, // maximum value (undefined, when count is 0)
    avg?: T, // average value (undefined, when count is 0)
    sum?: T, // sum of all values (undefined, when count is 0)
    count: T // count
};

export function numberStats(): Operation<number, NumberStatsResult<number>>;
export function numberStats<T>(keySelector: (value: T) => number): Operation<T, NumberStatsResult<number>>;

/**
 * Emits basic `number` statistics `{min, max, avg, sum, count}`, with optional key selector.
 */
export function numberStats<T>(keySelector?: (value: T) => number): Operation<number, NumberStatsResult<number>> {
    return buildStats(keySelector, true);
}

export function bigIntStats(): Operation<bigint, NumberStatsResult<bigint>>;
export function bigIntStats<T>(keySelector: (value: T) => bigint): Operation<T, NumberStatsResult<bigint>>;

/**
 * Emits basic `bigint` statistics `{min, max, avg, sum, count}`, with optional key selector.
 */
export function bigIntStats<T>(keySelector?: (value: T) => bigint): Operation<bigint, NumberStatsResult<bigint>> {
    return buildStats(keySelector, false);
}

function buildStats<T>(keySelector?: (value: T) => number | bigint, isNumber = true): Operation<number | bigint, NumberStatsResult<any>> {
    const hasSelector = typeof keySelector === 'function';
    const zero = isNumber ? 0 : 0n;
    return reduce((p: any, c: number | bigint) => {
        const a = hasSelector ? keySelector(c as T) : c;
        p.count++;
        p.sum = (p.sum ?? zero) + a;
        p.avg = p.sum / p.count;
        p.min = a < p.min ? a : p.min ?? a;
        p.max = a > p.max ? a : p.max ?? a;
        return p;
    }, {min: undefined, max: undefined, avg: undefined, sum: undefined, count: zero});
}
