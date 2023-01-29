import {
  Day,
  StockData,
  example,
  example as stockData,
} from "@/examples/stockData";
import useChartVariables from "./useChartVariables";
import { renderHook } from "@testing-library/react";

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
            stock: 50,
            demand: 30,
            formattedWeekDay: "Thu",
          },
          {
            type: "Today",
            formattedDate: "SEP 6rd, 2022",
            stock: 60,
            demand: 20,
            formattedWeekDay: "Wed",
          },
        ] as Day[],
        unitOfMeasurement: "kg",
      };

      const expected = [
        {
          formatted: {
            date: "SEP 7th, 2022",
            demand: "30kg",
            stock: "50kg",
            type: "Projected",
            weekDay: "Thu",
          },
          normalised: {
            demand: 0.3,
            stock: 0.5,
            type: "projected",
          },
        },
        {
          formatted: {
            date: "SEP 6rd, 2022",
            demand: "20kg",
            stock: "60kg",
            type: "Today",
            weekDay: "Wed",
          },
          normalised: {
            demand: 0.2,
            stock: 0.6,
            type: "today",
          },
        },
      ];

      const { current: result } = getResultFor(input);
      expect(result.chartDays).toEqual(expected);
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
