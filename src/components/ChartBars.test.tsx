import { render, screen, within } from "@testing-library/react";
import { ChartBars } from "./ChartBars";
import { StockData } from "@/examples/stockInDays";

const DAY_ONE: StockData["days"][0] = {
  demand: 30,
  formattedDate: "SEP 5th, 2022",
  formattedWeekDay: "Tue",
  stock: 100,
  type: "Actual",
};
const DAY_TWO: StockData["days"][0] = {
  demand: 20,
  formattedDate: "SEP 6rd, 2022",
  formattedWeekDay: "Wed",
  stock: 60,
  type: "Today",
};
const DAY_THREE: StockData["days"][0] = {
  demand: 30,
  formattedDate: "SEP 7th, 2022",
  formattedWeekDay: "Thu",
  stock: 50,
  type: "Projected",
};

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
        expect(row.classList[0]).toEqual(DAY.type.toLowerCase());
      });

      test("with the stock volume passed into the CSS", () => {
        expect(row.style["_values" as any]["--volume" as any]).toEqual(
          DAY.stock
        );
      });
    });
  });
});

const getRows = () =>
  within(
    screen.getByRole("table").getElementsByTagName("tbody")[0]
  ).getAllByRole("row");
