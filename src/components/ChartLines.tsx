import styles from "@/styles/ChartLines.module.css";

export const ChartLines = () => (
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
);
