import {Operation, tap} from 'iter-ops';

/**
 * Logs values into the console, with optional tag + selector.
 *
 * NOTE: It does not concatenate values with the tag here,
 *       because console's inner serialization is way better.
 */
export function tapLog<T>(tag?: string | null | undefined, selector?: (value: T) => any): Operation<T, T> {
    let cb = (value: T) => {
        console.log(selector ? selector(value) : value);
    };
    if (tag) {
        cb = (value: T) => {
            console.log(`${tag}:`, selector ? selector(value) : value);
        };
    }
    return tap(cb);
}
