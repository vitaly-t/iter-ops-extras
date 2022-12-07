import {map, Operation} from 'iter-ops';

/**
 * Replaces every `null` and `undefined` with an alternative value.
 */
export function replaceNil<T, R>(value: R): Operation<T, T | R> {
    return map(a => a ?? value);
}
