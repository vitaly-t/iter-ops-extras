import {Operation, tap} from 'iter-ops';

/**
 * Logs values into the console, with optional tag.
 *
 * NOTE: It does not concatenate values with the tag here,
 *       because console's inner serialization is way better.
 */
export function tapLog<T>(tag?: string): Operation<T, T> {
    let cb = (value: T) => {
        console.log(value);
    };
    if (tag !== undefined) {
        cb = (value: T) => {
            console.log(`${tag}:`, value);
        };
    }
    return tap(cb);
}
