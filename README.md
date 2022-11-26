# iter-ops-extras

:star: Collection of custom operators for [iter-ops] - ones based on existing operators.

:bulb: It is here to show implementation examples, plus share ideas of useful operations.

:clipboard: These are just quick copy-n-paste snippets, they are not distributed anywhere.

:mega: Feel free submitting PR-s with your own custom operators, to share with others.

---

* [average](./src/average.ts) - emits an average value, with optional key selector.
* [groupBy](./src/group-by.ts) - groups objects by a property value.
* [join](./src/join.ts) - joins strings, with optional separator.
* [log](./src/log.ts) - logs values into the console.
* [max](./src/max.ts) - emits maximum value, with optional key selector.
* [min](./src/min.ts) - emits minimum value, with optional key selector.
* [minMax](./src/min-max.ts) - emits `{min, max}` in one iteration, with optional key selector.
* [slice](./src/slice.ts) - implements Array->slice logic (for positive start/end only).
* [sum](./src/sum.ts) - sums up values, with optional key selector.
* [uniqueValues](./src/unique-values.ts) - selects unique key-values, then remaps them into just values.

---

See also [Custom Operators](https://github.com/vitaly-t/iter-ops/wiki/Custom-Operators) - explains API for custom operators. 

[iter-ops]:https://github.com/vitaly-t/iter-ops
