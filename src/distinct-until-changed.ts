import {filter, Operation} from 'iter-ops';

/**
 * Filters out repeated values.
 *
 * Do not confuse it with operator "distinct": https://vitaly-t.github.io/iter-ops/functions/distinct
 */
export function distinctUntilChanged<T>(compare?: (prev: T, curr: T) => boolean): Operation<T, T> {
    const hasCompare = typeof compare === 'function';
    return filter((value, index, state) => {
        const r = !index || !(hasCompare ? compare(state['prev'], value) : state['prev'] === value);
        state['prev'] = value;
        return r;
    });
}
