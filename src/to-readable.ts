import {consume, Operation} from 'iter-ops';
import {Readable} from 'stream';

/**
 * Emits a `Readable` stream from the iterable, with optional callback.
 *
 * The optional callback is to let you set up event listeners:
 *
 * ```ts
 * toReadable(r => {
 *    r.once('close', () => {
 *        // stream closed
 *    })
 * })
 * ```
 *
 * NOTE: This operator is not included within ./index.ts by default,
 *       because "stream" package that it uses is part of NodeJS,
 *       but for web clients it needs to be installed:
 *
 * ```
 * $ npm install stream
 * ```
 */
export function toReadable<T>(cb?: (stream: Readable) => void): Operation<T, Readable> {
    return source => consume(i => {
        const r = Readable.from(i);
        if (typeof cb === 'function') {
            cb(r);
        }
        return r;
    })(source);
}
