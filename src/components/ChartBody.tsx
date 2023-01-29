import { CSSProperties } from "react";
import styles from "@/styles/ChartBody.module.css";
import useChartVariables from "@/hooks/useChartVariables";

import { ChartYAxis } from "./ChartYAxis";
import { ChartBars } from "./ChartBars";
import { ChartLines } from "./ChartLines";
import { ChartXAxisLegend } from "./ChartXAxisLegend";
import { StockData } from "@/examples/stockData";
import { example } from "@/examples/chartDays";

interface Props {
  data: StockData;
}

export const ChartBody = ({ data }: Props) => {
  const { unitOfMeasurement } = data;

  const {
    widthToHeightRatio,
    numYAxisGuides,
    numXAxisBars,
    xAxisGutterPercentage,
  } = useChartVariables(data);

  const customStyle = {
    "--widthToHeightRatio": widthToHeightRatio,
    "--numYAxisGuides": numYAxisGuides,
    "--numXAxisBars": numXAxisBars,
    "--xAxisGutterPercentage": xAxisGutterPercentage,
  } as CSSProperties;

  return (
    <div className={styles.chartBody} style={customStyle}>
      <ChartYAxis unitOfMeasurement={unitOfMeasurement} />
      <div className={styles.window}>
        <div className={styles.chartArea}>
          <ChartBars days={example} unitOfMeasurement={unitOfMeasurement} />
          <ChartLines />
        </div>
      </div>
      <ChartXAxisLegend />
    </div>
  );
};
