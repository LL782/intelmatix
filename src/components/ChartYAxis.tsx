import useChartVariables from "@/hooks/useChartVariables";
import styles from "@/styles/ChartYAxis.module.css";

interface Props {
  unitOfMeasurement: string;
  yAxisGuides: ReturnType<typeof useChartVariables>["yAxisGuides"];
}

export const ChartYAxis = ({ unitOfMeasurement, yAxisGuides }: Props) => {
  const guides = [...yAxisGuides].reverse();

  return (
    <div className={styles.yAxis}>
      <p className={styles.yAxisLegend}>{unitOfMeasurement}</p>
      <ul className={styles.yAxisGuides}>
        {guides.map((number) => (
          <li className={styles.yAxisGuide} key={number}>
            <span className={styles.yAxisGuideLabel}>{number}</span>
            <i className={styles.yAxisGuideline}></i>
          </li>
        ))}
      </ul>
    </div>
  );
};
