/**
 * Groups objects by a property value.
 */
import {Operation, reduce} from 'iter-ops';

export function groupBy<T>(predicate: (v: T) => string): Operation<T, { [key: string]: T[] }> {
    return reduce((acc: { [key: string]: T[] }, value: T) => {
        (acc[predicate(value)] ||= []).push(value);
        return acc;
    }, {} as { [key: string]: T[] });
}
