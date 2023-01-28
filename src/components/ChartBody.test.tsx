import { render } from "@testing-library/react";
import { ChartBody } from "./ChartBody";
import useChartVariables from "@/hooks/useChartVariables";

jest.mock("@/hooks/useChartVariables");
const mockHook = jest.mocked<typeof useChartVariables>(useChartVariables);

mockHook.mockImplementation(() =>
  jest.requireActual("@/hooks/useChartVariables")
);

describe("ChartBody", () => {
  test("gets chart variables from the hook", () => {
    render(<ChartBody />);
    expect(mockHook).toHaveBeenCalled();
  });
});
