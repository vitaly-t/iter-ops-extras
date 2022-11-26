/**
 * Logs values into the console.
 */
import {Operation, tap} from 'iter-ops';

export function log<T>(): Operation<T, T> {
    return tap((value) => {
        console.log(value);
    });
}
