import styles from "@/styles/Chart.module.css";
import { ChartBody } from "./ChartBody";
import { ChartHead } from "./ChartHead";
import { reg } from "./Fonts";
import { StockData } from "@/types/StockData";

interface Props {
  data: StockData;
}

export const Chart = ({ data }: Props) => (
  <section className={`${reg.className} ${styles.stockLevelChart}`}>
    <ChartHead />
    <ChartBody data={data} />
  </section>
);
