import {distinct, map, Operation} from 'iter-ops';

/**
 * Selects unique key-values, then remaps into just values.
 */
export function distinctValues<T, R>(keySelector: (value: T, index: number) => R): Operation<T, R> {
    return i => {
        const k = distinct(keySelector)(i);
        return map(keySelector)(k);
    }
}
