import styles from "./BuriedInTheCrowd.module.css";
import { OverviewSection } from "./OverviewSection";
import { TeamSection } from "./TeamSection";
import { ProcessSection } from "./ProcessSection";

const findings = [
  ["01", "Bottlenecked Infrastructure & Spatial Traps", "Narrow pathways, footbridges, stairs, temporary structures, poor lighting, encroachment and badly placed barricades form rigid spatial traps that concentrate crowd pressure."],
  ["02", "Information Failure & Panic", "Rumours, low visibility, information latency and poor communication trigger herding and sudden movement. Without trusted real-time information, panic propagates rapidly."],
  ["03", "Operational Blindness", "Disconnected monitoring and delayed escalation leave authorities unable to see crowd pressure building until the system is already unstable."],
  ["04", "Environmental Stress & Human Fragility", "Heat, dehydration, fatigue, rain, poor traction and long waits reduce balance, reaction time and cooperation."],
  ["05", "Fragmented Authority", "Split ownership and unclear decision rights slow coordinated action across organisers, police, transport and medical teams."],
  ["06", "Reactive Governance", "The system rewards post-disaster response more consistently than prevention, learning and accountability."],
];

const interventions = [
  ["Physical Controls", "Barricades\nQueue lanes\nPolice force"],
  ["Technical controls", "CCTV\nDrones\nAI density analysis\nPA systems\nSignages"],
  ["Administration controls", "National building code (NBC)\nEvent permissions\nPolice deployment"],
  ["Medical response", "Inquiry committee\nCompensations\nFIR and suspension"],
  ["Training measures", "Crowd management training\nVolunteer marshals"],
  ["Post disaster solutions", "On-site medical camp\nAmbulance deployment\nHospital tie-ups"],
];

function Rule() { return <div className={styles.rule}><i /><span /></div>; }
function Tag({ children }: { children: React.ReactNode }) { return <span className={styles.tag}>{children}</span>; }

export function BuriedInTheCrowd() {
  return (
    <main className={styles.page}>
      <section className={styles.masthead}>
        <div><h2>Systems</h2><p>THINKING AND DESIGN</p></div><p>CASE STUDY</p><Rule />
      </section>

      <section className={styles.hero} aria-label="Buried in the Crowd title artwork">
        <div className={styles.heroTitle} />
        <div className={styles.heroCrowd} />
      </section>

      <OverviewSection />

      <TeamSection />

      <ProcessSection />

      <section className={styles.diagramSection}><h2>Why Gigamap?</h2><p>A stampede isn’t one problem — it’s crowd behaviour, infrastructure, governance, and communication failing together. A gigamap let us map all of it in one connected view.</p><div className={`${styles.diagram} ${styles.gigamap}`} role="img" aria-label="Gigamap of the stampede system" /></section>
      <section className={styles.darkDivider}><i /><i /></section>
      <section className={styles.keepScrolling}><Rule /><p><em>to view full case study</em><b>KEEP SCROLLING</b></p><div className={styles.mouse} /></section>

      <section className={styles.chapter}><Tag>UNDERSTANDING THE SYSTEM</Tag><h2>How a Stampede Forms</h2><p>Stampedes are not sudden, isolated incidents. They emerge when multiple stresses build across a crowded system and a triggering event pushes it beyond recovery.</p></section>
      <section className={styles.pathSection}><div className={`${styles.diagram} ${styles.path}`} role="img" aria-label="How a Stampede Forms path illustration" /></section>

      <section className={styles.chapter}><Tag>SECONDARY RESEARCH</Tag><h2>Looking Beyond the Incident</h2><p>We studied recurring patterns across public gatherings, religious events, political rallies and transport hubs to understand the structures that repeatedly create risk.</p></section>
      <section className={styles.quote}><p>“A crowd disaster is rarely caused by the crowd alone.”</p></section>
      <section className={styles.cases}><h2>Signals across the system</h2><div>{["Crowd behaviour","Infrastructure","Communication","Governance"].map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3><p>Pressure accumulates when individual actions interact with constrained space, delayed information and fragmented authority.</p></article>)}</div></section>

      <section className={styles.chapter}><Tag>CAUSAL MAPPING</Tag><h2>Mapping Cause and Effect</h2><p>The causal map connects reinforcing loops, delayed responses and hidden dependencies that allow crowd pressure to escalate.</p></section>
      <section className={styles.causal}><div className={`${styles.diagram} ${styles.causalMap}`} role="img" aria-label="Causal map" /></section>

      <section className={styles.findings}><header><small>Key</small><h2>Findings</h2><em>from Causal Map</em></header><div className={styles.findingGrid}>{findings.map(([n,t,d])=><article key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></article>)}</div></section>

      <section className={styles.interventions}><Rule /><h2>Existing Interventions</h2><div>{interventions.map(([t,d])=><article key={t}><h3>{t}</h3><p>{d}</p></article>)}</div></section>

      <section className={styles.leverage}><Rule /><h2>Leverage Points</h2><div>{["Cultural & Behavioral Conditioning","Information Flow & Signal Consistency","Authority & Decision Escalation Structure","Regulatory Thresholds & Compliance Mechanisms","Accountability Closure","Bottleneck Identification & Elimination","Spatial Geometry & Flow Logic"].map(x=><article key={x}><i /><h3>{x}</h3><p>System-level change designed to prevent pressure from becoming disaster.</p></article>)}</div><Rule /></section>

      <section className={styles.solutions}><h2>Proposed Solutions</h2><ol><li><strong>Unified Incident Command.</strong> One on-site command with binding authority and one shared live data layer.</li><li><strong>Operator Blacklist/Whitelist.</strong> A national registry of compliant and repeat-offender promoters and venues.</li><li><strong>Clear accountability.</strong> One safety executive with decision authority over throttling, rerouting and shutdown.</li><li><strong>Resilient communication.</strong> Bluetooth beacons, SMS and FM micro-broadcast with geo-fenced priority corridors.</li><li><strong>Visible crowd-health signals.</strong> A simple heat, fatigue, wait-time and density index with micro-care pods at choke points.</li></ol></section>

      <section className={styles.thanks}><div className={styles.dots}>{Array.from({length:6},(_,i)=><i key={i}/>)}</div><Rule /><p>thank you for viewing till the end !</p></section>
      <section className={styles.closing} aria-label="Closing crowd artwork"><div /></section>
      <footer className={styles.footer}><h2>Buried In The Crowd</h2><p>SYSTEMS THINKING AND DESIGN</p></footer>
    </main>
  );
}
