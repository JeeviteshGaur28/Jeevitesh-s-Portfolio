import styles from "./TeamSection.module.css";

export function TeamSection() {
  return (
    <section id="team" className={styles.section} data-node-id="1774:2423">
      <img className={styles.leftDots} src="/images/buried-in-the-crowd/team-dotted-line.svg" alt="" />
      <img className={styles.rightDots} src="/images/buried-in-the-crowd/team-dotted-line.svg" alt="" />

      <h2 className={styles.teamTitle}><span>Team</span><span>Members</span></h2>
      <h2 className={styles.guideTitle}>Guided by</h2>

      <figure className={`${styles.person} ${styles.aman}`}>
        <span className={styles.portraitBackdrop} />
        <span className={styles.portraitCrop}><img src="/images/buried-in-the-crowd/team-aman.png" alt="Aman Choudhary" /></span>
        <figcaption>AMAN CHOUDHARY</figcaption>
      </figure>

      <figure className={`${styles.person} ${styles.sanika}`}>
        <span className={styles.portraitBackdrop} />
        <span className={styles.portraitCrop}><img src="/images/buried-in-the-crowd/team-sanika.png" alt="Sanika Shedge" /></span>
        <figcaption>SANIKA SHEDGE</figcaption>
      </figure>

      <figure className={`${styles.person} ${styles.tripti}`}>
        <span className={styles.portraitBackdrop} />
        <span className={styles.portraitCrop}><img src="/images/buried-in-the-crowd/team-tripti.png" alt="Tripti Sethia" /></span>
        <figcaption>TRIPTI SETHIA</figcaption>
      </figure>

      <figure className={`${styles.person} ${styles.mishan}`}>
        <span className={styles.portraitBackdrop} />
        <span className={styles.portraitCrop}><img src="/images/buried-in-the-crowd/team-mishan.png" alt="Mishan Patel" /></span>
        <figcaption>MISHAN PATEL</figcaption>
      </figure>

      <figure className={`${styles.person} ${styles.jeevitesh}`}>
        <span className={styles.portraitBackdrop} />
        <span className={styles.portraitCrop}><img src="/images/buried-in-the-crowd/team-jeevitesh.png" alt="Jeevitesh Gaur" /></span>
        <figcaption>JEEVITESH GAUR</figcaption>
      </figure>

      <figure className={`${styles.person} ${styles.guide}`}>
        <span className={styles.portraitBackdrop} />
        <span className={styles.portraitCrop}><img src="/images/buried-in-the-crowd/team-guide.png" alt="Professor Tenzing Nyentsey" /></span>
        <figcaption>PROF. TENZING NYENTSEY</figcaption>
      </figure>

      <img className={styles.bottomRule} src="/images/buried-in-the-crowd/team-bottom-rule.svg" alt="" />
    </section>
  );
}
