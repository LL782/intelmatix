import { StockData } from "../../types/StockData";
import { allItems } from "./allItems";

export const example: StockData = {
  allItems,
  currentStock: 60,
  days: [
    {
      type: "Actual",
      formattedDate: "SEP 5th, 2022",
      stock: 90,
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
  highestValue: 90,
  itemId: "0000",
  itemIcon: {
    alt: "Pickle icon",
    src: "/Pickle.svg",
  },
  itemName: "Example",
  lowestValue: 0,
  maximumStock: 150,
  slug: "pickle",
  unitOfMeasurement: "kg",
};
