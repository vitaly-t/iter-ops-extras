import {IterationState, Operation, tap} from 'iter-ops';

/**
 * Taps into the very first value only.
 */
export function tapOnce<T>(cb: (value: T, state: IterationState) => void): Operation<T, T> {
    return tap((value, idx, state) => {
        if (!idx) {
            cb(value, state);
        }
    });
}
