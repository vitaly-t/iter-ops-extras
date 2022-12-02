import {consume, Operation} from 'iter-ops';
import {Readable} from 'stream';

/**
 * Converts the iterable into a Readable stream, with optional callback.
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
