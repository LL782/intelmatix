import { normaliseValues } from "./normaliseValues";

const scenarios = [
  {
    input: { range: { min: 0, max: 1 }, value: 0 },
    output: 0,
  },
  {
    input: { range: { min: 10, max: 20 }, value: 10 },
    output: 0,
  },
  {
    input: { range: { min: 10, max: 20 }, value: 20 },
    output: 1,
  },
  {
    input: { range: { min: 10, max: 25 }, value: 25 },
    output: 1,
  },
  {
    input: { range: { min: 0, max: 10 }, value: 5 },
    output: 0.5,
  },
  {
    input: { range: { min: 1, max: 11 }, value: 6 },
    output: 0.5,
  },
  {
    input: { range: { min: 10, max: 110 }, value: 35 },
    output: 0.25,
  },
  {
    input: {
      range: { min: 100_000_000_000, max: 1_100_000_000_000 },
      value: 350_000_000_000,
    },
    output: 0.25,
  },
  {
    input: {
      range: { min: 0, max: 3 },
      value: 1,
    },
    output: 0.333,
  },
];

describe("normaliseValues", () => {
  describe("returns a number between 0-1 based on a value within a range", () => {
    test.each(scenarios)("scenario: %#", ({ input, output }) => {
      expect(normaliseValues(input)).toEqual(output);
    });
  });
});
