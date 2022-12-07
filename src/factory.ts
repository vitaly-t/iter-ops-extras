import type {AsyncOperation, DuelOperation, SyncOperation} from 'iter-ops';
import * as duel from 'iter-ops';
import * as async from 'iter-ops/async';
import * as sync from 'iter-ops/sync';

import {IterOps} from './types';

const cache = new WeakMap();

export function createDuelOperation<T, R>(
    cb: (iterOps: IterOps) => (...args: any[]) => DuelOperation<T, R>
): (...args: any[]) => DuelOperation<T, R> {
    const cached = cache.get(cb);
    if (cached !== undefined) {
        return cached;
    }

    const fn =
        (...args: any[]): DuelOperation<T, R> =>
        (iter) =>
            cb(duel)(...args)(iter);

    cache.set(cb, fn);
    return fn;
}

export function createAsyncOperation<T, R>(
    cb: (iterOps: IterOps) => (...args: any[]) => AsyncOperation<T, R>
): (...args: any[]) => AsyncOperation<T, R> {
    const cached = cache.get(cb);
    if (cached !== undefined) {
        return cached;
    }

    const fn =
        (...args: any[]): AsyncOperation<T, R> =>
        (iter) =>
            cb(async)(...args)(iter);

    cache.set(cb, fn);
    return fn;
}

export function createSyncOperation<T, R>(
    cb: (iterOps: IterOps) => (...args: any[]) => SyncOperation<T, R>
): (...args: any[]) => SyncOperation<T, R> {
    const cached = cache.get(cb);
    if (cached !== undefined) {
        return cached;
    }

    const fn =
        (...args: any[]): SyncOperation<T, R> =>
        (iter) =>
            cb(sync)(...args)(iter);

    cache.set(cb, fn);
    return fn;
}
