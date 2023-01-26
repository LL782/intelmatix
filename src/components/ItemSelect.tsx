import styles from "@/styles/ItemSelect.module.css";
import { reg } from "./Fonts";

export const ItemSelect = () => (
  <div className={`${reg.className} ${styles.itemSelectWrapper}`}>
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
);
