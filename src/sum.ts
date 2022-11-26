/**
 * Sums up a sequence of numbers.
 */
import {Operation, reduce} from 'iter-ops';

export function sum(): Operation<number, number> {
    return reduce((p: number, c: number) => p + c);
}
