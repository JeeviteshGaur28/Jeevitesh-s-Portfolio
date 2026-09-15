import styles from "./OverviewSection.module.css";

export function OverviewSection() {
  return (
    <section id="overview" className={styles.section} data-node-id="1774:2422">
      <h1 data-node-id="814:2573">Buried In The Crowd</h1>

      <div className={styles.meta} data-node-id="814:4120">
        <span className={styles.tag} data-node-id="814:4122">OVERVIEW</span>
        <p data-node-id="814:4124">ANANT&nbsp;&nbsp; NATIONAL&nbsp;&nbsp; UNIVERSITY</p>
      </div>

      <img
        className={styles.divider}
        src="/images/buried-in-the-crowd/overview-divider.svg"
        alt=""
        data-node-id="814:4356"
      />

      <div className={styles.leftCopy} data-node-id="814:2541">
        <p>
          This project is a <strong>systemic design investigation into the complex, interconnected forces that cause stampede disasters in India</strong>. Conducted as part of a three-week academic module on Systems Thinking at Anant National University, this project examines a not as isolated accidents, but as emergent failures of social, infrastructural, informational, and governance systems.
        </p>
      </div>

      <div className={styles.rightCopy} data-node-id="814:2542">
        <p>
          Working as a team of 5, we explored how cultural belief systems, environmental conditions, crowd psychology, infrastructure constraints, and authority decision-making interact to create high-risk situations during mass gatherings such as religious festivals, pilgrimages, a rallies, and public celebrations.
        </p>
      </div>
    </section>
  );
}
