import { StockData } from "@/examples/stockData";

const useChartVariables = ({ days, unitOfMeasurement }: StockData) => {
  return {
    chartDays: days.map(
      ({ demand, formattedDate, formattedWeekDay, stock, type }) => ({
        formatted: {
          date: formattedDate,
          demand: `${demand}${unitOfMeasurement}`,
          stock: `${stock}${unitOfMeasurement}`,
          type,
          weekDay: formattedWeekDay,
        },
        normalised: {
          demand: 0.3,
          stock: 0.5,
          type: type.toLowerCase() as "actual" | "today" | "projected",
        },
      })
    ),
    widthToHeightRatio: 1,
    numYAxisGuides: 5,
    numXAxisBars: days.length,
    xAxisGutterPercentage: 0.75,
  };
};

export default useChartVariables;
