import { render, screen, within } from "@testing-library/react";
import { ChartBars } from "./ChartBars";
import { example as chartDays } from "@/examples/chartDays";

describe("ChartBars", () => {
  test("given a single day, renders a table with a single row", () => {
    render(<ChartBars days={[chartDays[0]]} unitOfMeasurement="abc" />);
    expect(getRows().length).toBe(1);
  });

  test("given two days, renders a table with two rows", () => {
    render(
      <ChartBars days={[chartDays[0], chartDays[1]]} unitOfMeasurement="abc" />
    );
    expect(getRows().length).toBe(2);
  });

  describe("Given different days", () => {
    let rows: HTMLElement[];
    let row: HTMLElement;
    let i = -1;
    const DAYS = [chartDays[0], chartDays[1], chartDays[2]];

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

      test("with the date, demand, stock, type and week day of each row formatted", () => {
        const { date, demand, stock, type, weekDay } = DAY.formatted;
        expect(within(row).getByText(date)).toBeDefined();
        expect(within(row).getByText(demand)).toBeDefined();
        expect(within(row).getByText(stock)).toBeDefined();
        expect(within(row).getByText(type)).toBeDefined();
        expect(within(row).getByText(weekDay)).toBeDefined();
      });
    });
  });
});

const getRows = () =>
  within(
    screen.getByRole("table").getElementsByTagName("tbody")[0]
  ).getAllByRole("row");
