import styles from "./ScrollTransitionSection.module.css";

export function ScrollTransitionSection() {
  return (
    <section className={styles.section} data-node-id="1774:2427">
      <img
        className={styles.leftRule}
        src="/images/buried-in-the-crowd/section8-divider-left.svg"
        alt=""
        aria-hidden="true"
      />
      <img
        className={styles.rightRule}
        src="/images/buried-in-the-crowd/section8-divider-right.svg"
        alt=""
        aria-hidden="true"
      />

      <div className={styles.prompt}>
        <p>to view full case study</p>
        <strong>KEEP SCROLLING</strong>
      </div>

      <div className={styles.mouse} aria-hidden="true">
        <i />
      </div>

      <img
        className={styles.scrollDots}
        src="/images/buried-in-the-crowd/section8-scroll-dots.svg"
        alt=""
        aria-hidden="true"
      />

      <div className={styles.crowdCrop} aria-hidden="true">
        <img src="/images/buried-in-the-crowd/section8-crowd.png" alt="" />
      </div>

      <div className={styles.armCrop} aria-hidden="true">
        <img src="/images/buried-in-the-crowd/section8-arm.png" alt="" />
      </div>
    </section>
  );
}
