import {Operation, reduce} from 'iter-ops';

export type GroupByResult<T> = { [key: string]: T[] };

/**
 * Groups objects by a property value.
 */
export function groupBy<T>(predicate: (v: T) => string): Operation<T, GroupByResult<T>> {
    return reduce((acc: GroupByResult<T>, value: T) => {
        (acc[predicate(value)] ||= []).push(value);
        return acc;
    }, {} as GroupByResult<T>);
}
