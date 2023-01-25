import { Source_Sans_Pro } from "@next/font/google";
import styles from "@/styles/Modal.module.css";
import { ScreenReader } from "./ScreenReader";

const sans = Source_Sans_Pro({ subsets: ["latin"], weight: "400" });

interface Props {
  children: React.ReactNode;
}

export const Modal = ({ children }: Props) => (
  <>
    <main className={`${styles.wrapper} ${sans.className}`}>
      <i className={styles.shadow} />
      <div className={styles.modal}>
        <button className={styles.closeButton}>
          <ScreenReader text="Close"></ScreenReader>
          <i className={styles.closeBar}></i>
          <i className={styles.closeBar}></i>
        </button>
        <div className={styles.children}>{children}</div>
      </div>
    </main>
  </>
);
