import { Source_Sans_Pro } from "@next/font/google";
import Image from "next/image";
import styles from "@/styles/ItemBar.module.css";

const reg = Source_Sans_Pro({ subsets: ["latin"], weight: "400" });
const bold = Source_Sans_Pro({ subsets: ["latin"], weight: "600" });

export const ItemBar = () => (
  <header className={`${reg.className} ${styles.itemBar}`}>
    <div className={styles.itemSummary}>
      <div className={styles.itemIconSlot}>
        <Image alt="Pickle icon" src="/Pickle.svg" fill />
      </div>
      <h1 className={styles.itemName}>Pickle</h1>
      <p className={`${bold.className} ${styles.itemStock}`}>
        60kg/<span className={styles.maximumStock}>150kg</span>
      </p>
    </div>
    <div className={styles.itemSelectWrapper}>
      <div className={styles.itemSelectedOption}>
        <i className={styles.itemMenuIcon}></i>
        <span className={styles.itemMenuText}>
          <span className={styles.itemMenuName}>Pickle</span> |{" "}
          <span className={styles.itemMenuId}>#1234</span>
        </span>
      </div>
      <select
        className={styles.itemSelect}
        defaultValue="Pickle"
        name="itemSelect"
        id="itemSelect"
      >
        <option value="Pickle">Pickle | #1234</option>
        <option value="Cheese">Cheese | #2345</option>
        <option value="Pattie">Pattie | #3456</option>
        <option value="Bun">Bun | #4567</option>
        <option value="Lettuce">Lettuce | #5678</option>
      </select>
    </div>
  </header>
);
