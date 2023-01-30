import { StockData } from "@/examples/stockData";
import { useChartRange } from "./useChartRange";
import { normaliseValues } from "./normaliseValues";
import { generateYAxisGuides } from "./generateYAxisGuides";

const useChartVariables = ({
  days,
  lowestValue,
  highestValue,
  unitOfMeasurement,
}: StockData) => {
  const range = useChartRange({ min: lowestValue, max: highestValue });
  const yAxisGuides = generateYAxisGuides(range);

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
          demand: normaliseValues({ range, value: demand }),
          stock: normaliseValues({ range, value: stock }),
          type: type.toLowerCase() as "actual" | "today" | "projected",
        },
      })
    ),
    widthToHeightRatio: 1,
    numYAxisGuides: yAxisGuides.length,
    numXAxisBars: days.length,
    xAxisGutterPercentage: 0.75,
    yAxisGuides,
  };
};

export default useChartVariables;
