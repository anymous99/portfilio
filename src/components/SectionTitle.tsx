import type { ReactNode } from "react";
import styles from "./SectionTitle.module.css";

export default function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className={styles.title}>
      <span className={styles.bar} />
      {children}
    </h2>
  );
}