import {Operation, reduce} from 'iter-ops';

export type BasicStatsResult = {
    min?: number, // minimum value (undefined, when count is 0)
    max?: number, // maximum value (undefined, when count is 0)
    avg?: number, // average value (undefined, when count is 0)
    sum?: number, // sum of all values (undefined, when count is 0)
    count: number // count
};

export function basicStats<T extends number>(): Operation<T, BasicStatsResult>;
export function basicStats<T, R extends number>(keySelector: (value: T) => R): Operation<T, BasicStatsResult>;

/**
 * Emits basic statistics `{min, max, avg, sum, count}`, with optional key selector.
 */
export function basicStats<T, R>(keySelector?: (value: T) => R): Operation<T, BasicStatsResult> {
    return reduce((p: any, c: T) => {
        const a = keySelector ? keySelector(c) : c;
        p.count++;
        p.sum = (p.sum ?? 0) + a;
        p.avg = p.sum / p.count;
        p.min = a < p.min ? a : p.min ?? a;
        p.max = a > p.max ? a : p.max ?? a;
        return p;
    }, {min: undefined, max: undefined, avg: undefined, sum: undefined, count: 0});
}
