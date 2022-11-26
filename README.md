# iter-ops-extras

:star: Collection of custom operators for [iter-ops] - ones based on existing operators.

:bulb: It is here to show implementation examples, plus share ideas of useful operations.

:clipboard: These are just quick copy-n-paste snippets, they are not distributed anywhere.

:mega: Feel free submitting PR-s with your own custom operators, to share with others.

---

* [average](./src/average.ts) - Emits an average value, with optional key selector.
* [groupBy](./src/group-by.ts) - Groups objects by a property value.
* [join](./src/join.ts) - Joins strings, with optional separator.
* [log](./src/log.ts) - Logs values into the console.
* [max](./src/max.ts) - Emits maximum value, with optional key selector.
* [min](./src/min.ts) - Emits minimum value, with optional key selector.
* [minMax](./src/min-max.ts) - Emits `{min, max}` in one iteration, with optional key selector.
* [slice](./src/slice.ts) - Implements Array->slice logic (for positive start/end only).
* [sum](./src/sum.ts) - Sums up values, with optional key selector.
* [uniqueValues](./src/unique-values.ts) - Selects unique key-values, then remaps them into just values.

---

See also [Custom Operators](https://github.com/vitaly-t/iter-ops/wiki/Custom-Operators) - explains API for custom operators. 

[iter-ops]:https://github.com/vitaly-t/iter-ops
