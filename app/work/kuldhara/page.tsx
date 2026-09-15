import type { Metadata } from "next";
import { FirstSection } from "@/components/kuldhara/FirstSection";
import { CaseStudyNav } from "@/components/kuldhara/CaseStudyNav";
import { HeroImage } from "@/components/kuldhara/HeroImage";
import { OverviewSection } from "@/components/kuldhara/OverviewSection";
import { StoryBehindIdea } from "@/components/kuldhara/StoryBehindIdea";
import { AboutResearch } from "@/components/kuldhara/AboutResearch";
import { ProcessSection } from "@/components/kuldhara/ProcessSection";
import { TechPipeline } from "@/components/kuldhara/TechPipeline";
import { MainAct } from "@/components/kuldhara/MainAct";
import { LimitationsScaleChallenges } from "@/components/kuldhara/LimitationsScaleChallenges";
import { Footer } from "@/components/kuldhara/Footer";
import { SectionDivider } from "@/components/kuldhara/Ornaments";

export const metadata: Metadata = {
  title: "The Village of Kuldhara — Case Study",
  description: "A multisensory VR experience for Meta Quest 3.",
};

export default function KuldharaCaseStudy() {
  return (
    <>
      <CaseStudyNav />

      <main className="min-w-[1440px] bg-[#FFF9F0]">
        <FirstSection />
        <HeroImage />

        <SectionDivider className="my-[80px]" />
        <OverviewSection />

        <SectionDivider className="my-[80px]" />
        <StoryBehindIdea />

        <SectionDivider className="my-[80px]" />
        <AboutResearch />

        <SectionDivider className="my-[80px]" dotClassName="bg-[#94704f]/60" lineClassName="bg-[#94704f]/30" />
        <ProcessSection />
        <SectionDivider className="my-[80px]" />

        <TechPipeline />

        <SectionDivider className="my-[80px]" />
        <MainAct />

        <div className="mx-auto h-[473px] w-[287px] rounded-[24px] bg-[#d9be93]" aria-hidden />

        <SectionDivider className="my-[80px]" />
        <LimitationsScaleChallenges />

        <Footer />
      </main>
    </>
  );
}
