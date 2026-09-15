import styles from "./BuriedInTheCrowd.module.css";
import { OverviewSection } from "./OverviewSection";
import { TeamSection } from "./TeamSection";
import { ProcessSection } from "./ProcessSection";
import { GigamapSection } from "./GigamapSection";
import { DotDividerSection } from "./DotDividerSection";
import { ScrollTransitionSection } from "./ScrollTransitionSection";
import { StampedeDefinitionSection, StampedeFormationIntroSection, StampedePathSection } from "./StampedeSequenceSections";
import { StakeholderMappingSection, PowerInterestMatrixSection } from "./ResearchMappingSections";
import { CausalMappingIntroSection, CausalMapProcessSection } from "./CausalMappingSections";
import { CausalFindingsSection, CausalMapLegendSection } from "./CausalFindingsSections";
import {
  ClosingArtworkSection,
  ClosingFooterSection,
  ExistingInterventionsSection,
  LeveragePointsSection,
  ProposedSolutionsSection,
  ThankYouSection,
} from "./FinalSections";

function Rule() { return <div className={styles.rule}><i /><span /></div>; }
function Tag({ children }: { children: React.ReactNode }) { return <span className={styles.tag}>{children}</span>; }

export function BuriedInTheCrowd() {
  return (
    <main className={styles.page}>
      <section className={styles.masthead}>
        <div><h2>Systems</h2><p>THINKING AND DESIGN</p></div><p>CASE STUDY</p><Rule />
      </section>

      <section className={styles.hero} aria-label="Buried in the Crowd title artwork">
        <div className={styles.heroTitle} style={{ backgroundPosition: "calc(50% - 2px) 1px" }} />
        <div className={styles.heroCrowd} />
      </section>

      <OverviewSection />

      <TeamSection />

      <ProcessSection />

      <GigamapSection />
      <DotDividerSection />
      <ScrollTransitionSection />

      <StampedeDefinitionSection />
      <StampedeFormationIntroSection />
      <StampedePathSection />

      <StakeholderMappingSection />
      <PowerInterestMatrixSection />

      <CausalMappingIntroSection />
      <CausalMapProcessSection />
      <CausalMapLegendSection />
      <CausalFindingsSection />
      <ExistingInterventionsSection />
      <LeveragePointsSection />
      <ProposedSolutionsSection />
      <ThankYouSection />
      <ClosingArtworkSection />
      <ClosingFooterSection />
    </main>
  );
}
