import {IterationState, Operation, concurrencyFork, map, wait} from 'iter-ops';

/**
 * Remaps and sequentially awaits promises.
 *
 * It adds operator "wait" only when inside asynchronous pipeline.
 *
 * The key difference from using "map" + "wait" is that operator "wait" will throw
 * an error when used inside synchronous pipeline, and "mapWait" here will not.
 *
 * See API for operator "map" that explains why it does not resolve promises by itself:
 * https://vitaly-t.github.io/iter-ops/functions/map
 */
export function mapWait<T, R>(cb: (value: T, index: number, state: IterationState) => R | Promise<R>): Operation<T, R> {
    return source => concurrencyFork({
        onSync(i: Iterable<T>) {
            return map(cb)(i) as Iterable<R>;
        },
        onAsync(i: AsyncIterable<T>) {
            const m = map(cb)(i);
            return wait()(m) as AsyncIterable<R>;
        }
    })(source);
}
