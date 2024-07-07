# iter-ops-extras

:star: Collection of custom operators for [iter-ops] - ones based on existing operators.

:bulb: It is here to show implementation examples, plus share ideas of useful operations.

:clipboard: These are just quick copy-n-paste snippets, they are not distributed anywhere.

:mega: Feel free submitting PR-s with your own custom operators, to share with others.

---

* [appendIf](./src/inject-if.ts) - conditionally injects value(s) after the current value.
* [average](./src/average.ts) - emits an average value, with optional key selector.
* [distinctUntilChanged](./src/distinct-until-changed.ts) - filters out repeated values.
* [distinctValues](./src/distinct-values.ts) - selects unique key-values, then remaps into just values.
* [flat/flatMap](./src/flat.ts) - replacement for default ones, to replicate Array's methods.
* [group](./src/group.ts) - groups objects by a property value.
* [join](./src/join.ts) - joins strings, with optional separator.
* [mapWait](./src/map-wait.ts) - remaps and sequentially awaits promises.
* [max](./src/max.ts) - emits maximum value, with optional key selector.
* [min](./src/min.ts) - emits minimum value, with optional key selector.
* [numberStats](./src/number-stats.ts) - emits basic number statistics: `{min, max, avg, sum, count}`.
* [pluck](./src/pluck.ts) - maps each value to its specified nested property.
* [prependIf](./src/inject-if.ts) - conditionally injects value(s) before the current value.
* [removeNotType](./src/remove-type.ts) - removes values that are not of specified primitive type(s).
* [removeType](./src/remove-type.ts) - removes values of specified primitive type(s).
* [removeNil](./src/remove-nil.ts) - removes all `null` and `undefined` values.
* [repeatAll](./src/repeat-all.ts) - repeats the entire iterable N times.
* [replaceIf](./src/inject-if.ts) - conditionally injects value(s) in place of the current value.
* [replaceNil](./src/replace-nil.ts) - replaces every `null` and `undefined` with an alternative value.
* [slice](./src/slice.ts) - implements Array->slice logic (for positive start/end only).
* [sum](./src/sum.ts) - sums up values, with optional key selector.
* [tapLog](./src/tap-log.ts) - logs values into the console, with optional tag + selector.
* [tapOnce](./src/tap-once.ts) - taps into the very first value only.
* [toBuffer](./src/to-buffer.ts) - emits a `Buffer` from the iterable.
* [toReadable](./src/to-readable.ts) - emits a `Readable` stream from the iterable.

---

To use these, create a folder in your project, and copy over either select operators or the entire [./src](./src)
folder, which also has file [./src/index.ts](./src/index.ts) that includes everything.

Some of these operators may eventually land in the main [iter-ops] library.
Use [Discussions], if you want to propose and vote on such additions.

See also [Custom Operators](https://github.com/vitaly-t/iter-ops/wiki/Custom-Operators) - explains API for custom
operators.

:bulb: **TIP:** Operators [consume] and [concurrencyFork] are useful helpers for custom operators.

[consume]:https://vitaly-t.github.io/iter-ops/functions/consume

[concurrencyFork]:https://vitaly-t.github.io/iter-ops/functions/concurrencyFork

[Discussions]:https://github.com/vitaly-t/iter-ops-extras/discussions

[iter-ops]:https://github.com/vitaly-t/iter-ops
