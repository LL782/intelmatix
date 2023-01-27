import styles from "@/styles/ChartBars.module.css";
import { bold } from "./Fonts";

export const ChartBars = () => (
  <table className={styles.chartBars}>
    <caption className="screenReaderOnly">Stock Level for pickles</caption>
    <thead className="screenReaderOnly">
      <tr>
        <th>Stock Type</th>
        <th>Date</th>
        <th>Stocks (kg)</th>
        <th>Demand</th>
        <th>Day</th>
      </tr>
    </thead>
    <tbody className={styles.tBody}>
      <tr className={styles.actual} style={{ ["--volume" as any]: 1 }}>
        <td className={styles.valueType}>Actual</td>
        <td className={styles.dateValue}>SEP 5th, 2022</td>
        <td className={styles.stockValue} style={{ height: "100%" }}>
          100kg
        </td>
        <td className="screenReaderOnly">30kg</td>
        <td className={styles.barLabel}>Tue</td>
      </tr>
      <tr className={styles.today} style={{ ["--volume" as any]: 0.6 }}>
        <td className={styles.valueType}>Today</td>
        <td className={styles.dateValue}>SEP 6rd, 2022</td>
        <td className={styles.stockValue} style={{ height: "60%" }}>
          60kg
        </td>
        <td className="screenReaderOnly">20kg</td>
        <td className={bold.className + " " + styles.barLabel}>Wed</td>
      </tr>
      <tr className={styles.projected} style={{ ["--volume" as any]: 0.5 }}>
        <td className={styles.valueType}>Projected</td>
        <td className={styles.dateValue}>SEP 7th, 2022</td>
        <td className={styles.stockValue} style={{ height: "50%" }}>
          50kg
        </td>
        <td className="screenReaderOnly">30kg</td>
        <td className={styles.barLabel}>Thu</td>
      </tr>
    </tbody>
  </table>
);
