import { example, example as stockData } from "@/examples/stockData/example";
import { Day, StockData } from "@/types/StockData";
import useChartVariables from "./useChartVariables";
import { renderHook } from "@testing-library/react";
import {
  WIDTH_TO_HEIGHT_RATIO,
  GUTTER_WIDTH_PERCENTAGE,
} from "@/config/UI_CONSTANTS";

const [DAY_0, DAY_1, DAY_2] = stockData.days;

describe("useChartVariables", () => {
  describe("shares general layout variables:", () => {
    const input = { days: [DAY_0, DAY_1, DAY_2] };
    const { current: result } = getResultFor(input);

    test("the width-to-height ratio of the chart", () => {
      const { widthToHeightRatio } = result;
      expect(widthToHeightRatio).toBeDefined();
    });
    test("the gutter width between x-axis bars as a percentage", () => {
      const { xAxisGutterPercentage } = result;
      expect(xAxisGutterPercentage).toBeDefined();
    });

    test("the number of y-axis guides", () => {
      const { numYAxisGuides } = result;
      expect(numYAxisGuides).toBeDefined();
    });
  });

  describe("generates variables based on the data passes in", () => {
    test.each([
      [1, [DAY_0], 1],
      [2, [DAY_0, DAY_1], 2],
      [3, [DAY_0, DAY_1, DAY_2], 3],
    ])("shares the number of x-axis bars (%d)", (expected, days) => {
      const input = { days };
      const { current } = getResultFor(input);
      expect(current.numXAxisBars).toBe(expected);
    });

    test("converts stock data into values for the charts", () => {
      const input: Partial<StockData> = {
        days: [
          {
            type: "Projected",
            formattedDate: "SEP 7th, 2022",
            stock: 90,
            demand: 60,
            formattedWeekDay: "Thu",
          },
          {
            type: "Today",
            formattedDate: "SEP 6rd, 2022",
            stock: 30,
            demand: 10,
            formattedWeekDay: "Wed",
          },
        ] as Day[],
        highestValue: 90,
        lowestValue: 10,
        unitOfMeasurement: "kg",
      };

      const expected = {
        chartDays: [
          {
            formatted: {
              date: "SEP 7th, 2022",
              demand: "60kg",
              stock: "90kg",
              type: "Projected",
              weekDay: "Thu",
            },
            normalised: {
              demand: 0.6,
              stock: 0.9,
              type: "projected",
            },
          },
          {
            formatted: {
              date: "SEP 6rd, 2022",
              demand: "10kg",
              stock: "30kg",
              type: "Today",
              weekDay: "Wed",
            },
            normalised: {
              demand: 0.1,
              stock: 0.3,
              type: "today",
            },
          },
        ],
        numXAxisBars: 2,
        numYAxisGuides: 11,
        widthToHeightRatio: WIDTH_TO_HEIGHT_RATIO,
        xAxisGutterPercentage: GUTTER_WIDTH_PERCENTAGE,
        yAxisGuides: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      };

      const { current: result } = getResultFor(input);
      expect(result).toEqual(expected);
    });
  });
});

function getResultFor(input: Partial<StockData>) {
  const data = {
    ...example,
    ...input,
  };
  const { result } = renderHook(useChartVariables, { initialProps: data });
  return result;
}
