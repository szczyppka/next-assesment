import styles from "./Hero.module.scss";
import DOMPurify from "isomorphic-dompurify";

const Hero = ({ children, title, summary }) => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>{title}</h1>

      <div
        className={styles.description}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(summary),
        }}
      />

      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default Hero;
