import {Operation, aggregate} from 'iter-ops';

/**
 * Emits a `Buffer` from the iterable:
 *
 *  - from an array of numbers, when iterable contains numbers;
 *  - from a joined string, when iterable contains strings.
 */
export function toBuffer(encoding?: BufferEncoding): Operation<number | string, Buffer> {
    return source => aggregate(data => {
        return Buffer.from(typeof data[0] === 'string' ? data.join('') : data as any, encoding);
    })(source);
}
