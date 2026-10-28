import { personalInfo } from "../data/portfolio";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} {personalInfo.name} · Built with React + TypeScript
    </footer>
  );
}