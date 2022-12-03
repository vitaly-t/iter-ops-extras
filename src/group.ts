import {Operation, reduce} from 'iter-ops';

export type GroupResult<T> = { [key: string]: T[] };

/**
 * Groups objects by a property value.
 *
 * It works the same as `Array.group`, but without support for non-array (`ArrayLike`) objects.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/group
 */
export function group<T extends object>(predicate: (v: T) => string): Operation<T, GroupResult<T>> {
    return reduce((acc: GroupResult<T>, value: T) => {
        (acc[predicate(value)] ||= []).push(value);
        return acc;
    }, {} as GroupResult<T>);
}
