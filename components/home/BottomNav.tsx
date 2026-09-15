"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./BottomNav.module.css";

const EASE = [0.65, 0, 0.35, 1] as const;
// Derived from the collapsed row's own geometry (Figma): Behance/LinkedIn
// are 54px circles, gap-29px from the center circle (now 76px). Distance
// from each icon's center to the center circle's center is
// 54/2 + 29 + 76/2 = 94px - that's how far they travel inward to tuck
// behind the pill.
const ICON_TRAVEL = 94;

const WORDS = [
  { label: "Home", targetId: null },
  { label: "Projects", targetId: "featured-projects" },
  { label: "About", targetId: "about" },
];

function scrollToSection(targetId: string | null) {
  if (targetId === null) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
}

// The idle-state "glass" ring (grey + backdrop blur + inset shadow) is
// the same rgba(115,115,115,0.56) tone the center button's own bezel
// uses (see CollapsedCenter below), just without its white gradient fade -
// that fade is a percentage-based stop specific to the center circle's own
// 76px gradient; Behance/LinkedIn's own Figma gradient is defined in
// absolute coordinates where the fade-to-white only happens in the last
// 0.02px, i.e. it's flat solid grey for all practical purposes. Kept as
// two separate layers (glass ring always present, solid blue fades in on
// top) rather than trying to transition the fill itself, since CSS can't
// animate a backdrop-blur layer into a flat color - opacity is what's
// actually animatable here.
function NavButtonBackground({ hovered }: { hovered: boolean }) {
  return (
    <>
      <span className="absolute inset-0 rounded-full bg-[rgba(115,115,115,0.56)] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[10.5px]" />
      <span
        className={`absolute inset-0 rounded-full bg-[#6095F9] ${styles.hoverFade}`}
        style={{ opacity: hovered ? 1 : 0 }}
      />
    </>
  );
}

function BehanceGlyph() {
  return (
    <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute inset-0 h-full w-full">
      <path
        d="M30.364 20.0584H35.8537V21.6013H30.364V20.0584ZM24.8633 26.1632C26.0768 25.4905 26.7124 24.4672 26.7124 22.886C26.7124 19.7587 24.7037 19 22.384 19H16V34.6972H22.5629C25.0229 34.6972 27.3316 33.3264 27.3316 30.1385C27.3316 28.1684 26.5281 26.7115 24.8633 26.1632ZM18.9774 21.6778H21.7704C22.8463 21.6778 23.8121 22.0253 23.8121 23.4726C23.8121 24.8051 23.0609 25.3407 21.996 25.3407H18.9774V21.6778ZM22.1556 32.0321H18.9746V27.7093H22.2189C23.5287 27.7093 24.357 28.3437 24.357 29.9504C24.357 31.5316 23.3691 32.0321 22.1556 32.0321ZM38 29.1789C38 25.8157 36.3022 23.0136 33.2313 23.0136C30.2457 23.0136 28.2149 25.6181 28.2149 29.0323C28.2149 32.5708 30.1383 35 33.2313 35C35.573 35 37.0892 33.779 37.8184 31.1745H35.4437C35.185 32.1468 34.1338 32.6569 33.3166 32.6569C31.7371 32.6569 30.9116 31.5858 30.9116 29.7655H37.9807C37.989 29.5774 38 29.3798 38 29.1789ZM30.9116 27.7954C30.9969 26.3003 31.8582 25.3662 33.146 25.3662C34.4998 25.3662 35.1767 26.2875 35.2951 27.7954H30.9116Z"
        fill="#EFF0F1"
      />
    </svg>
  );
}

function LinkedInGlyph() {
  return (
    <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute inset-0 h-full w-full">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.1719 23.6659H28.2573V25.7009C28.8458 24.5305 30.355 23.4789 32.6221 23.4789C36.9682 23.4789 38 25.8087 38 30.0833V38H33.6V31.0568C33.6 28.6225 33.0115 27.2497 31.5133 27.2497C29.4354 27.2497 28.5719 28.7292 28.5719 31.0557V38H24.1719V23.6659ZM16.627 37.813H21.027V23.4789H16.627V37.813ZM21.6573 18.805C21.6575 19.1738 21.5843 19.539 21.4421 19.8792C21.2999 20.2195 21.0915 20.5282 20.829 20.7872C20.5657 21.0491 20.2534 21.2566 19.9099 21.3978C19.5664 21.539 19.1984 21.6111 18.827 21.61C18.0786 21.6083 17.3606 21.3133 16.8272 20.7883C16.5657 20.5283 16.3581 20.2193 16.2161 19.879C16.0742 19.5387 16.0008 19.1737 16 18.805C16 18.0603 16.297 17.3475 16.8283 16.8217C17.3604 16.2947 18.0792 15.9993 18.8281 16C19.5783 16 20.2977 16.2959 20.829 16.8217C21.3603 17.3475 21.6573 18.0603 21.6573 18.805Z"
        fill="#EFF0F1"
      />
    </svg>
  );
}

