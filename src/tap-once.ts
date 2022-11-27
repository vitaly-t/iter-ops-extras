import {Operation, tap} from 'iter-ops';

/**
 * Taps into the very first value only.
 */
export function tapOnce<T>(cb: (value: T) => void): Operation<T, T> {
    return tap((value, idx) => {
        if (!idx) {
            cb(value);
        }
    });
}
