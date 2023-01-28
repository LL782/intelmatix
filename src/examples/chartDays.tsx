export const chartDays: ChartDay[] = [
  {
    formatted: {
      date: "SEP 5th, 2022",
      demand: "30kg",
      stock: "100kg",
      type: "Actual",
      weekDay: "Tue",
    },
    normalised: {
      demand: 0.3,
      stock: 1,
      type: "actual",
    },
  },
  {
    formatted: {
      date: "SEP 6rd, 2022",
      demand: "20kg",
      stock: "60kg",
      type: "Today",
      weekDay: "Wed",
    },
    normalised: {
      demand: 0.2,
      stock: 0.6,
      type: "today",
    },
  },
  {
    formatted: {
      date: "SEP 7th, 2022",
      demand: "30kg",
      stock: "50kg",
      type: "Projected",
      weekDay: "Thu",
    },
    normalised: {
      demand: 0.3,
      stock: 0.5,
      type: "projected",
    },
  },
];

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
