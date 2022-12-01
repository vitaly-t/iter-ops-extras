import {Operation, tap} from 'iter-ops';

/**
 * Logs values into the console, with optional tag.
 *
 * NOTE: It does not concatenate values with the tag here,
 *       because console's inner serialization is way better.
 */
export function tapLog<T>(tag?: string): Operation<T, T> {
    return tap((value) => {
        if (tag) {
            console.log(`${tag}:`, value);
        } else {
            console.log(value);
        }
    });
}
