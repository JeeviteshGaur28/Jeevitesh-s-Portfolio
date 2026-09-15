import type { Metadata } from "next";
import { ScaleStage } from "@/components/ScaleStage";
import { BackButton } from "@/components/vasna/BackButton";
import { CaseStudyNav } from "@/components/vasna/CaseStudyNav";
import { Hero } from "@/components/vasna/Hero";
import { AboutProject } from "@/components/vasna/AboutProject";
import { ResearchQuestion } from "@/components/vasna/ResearchQuestion";
import { ResearchProcess } from "@/components/vasna/ResearchProcess";
import { WhoWeMet } from "@/components/vasna/WhoWeMet";
import { Interviews } from "@/components/vasna/Interviews";
import { PowerMatrix } from "@/components/vasna/PowerMatrix";
import { DayInLife } from "@/components/vasna/DayInLife";
import { ResearchFindings } from "@/components/vasna/ResearchFindings";
import { DividerOutcome } from "@/components/vasna/DividerOutcome";
import { GameOutcome } from "@/components/vasna/GameOutcome";
import { DesignDecisions } from "@/components/vasna/DesignDecisions";
import { Iterations } from "@/components/vasna/Iterations";
import { UserTesting } from "@/components/vasna/UserTesting";
import { ElementsOfGame } from "@/components/vasna/ElementsOfGame";
import { FinalBoard } from "@/components/vasna/FinalBoard";
import { TeamMembers } from "@/components/vasna/TeamMembers";
import { FooterImages } from "@/components/vasna/FooterImages";
import { ContactArea } from "@/components/vasna/ContactArea";

export const metadata: Metadata = {
  title: "Hop & Shop in Vasna — Case Study",
  description: "Ethnographic UX research at Vasna's market, turned into a playable tabletop board game.",
};

export default function VasnaCaseStudy() {
  return (
    <>
      {/* Fixed-position chrome lives OUTSIDE ScaleStage - a transformed
          ancestor becomes the containing block for `position: fixed`
          descendants, which would break these (see home page's Hero/
          BottomNav for the same pattern). They render at their own
          real, unscaled size, glued to the actual browser edges. */}
      <BackButton />
      <CaseStudyNav />

      <ScaleStage>
        <main className="mx-auto w-[1440px]">
          <Hero />
          <AboutProject />
          <ResearchQuestion />
          <ResearchProcess />
          <WhoWeMet />
          <Interviews />
          <PowerMatrix />
          <DayInLife />
          <ResearchFindings />
          <DividerOutcome />
          <GameOutcome />
          <DesignDecisions />
          <Iterations />
          <UserTesting />
          <ElementsOfGame />
          <FinalBoard />
          <TeamMembers />
          <FooterImages />
          <ContactArea />
        </main>
      </ScaleStage>
    </>
  );
}
