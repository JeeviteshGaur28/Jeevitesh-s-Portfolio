import styles from "./GigamapSection.module.css";

export function GigamapSection() {
  return (
    <section className={styles.section} data-node-id="1774:2425">
      <header className={styles.intro}>
        <h2 data-node-id="814:2836">Why Gigamap?</h2>
        <p data-node-id="814:2837">
          A stampede isn&apos;t one problem — it&apos;s crowd behaviour, infrastructure, governance, and communication failing together. A gigamap let us map all of it in one connected view instead of treating each factor separately, making it possible to trace how a stampede actually forms and where to intervene.
        </p>
      </header>

      <img
        className={styles.shoes}
        src="/images/buried-in-the-crowd/gigamap-shoes.png"
        alt=""
        aria-hidden="true"
      />

      <img
        className={styles.gigamap}
        src="/images/buried-in-the-crowd/for systems gigamap.svg"
        alt="Systems gigamap showing stampede patterns, stakeholders, causes, leverage points, and interventions"
      />
    </section>
  );
}
