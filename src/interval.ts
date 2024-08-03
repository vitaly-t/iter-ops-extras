import {Operation, IterationState, delay} from 'iter-ops';

/**
 * The same as operator "delay", but without delaying the first value.
 *
 * See also: https://vitaly-t.github.io/iter-ops/functions/delay.html
 */
export function interval<T>(timeout: number | ((value: T, index: number, state: IterationState) => number)): Operation<T, T> {
    if (typeof timeout === 'function') {
        return delay((v, i, s) => i ? timeout(v, i, s) : -1);
    }
    return delay((_, i) => i ? timeout : -1);
}
