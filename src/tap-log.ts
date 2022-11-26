import {Operation, tap} from 'iter-ops';

/**
 * Logs values into the console.
 */
export function tapLog<T>(): Operation<T, T> {
    return tap((value) => {
        console.log(value);
    });
}
