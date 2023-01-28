import { render, screen, within } from "@testing-library/react";
import { ChartBars } from "./ChartBars";
import { ChartDay, chartDays } from "@/examples/chartDays";

const DAY_ONE = chartDays[0];
const DAY_TWO = chartDays[1];
const DAY_THREE = chartDays[2];

describe("ChartBars", () => {
  test("given a single day, renders a table with a single row", () => {
    render(<ChartBars days={[DAY_ONE]} unitOfMeasurement="abc" />);
    expect(getRows().length).toBe(1);
  });

  test("given two days, renders a table with two rows", () => {
    render(<ChartBars days={[DAY_ONE, DAY_TWO]} unitOfMeasurement="abc" />);
    expect(getRows().length).toBe(2);
  });

  describe("Given different days", () => {
    let rows: HTMLElement[];
    let row: HTMLElement;
    let i = -1;
    const DAYS = [DAY_ONE, DAY_TWO, DAY_THREE];

    beforeAll(() => {
      render(<ChartBars days={DAYS} unitOfMeasurement="abc" />);
      rows = getRows();
    });

    describe.each(DAYS)("each day renders as a row", (DAY) => {
      beforeAll(() => {
        i++;
        row = rows[i];
      });

      test("with the correct class name", () => {
        expect(row.classList[0]).toEqual(DAY.normalised.type);
      });

      test("with the stock volume passed into the CSS", () => {
        expect(row.style["_values" as any]["--volume" as any]).toEqual(
          `${DAY.normalised.stock}`
        );
      });
    });
  });
});

const getRows = () =>
  within(
    screen.getByRole("table").getElementsByTagName("tbody")[0]
  ).getAllByRole("row");
