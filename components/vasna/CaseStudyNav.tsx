"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FADE_IN_AT = 96;

function useScrolledPast(threshold: number) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY >= threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return past;
}

// The real "Frame 1597881881" status-dot asset: a frosted light-blue disc
// behind a solid electric-blue circle. Recreated inline (not as a plain
// <img>) so the inner circle can actually blink - a bigger opacity swing
// and a touch of scale, not just a subtle fade, per feedback that the
// first version's blink read as too faint to notice.
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

// The real "Nav Bar" node nested inside the Hero section in Figma (not the
// three-dot-to-pill morph the earlier passes invented): one fixed pill,
// avatar + "Available for work" + blinking status dot + a white "Email
// me!" segment, that simply fades in past a scroll threshold - no
// circle-shape or size transition at all.
export function CaseStudyNav() {
  const visible = useScrolledPast(FADE_IN_AT);

  return (
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
                src="/images/vasna/navbar-avatar.png"
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
                  <path
                    d="M4 6h16v12H4z"
                    stroke="#18191B"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path d="M4 7l8 6 8-6" stroke="#18191B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="whitespace-nowrap font-outfit text-[16px] text-black">Email me !</span>
              </span>
            </div>
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}
