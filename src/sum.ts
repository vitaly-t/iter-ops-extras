import {Operation, reduce} from 'iter-ops';

/**
 * Sums up a sequence of numbers.
 */
export function sum(): Operation<number, number> {
    return reduce((p: number, c: number) => p + c);
}
