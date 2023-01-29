import Image from "next/image";
import styles from "@/styles/ItemSummary.module.css";
import { reg, bold } from "./Fonts";
import { StockData } from "@/examples/stockData";

export const ItemSummary = ({ item }: { item: StockData }) => {
  const { itemIcon, itemName, currentStock, maximumStock, unitOfMeasurement } =
    item;
  const displayCurrent = `${currentStock}${unitOfMeasurement}`;
  const displayMaximum = `${maximumStock}${unitOfMeasurement}`;

  return (
    <div className={styles.itemSummary} data-testid="itemSummary">
      <div className={styles.itemIconSlot}>
        <Image alt={itemIcon.alt} src={itemIcon.src} fill />
      </div>
      <h1 className={`${reg.className} ${styles.itemName}`}>{itemName}</h1>
      <p className={`${bold.className} ${styles.itemStock}`}>
        {displayCurrent}/
        <span className={styles.maximumStock}>{displayMaximum}</span>
      </p>
    </div>
  );
};
