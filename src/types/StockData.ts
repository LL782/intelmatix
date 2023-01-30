export type StockData = {
  allItems: Array<{
    itemName: string;
    itemId: string;
    slug: string;
  }>;
  currentStock: number;
  days: Array<Day>;
  highestValue: number;
  itemId: string;
  itemIcon: Icon;
  itemName: string;
  lowestValue: number;
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
