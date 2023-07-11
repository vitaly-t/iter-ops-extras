import {Operation, tap} from 'iter-ops';

/**
 * Logs values into the console, with optional tag + selector.
 *
 * NOTE: It does not concatenate values with the tag here,
 *       because console's inner serialization is way better.
 */
export function tapLog<T>(tag?: string | null | undefined, selector?: (value: T) => any): Operation<T, T> {
    const hasSelector = typeof selector === 'function';
    const getValue = (v: T) => hasSelector ? selector(v) : v;
    let cb = (value: T) => {
        console.log(getValue(value));
    };
    if (tag) {
        cb = (value: T) => {
            console.log(`${tag}:`, getValue(value));
        };
    }
    return tap(cb);
}
