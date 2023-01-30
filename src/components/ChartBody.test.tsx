import { render } from "@testing-library/react";
import { ChartBody } from "./ChartBody";
import useChartVariables from "@/hooks/useChartVariables";
import { example } from "@/examples/stockData";
import { ChartBars } from "./ChartBars";
import { ChartDay } from "@/examples/chartDays";

jest.mock("@/hooks/useChartVariables");
const mockHook = jest.mocked<typeof useChartVariables>(useChartVariables);

jest.mock("./ChartBars");
const MockChartBars = jest.mocked<typeof ChartBars>(ChartBars);

const FAKE_HOOK_RESULT: Partial<ReturnType<typeof useChartVariables>> = {
  chartDays: [{}] as ChartDay[],
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

  test("passes the input data and the the results of the hook into chart bars", () => {
    expect(MockChartBars.mock.calls[0][0]).toEqual({
      days: FAKE_HOOK_RESULT.chartDays,
      unitOfMeasurement: example.unitOfMeasurement,
    });
  });
});
