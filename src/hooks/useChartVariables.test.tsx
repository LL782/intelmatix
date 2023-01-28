import { example } from "@/examples/stockInDays";
import useChartVariables from "./useChartVariables";

describe("useChartVariables", () => {
  describe("Given three days of data", () => {
    const result = useChartVariables(example.days);

    test("shares the number of x-axis bars (3)", () => {
      const { numXAxisBars } = result;
      expect(numXAxisBars).toBe(3);
    });

    describe("shares general layout variables:", () => {
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
  });

  describe("Given two days of data", () => {
    const result = useChartVariables([example.days[0], example.days[1]]);

    test("shares the number of x-axis bars (2)", () => {
      const { numXAxisBars } = result;
      expect(numXAxisBars).toBe(2);
    });
  });
});
