import styles from "@/styles/Modal.module.css";

interface Props {
  children: React.ReactNode;
}

export const Modal = ({ children }: Props) => (
  <>
    <i className={styles.shadow} />
    <div className={styles.modal}>
      <button className={styles.closeButton}>
        <span className="screenReaderOnly">Close</span>
        <i className={styles.closeBar}></i>
        <i className={styles.closeBar}></i>
      </button>
      <div className={styles.children}>{children}</div>
    </div>
  </>
);
