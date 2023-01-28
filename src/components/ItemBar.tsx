import styles from "@/styles/ItemBar.module.css";
import { ItemSummary } from "./ItemSummary";
import { ItemSelect } from "./ItemSelect";
import { StockData } from "@/examples/stockInDays";

export const ItemBar = ({ item }: { item: StockData }) => (
  <header className={styles.itemBar}>
    <ItemSummary item={item} />
    <ItemSelect />
  </header>
);
