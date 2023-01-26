import { Source_Sans_Pro } from "@next/font/google";
import Image from "next/image";
import styles from "@/styles/ItemSummary.module.css";

const reg = Source_Sans_Pro({ subsets: ["latin"], weight: "400" });
const bold = Source_Sans_Pro({ subsets: ["latin"], weight: "600" });

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
