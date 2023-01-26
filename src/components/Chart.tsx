import { Source_Sans_Pro } from "@next/font/google";
import styles from "@/styles/Chart.module.css";
import { ChartBody } from "./ChartBody";
import { ChartHead } from "./ChartHead";

const sans = Source_Sans_Pro({ subsets: ["latin"], weight: "400" });

export const Chart = () => (
  <section className={`${sans.className} ${styles.stockLevelChart}`}>
    <ChartHead />
    <ChartBody />
  </section>
);
