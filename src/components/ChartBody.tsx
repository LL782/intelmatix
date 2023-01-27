import styles from "@/styles/ChartBody.module.css";
import { ChartYAxis } from "./ChartYAxis";
import { ChartBars } from "./ChartBars";
import { ChartLines } from "./ChartLines";
import { ChartXAxisLegend } from "./ChartXAxisLegend";

export const ChartBody = () => (
  <div className={styles.chartBody}>
    <ChartYAxis />
    <div className={styles.chartArea}>
      <ChartBars />
      <ChartLines />
    </div>
    <ChartXAxisLegend />
  </div>
);
