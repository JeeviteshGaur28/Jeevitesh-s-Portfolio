"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Dark mode uses genuinely different icon assets (monochrome light glyphs
// pulled from the dark Figma frame), not a CSS recolor - the light-mode
// icons are full-color brand logos that wouldn't read the same way
// inverted.
const TOOLS = [
  { name: "Figma", src: "/images/loadout/figma.svg", darkSrc: "/images/loadout/figma-dark.svg" },
  { name: "Claude", src: "/images/loadout/claude.svg", darkSrc: "/images/loadout/claude-dark.svg" },
  { name: "Illustrator", src: "/images/loadout/illustrator.svg", darkSrc: "/images/loadout/illustrator-dark.svg" },
  { name: "Photoshop", src: "/images/loadout/photoshop.svg", darkSrc: "/images/loadout/photoshop-dark.svg" },
  { name: "After Effects", src: "/images/loadout/aftereffects.svg", darkSrc: "/images/loadout/aftereffects-dark.svg" },
  { name: "Premiere Pro", src: "/images/loadout/premiere.svg", darkSrc: "/images/loadout/premiere-dark.svg" },
  { name: "Notion", src: "/images/loadout/notion.svg", darkSrc: "/images/loadout/notion-dark.svg" },
  { name: "Miro", src: "/images/loadout/miro.svg", darkSrc: "/images/loadout/miro-dark.svg" },
  { name: "Unity", src: "/images/loadout/unity.svg", darkSrc: "/images/loadout/unity-dark.svg" },
  { name: "Blender", src: "/images/loadout/blender.svg", darkSrc: "/images/loadout/blender-dark.svg" },
  { name: "GitHub", src: "/images/loadout/github.svg", darkSrc: "/images/loadout/github-dark.svg" },
  { name: "Autodesk", src: "/images/loadout/autodesk.svg", darkSrc: "/images/loadout/autodesk-dark.svg" },
  { name: "Arduino", src: "/images/loadout/arduino.svg", darkSrc: "/images/loadout/arduino-dark.svg" },
  { name: "Raspberry Pi", src: "/images/loadout/raspberrypi.svg", darkSrc: "/images/loadout/raspberrypi-dark.svg" },
  { name: "React", src: "/images/loadout/react.svg", darkSrc: "/images/loadout/react-dark.svg" },
  { name: "VS Code", src: "/images/loadout/vscode.svg", darkSrc: "/images/loadout/vscode-dark.svg" },
  { name: "Claude Code", src: "/images/loadout/claudecode.svg", darkSrc: "/images/loadout/claudecode-dark.svg" },
];

// Not specified in Figma - a comfortable readable auto-scroll pace.
const NORMAL_SPEED = 65; // px/sec
const SLOW_SPEED = 16; // px/sec, on hover - slows, never pauses/reverses

function ToolCard({ name, src, darkSrc }: { name: string; src: string; darkSrc: string }) {
  return (
    <div className="flex h-[65px] w-[65px] shrink-0 items-center justify-center rounded-[8.421px] bg-[#EFF0F1] p-[6px] shadow-[2.526px_2.526px_5.895px_0px_rgba(24,25,27,0.16),-2.526px_-2.526px_5.895px_0px_rgba(255,255,255,0.9)] dark:bg-[#18191B] dark:shadow-[5px_5px_10px_0px_rgba(0,0,0,0.7),-5px_-5px_10px_0px_rgba(82,87,94,0.55)]">
      <img src={src} alt={name} className="max-h-full max-w-full object-contain dark:hidden" />
      <img src={darkSrc} alt={name} className="hidden max-h-full max-w-full object-contain dark:block" />
    </div>
  );
}

// Driven by requestAnimationFrame (not a CSS animation) specifically so
// the hover-slowdown is a smooth rate change rather than a jump: position
// accumulates continuously every frame regardless of current speed, so
// switching between normal/slow speed never resets or snaps the track -
// it just changes how fast the same continuous position advances.
// The list is duplicated back-to-back and wraps exactly at half the
// track's total scrollWidth, which is what makes the loop point
// invisible - there's always a second full copy already in place when
// the first one scrolls out.
function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const speedRef = useRef(NORMAL_SPEED);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      positionRef.current -= speedRef.current * dt;

      const track = trackRef.current;
      if (track) {
        const halfWidth = track.scrollWidth / 2;
        if (halfWidth > 0 && Math.abs(positionRef.current) >= halfWidth) {
          positionRef.current += halfWidth;
        }
        track.style.transform = `translateX(${positionRef.current}px)`;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className="relative h-[76px] w-full overflow-hidden"
      onMouseEnter={() => {
        speedRef.current = SLOW_SPEED;
      }}
      onMouseLeave={() => {
        speedRef.current = NORMAL_SPEED;
      }}
    >
      <div ref={trackRef} className="absolute left-0 top-0 flex items-center gap-[30px]" style={{ willChange: "transform" }}>
        {[...TOOLS, ...TOOLS].map((tool, i) => (
          <ToolCard key={`${tool.name}-${i}`} name={tool.name} src={tool.src} darkSrc={tool.darkSrc} />
        ))}
      </div>
      {/* Fade masks - left/right, exactly as Figma has them */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[90px] bg-gradient-to-r from-[#EFF0F1] to-[rgba(239,240,241,0.62)] dark:from-[#18191B] dark:to-[rgba(24,25,27,0.62)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[90px] bg-gradient-to-l from-[#EFF0F1] to-[rgba(239,240,241,0.6)] dark:from-[#18191B] dark:to-[rgba(24,25,27,0.6)]" />
    </div>
  );
}

const revealVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};
const revealTransition = { duration: 0.5, ease: [0.65, 0, 0.35, 1] as const };

export function Loadout() {
  return (
    <motion.div
      className="border-[0.8px] border-[#c3c4c8] py-[40px]"
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={revealTransition}
    >
      <div className="flex items-end gap-[9px] pb-[68px] pl-[27px]">
        <h2
          className="whitespace-nowrap font-bricolage text-[52px] leading-[52.275px] tracking-[-1.792px] text-[#0C0C0C] dark:text-[#EFF0F1]"
          style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}
        >
          Loadout
        </h2>
        <span className="mb-[9px] h-[8px] w-[8px] shrink-0 bg-[#FE5B2A] opacity-80" />
      </div>
      <Marquee />
    </motion.div>
  );
}
