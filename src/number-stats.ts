import {Operation, reduce} from 'iter-ops';

/**
 * Gets all basic number statistics, in a single iteration,
 * for either `number` or `bigint` iterables.
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
    const hasSelector = typeof keySelector === 'function';
    return reduce((p: any, c: number) => {
        const a = hasSelector ? keySelector(c as T) : c;
        p.count++;
        p.sum = (p.sum ?? 0) + a;
        p.avg = p.sum / p.count;
        p.min = a < p.min ? a : p.min ?? a;
        p.max = a > p.max ? a : p.max ?? a;
        return p;
    }, {min: undefined, max: undefined, avg: undefined, sum: undefined, count: 0});
}

export function bigIntStats(): Operation<bigint, NumberStatsResult<bigint>>;
export function bigIntStats<T>(keySelector: (value: T) => bigint): Operation<T, NumberStatsResult<bigint>>;

/**
 * Emits basic `bigint` statistics `{min, max, avg, sum, count}`, with optional key selector.
 */
export function bigIntStats<T>(keySelector?: (value: T) => bigint): Operation<bigint, NumberStatsResult<bigint>> {
    const hasSelector = typeof keySelector === 'function';
    return reduce((p: any, c: bigint) => {
        const a = hasSelector ? keySelector(c as T) : c;
        p.count++;
        p.sum = (p.sum ?? 0n) + a;
        p.avg = p.sum / p.count;
        p.min = a < p.min ? a : p.min ?? a;
        p.max = a > p.max ? a : p.max ?? a;
        return p;
    }, {min: undefined, max: undefined, avg: undefined, sum: undefined, count: 0n});
}
