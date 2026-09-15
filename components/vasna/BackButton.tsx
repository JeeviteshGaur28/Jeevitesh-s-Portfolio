"use client";

import { useRouter } from "next/navigation";

// Matches the real "CTA- Back" node nested inside the Hero section itself
// in Figma (not the generic Components-page draft the first two passes
// used) - the same orange-pill CTA recipe as ReadPill/ViewWorkCta
// elsewhere in this codebase: bg + backdrop-blur, inset highlight/shadow,
// drop shadow.
export function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      aria-label="Back"
      onClick={() => router.push("/")}
      className="fixed left-[32px] top-[32px] z-[60] flex items-center gap-[10px] rounded-[98px] bg-[#fe5b2a] px-[22px] py-[17px] drop-shadow-[0px_20px_20px_rgba(26,18,10,0.42)] backdrop-blur-[10.5px] transition-transform duration-200 ease-out hover:scale-105"
    >
      <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_-5px_4px_0px_rgba(255,255,255,0.31),inset_0px_8px_6.3px_0px_rgba(0,0,0,0.25)]" />
      <img src="/images/vasna/cta-back-arrow.svg" alt="" className="relative h-[16px] w-[16px] rotate-45" />
      <p className="relative whitespace-nowrap font-mono text-[15px] font-extrabold tracking-[-0.1px] text-[#eff0f1]">
        BACK
      </p>
    </button>
  );
}
