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
  test("gets chart variables from the hook", () => {
    render(<ChartBody data={example} />);
    expect(mockHook).toHaveBeenCalledWith(example.days);
  });
});
