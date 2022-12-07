import {Operation, skip, take} from 'iter-ops';

/**
 * Implements Array->slice logic (for positive start/end only)
 */
export function slice<T>(start: number, end: number): Operation<T, T> {
    return i => {
        const k = skip<T>(start)(i);
        return take<T>(end - start)(k);
    };
}
