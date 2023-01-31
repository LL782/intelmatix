import styles from "@/styles/ItemBar.module.css";
import { ItemSummary } from "./ItemSummary";
import { ItemSelect } from "./ItemSelect";
import { StockData } from "@/types/StockData";

export const ItemBar = ({ data }: { data: StockData }) => (
  <div className={styles.itemBar} data-testid="itemBar">
    <ItemSummary item={data} />
    <ItemSelect
      allItems={data.allItems}
      id={data.itemId}
      name={data.itemName}
      slug={data.slug}
    />
  </div>
);
