import SectionTitle from "../components/SectionTitle";
import styles from "./About.module.css";

const stats = [
  { label: "CGPA", value: "7.94" },
  { label: "Projects", value: "2+" },
  { label: "Certifications", value: "2" },
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <SectionTitle>About Me</SectionTitle>
        <p className={styles.text}>
          Computer Science graduate with hands-on experience in building
          full-stack web applications using React.js, Node.js, Express.js,
          MongoDB, and MySQL. Skilled in developing responsive user interfaces,
          building RESTful APIs, and designing and managing databases.
          Passionate about learning new technologies and contributing to
          scalable software solutions.
        </p>

        <div className={styles.stats}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statCard}>
              <div className={styles.statValue}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}