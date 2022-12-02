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
* [filterNil](./src/filter-nil.ts) - filters out all `null` and `undefined` values.
* [groupBy](./src/group-by.ts) - groups objects by a property value.
* [join](./src/join.ts) - joins strings, with optional separator.
* [max](./src/max.ts) - emits maximum value, with optional key selector.
* [min](./src/min.ts) - emits minimum value, with optional key selector.
* [minMax](./src/min-max.ts) - emits `{min, max}` in one iteration, with optional key selector.
* [pluck](./src/pluck.ts) - maps each value to its specified nested property.
* [prependIf](./src/inject-if.ts) - conditionally injects value(s) before the current value.
* [repeatAll](./src/repeat-all.ts) - repeats the entire iterable N times.
* [replaceIf](./src/inject-if.ts) - conditionally injects value(s) in place of the current value.
* [replaceNil](./src/replace-nil.ts) - replaces every `null` and `undefined` with an alternative value.
* [slice](./src/slice.ts) - implements Array->slice logic (for positive start/end only).
* [sum](./src/sum.ts) - sums up values, with optional key selector.
* [tapLog](./src/tap-log.ts) - logs values into the console, with optional tag.
* [tapOnce](./src/tap-once.ts) - taps into the very first value only.
* [toBuffer](./src/to-buffer.ts) - converts iterable into a `Buffer`.

---

Some of these operators may eventually land in the main [iter-ops] library.
Use [Discussions], if you want to propose and vote on such additions.

In the meantime, if you want to use these, the simplest is to create `extras` folder in your project,
and copy over either select operators or the entire [./src](./src) content (it has [index.ts](./src/index.ts) with
complete exports).

See also [Custom Operators](https://github.com/vitaly-t/iter-ops/wiki/Custom-Operators) - explains API for custom
operators.

:bulb: **TIP:** Operators [consume] and [concurrencyFork] are useful helpers for custom operators.

[consume]:https://vitaly-t.github.io/iter-ops/functions/consume

[concurrencyFork]:https://vitaly-t.github.io/iter-ops/functions/concurrencyFork

[Discussions]:https://github.com/vitaly-t/iter-ops-extras/discussions

[iter-ops]:https://github.com/vitaly-t/iter-ops
