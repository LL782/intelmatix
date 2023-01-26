import { Source_Sans_Pro } from "@next/font/google";
import styles from "@/styles/ChartBody.module.css";

const sans = Source_Sans_Pro({ subsets: ["latin"], weight: "400" });

export const ChartBody = () => (
  <div className={styles.chartHolder}>
    <svg className="chartLine actual"></svg>
    <svg className="chartLine projected"></svg>
    <svg className="chartLine demand"></svg>
    <table className="chartTable">
      <caption className="screenReaderOnly">Stock Level for pickles</caption>
      <thead>
        <tr>
          <th>Stock Type</th>
          <th>Date</th>
          <th>Stocks (kg)</th>
          <th>Demand</th>
          <th>Day</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Actual</td>
          <td>SEP 5th, 2022</td>
          <td>70kg</td>
          <td>30kg</td>
          <td>Tue</td>
        </tr>
        <tr>
          <td>Today</td>
          <td>SEP 6rd, 2022</td>
          <td>60kg</td>
          <td>20kg</td>
          <td>Wed</td>
        </tr>
        <tr>
          <td>Projected</td>
          <td>SEP 7th, 2022</td>
          <td>50kg</td>
          <td>30kg</td>
          <td>Thu</td>
        </tr>
      </tbody>
    </table>
    <div className="screenOnly yAxis">
      <p className="axisLabel">kg</p>
      <ul className="axisUnits">
        <li className="axisUnit">
          <span className="unitText">100</span>
          <i className="unitGuide"></i>
        </li>
        <li className="axisUnit">
          <span className="unitText">75</span>
          <i className="unitGuide"></i>
        </li>
        <li className="axisUnit">
          <span className="unitText">50</span>
          <i className="unitGuide"></i>
        </li>
        <li className="axisUnit">
          <span className="unitText">25</span>
          <i className="unitGuide"></i>
        </li>
      </ul>
    </div>
    <div className="screenOnly xAxis">
      <p className="axisLabel">Days</p>
    </div>
  </div>
);
