import styles from "./CausalFindingsSections.module.css";

const causalFindings = [
  {
    number: "01",
    title: "Bottlenecked Infrastructure & Spatial Traps",
    description:
      "This cluster highlights how narrow pathways, footbridges, stairs, temporary structures, poor lighting, path encroachment by vendors, and poorly placed barricades form rigid spatial traps that concentrate crowd pressure.",
  },
  {
    number: "02",
    title: "Information Failure & Panic",
    description:
      "This cluster explains how rumors, low visibility, information latency, and poor communication channels trigger herding behavior and sudden movements. In the absence of trusted real-time information, individuals rely on social cues, causing panic to propagate rapidly through the crowd.",
  },
  {
    number: "03",
    title: "Operational Blindness",
    description:
      "This cluster highlights how narrow pathways, footbridges, stairs, temporary structures, poor lighting, path encroachment by vendors, and poorly placed barricades form rigid spatial traps that concentrate crowd pressure.",
  },
  {
    number: "04",
    title: "Environmental Stress & Human Fragility",
    description:
      "This cluster highlights how heat, dehydration, fatigue, rain, poor ground traction, long waiting times, and delayed events weaken physical resilience. Environmental stress reduces balance, reaction time, and cooperation, increasing the probability of slips, falls, and collapse under pressure.",
  },
  {
    number: "05",
    title: "Density Collapse",
    description:
      "Crowd density crosses a critical threshold when mass attendance, arrival clustering, bottlenecks, narrow pathways, barricades, and flow irregularities combine. Past this point, movement stops being voluntary — mechanical crowd forces take over.",
  },
  {
    number: "06",
    title: "Fragmented Authority & Coordination Breakdown",
    description:
      "Event organizers control design, police manage movement, district administration grants permissions, and political leadership controls optics. With no unified command structure, decision-making is slow, contradictory, and ineffective.",
  },
];

export function CausalMapLegendSection() {
  return (
    <section className={styles.legendSection} data-node-id="1774:2438">
      <div className={styles.legendLayout}>
        <h2>
          How to read
          <br />
          Causal Map?
        </h2>
        <div className={styles.legendDivider} aria-hidden="true" />
        <div className={styles.legendCopy}>
          <div>
            <h3>How to Read this causal map?</h3>
            <p>Each node represents a system variable. Each arrow represents a causal relationship.</p>
          </div>
          <p className={styles.arrowKey}>
            Reading the arrows
            <br />
            <span className={styles.red}>Red arrow (+)</span> → Increase in X increases Y
            <br />
            <br />
            <span className={styles.green}>Green arrow (–)</span> → Increase in X decreases Y
          </p>
        </div>
      </div>
    </section>
  );
}

export function CausalFindingsSection() {
  return (
    <section className={styles.findingsSection} data-node-id="1774:2439">
      <header className={styles.findingsTitle}>
        <span>Key</span>
        <h2>Findings</h2>
        <em>from Causal Map</em>
      </header>
      <div className={styles.titleDivider} aria-hidden="true" />

      <div className={styles.findingsGrid}>
        {causalFindings.map((finding) => (
          <article className={styles.findingCard} key={finding.number}>
            <b aria-hidden="true">{finding.number}</b>
            <div>
              <h3>{finding.title}</h3>
              <p>{finding.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
