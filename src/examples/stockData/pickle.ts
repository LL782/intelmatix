import { StockData } from "@/types/StockData";

export const pickle: StockData = {
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
      stock: 52,
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
    {
      type: "Projected",
      formattedDate: "SEP 8th, 2022",
      stock: 20,
      demand: 9,
      formattedWeekDay: "Fri",
    },
  ],
  highestValue: 60,
  itemId: "1234",
  itemIcon: {
    alt: "Pickle icon",
    src: "/Pickle.svg",
  },
  itemName: "Pickle",
  lowestValue: 0,
  maximumStock: 150,
  slug: "pickle",
  unitOfMeasurement: "kg",
};
