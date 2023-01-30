import { describe } from "node:test";
import { useSVG } from "./useSVG";
import { ChartDay } from "@/examples/chartDays";

const scenarios = [
  {
    input: {
      chartDays: [
        { normalised: { demand: 0, type: "actual" } },
        { normalised: { demand: 0, type: "today" } },
        { normalised: { demand: 0, type: "projected" } },
        { normalised: { demand: 0, type: "projected" } },
      ] as ChartDay[],
      gutterWidthPercentage: 0,
      aspectRatio: 1,
    },
    output: {
      viewBox: "0 0 1000 1000",
      actualLine: "0,1000 250,1000",
      projectedLine:
        "250,1000 250,1000 500,1000 500,1000 750,1000 750,1000 1000,1000",
    },
  },
  {
    input: {
      chartDays: [
        { normalised: { demand: 0, type: "actual" } },
        { normalised: { demand: 0, type: "today" } },
        { normalised: { demand: 0, type: "projected" } },
        { normalised: { demand: 0, type: "projected" } },
      ] as ChartDay[],
      gutterWidthPercentage: 0,
      aspectRatio: 0.5,
    },
    output: {
      viewBox: "0 0 1000 500",
      actualLine: "0,500 250,500",
      projectedLine: "250,500 250,500 500,500 500,500 750,500 750,500 1000,500",
    },
  },
  {
    input: {
      chartDays: [
        { normalised: { demand: 0, type: "actual" } },
        { normalised: { demand: 0, type: "actual" } },
        { normalised: { demand: 0, type: "today" } },
        { normalised: { demand: 0, type: "projected" } },
      ] as ChartDay[],
      gutterWidthPercentage: 0,
      aspectRatio: 0.5,
    },
    output: {
      viewBox: "0 0 1000 500",
      actualLine: "0,500 250,500 250,500 500,500",
      projectedLine: "500,500 500,500 750,500 750,500 1000,500",
    },
  },
];

describe("useSVG", () => {
  describe("provides a coordinates for an SVG with two polylines based on an aspect ratio and normalised chart data", () => {
    test.each(scenarios)("scenario: %#", ({ input, output }) => {
      expect(useSVG(input)).toEqual(output);
    });
  });
});
