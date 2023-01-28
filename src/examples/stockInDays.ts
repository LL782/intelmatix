type StockData = {
  currentStock: number;
  days: Array<Day>;
  id: string;
  itemIcon: Icon;
  itemName: string;
  maximumStock: number;
  unitOfMeasurement: "kg";
};

type Day = {
  demand: number;
  formattedDate: string;
  formattedWeekDay: string;
  stock: number;
  type: "Actual" | "Today" | "Projected";
};

type Icon = {
  alt: string;
  src: string;
};

export const example: StockData = {
  currentStock: 60,
  days: [
    {
      type: "Actual",
      formattedDate: "SEP 5th, 2022",
      stock: 100,
      demand: 30,
      formattedWeekDay: "Tue",
    },
    {
      type: "Today",
      formattedDate: "SEP 6rd, 2022",
      stock: 60,
      demand: 20,
      formattedWeekDay: "Wed",
    },
    {
      type: "Projected",
      formattedDate: "SEP 7th, 2022",
      stock: 50,
      demand: 30,
      formattedWeekDay: "Thu",
    },
  ],
  id: "#1234",
  itemIcon: {
    alt: "Pickle icon",
    src: "/Pickle.svg",
  },
  itemName: "Pickle",
  maximumStock: 150,
  unitOfMeasurement: "kg",
};
