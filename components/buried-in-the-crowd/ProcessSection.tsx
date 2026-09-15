import styles from "./ProcessSection.module.css";

const steps = [
  {
    number: "01",
    className: styles.one,
    title: "GETTING INTO SYSTEMS THINKING",
    copy: "Understanding what systems are, how to think in systems, and how to identify interconnected elements within complex social issues.",
  },
  {
    number: "02",
    className: styles.two,
    title: "ANALYSING EXISTING INCIDENTS & SYSTEMS",
    copy: "Examining past stampedes, media reports, and institutional responses to uncover systemic behaviors and structural failures.",
  },
  {
    number: "03",
    className: styles.three,
    title: "IDENTIFYING POINTS OF SYSTEMIC CHANGE",
    copy: "Identifying key points within the system where small change can create large improvements in crowd safety.",
  },
  {
    number: "04",
    className: styles.four,
    title: "MAPPING FEEDBACK AND BALANCE LOOPS",
    copy: "Visualizing cause and effect relationships between crowd behavior, infrastructure, governance, information flow, and risk to understand how stampedes emerge and escalate.",
  },
  {
    number: "05",
    className: styles.five,
    title: "PROPOSING SYSTEM-LEVEL SOLUTIONS",
    copy: "Proposing interventions that address root causes by reshaping policies, processes, communication, and accountability within crowd management systems.",
  },
];

function VerticalDivider({ className, src = "/images/buried-in-the-crowd/process-divider.svg" }: { className: string; src?: string }) {
  return <img className={`${styles.verticalDivider} ${className}`} src={src} alt="" />;
}

export function ProcessSection() {
  return (
    <section id="process" className={styles.section} data-node-id="1774:2424">
      <div className={styles.processHeading}>
        <h2>Our Process</h2>
        <span>PROCESS OVERVIEW</span>
      </div>

      <p className={styles.processIntro}>
        Over two weeks, we worked through five stages — systems mapping, secondary research, causal mapping, and leverage point identification — moving from broad exploration of the stampede ecosystem to a focused set of system-level interventions.
      </p>
      <VerticalDivider className={styles.topDivider} src="/images/buried-in-the-crowd/process-top-divider.svg" />

      <div className={styles.steps}>
        {steps.map((step) => (
          <article className={`${styles.step} ${step.className}`} key={step.number}>
            <b>{step.number}</b>
            <div>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </div>
          </article>
        ))}
      </div>

      <img className={styles.processRule} src="/images/buried-in-the-crowd/process-rule.svg" alt="" />

      <div className={styles.gigamapHeading}>
        <h2>Gigamap</h2>
        <span>SYSTEM VISUALISATION</span>
      </div>
      <VerticalDivider className={styles.gigamapDivider} />
      <p className={styles.gigamapCopy}>
        A gigamap is how we visualised everything connected to crowd stampedes — crowd behaviour, infrastructure, governance, and communication gaps — all in one system instead of looking at each factor separately. It shows how these pieces influence each other, which helped us spot where small changes could prevent a stampede before it starts.
      </p>
    </section>
  );
}
