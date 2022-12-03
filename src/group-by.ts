import {Operation, reduce} from 'iter-ops';

export type GroupByResult<T> = { [key: string]: T[] };

/**
 * Groups objects by a property value.
 *
 * It works the same as Array.group:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/group
 */
export function groupBy<T>(predicate: (v: T) => string): Operation<T, GroupByResult<T>> {
    return reduce((acc: GroupByResult<T>, value: T) => {
        (acc[predicate(value)] ||= []).push(value);
        return acc;
    }, {} as GroupByResult<T>);
}
