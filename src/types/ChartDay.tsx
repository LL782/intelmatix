export type ChartDay = {
  formatted: {
    date: string;
    demand: string;
    stock: string;
    type: "Actual" | "Today" | "Projected";
    weekDay: string;
  };
  normalised: {
    demand: number;
    stock: number;
    type: "actual" | "today" | "projected";
  };
};
