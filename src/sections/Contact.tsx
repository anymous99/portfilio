import SectionTitle from "../components/SectionTitle";
import { personalInfo } from "../data/portfolio";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <SectionTitle>Get In Touch</SectionTitle>
        <p className={styles.text}>
          I'm open to full-time opportunities and freelance projects. Drop me a
          message and I'll get back to you as soon as possible.
        </p>

        <div className={styles.actions}>
          <a href={`mailto:${personalInfo.email}`} className="btn btn-primary">
            ✉ Email Me
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            LinkedIn
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

        <p className={styles.contactInfo}>
          {personalInfo.email} · {personalInfo.phone}
        </p>
      </div>
    </section>
  );
}