import {map, Operation} from 'iter-ops';

export function pluck<T, K1 extends keyof T>(k1: K1): Operation<T, T[K1]>;
export function pluck<T, K1 extends keyof T, K2 extends keyof T[K1]>(k1: K1, k2: K2): Operation<T, T[K1][K2]>;
export function pluck<T, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2]>(k1: K1, k2: K2, k3: K3): Operation<T, T[K1][K2][K3]>;
export function pluck<T,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3]>(k1: K1, k2: K2, k3: K3, k4: K4): Operation<T, T[K1][K2][K3][K4]>;
export function pluck<T,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4]>(k1: K1, k2: K2, k3: K3, k4: K4, k5: K5): Operation<T, T[K1][K2][K3][K4][K5]>;

export function pluck<T,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4],
    K6 extends keyof T[K1][K2][K3][K4][K5]>(k1: K1, k2: K2, k3: K3, k4: K4, k5: K5, k6: K6): Operation<T, T[K1][K2][K3][K4][K5][K6]>;
export function pluck<T,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4],
    K6 extends keyof T[K1][K2][K3][K4][K5]>(k1: K1, k2: K2, k3: K3, k4: K4, k5: K5, k6: K6, ...rest: string[]): Operation<T, unknown>;
export function pluck<T>(...properties: string[]): Operation<T, unknown>;

/**
 * Maps each value to its specified nested property.
 */
export function pluck<T>(...props: string[]): Operation<T, T> {
    return map(a => {
        if (!props.length) {
            throw new TypeError('List of properties cannot be empty.');
        }
        return props.reduce((p, c) => p && p[c], a);
    });
}
