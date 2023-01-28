import { CSSProperties } from "react";
import styles from "@/styles/ChartBody.module.css";
import { ChartYAxis } from "./ChartYAxis";
import { ChartBars } from "./ChartBars";
import { ChartLines } from "./ChartLines";
import { ChartXAxisLegend } from "./ChartXAxisLegend";
import useChartVariables from "@/hooks/useChartVariables";

export const ChartBody = () => {
  const {
    widthToHeightRatio,
    numYAxisGuides,
    numXAxisBars,
    xAxisGutterPercentage,
  } = useChartVariables();

  const customStyle = {
    "--widthToHeightRatio": widthToHeightRatio,
    "--numYAxisGuides": numYAxisGuides,
    "--numXAxisBars": numXAxisBars,
    "--xAxisGutterPercentage": xAxisGutterPercentage,
  } as CSSProperties;

  return (
    <div className={styles.chartBody} style={customStyle}>
      <ChartYAxis />
      <div className={styles.window}>
        <div className={styles.chartArea}>
          <ChartBars />
          <ChartLines />
        </div>
      </div>
      <ChartXAxisLegend />
    </div>
  );
};
