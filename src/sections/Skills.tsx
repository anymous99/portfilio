import SectionTitle from "../components/SectionTitle";
import { skills } from "../data/portfolio";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <SectionTitle>Skills</SectionTitle>
        <div className={styles.grid}>
          {skills.map((g) => (
            <div key={g.category} className={styles.card}>
              <h3 className={styles.category}>{g.category}</h3>
              <div className={styles.chips}>
                {g.items.map((item) => (
                  <span key={item} className={styles.chip}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}