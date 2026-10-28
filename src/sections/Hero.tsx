import { personalInfo } from "../data/portfolio";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div>
          <p className={styles.greeting}>Hi, my name is</p>
          <h1 className={styles.name}>{personalInfo.name}</h1>
          <h2 className={styles.title}>{personalInfo.title}</h2>
          <p className={styles.tagline}>{personalInfo.tagline}</p>

          <div className={styles.actions}>
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              GitHub
            </a>
          </div>

          <p className={styles.location}>📍 {personalInfo.location}</p>
        </div>

        <div className={styles.codeBlock}>
          <div className={styles.dots}>
            <span style={{ background: "#ef4444" }} />
            <span style={{ background: "#eab308" }} />
            <span style={{ background: "#22c55e" }} />
          </div>
          <pre>
{`const developer = {
  name: "Dheeraj",
  role: "Full Stack",
  stack: ["React", "Node", "MongoDB"],
  openToWork: true,
};`}
          </pre>
        </div>
      </div>
    </section>
  );
}