import { describe } from "node:test";
import { useSVG } from "./useSVG";
import { ChartDay } from "@/examples/chartDays";

const scenarios = [
  {
    desc: "outputs coordinates for an SVG",
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
    desc: "adjusts y-coords based on the aspect ratio",
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
    desc: "separates actual from projected demand",
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
  {
    desc: "offsets points to account for the gutter width",
    input: {
      chartDays: [
        { normalised: { demand: 0, type: "actual" } },
        { normalised: { demand: 0, type: "actual" } },
      ] as ChartDay[],
      gutterWidthPercentage: 5,
      aspectRatio: 0.5,
    },
    output: {
      viewBox: "0 0 1000 500",
      actualLine: "0,500 475,500 525,500 1000,500",
      projectedLine: "",
    },
  },
  {
    desc: "handles multiple gutters",
    input: {
      chartDays: [
        { normalised: { demand: 0, type: "actual" } },
        { normalised: { demand: 0, type: "actual" } },
        { normalised: { demand: 0, type: "actual" } },
      ] as ChartDay[],
      gutterWidthPercentage: 5,
      aspectRatio: 0.5,
    },
    output: {
      viewBox: "0 0 1000 500",
      actualLine: "0,500 300,500 350,500 650,500 700,500 1000,500",
      projectedLine: "",
    },
  },
];

describe("useSVG", () => {
  test.each(scenarios)("$desc", ({ input, output }) => {
    expect(useSVG(input)).toEqual(output);
  });
});
