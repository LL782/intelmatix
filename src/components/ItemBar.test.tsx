import { render, screen } from "@testing-library/react";
import { ItemBar } from "./ItemBar";
import { example } from "@/examples/stockData/example";

describe("ItemBar", () => {
  describe("Given example data", () => {
    render(<ItemBar data={example} />);
    let header: HTMLElement;

    test("renders a component", () => {
      header = screen.getByTestId("itemBar");
      expect(header).toBeDefined();
    });
    test("...that contains a summary", () => {
      const summary = header.querySelector('[data-testid="itemSummary"]');
      expect(summary).toMatchSnapshot();
    });
    test("the contains the item select ", () => {
      const select = header.querySelector('[data-testid="itemSelect"]');
      expect(select).toMatchSnapshot();
    });
  });
});
