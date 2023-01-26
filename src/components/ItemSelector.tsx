import { Source_Sans_Pro } from "@next/font/google";
import styles from "@/styles/ItemSelector.module.css";

const sans = Source_Sans_Pro({ subsets: ["latin"], weight: "400" });

export const ItemSelector = () => (
  <header className={`${sans.className} ${styles.itemSelector}`}>
    <div className={styles.itemSummary}>
      <div className={styles.itemIconSlot}></div>
      <h1 className={styles.itemName}>Pickle</h1>
      <p className={styles.itemStock}>
        <span className={styles.currentStock}>60kg</span>/
        <span className={styles.maximumStock}>150kg</span>
      </p>
    </div>
    <div className={styles.itemSelect}>
      <i className={styles.itemMenuIcon}></i>
      <span className={styles.itemMenuText}>
        <span className={styles.itemMenuName}>Pickle</span> |{" "}
        <span className={styles.itemMenuId}>#1234</span>
      </span>
      <button className={styles.itemMenuDropdown}>
        <i className={styles.itemMenuDropdownDecoration}></i>
      </button>
    </div>
  </header>
);
