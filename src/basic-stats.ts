import {Operation, reduce} from 'iter-ops';

export type BasicStatsResult<T> = { min?: T, max?: T, avg?: T, sum?: T };

export function basicStats<T>(): Operation<T, BasicStatsResult<T>>;
export function basicStats<T, R>(keySelector?: (value: T) => R): Operation<T, BasicStatsResult<R>>;

/**
 * Emits basic statistics `{min, max, avg, sum}`, with optional key selector.
 */
export function basicStats<T, R>(keySelector?: (value: T) => R): Operation<T, BasicStatsResult<R>> {
    return reduce((p: any, c: T, idx: number) => {
        const a = keySelector ? keySelector(c) : c;
        p.sum = (p.sum ?? 0) + a;
        p.avg = p.sum / (idx + 1);
        p.min = a < p.min ? a : p.min ?? a;
        p.max = a > p.max ? a : p.max ?? a;
        return p;
    }, {min: undefined, max: undefined, avg: undefined, sum: undefined});
}
