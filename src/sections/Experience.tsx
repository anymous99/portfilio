import SectionTitle from "../components/SectionTitle";
import { experience } from "../data/portfolio";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <SectionTitle>Experience</SectionTitle>
        {experience.map((exp) => (
          <div key={exp.company} className={styles.timelineItem}>
            <div className={styles.header}>
              <h3>
                {exp.role} · <span>{exp.company}</span>
              </h3>
              <span className={styles.period}>{exp.period}</span>
            </div>
            <p className={styles.location}>{exp.location}</p>
            <ul className={styles.list}>
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}