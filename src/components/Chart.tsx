import styles from "@/styles/Chart.module.css";
import { ChartBody } from "./ChartBody";
import { ChartHead } from "./ChartHead";
import { reg } from "./Fonts";

export const Chart = () => (
  <section className={`${reg.className} ${styles.stockLevelChart}`}>
    <ChartHead />
    <ChartBody />
  </section>
);
