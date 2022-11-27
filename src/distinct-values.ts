import {distinct, map, Operation} from 'iter-ops';

/**
 * Selects unique key-values, then remaps them into just values.
 */
export function distinctValues<T, R>(keySelector: (value: T) => R): Operation<T, R> {
    return i => {
        const k = distinct(keySelector)(i);
        return map(keySelector)(k);
    }
}
