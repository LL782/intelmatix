import { CSSProperties } from "react";
import styles from "@/styles/ChartBody.module.css";
import { ChartYAxis } from "./ChartYAxis";
import { ChartBars } from "./ChartBars";
import { ChartLines } from "./ChartLines";
import { ChartXAxisLegend } from "./ChartXAxisLegend";

export const ChartBody = () => {
  const widthToHeightRatio = 1;
  const numHorizontalGuides = 5;
  const numChartBars = 3;
  const gutterPercentage = 0.75;

  const customStyle = {
    "--widthToHeightRatio": widthToHeightRatio,
    "--numHorizontalGuides": numHorizontalGuides,
    "--numChartBars": numChartBars,
    "--gutterPercentage": gutterPercentage,
  } as CSSProperties;

  return (
    <div className={styles.chartBody} style={customStyle}>
      <ChartYAxis />
      <div className={styles.chartArea}>
        <ChartBars />
        <ChartLines />
      </div>
      <ChartXAxisLegend />
    </div>
  );
};
