import styles from "./ResearchMappingSections.module.css";

const stakeholderColumns = [
  ["Crowd & Participants", "Technology Provider", "Disaster Management Authority", "Event Organisers"],
  ["Media Organisers", "Political Leaders", "Transport Authority", "Street Vendors"],
  ["Tourism Body", "Local Administration", "Parking Contractors", "Medical and Emergency Staff"],
];

export function StakeholderMappingSection() {
  return (
    <section className={styles.stakeholderSection} data-node-id="1774:2434">
      <img className={styles.stakeholderTopRule} src="/images/buried-in-the-crowd/section12-rule-top.svg" alt="" />
      <img className={styles.stakeholderBottomRule} src="/images/buried-in-the-crowd/section12-rule-bottom.svg" alt="" />

      <h2>Stakeholder Mapping</h2>
      <div className={styles.stakeholderGrid}>
        {stakeholderColumns.map((column, columnIndex) => (
          <div className={`${styles.stakeholderColumn} ${styles[`stakeholderColumn${columnIndex + 1}`]}`} key={columnIndex}>
            {column.map((stakeholder) => <div className={styles.stakeholder} key={stakeholder}>{stakeholder}</div>)}
          </div>
        ))}
      </div>
    </section>
  );
}

const highPowerLowInterest = [
  "Municipal Corporations", "PWD", "Smart City Agencies", "Tourism Infrastructure Agencies",
  "Insurance & Compensation Bodies", "Indian Railways", "State Transport Corporations",
  "Stadium Authorities", "Heritage Conservation Bodies", "Judiciary",
];

const highPowerHighInterest = [
  "District Magistrate (DM)", "Municipal Commissioners", "Temple Trusts / Boards",
  "Police & Security", "Political Leader", "Disaster Management Authorities", "Event organizer",
];

const lowPowerLowInterest = [
  "SMS Alert Systems", "PA System Vendors", "Digital Ticketing Providers", "RFID Vendors",
  "Local Strongman", "Party Workers", "Religious–Political Brokers",
];

const lowPowerHighInterestLeft = ["Elderly", "Women", "Children", "Disabled", "Hotel", "Street Vendors"];
const lowPowerHighInterestRight = ["Parking Operators", "Toilet Contractors", "Restaurant Owners", "Poor rural attendees", "Transport Unions", "Satsang Volunteers"];

function List({ items }: { items: string[] }) {
  return <div>{items.map((item) => <p key={item}>{item}</p>)}</div>;
}

export function PowerInterestMatrixSection() {
  return (
    <section className={styles.matrixSection} data-node-id="1774:2435">
      <div className={styles.matrixTitle}>
        <h2>Power- Interest</h2>
        <span>matrix</span>
      </div>
      <img className={styles.matrixTitleDivider} src="/images/buried-in-the-crowd/section13-title-divider.svg" alt="" />

      <img className={styles.powerAxis} src="/images/buried-in-the-crowd/section13-axis-power.svg" alt="" />
      <img className={styles.interestAxis} src="/images/buried-in-the-crowd/section13-axis-interest.svg" alt="" />
      <img className={styles.matrixVertical} src="/images/buried-in-the-crowd/section13-center-vertical.svg" alt="" />
      <img className={styles.matrixHorizontal} src="/images/buried-in-the-crowd/section13-center-horizontal.svg" alt="" />
      <span className={styles.powerLabel}>Power</span>
      <span className={styles.interestLabel}>Interest</span>

      <article className={`${styles.quadrant} ${styles.highLow}`}>
        <h3>High power, low interest</h3>
        <List items={highPowerLowInterest} />
      </article>

      <article className={`${styles.quadrant} ${styles.highHigh}`}>
        <h3>High power, High interest</h3>
        <List items={highPowerHighInterest} />
      </article>

      <article className={`${styles.quadrant} ${styles.lowLow}`}>
        <h3>Low power, low interest</h3>
        <List items={lowPowerLowInterest} />
      </article>

      <article className={`${styles.quadrant} ${styles.lowHigh}`}>
        <h3>Low power, High interest</h3>
        <div className={styles.lowHighLists}>
          <List items={lowPowerHighInterestLeft} />
          <img src="/images/buried-in-the-crowd/section13-list-divider.svg" alt="" />
          <List items={lowPowerHighInterestRight} />
        </div>
      </article>
    </section>
  );
}
