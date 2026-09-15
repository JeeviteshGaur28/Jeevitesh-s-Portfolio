import type { Metadata } from "next";
import { ScaleStage } from "@/components/ScaleStage";
import { BuriedInTheCrowd } from "@/components/buried-in-the-crowd/BuriedInTheCrowd";
import { CaseStudyChrome } from "@/components/buried-in-the-crowd/CaseStudyChrome";
import canvasStyles from "@/components/buried-in-the-crowd/CanvasFix.module.css";

export const metadata: Metadata = {
  title: "Buried in the Crowd — Case Study",
  description: "A systems-thinking investigation into stampede disasters in India.",
};

export default function BuriedInTheCrowdPage() {
  return (
    <>
      <CaseStudyChrome />
      <div className={canvasStyles.canvas}>
        <ScaleStage>
          <BuriedInTheCrowd />
        </ScaleStage>
      </div>
    </>
  );
}
