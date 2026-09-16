"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FADE_IN_AT = 100;

// IntersectionObserver against a sentinel, not a window.scrollY listener -
// this reacts to the sentinel's actual on-screen position, so it can't be
// thrown off by anything unusual in how the page scrolls (dynamic mobile
// toolbars, zoom, a non-default scroll container) the way a raw scrollY
// comparison can. rootMargin shrinks the effective viewport by the
// threshold from the top, so the sentinel (pinned at the real document
// top) stops intersecting exactly once the user has scrolled past it.
function useScrolledPast(thresholdPx: number) {
  const [past, setPast] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setPast(!entry.isIntersecting),
      { rootMargin: `-${thresholdPx}px 0px 0px 0px` }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [thresholdPx]);

  return { past, sentinelRef };
}

// A frosted light-blue disc behind a solid electric-blue circle. A real
// opacity swing down to ~0.15 plus a scale pulse, not a subtle fade, so
// the "live" blink actually reads as blinking.
function StatusDot() {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="25" height="25" rx="12.5" fill="#D5E0F3" fillOpacity="0.84" />
      <motion.circle
        cx="12.5"
        cy="12.5"
        r="4.5"
        fill="#0059FF"
        animate={{ opacity: [1, 0.15, 1], scale: [1, 1.25, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

// Fixed, scroll-triggered nav pill - Figma's static "Nav Bar" node only
// shows where this rests at scroll=0 (see FirstSection.tsx), it can't
// express the fade-in-on-scroll interaction itself. Plain opacity fade
// only - no shape/size morph. The outer layer is bg-[#fe5b2a]/60, not a
// fully opaque hex - backdrop-blur has nothing to blur through an opaque
// layer. The frosted inner layer is inset-0 + rounded-[inherit] on the
// same box as the outer layer (not inset-[Npx] with its own padding), so
// the two sit flush instead of leaving a gap; content padding lives on a
// separate inner wrapper. The whole pill is the mailto link, not a
// sub-element inside it.
export function CaseStudyNav() {
  const { past: visible, sentinelRef } = useScrolledPast(FADE_IN_AT);

  return (
    <>
      {/* Not fixed - sits in normal document flow at the very top of the
          page, so it scrolls away with real page content. The observer
          above watches this, not the nav pill itself. */}
      <div ref={sentinelRef} aria-hidden className="absolute left-0 top-0 h-px w-px" />

      <div className="fixed left-1/2 top-[17px] z-[60] -translate-x-1/2">
        <AnimatePresence>
          {visible && (
            <motion.a
              href="mailto:jeeviteshgaur28@gmail.com"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative flex items-center overflow-hidden rounded-[60px] bg-[#fe5b2a]/60 backdrop-blur-[10.5px]"
            >
              <span className="pointer-events-none absolute inset-0 rounded-[inherit] border-[0.8px] border-[rgba(255,255,255,0.5)] bg-[rgba(255,255,255,0.2)] shadow-[inset_0px_4px_6px_0px_rgba(255,255,255,0.25)] backdrop-blur-[12px]" />

              <div className="relative flex items-center gap-[19px] px-[9px] py-[8px]">
                <img
                  src="/images/nav-avatar.png"
                  alt="Jeevitesh Gaur"
                  className="h-[40px] w-[40px] rounded-full object-cover"
                />

                <div className="flex items-center">
                  <p className="whitespace-nowrap px-[10px] py-[8px] font-outfit text-[16px] text-[#fff9e9]">
                    Available for work
                  </p>
                  <StatusDot />
                </div>

                <span className="flex items-center gap-[8px] rounded-[52px] bg-white px-[16px] py-[8px]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6h16v12H4z" stroke="#18191B" strokeWidth="1.6" strokeLinejoin="round" />
                    <path d="M4 7l8 6 8-6" stroke="#18191B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="whitespace-nowrap font-outfit text-[16px] text-black">Email me !</span>
                </span>
              </div>
            </motion.a>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
