import styles from "./FinalSections.module.css";

const interventionGroups = [
  { title: "Physical Controls", items: ["Barricades", "Queue Lanes", "Police force"] },
  { title: "Technical controls", items: ["CCTV", "Drones", "AI density analysis", "PA systems", "Signages"] },
  { title: "Administration controls", items: ["National building code(NBC)", "Event permissions", "Police deployment"] },
  { title: "Medical response", items: ["Inquiry committee", "Compensations", "FIR and suspension"] },
  { title: "Training measures", items: ["Crowd management training", "Volunteer marshals"] },
  { title: "Post disaster solutions", items: ["On-site medical camp", "ambulance deployment", "Tie-ups with the nearby hospitals"] },
];

const leveragePoints = [
  { className: styles.leverageOne, title: "Cultural & Behavioral Conditioning", body: "Repeated exposure to safety cues embedded in the environment" },
  { className: styles.leverageTwo, title: "Information Flow & Signal Consistency", body: "Standardised communication to prevent contradictory instructions" },
  { className: styles.leverageThree, title: "Authority & Decision Escalation Structure", body: "Clearly defined chains of command specifying" },
  { className: styles.leverageFour, title: "Regulatory Thresholds & Compliance Mechanisms", body: "Crowd density limits, entry rates, and maximum holding capacities" },
  { className: styles.leverageFive, title: "Accountability Closure", body: "Transparent post-event review mechanisms linking failures to corrective system changes" },
  { className: styles.leverageSix, title: "Bottleneck Identification & Elimination", body: "Systematic identification of choke points" },
  { className: styles.leverageSeven, title: "Spatial Geometry & Flow Logic", body: "Design standards for pathway width, visibility, turns, slopes, and separated entry/exit flows" },
];

const solutions = [
  "Unified Incident Command, One on-site command with binding authority over police, transport, venue ops, and medical. One shared data layer across police, transport, venue ops, medical, and organizers with a single live map and common thresholds.",
  "Operator Blacklist/Whitelist, National registry of compliant vs. repeat-offender promoters and venues affecting future permits and insurance.",
  "Legally designate one accountable safety executive per event with decision authority over entry throttling, rerouting, and shutdown. Clear allocation of duty-of-care across organizer, venue, authority, police with automatic penalties for breaches.",
  "Low-power Bluetooth beacons that broadcast local safety status to phones and steward devices without data networks. Redundant alerting via SMS, Bluetooth, and FM micro-broadcast. Geo-fenced priority corridors that automatically nudge nearby attendees aside via phone haptics when ambulances approach.",
  "Simple on-site index (heat, fatigue, wait time, density) shown at entries to prompt self-diversion before danger and exit first aid sections, Micro-care pods at final choke points (oxygen, water, seating) to reduce collapse risk during peak or extreme environment.",
];

function EndRule({ className = "", large = false }: { className?: string; large?: boolean }) {
  return <div className={`${styles.endRule} ${large ? styles.largeRule : ""} ${className}`} aria-hidden="true"><i /><span /></div>;
}

export function ExistingInterventionsSection() {
  return (
    <section className={styles.interventions} data-node-id="1774:2440">
      <EndRule className={styles.interventionsRule} />
      <h2>Existing<br />Interventions</h2>
      <div className={styles.interventionsDivider} aria-hidden="true" />
      <div className={styles.interventionGrid}>
        {interventionGroups.map((group) => (
          <article key={group.title}>
            <h3>{group.title}</h3>
            <div><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function LeveragePointsSection() {
  return (
    <section className={styles.leverage} data-node-id="1774:2441">
      <EndRule className={styles.leverageTopRule} />
      <h2>Leverage Points</h2>
      <div className={styles.leverageTree} aria-hidden="true">
        <span className={styles.treeHorizontal} />
        {[styles.branchOne, styles.branchTwo, styles.branchThree, styles.branchFour, styles.branchFive, styles.branchSix, styles.branchSeven].map((className) => (
          <i className={className} key={className} />
        ))}
      </div>
      {leveragePoints.map((point) => (
        <article className={`${styles.leveragePoint} ${point.className}`} key={point.title}>
          <h3>{point.title}</h3>
          <p>{point.body}</p>
        </article>
      ))}
      <EndRule className={styles.leverageBottomRule} large />
    </section>
  );
}

export function ProposedSolutionsSection() {
  return (
    <section className={styles.solutions} data-node-id="1774:2445">
      <div className={styles.solutionTimeline} aria-hidden="true">
        {solutions.map((_, index) => <i key={index} />)}
      </div>
      <div className={styles.solutionCopy}>
        <h2>Proposed Solutions</h2>
        <div>{solutions.map((solution) => <p key={solution}>{solution}</p>)}</div>
      </div>
    </section>
  );
}

export function ThankYouSection() {
  return (
    <section className={styles.thankYou} data-node-id="1774:2446">
      <div className={styles.thankDots} aria-hidden="true">{Array.from({ length: 6 }, (_, index) => <i key={index} />)}</div>
      <EndRule className={styles.thankRule} large />
      <p>thank you for viewing till the end !</p>
    </section>
  );
}

export function ClosingArtworkSection() {
  return (
    <section className={styles.closingArtwork} data-node-id="1774:2448" aria-label="Buried in the Crowd closing artwork">
      <div className={styles.closingLogoCrop}><img src="/images/buried-in-the-crowd/section22-artwork.png" alt="" /></div>
      <div className={styles.closingCrowdCrop}><img src="/images/buried-in-the-crowd/section22-artwork.png" alt="" /></div>
    </section>
  );
}

export function ClosingFooterSection() {
  return (
    <footer className={styles.closingFooter} data-node-id="1812:594">
      <div className={styles.footerContent}>
        <div className={styles.footerPrimary}>
          <a className={styles.portfolioBadge} href="/">PORTFOLIO</a>
          <div className={styles.footerIdentity}>
            <h2>Jeevitesh Gaur</h2>
            <p>Interaction Designer | Product Designer</p>
          </div>
        </div>

        <div className={styles.footerSecondary}>
          <p className={styles.footerLocation}>
            Currently based in Ahmedabad, India&apos;s Heritage City.
            <br />
            Always happy to connect !
          </p>
          <nav className={styles.footerPages} aria-label="Footer navigation">
            <b>Pages</b>
            <a href="/">Home</a>
            <a href="/#work">My Work</a>
            <a href="/#about">About</a>
          </nav>
          <a className={styles.footerEmail} href="mailto:jeeviteshgaur28@gmail.com">
            <span><img src="/images/buried-in-the-crowd/footer-email-icon.svg" alt="" /></span>
            <small>jeeviteshgaur28@gmail.com</small>
          </a>
        </div>

        <div className={styles.footerCopyright}>
          <p>© Jeevitesh Gaur@2026</p>
          <p>Designed through iterations, late nights and caffeine</p>
        </div>
      </div>
    </footer>
  );
}
