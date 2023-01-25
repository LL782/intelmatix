import styles from "@/styles/Modal.module.css";
import { ScreenReader } from "./ScreenReader";
interface Props {
  children: React.ReactNode;
}

export const Modal = ({ children }: Props) => (
  <>
    <i className={styles.shadow} />
    <div className={styles.modal}>
      <button className={styles.closeButton}>
        <ScreenReader text="Close"></ScreenReader>
        <i className={styles.closeBar}></i>
        <i className={styles.closeBar}></i>
      </button>
      <div className={styles.children}>{children}</div>
    </div>
  </>
);
