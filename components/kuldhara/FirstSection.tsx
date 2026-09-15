"use client";

import { useRouter } from "next/navigation";

// The real "1st section" node (1771:2420) in Figma: back button and the
// heading+divider block are part of ONE static composition at the very
// top of the page (0,0 to 1440x467, ending exactly where the Hero image
// begins) - Figma only shows this resting/scroll-0 position, so it scrolls
// away with the page like everything else. Every element below is
// absolutely positioned using its real left/top within this one section.
// The nav bar (email/contact pill) is a separate, `fixed`, scroll-triggered
// element - see CaseStudyNav.tsx - since a scroll-to-fade-in interaction
// isn't something a static design tool can express as a layout position.
export function FirstSection() {
  const router = useRouter();

  return (
    <div className="relative mx-auto h-[467px] max-w-[1440px]">
      <button
        type="button"
        aria-label="Back"
        onClick={() => router.push("/")}
        className="absolute flex items-center gap-[10px] rounded-[98px] bg-[#fe5b2a] px-[22px] py-[17px] drop-shadow-[0px_20px_20px_rgba(26,18,10,0.42)] backdrop-blur-[10.5px] transition-transform duration-200 ease-out hover:scale-105"
        style={{ left: 120, top: 49, width: 111, height: 48 }}
      >
        <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_-5px_4px_0px_rgba(255,255,255,0.31),inset_0px_8px_6.3px_0px_rgba(0,0,0,0.25)]" />
        <img src="/images/nav-back-arrow.svg" alt="" className="relative h-[16px] w-[16px] rotate-45" />
        <p className="relative whitespace-nowrap font-mono text-[15px] font-extrabold tracking-[-0.1px] text-[#eff0f1]">
          BACK
        </p>
      </button>

      <div className="absolute" style={{ left: 276, top: 171, width: 791 }}>
        <div className="flex flex-col gap-[15px]">
          <div className="w-[730px]">
            <p
              className="font-fraunces text-[64px] font-black leading-[105px] text-black"
              style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
            >
              The Village{" "}
              <span className="font-black text-black">of </span>
              <span
                className="bg-clip-text italic text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(163deg, rgb(255,245,230) 3.3%, rgb(255,169,70) 45.1%, rgb(180,120,0) 96.6%)",
                }}
              >
                Kuldhara
              </span>
            </p>
            <p
              className="font-fraunces text-[28px] font-light italic leading-[43px] text-black/55"
              style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
            >
              A Multisensory VR Experience
            </p>
          </div>
          <p className="w-[791px] font-lato text-[20px] leading-[32px] text-[#3a2c21]">
            &quot;Five thousand people are said to have vanished overnight in 1825. The census numbers say
            otherwise. I built the version the records support - where your hands aren&apos;t holding a
            controller, they are the controller, pulling rope, feeling the story instead of just reading
            it.&quot;
          </p>
        </div>
      </div>

      <img
        alt=""
        aria-hidden
        src="/images/heading-divider.svg"
        className="absolute"
        style={{ left: 248, top: 308, width: 1103.7, height: 10 }}
      />

      <p
        className="absolute w-[115px] whitespace-nowrap font-fraunces text-[24px] font-light italic text-black/55"
        style={{ left: 1202, top: 274 }}
      >
        Case Study
      </p>
    </div>
  );
}
