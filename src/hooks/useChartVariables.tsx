import { StockData } from "@/examples/stockInDays";

const useChartVariables = (data: StockData["days"]) => {
  return {
    widthToHeightRatio: 1,
    numYAxisGuides: 5,
    numXAxisBars: data.length,
    xAxisGutterPercentage: 0.75,
  };
};

export default useChartVariables;
