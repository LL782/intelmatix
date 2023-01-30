import styles from "@/styles/ItemSelect.module.css";
import { reg } from "./Fonts";
import { StockData } from "@/types/StockData";
import router from "next/router";

interface Props {
  allItems: StockData["allItems"];
  id: StockData["itemId"];
  name: StockData["itemName"];
  slug: StockData["slug"];
}

export const ItemSelect = ({ allItems, id, name, slug }: Props) => (
  <div
    className={`${reg.className} ${styles.itemSelectWrapper}`}
    data-testid="itemSelect"
  >
    <div className={styles.itemSelectedOption}>
      <i className={styles.itemMenuIcon}></i>
      <span className={styles.itemText}>
        <span>{name}</span> | <span className={styles.itemMenuId}>#{id}</span>
      </span>
      <i className={styles.cheveron} />
    </div>
    <select
      className={styles.itemSelect}
      defaultValue={slug}
      name="itemSelect"
      id="itemSelect"
      onChange={({ target: { value } }) => router.push(`/stock-level/${value}`)}
    >
      {allItems.map(({ itemId, itemName, slug }) => (
        <option key={itemId} value={slug}>
          {itemName} | #{itemId}
        </option>
      ))}
    </select>
  </div>
);
