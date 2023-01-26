import Image from "next/image";
import styles from "@/styles/ItemSummary.module.css";
import { reg, bold } from "./Fonts";

export const ItemSummary = () => (
  <div className={styles.itemSummary}>
    <div className={styles.itemIconSlot}>
      <Image alt="Pickle icon" src="/Pickle.svg" fill />
    </div>
    <h1 className={`${reg.className} ${styles.itemName}`}>Pickle</h1>
    <p className={`${bold.className} ${styles.itemStock}`}>
      60kg/<span className={styles.maximumStock}>150kg</span>
    </p>
  </div>
);
