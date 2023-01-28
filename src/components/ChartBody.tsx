import { CSSProperties } from "react";
import styles from "@/styles/ChartBody.module.css";
import useChartVariables from "@/hooks/useChartVariables";

import { ChartYAxis } from "./ChartYAxis";
import { ChartBars } from "./ChartBars";
import { ChartLines } from "./ChartLines";
import { ChartXAxisLegend } from "./ChartXAxisLegend";

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
