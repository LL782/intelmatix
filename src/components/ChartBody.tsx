import styles from "@/styles/ChartBody.module.css";
import { bold } from "./Fonts";

export const ChartBody = () => (
  <div className={styles.chartBody}>
    <div className={styles.yAxis}>
      <p className={styles.yAxisLegend}>kg</p>
      <ul className={styles.yAxisGuides}>
        <li className={styles.yAxisGuide}>
          <span className={styles.yAxisGuideLabel}>100</span>
          <i className={styles.yAxisGuideline}></i>
        </li>
        <li className={styles.yAxisGuide}>
          <span className={styles.yAxisGuideLabel}>75</span>
          <i className={styles.yAxisGuideline}></i>
        </li>
        <li className={styles.yAxisGuide}>
          <span className={styles.yAxisGuideLabel}>50</span>
          <i className={styles.yAxisGuideline}></i>
        </li>
        <li className={styles.yAxisGuide}>
          <span className={styles.yAxisGuideLabel}>25</span>
          <i className={styles.yAxisGuideline}></i>
        </li>
        <li className={styles.yAxisGuide}>
          <span className={styles.yAxisGuideLabel}>0</span>
          <i className={styles.yAxisGuideline}></i>
        </li>
      </ul>
    </div>
    <div className={styles.chartArea}>
      <svg className={styles.chartLines} viewBox="0 0 1000 1000">
        <polyline
          className={styles.actualLine}
          points="0,0 313,0"
          fill="none"
          stroke="black"
        />
        <polyline
          className={styles.projectedLine}
          points="313,0, 339,400 663,400 663,400 685,500 1000,500"
          fill="none"
        />
      </svg>
      <table className={styles.table}>
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
    </div>
    <div className={styles.xAxis}>
      <p className={styles.xAxisLegend}>Days</p>
    </div>
  </div>
);
