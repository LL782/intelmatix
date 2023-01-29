import { useChartRange } from "./useChartRange";

const scenarios = [
  {
    desc: "rounds max and min values to the nearest ten",
    input: { min: 1, max: 2 },
    output: { min: 0, max: 10 },
  },
  {
    desc: "adds or subtracts ten to round numbers",
    input: { min: 20, max: 30 },
    output: { min: 10, max: 40 },
  },
  {
    desc: "doesn't round below zero",
    input: { min: 0, max: 30 },
    output: { min: 0, max: 40 },
  },
  {
    desc: "works for all sorts of values",
    input: { min: 99, max: 151 },
    output: { min: 90, max: 160 },
  },
];

describe.each(scenarios)("useChartRange", ({ desc, input, output }) => {
  test(desc, () => {
    expect(useChartRange(input)).toEqual(output);
  });
});
