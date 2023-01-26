import styles from "@/styles/ItemBar.module.css";
import { ItemSummary } from "./ItemSummary";
import { ItemSelect } from "./ItemSelect";

export const ItemBar = () => (
  <header className={styles.itemBar}>
    <ItemSummary />
    <ItemSelect />
  </header>
);
