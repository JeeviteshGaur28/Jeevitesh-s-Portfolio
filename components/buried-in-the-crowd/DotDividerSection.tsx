import styles from "./DotDividerSection.module.css";

const leftDots = [1, 2, 3, 4];
const rightDots = [5, 6, 7, 8];

function DotCluster({ assets }: { assets: number[] }) {
  return (
    <div className={styles.cluster} aria-hidden="true">
      <div className={styles.columns}>
        {assets.map((asset) => (
          <img
            key={asset}
            src={`/images/buried-in-the-crowd/section7-dot-${asset}.svg`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}

export function DotDividerSection() {
  return (
    <section className={styles.section} data-node-id="1774:2426" aria-hidden="true">
      <div className={styles.dots}>
        <DotCluster assets={leftDots} />
        <DotCluster assets={rightDots} />
      </div>
    </section>
  );
}
