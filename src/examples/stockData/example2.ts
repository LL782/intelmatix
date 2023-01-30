import { StockData } from "@/types/StockData";
import { allItems } from "./allItems";

export const example2: StockData = {
  allItems,
  currentStock: 26,
  days: [
    {
      type: "Actual",
      formattedDate: "SEP 3rd, 2022",
      stock: 52,
      demand: 20,
      formattedWeekDay: "Sun",
    },
    {
      type: "Actual",
      formattedDate: "SEP 4th, 2022",
      stock: 40,
      demand: 16,
      formattedWeekDay: "Mon",
    },
    {
      type: "Actual",
      formattedDate: "SEP 5th, 2022",
      stock: 32,
      demand: 14,
      formattedWeekDay: "Tue",
    },
    {
      type: "Today",
      formattedDate: "SEP 6rd, 2022",
      stock: 26,
      demand: 10,
      formattedWeekDay: "Wed",
    },
    {
      type: "Projected",
      formattedDate: "SEP 7th, 2022",
      stock: 16,
      demand: 4,
      formattedWeekDay: "Thu",
    },
    {
      type: "Projected",
      formattedDate: "SEP 8th, 2022",
      stock: 12,
      demand: 5,
      formattedWeekDay: "Fri",
    },
    {
      type: "Projected",
      formattedDate: "SEP 9th, 2022",
      stock: 8,
      demand: 2,
      formattedWeekDay: "Sat",
    },
    {
      type: "Projected",
      formattedDate: "SEP 10th, 2022",
      stock: 52,
      demand: 20,
      formattedWeekDay: "Sun",
    },
    {
      type: "Projected",
      formattedDate: "SEP 11th, 2022",
      stock: 40,
      demand: 16,
      formattedWeekDay: "Mon",
    },
    {
      type: "Projected",
      formattedDate: "SEP 12th, 2022",
      stock: 32,
      demand: 14,
      formattedWeekDay: "Tue",
    },
    {
      type: "Projected",
      formattedDate: "SEP 13th, 2022",
      stock: 26,
      demand: 10,
      formattedWeekDay: "Wed",
    },
    {
      type: "Projected",
      formattedDate: "SEP 14th, 2022",
      stock: 16,
      demand: 4,
      formattedWeekDay: "Thu",
    },
    {
      type: "Projected",
      formattedDate: "SEP 15th, 2022",
      stock: 12,
      demand: 5,
      formattedWeekDay: "Fri",
    },
    {
      type: "Projected",
      formattedDate: "SEP 16th, 2022",
      stock: 6,
      demand: 3.5,
      formattedWeekDay: "Sat",
    },
  ],
  highestValue: 52,
  itemId: "9999",
  itemIcon: {
    alt: "Alt icon",
    src: "/Pickle.svg",
  },
  itemName: "All other examples",
  lowestValue: 3.5,
  maximumStock: 150,
  slug: "pickle",
  unitOfMeasurement: "kg",
};
