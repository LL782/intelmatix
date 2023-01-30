import styles from "@/styles/ChartBars.module.css";
import { bold } from "./Fonts";
import { ChartDay } from "@/types/ChartDay";

interface Props {
  days: ChartDay[];
  unitOfMeasurement: string;
}

export const ChartBars = ({ days, unitOfMeasurement }: Props) => (
  <table className={styles.chartBars}>
    <thead className="screenReaderOnly">
      <tr>
        <th>Stock Type</th>
        <th>Date</th>
        <th>Stocks ({unitOfMeasurement})</th>
        <th>Demand</th>
        <th>Day</th>
      </tr>
    </thead>
    <tbody className={styles.tBody}>{days.map(mapDayToRow)}</tbody>
  </table>
);

const mapDayToRow = ({ formatted, normalised }: ChartDay) => {
  const typeClassName = `${styles.valueType} ${bold.className}`;
  const dateClassName = `${styles.dateValue} ${bold.className}`;
  let labelClassName = styles.barLabel;

  if (normalised.type === "today") {
    labelClassName += ` ${bold.className}`;
  }

  return (
    <tr
      className={styles[normalised.type]}
      key={formatted.date}
      style={{ ["--volume" as any]: normalised.stock }}
    >
      <td className={typeClassName}>{formatted.type}</td>
      <td className={dateClassName}>{formatted.date}</td>
      <td className={styles.stockValue}>{formatted.stock}</td>
      <td className="screenReaderOnly">{formatted.demand}</td>
      <td className={labelClassName}>{formatted.weekDay}</td>
    </tr>
  );
};
