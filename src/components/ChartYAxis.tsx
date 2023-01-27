import styles from "@/styles/ChartYAxis.module.css";

export const ChartYAxis = () => (
  <div className={styles.yAxis}>
    <p className={styles.yAxisLegend}>KG</p>
    <ul className={styles.yAxisGuides}>
      <li className={styles.yAxisGuide}>
        <span className={styles.yAxisGuideLabel}>100</span>
        <i className={styles.yAxisGuideline}></i>
      </li>
      <li className={styles.yAxisGuide}>
        <span className={styles.yAxisGuideLabel}>75</span>
        <i className={styles.yAxisGuideline}></i>
      </li>
      <li className={styles.yAxisGuide}>
        <span className={styles.yAxisGuideLabel}>50</span>
        <i className={styles.yAxisGuideline}></i>
      </li>
      <li className={styles.yAxisGuide}>
        <span className={styles.yAxisGuideLabel}>25</span>
        <i className={styles.yAxisGuideline}></i>
      </li>
      <li className={styles.yAxisGuide}>
        <span className={styles.yAxisGuideLabel}>0</span>
        <i className={styles.yAxisGuideline}></i>
      </li>
    </ul>
  </div>
);
