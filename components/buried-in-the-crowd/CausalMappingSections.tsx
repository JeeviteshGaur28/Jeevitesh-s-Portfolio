import styles from "./CausalMappingSections.module.css";

export function CausalMappingIntroSection() {
  return (
    <section className={styles.introSection} data-node-id="1774:2436">
      <div className={styles.introTitle}>
        <span>Mapping</span>
        <h2>Cause - to - Effect</h2>
        <span>Relation</span>
      </div>

      <img className={styles.introDivider} src="/images/buried-in-the-crowd/section14-divider.svg" alt="" />
      <img className={styles.introIllustration} src="/images/buried-in-the-crowd/section14-illustration.png" alt="" aria-hidden="true" />
    </section>
  );
}

function DotColumns() {
  return (
    <div className={styles.dotColumns} aria-hidden="true">
      {Array.from({ length: 4 }, (_, index) => (
        <img key={index} src="/images/buried-in-the-crowd/section15-dot-column.svg" alt="" />
      ))}
    </div>
  );
}

export function CausalMapProcessSection() {
  return (
    <section className={styles.processSection} data-node-id="1774:2437">
      <div className={styles.photos}>
        <div className={styles.mainPhoto}>
          <img src="/images/buried-in-the-crowd/section15-photo-main.png" alt="Hand-drawn causal mapping notes" />
        </div>

        <div className={styles.sidePhotos}>
          <div className={`${styles.sidePhoto} ${styles.sidePhotoTop}`}>
            <div><img src="/images/buried-in-the-crowd/section15-photo-top.png" alt="Causal mapping notes on a whiteboard" /></div>
          </div>
          <div className={`${styles.sidePhoto} ${styles.sidePhotoBottom}`}>
            <div><img src="/images/buried-in-the-crowd/section15-photo-bottom.png" alt="Additional causal mapping notes" /></div>
          </div>
        </div>
      </div>

      <div className={styles.leftDots}><DotColumns /></div>
      <div className={styles.rightDots}><DotColumns /></div>

      <video className={styles.videoPlaceholder} controls playsInline preload="metadata">
        <source
          src="/images/buried-in-the-crowd/causal-process.mp4"
          type="video/mp4"
        />
      </video>

      <img
        className={styles.causalMap}
        src="/images/buried-in-the-crowd/causalmap.svg"
        alt="Causal map of the systems and feedback loops that contribute to crowd stampedes"
      />
    </section>
  );
}
