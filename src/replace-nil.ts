import {map, Operation} from 'iter-ops';

/**
 * Replaces every `null` and `undefined` with an alternative value, with type recasting.
 */
export function replaceNil<T, R>(value: R): Operation<T, NonNullable<T> | R> {
    return map(a => a ?? value);
}
