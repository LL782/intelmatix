export type StockData = {
  allItems: Array<{
    itemName: string;
    itemId: string;
    slug: string;
  }>;
  currentStock: number;
  days: Array<Day>;
  itemId: string;
  itemIcon: Icon;
  itemName: string;
  maximumStock: number;
  slug: string;
  unitOfMeasurement: "kg";
};

export type Day = {
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
  allItems: [
    {
      itemName: "Pickle",
      itemId: "1234",
      slug: "pickle",
    },
    {
      itemName: "Cheese",
      itemId: "2345",
      slug: "cheese",
    },
    {
      itemName: "Pattie",
      itemId: "3456",
      slug: "pattie",
    },
    {
      itemName: "Bun",
      itemId: "4567",
      slug: "bun",
    },
    {
      itemName: "Lettuce",
      itemId: "5678",
      slug: "lettuce",
    },
  ],
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
  itemId: "1234",
  itemIcon: {
    alt: "Pickle icon",
    src: "/Pickle.svg",
  },
  itemName: "Pickle",
  maximumStock: 150,
  slug: "pickle",
  unitOfMeasurement: "kg",
};
