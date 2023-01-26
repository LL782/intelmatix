import styles from "@/styles/ScreenReader.module.css";

export const ScreenReader = ({ text }: { text: string }) => (
  <span className={styles.text}>{text}</span>
);
