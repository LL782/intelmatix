import useChartVariables from "./useChartVariables";

describe("useChartVariables", () => {
  test("shares the width-to-height ratio of the chart", () => {
    const { widthToHeightRatio } = useChartVariables();
    expect(widthToHeightRatio).toBeDefined();
  });
});
