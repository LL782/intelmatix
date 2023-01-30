import { CSSProperties } from "react";
import styles from "@/styles/ChartBody.module.css";
import useChartVariables from "@/hooks/useChartVariables";

import { ChartYAxis } from "./ChartYAxis";
import { ChartBars } from "./ChartBars";
import { ChartLines } from "./ChartLines";
import { ChartXAxisLegend } from "./ChartXAxisLegend";
import { StockData } from "@/examples/stockData";

interface Props {
  data: StockData;
}

export const ChartBody = ({ data }: Props) => {
  const { unitOfMeasurement } = data;

  const {
    chartDays,
    widthToHeightRatio,
    numYAxisGuides,
    numXAxisBars,
    xAxisGutterPercentage,
    yAxisGuides,
  } = useChartVariables(data);

  const customStyle = {
    "--widthToHeightRatio": widthToHeightRatio,
    "--numYAxisGuides": numYAxisGuides,
    "--numXAxisBars": numXAxisBars,
    "--xAxisGutterPercentage": xAxisGutterPercentage,
  } as CSSProperties;

  return (
    <div className={styles.chartBody} style={customStyle}>
      <ChartYAxis
        unitOfMeasurement={unitOfMeasurement}
        yAxisGuides={yAxisGuides}
      />
      <div className={styles.chartArea}>
        <ChartBars days={chartDays} unitOfMeasurement={unitOfMeasurement} />
        <ChartLines
          chartDays={chartDays}
          gutterWidthPercentage={xAxisGutterPercentage}
          widthToHeightRatio={widthToHeightRatio}
        />
      </div>
      <ChartXAxisLegend />
    </div>
  );
};
