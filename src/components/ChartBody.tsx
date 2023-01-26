import { Source_Sans_Pro } from "@next/font/google";
import styles from "@/styles/ChartBody.module.css";

const sans = Source_Sans_Pro({ subsets: ["latin"], weight: "400" });

export const ChartBody = () => (
  <div className={styles.chartBody}>
    <div className={styles.chartArea}>
      <svg className={styles.chartLine + " " + styles.actual}></svg>
      <svg className={styles.chartLine + " " + styles.projected}></svg>
      <svg className={styles.chartLine + " " + styles.demand}></svg>
      <table className={styles.table}>
        <caption className="screenReaderOnly">Stock Level for pickles</caption>
        <thead className={styles.tHead}>
          <tr className={styles.headRow}>
            <th>Stock Type</th>
            <th>Date</th>
            <th>Stocks (kg)</th>
            <th>Demand</th>
            <th>Day</th>
          </tr>
        </thead>
        <tbody className={styles.tBody}>
          <tr className={styles.tBar}>
            <td className={styles.valueType}>Actual</td>
            <td className={styles.dateValue}>SEP 5th, 2022</td>
            <td className={styles.stockValue}>70kg</td>
            <td className={styles.demandValue}>30kg</td>
            <td className={styles.barLabel}>Tue</td>
          </tr>
          <tr className={styles.tBar}>
            <td className={styles.valueType}>Today</td>
            <td className={styles.dateValue}>SEP 6rd, 2022</td>
            <td className={styles.stockValue}>60kg</td>
            <td className={styles.demandValue}>20kg</td>
            <td className={styles.barLabel}>Wed</td>
          </tr>
          <tr className={styles.tBar}>
            <td className={styles.valueType}>Projected</td>
            <td className={styles.dateValue}>SEP 7th, 2022</td>
            <td className={styles.stockValue}>50kg</td>
            <td className={styles.demandValue}>30kg</td>
            <td className={styles.barLabel}>Thu</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className={"screenOnly " + styles.yAxis}>
      <p className={styles.yAxisLabel}>kg</p>
      <ul className={styles.yAxisUnits}>
        <li className={styles.yAxisUnit}>
          <span className={styles.unitText}>100</span>
          <i className={styles.unitGuide}></i>
        </li>
        <li className={styles.yAxisUnit}>
          <span className={styles.unitText}>75</span>
          <i className={styles.unitGuide}></i>
        </li>
        <li className={styles.yAxisUnit}>
          <span className={styles.unitText}>50</span>
          <i className={styles.unitGuide}></i>
        </li>
        <li className={styles.yAxisUnit}>
          <span className={styles.unitText}>25</span>
          <i className={styles.unitGuide}></i>
        </li>
      </ul>
    </div>
    <div className={"screenOnly " + styles.xAxis}>
      <p className={styles.axisLabel}>Days</p>
    </div>
  </div>
);
