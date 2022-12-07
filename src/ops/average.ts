import {
    IterationState,
    DuelOperation,
    AsyncOperation,
    SyncOperation,
} from 'iter-ops';

import {
    createDuelOperation,
    createAsyncOperation,
    createSyncOperation,
} from '../factory';
import {IterOps} from '../types';

export function average<T>(): DuelOperation<T, T>;
export function average<T, R>(
    keySelector: (value: T) => R
): DuelOperation<T, R>;

/**
 * Emits an average value, with optional key selector.
 */
export function average(...args: any[]) {
    return createDuelOperation(cb)(...args);
}

export function averageAsync<T>(): AsyncOperation<T, T>;
export function averageAsync<T, R>(
    keySelector: (value: T) => R
): AsyncOperation<T, R>;

/**
 * Emits an average value, with optional key selector.
 */
export function averageAsync(...args: any[]) {
    return createAsyncOperation(cb)(...args);
}

export function averageSync<T>(): SyncOperation<T, T>;
export function averageSync<T, R>(
    keySelector: (value: T) => R
): SyncOperation<T, R>;

/**
 * Emits an average value, with optional key selector.
 */
export function averageSync(...args: any[]) {
    return createSyncOperation(cb)(...args);
}

function cb(iterOps: IterOps) {
    return <T, R>(keySelector?: (value: T) => R) => {
        let cb;
        if (keySelector) {
            cb = (p: any, c: T, idx: number, state: IterationState) => {
                const a = idx > 1 ? p : keySelector(p);
                state.sum = (state.sum ?? a) + keySelector(c);
                return a && state.sum / (idx + 1);
            };
        } else {
            cb = (p: any, c: T, idx: number, state: IterationState) => {
                state.sum = (state.sum ?? p) + c;
                return p && state.sum / (idx + 1);
            };
        }
        return iterOps.reduce(cb);
    };
}
