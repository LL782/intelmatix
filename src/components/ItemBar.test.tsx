import { render, screen } from "@testing-library/react";
import { ItemBar } from "./ItemBar";
import { example } from "@/examples/stockData";

describe("ItemBar", () => {
  describe("Given example data", () => {
    render(<ItemBar data={example} />);
    let header: HTMLElement;

    test("renders a header", () => {
      header = screen.getByRole("header");
      expect(header).toBeDefined();
    });
    test("header contains summary", () => {
      const summary = header.querySelector('[data-testid="itemSummary"]');
      expect(summary).toMatchSnapshot();
    });
    test("header contains item select ", () => {
      const select = header.querySelector('[data-testid="itemSelect"]');
      expect(select).toMatchSnapshot();
    });
  });
});
