import { render } from "@testing-library/react";
import { ChartBody } from "./ChartBody";
import useChartVariables from "@/hooks/useChartVariables";
import { example } from "@/examples/stockData";

jest.mock("@/hooks/useChartVariables");
const mockHook = jest.mocked<typeof useChartVariables>(useChartVariables);

mockHook.mockImplementation(() =>
  jest.requireActual("@/hooks/useChartVariables")
);

describe("ChartBody", () => {
  test("calls the chart variables hook with the data it receives", () => {
    render(<ChartBody data={example} />);
    expect(mockHook).toHaveBeenCalledWith(example);
  });
});
