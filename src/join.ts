import {aggregate, Operation} from 'iter-ops';

/**
 * Joins strings, with optional separator.
 */
export function join<T>(separator?: string): Operation<T, string> {
    return aggregate(a => a.join(separator));
}
