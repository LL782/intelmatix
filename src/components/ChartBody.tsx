import styles from "@/styles/ChartBody.module.css";

export const ChartBody = () => (
  <div className={styles.chartBody}>
    <div className={styles.chartArea}>
      <svg className={styles.chartLines} viewBox="0 0 1000 1000">
        <polyline
          className={styles.actualLine}
          points="0,300 333,300"
          fill="none"
          stroke="black"
        />
        <polyline
          className={styles.projectedLine}
          points="330,300, 336.6,400 670,400 670,400 680,500 1000,500"
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
          <tr className={styles.tBar}>
            <td className={styles.valueType}>Actual</td>
            <td className={styles.dateValue}>SEP 5th, 2022</td>
            <td className={styles.stockValue} style={{ height: "70%" }}>
              70kg
            </td>
            <td className="screenReaderOnly">30kg</td>
            <td className={styles.barLabel}>Tue</td>
          </tr>
          <tr className={styles.tBar}>
            <td className={styles.valueType}>Today</td>
            <td className={styles.dateValue}>SEP 6rd, 2022</td>
            <td className={styles.stockValue} style={{ height: "60%" }}>
              60kg
            </td>
            <td className="screenReaderOnly">20kg</td>
            <td className={styles.barLabel}>Wed</td>
          </tr>
          <tr className={styles.tBar}>
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
