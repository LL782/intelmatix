import { generateYAxisGuides } from "./generateYAxisGuides";

const scenarios = [
  {
    input: { min: 0, max: 100 },
    output: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  },
  {
    input: { min: 0, max: 60 },
    output: [0, 10, 20, 30, 40, 50, 60],
  },
  {
    input: { min: 0, max: 10 },
    output: [0, 10],
  },
  {
    input: { min: 1, max: 10 },
    output: [1],
  },
  {
    input: { min: 1, max: 20 },
    output: [1, 11],
  },
];

describe("generateYAxisGuides", () => {
  describe("outputs an array of guides based on the given range", () => {
    test.each(scenarios)("scenario: %#", ({ input, output }) => {
      expect(generateYAxisGuides(input)).toEqual(output);
    });
  });
});
