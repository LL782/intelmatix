import { Source_Sans_Pro } from "@next/font/google";
import Head from "next/head";
import styles from "@/styles/StockLevel.module.css";

const sans = Source_Sans_Pro({ subsets: ["latin"], weight: "400" });

const ExampleStockPage = () => (
  <>
    <Head>
      <title>Stock Control - Example - Intelmatix x LL782</title>
      <meta name="description" content="Example application" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={`${styles.main} ${sans.className}`}>
      <button className="closeButton">
        <span className="screenReaderOnly">Close</span>
        <i className="closeIcon"></i>
      </button>
      <header className="itemSelector">
        <div className="itemSummary">
          <div className="itemIconSlot"></div>
          <h1 className="itemName">Pickle</h1>
          <p className="itemStock">
            <span className="currentStock">60kg</span>/
            <span className="maximumStock">150kg</span>
          </p>
        </div>
        <div className="itemSelect">
          <i className="itemMenuIcon"></i>
          <span className="itemMenuText">
            <span className="itemMenuName">Pickle</span> |{" "}
            <span className="itemMenuId">#1234</span>
          </span>
          <button className="itemMenuDropdown">
            <i className="itemMenuDropdownDecoration"></i>
          </button>
        </div>
      </header>
      <section className="stockLevel">
        <header className="chartHeader">
          <div className="titleSlot">
            <h2 className="stockLevelTitle">Stock Level</h2>
          </div>
          <div className="descriptionSlot">
            <h3 className="chip">Live Marketing Campaign</h3>
            <ul className="chartKey">
              <li className="keyItem">
                <i className="keyExample actual"></i>
                <span className="keyText">Actual Stocks</span>
              </li>
              <li className="keyItem">
                <i className="keyExample projected"></i>
                <span className="keyText">Projected Stocks</span>
              </li>
              <li className="keyItem">
                <i className="keyExample demand"></i>
                <span className="keyText">Demand</span>
              </li>
            </ul>
          </div>
        </header>
        <div className="chartHolder">
          <svg className="chartLine"></svg>
          <table className="chartTable">
            <caption className="screenReaderOnly">
              Stock Level for pickles
            </caption>
            <thead>
              <td>Stock Type</td>
              <td>Date</td>
              <td>Stocks (kg)</td>
              <td>Demand</td>
              <td>Day</td>
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
          <div className="displayOnly yAxis">
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
          <div className="displayOnly xAxis">
            <p className="axisLabel">Days</p>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default ExampleStockPage;
