import { StockData } from "@/examples/stockData";

const useChartVariables = ({ days }: StockData) => {
  return {
    chartDays: days.map(({ formattedDate, formattedWeekDay, type }) => ({
      formatted: {
        date: formattedDate,
        demand: "30kg",
        stock: "50kg",
        type,
        weekDay: formattedWeekDay,
      },
      normalised: {
        demand: 0.3,
        stock: 0.5,
        type: "projected",
      },
    })),
    widthToHeightRatio: 1,
    numYAxisGuides: 5,
    numXAxisBars: days.length,
    xAxisGutterPercentage: 0.75,
  };
};

export default useChartVariables;
