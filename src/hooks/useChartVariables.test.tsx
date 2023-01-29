import { Day, example as stockData } from "@/examples/stockData";
import useChartVariables from "./useChartVariables";

const [DAY_0, DAY_1, DAY_2] = stockData.days;

describe("useChartVariables", () => {
  describe("shares general layout variables:", () => {
    const result = useChartVariables([DAY_0, DAY_1, DAY_2]);

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
    ])("shares the number of x-axis bars (%d)", (expected, input) => {
      const { numXAxisBars } = useChartVariables(input);
      expect(numXAxisBars).toBe(expected);
    });

    test("converts stock data into values for the charts", () => {
      const input: Day[] = [
        {
          type: "Projected",
          formattedDate: "SEP 7th, 2022",
          stock: 50,
          demand: 30,
          formattedWeekDay: "Thu",
        },
      ];

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
      ];

      const result = useChartVariables(input);

      expect(result.chartDays).toEqual(expected);
    });
  });
});
