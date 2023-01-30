import { ChartDay } from "@/examples/chartDays";
import styles from "@/styles/ChartLines.module.css";
import { useSVG } from "../hooks/useSVG";

interface Props {
  chartDays: ChartDay[];
  gutterWidthPercentage: number;
  widthToHeightRatio: number;
}

export const ChartLines = ({
  chartDays,
  gutterWidthPercentage,
  widthToHeightRatio,
}: Props) => {
  const { viewBox, actualLine, projectedLine } = useSVG({
    chartDays,
    gutterWidthPercentage,
    aspectRatio: widthToHeightRatio,
  });

  return (
    <svg className={styles.chartLines} viewBox={viewBox}>
      <polyline
        className={styles.actualLine}
        points={actualLine}
        fill="none"
        stroke="black"
      />
      <polyline
        className={styles.projectedLine}
        points={projectedLine}
        fill="none"
      />
    </svg>
  );
};