function CollapsedCenter() {
  return (
    <motion.div
      key="collapsed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: EASE }}
      className="relative flex h-[76px] w-[76px] items-center justify-center rounded-[999px]"
    >
      <span className="absolute inset-0 rounded-[999px] bg-gradient-to-b from-[rgba(115,115,115,0.56)] from-[64.744%] to-white shadow-[inset_0px_4px_4px_2px_rgba(0,0,0,0.25)] backdrop-blur-[10.5px]" />
      {/* Centered by the parent's flex layout alone - no extra margin here,
          that was double-centering it off to one side. */}
      <span className="relative flex h-[60.4px] w-[60.4px] items-center justify-center rounded-full bg-[#FE5B2A] p-[12.37px] shadow-[inset_0px_-5px_4px_0px_rgba(255,255,255,0.25),inset_0px_5px_6.6px_0px_rgba(0,0,0,0.46)]">
        <span className="flex items-center gap-[1.77px]">
          <img src="/images/hero/nav-dot.svg" alt="" className="h-[6.19px] w-[6.19px]" />
          <img src="/images/hero/nav-dot.svg" alt="" className="h-[6.19px] w-[6.19px]" />
          <img src="/images/hero/nav-dot.svg" alt="" className="h-[6.19px] w-[6.19px]" />
        </span>
      </span>
    </motion.div>
  );
}

function ExpandedCenter() {
  // Measuring the hovered word's real position/width directly (instead of
  // relying on layoutId's mount/unmount shared-element detection) and
  // driving one single, always-mounted highlight via spring. layoutId was
  // fighting the outer pill's own `layout` auto-width animation - nested
  // layout animations re-projecting on every hover change is what read as
  // a "shift" instead of a continuous glide. This is fully deterministic:
  // no mount/unmount cycle, so there's nothing to visibly jump.
  const [highlight, setHighlight] = useState<{ left: number; width: number } | null>(null);

  return (
    <motion.div
      key="expanded"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: EASE }}
      className="relative flex h-[76px] items-center gap-[3.53px] rounded-[999px] bg-[rgba(47,48,50,0.5)] p-[8.84px] backdrop-blur-[10.5px]"
    >
      <motion.div
        className="pointer-events-none absolute top-[8.84px] left-0 h-[58.32px] rounded-[999px] bg-[#FE5B2A]"
        initial={false}
        animate={{
          x: highlight?.left ?? 0,
          width: highlight?.width ?? 0,
          opacity: highlight ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.6 }}
      />
      {WORDS.map(({ label, targetId }) => (
        <button
          key={label}
          type="button"
          className="relative z-[1] flex h-full items-center justify-center border-none bg-transparent px-[10.6px]"
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            setHighlight({ left: el.offsetLeft, width: el.offsetWidth });
          }}
          onMouseLeave={() => setHighlight(null)}
          onClick={() => scrollToSection(targetId)}
        >
          <span className="relative whitespace-nowrap font-bricolage text-[21.2px] uppercase tracking-[-0.1px] text-[#EFF0F1]">
            {label}
          </span>
        </button>
      ))}
    </motion.div>
  );
}

export function BottomNav() {
  const [expanded, setExpanded] = useState(false);
  const [behanceHovered, setBehanceHovered] = useState(false);
  const [linkedinHovered, setLinkedinHovered] = useState(false);

  return (
    // No hover handlers on this outer div: Behance/LinkedIn are DOM
    // children of it (even though positioned outside its visual box), so
    // a handler here would fire whenever *they* were hovered too - which
    // was incorrectly triggering the expand. The expand trigger lives on
    // the center element alone, below.
    <div className="relative flex h-[76px] items-center justify-center">
      <motion.a
        href="https://www.behance.net/JeeviteshGaur_Design"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Behance"
        className="absolute left-1/2 top-1/2 h-[54px] w-[54px] overflow-hidden rounded-full"
        style={{ pointerEvents: expanded ? "none" : "auto" }}
        onMouseEnter={() => setBehanceHovered(true)}
        onMouseLeave={() => setBehanceHovered(false)}
        animate={{
          x: expanded ? "-50%" : `calc(-50% - ${ICON_TRAVEL}px)`,
          y: "-50%",
          zIndex: expanded ? 0 : 2,
          opacity: expanded ? 0 : 1,
        }}
        transition={{ duration: 0.42, ease: EASE }}
      >
        <NavButtonBackground hovered={behanceHovered} />
        <BehanceGlyph />
      </motion.a>

      <motion.div
        layout
        className="relative z-[1] overflow-hidden rounded-[999px]"
        transition={{ layout: { duration: 0.42, ease: EASE } }}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {expanded ? <ExpandedCenter /> : <CollapsedCenter />}
        </AnimatePresence>
      </motion.div>

      <motion.a
        href="https://www.linkedin.com/in/jeevitesh-gaur-452b84331"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="absolute left-1/2 top-1/2 h-[54px] w-[54px] overflow-hidden rounded-full"
        style={{ pointerEvents: expanded ? "none" : "auto" }}
        onMouseEnter={() => setLinkedinHovered(true)}
        onMouseLeave={() => setLinkedinHovered(false)}
        animate={{
          x: expanded ? "-50%" : `calc(-50% + ${ICON_TRAVEL}px)`,
          y: "-50%",
          zIndex: expanded ? 0 : 2,
          opacity: expanded ? 0 : 1,
        }}
        transition={{ duration: 0.42, ease: EASE }}
      >
        <NavButtonBackground hovered={linkedinHovered} />
        <LinkedInGlyph />
      </motion.a>
    </div>
  );
}
