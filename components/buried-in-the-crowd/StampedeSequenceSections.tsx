import styles from "./StampedeSequenceSections.module.css";

export function StampedeDefinitionSection() {
  return (
    <section className={styles.definition} data-node-id="1774:2431">
      <div className={styles.definitionTitle}>
        <span>What is a</span>
        <h2>Stampede ?</h2>
      </div>

      <img
        className={styles.definitionDivider}
        src="/images/buried-in-the-crowd/section9-divider.svg"
        alt=""
        aria-hidden="true"
      />

      <div className={styles.definitionCopy}>
        <p>A stampede happens when a crowd gets so dense that individual control disappears- people are no longer moving on their own, they&apos;re being pushed by the mass around them. A small trigger, a fall, a bottleneck, a rush toward an exit, is enough to turn that pressure into a crush.</p>
        <strong>Most stampede deaths aren&apos;t from being trampled they&apos;re from compressive asphyxiation.</strong>
      </div>
    </section>
  );
}

export function StampedeFormationIntroSection() {
  return (
    <section className={styles.formation} data-node-id="1774:2433">
      <div className={styles.formationTitle}>
        <span>How a</span>
        <h2>Stampede forms in real life&nbsp; ?</h2>
      </div>

      <img
        className={styles.formationDivider}
        src="/images/buried-in-the-crowd/section10-divider.svg"
        alt=""
        aria-hidden="true"
      />

      <strong className={styles.formationCopy}>Once density crosses critical thresholds, the crowd behaves like a compressible fluid, not a collection of people</strong>
    </section>
  );
}

export function StampedePathSection() {
  return (
    <section className={styles.pathSection} data-node-id="1774:2432">
      <img
        className={styles.path}
        src="/images/buried-in-the-crowd/Stampede Path.svg"
        alt="A winding path showing how crowd density progresses from pre-panic through a trigger, contagion, loss of cooperation, crowd crush, and aftermath"
      />

      <div className={`${styles.pathCopy} ${styles.prePanic}`}>
        <h3>pRE -pANIC</h3>
        <p>Crowd behaves normally; density increasing but still below critical. Social norms, helping behavior prevail.</p>
      </div>

      <div className={`${styles.pathCopy} ${styles.trigger}`}>
        <p>A stimulus (blockage, fall, rumor, noise) causes abrupt slowdown or movement change.</p>
        <h3>TRIGGER</h3>
      </div>

      <div className={`${styles.pathCopy} ${styles.contagion}`}>
        <h3>CONTAGION</h3>
        <p>Observers adopt the same behavior rapidly, psychological theory likens this to a “contagion” model. People shift from individual assessment to social mimicry.</p>
      </div>

      <div className={`${styles.pathCopy} ${styles.loss}`}>
        <p>Physics dominates psychology: bodies are pressed mechanically, not moving by choice.</p>
        <h3>Loss of Cooperation</h3>
      </div>

      <div className={`${styles.pathCopy} ${styles.crush}`}>
        <h3>Crowd Crush</h3>
        <p>Social norms break down; self-protective behavior increases; helping decreases — especially once physical pressure escalates.</p>
      </div>

      <div className={`${styles.pathCopy} ${styles.aftermath}`}>
        <p>Movement stops; casualties are realized; trauma and grief responses emerge.</p>
        <h3>Aftermath</h3>
      </div>
    </section>
  );
}
