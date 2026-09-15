import { Hero } from "@/components/home/Hero";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { TestimonialsAboutFooter } from "@/components/home/TestimonialsAboutFooter";
import { BottomNav } from "@/components/home/BottomNav";
import { ScaleStage } from "@/components/ScaleStage";
import { IntroLoader } from "@/components/IntroLoader";

export default function Home() {
  return (
    <>
      <IntroLoader />
      <ScaleStage>
        <main className="mx-auto w-[1440px]">
          <Hero />
          <FeaturedProjects />
          <TestimonialsAboutFooter />
        </main>
      </ScaleStage>

      {/* True viewport-fixed position, deliberately OUTSIDE ScaleStage -
          a transformed ancestor becomes the containing block for its
          `position: fixed` descendants, which would break this. Living
          outside it keeps this glued to the real browser edges at its
          own natural, unscaled size on every screen width. */}
      <div className="fixed bottom-[29px] left-1/2 z-50 -translate-x-1/2">
        <BottomNav />
      </div>
    </>
  );
}
