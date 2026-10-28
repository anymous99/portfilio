import SectionTitle from "../components/SectionTitle";
import { certifications, education } from "../data/portfolio";
import styles from "./Certifications.module.css";

export default function Certifications() {
  return (
    <section id="certifications" className={styles.section}>
      <div className="container">
        <SectionTitle>Certifications</SectionTitle>
        <div className={styles.grid}>
          {certifications.map((c) => (
            <div key={c.title} className={styles.card}>
              <h3>{c.title}</h3>
              <p className={styles.issuer}>{c.issuer}</p>
              <ul>
                {c.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.eduBlock}>
          <SectionTitle>Education</SectionTitle>
          <div className={styles.eduList}>
            {education.map((e) => (
              <div key={e.degree} className={styles.eduItem}>
                <div>
                  <h3>{e.degree}</h3>
                  <p>{e.institution}</p>
                </div>
                <div className={styles.eduMeta}>
                  <p>{e.period}</p>
                  <p className={styles.score}>{e.score}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}