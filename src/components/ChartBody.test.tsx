import { render } from "@testing-library/react";
import { ChartBody } from "./ChartBody";
import useChartVariables from "@/hooks/useChartVariables";
import { example } from "@/examples/stockData/example";
import { ChartBars } from "./ChartBars";
import { ChartDay } from "@/types/ChartDay";
import { ChartYAxis } from "./ChartYAxis";
import { ChartLines } from "./ChartLines";

jest.mock("@/hooks/useChartVariables");
const mockHook = jest.mocked<typeof useChartVariables>(useChartVariables);

jest.mock("./ChartBars");
const MockChartBars = jest.mocked<typeof ChartBars>(ChartBars);

jest.mock("./ChartLines");
const MockChartLines = jest.mocked<typeof ChartLines>(ChartLines);

jest.mock("./ChartYAxis");
const MockChartYAxis = jest.mocked<typeof ChartYAxis>(ChartYAxis);

const FAKE_HOOK_RESULT: Partial<ReturnType<typeof useChartVariables>> = {
  chartDays: [{}] as ChartDay[],
  yAxisGuides: [],
  widthToHeightRatio: 999,
};

mockHook.mockReturnValue(
  FAKE_HOOK_RESULT as ReturnType<typeof useChartVariables>
);

describe("ChartBody", () => {
  beforeAll(() => {
    render(<ChartBody data={example} />);
  });

  test("calls the chart variables hook with the data it receives", () => {
    expect(mockHook).toHaveBeenCalledWith(example);
  });

  test("passes input data and results of the hook into the chart bars", () => {
    expect(MockChartBars.mock.calls[0][0]).toEqual({
      days: FAKE_HOOK_RESULT.chartDays,
      unitOfMeasurement: example.unitOfMeasurement,
    });
  });

  test("passes input data and results of the hook into the chart lines", () => {
    expect(MockChartLines.mock.calls[0][0]).toEqual({
      chartDays: FAKE_HOOK_RESULT.chartDays,
      widthToHeightRatio: FAKE_HOOK_RESULT.widthToHeightRatio,
    });
  });

  test("passes input data and results of the hook into the y-axis", () => {
    expect(MockChartYAxis.mock.calls[0][0]).toEqual({
      unitOfMeasurement: example.unitOfMeasurement,
      yAxisGuides: FAKE_HOOK_RESULT.yAxisGuides,
    });
  });
});
