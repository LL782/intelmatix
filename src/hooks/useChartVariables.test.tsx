import useChartVariables from "./useChartVariables";

describe("useChartVariables", () => {
  describe("shares layout variables including:", () => {
    test("the width-to-height ratio of the chart", () => {
      const { widthToHeightRatio } = useChartVariables();
      expect(widthToHeightRatio).toBeDefined();
    });
    test("the number of y-axis guides", () => {
      const { numYAxisGuides } = useChartVariables();
      expect(numYAxisGuides).toBeDefined();
    });
    test("the number of x-axis bars", () => {
      const { numXAxisBars } = useChartVariables();
      expect(numXAxisBars).toBeDefined();
    });
    test("the gutter width between x-axis bars as a percentage", () => {
      const { xAxisGutterPercentage } = useChartVariables();
      expect(xAxisGutterPercentage).toBeDefined();
    });
  });
});
