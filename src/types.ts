import type * as duel from 'iter-ops';
import type * as async from 'iter-ops/async';
import type * as sync from 'iter-ops/sync';

export type IterOps = {
    [key in keyof (typeof duel | typeof async | typeof sync)]: (
        ...args: any[]
    ) => any;
};
