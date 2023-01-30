import { StockData } from "@/types/StockData";
import { useChartRange } from "./useChartRange";
import { normaliseValues } from "./normaliseValues";
import { generateYAxisGuides } from "./generateYAxisGuides";
import {
  GUTTER_WIDTH_PERCENTAGE,
  WIDTH_TO_HEIGHT_RATIO,
} from "@/config/uiVariables";

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
    widthToHeightRatio: WIDTH_TO_HEIGHT_RATIO,
    numYAxisGuides: yAxisGuides.length,
    numXAxisBars: days.length,
    xAxisGutterPercentage: GUTTER_WIDTH_PERCENTAGE,
    yAxisGuides,
  };
};

export default useChartVariables;
