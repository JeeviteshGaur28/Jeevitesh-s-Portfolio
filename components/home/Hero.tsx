"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import styles from "./Hero.module.css";
import { AudioPlayer } from "./AudioPlayer";

const pillClass =
  "flex shrink-0 items-center justify-center rounded-[98px] bg-[#EFF0F1] px-[28px] py-[16px] shadow-[10px_10px_20px_0px_rgba(24,25,27,0.18),-10px_-10px_20px_0px_rgba(255,255,255,0.95)] dark:bg-[#18191B] dark:shadow-[5px_5px_10px_0px_rgba(0,0,0,0.7),-5px_-5px_10px_0px_rgba(82,87,94,0.55)]";

function PortfolioBadge() {
  return (
    <div className={pillClass}>
      <p className="whitespace-nowrap font-mono text-[18px] font-bold tracking-[-0.1px] text-[#18191B] dark:text-[#EFF0F1]">
        PORTFOLIO
      </p>
    </div>
  );
}

// Item 5: split the flat Figma toggle export into an independently
// animatable track + thumb. Track keeps the original gradients/filters;
// the thumb is a separate full-size SVG layer that slides via
// `transform: translateX()`. Wired to next-themes: "on" (thumb right,
// moon visible) = dark mode; "off" (thumb left) = light mode, which is
// also the default for every new visitor.
const TOGGLE_ON_X = 0;
const TOGGLE_OFF_X = -21.76;

function ThemeToggle() {
  // `theme` is undefined on the very first client render (next-themes
  // hasn't read localStorage into React state yet, even though the actual
  // <html> class is already correct via its blocking inline script) - the
  // `mounted` guard keeps this component's own visual state matching the
  // real default (light / "off") until that first effect runs, so there's
  // no mismatched flash of the thumb jumping position after hydration.
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isOn = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      aria-pressed={isOn}
      onClick={() => setTheme(isOn ? "light" : "dark")}
      className="relative h-[31px] w-[53.842px] shrink-0 cursor-pointer border-none bg-transparent p-0"
    >
      <span
        className="absolute block"
        style={{ top: "-37.42%", right: "-36.4%", bottom: "-89.03%", left: "-36.4%" }}
      >
        <svg
          width="93.0421"
          height="70.2"
          viewBox="0 0 93.0421 70.2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0"
        >
          <g filter="url(#toggle-shadow)">
            <rect x="19.6" y="11.6" width="53.8421" height="31" rx="15.5" fill="url(#toggle-rim)" />
            <g filter="url(#toggle-inner-shadow)">
              <rect x="20.6859" y="12.6879" width="51.6667" height="28.8246" rx="14.4123" fill="#FE5B2A" />
            </g>
          </g>
          <defs>
            <filter id="toggle-shadow" x="0" y="0" width="93.0421" height="70.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="8" />
              <feGaussianBlur stdDeviation="9.8" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.101961 0 0 0 0 0.0705882 0 0 0 0 0.0392157 0 0 0 0.4 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
            <filter id="toggle-inner-shadow" x="20.6859" y="12.6879" width="51.6667" height="33.8246" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_innerShadow" />
              <feOffset dy="5" />
              <feGaussianBlur stdDeviation="3.3" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.56 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
            </filter>
            <linearGradient id="toggle-rim" x1="46.2491" y1="42.6" x2="46.2491" y2="11.6" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#737373" stopOpacity="0.55" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          width="93.0421"
          height="70.2"
          viewBox="0 0 93.0421 70.2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0"
          style={{
            transform: `translateX(${isOn ? TOGGLE_ON_X : TOGGLE_OFF_X}px)`,
            transition: "transform 280ms ease",
          }}
        >
          <circle cx="57.4011" cy="27.0984" r="13.3246" fill="url(#toggle-thumb-rim)" />
          <circle cx="57.3993" cy="27.1005" r="12.2368" fill="url(#toggle-thumb-texture)" />
          <path
            d="M57.8727 21.6909H59.4182V20.1455H60.9636V18.6H56.3273V20.1455H57.8727V21.6909ZM50.1455 32.5091H51.6909V30.9636H50.1455V32.5091ZM51.6909 34.0545H53.2364V32.5091H51.6909V34.0545ZM48.6 30.9636H50.1455V29.4182H51.6909V27.8727H50.1455V26.3273H48.6V30.9636ZM53.2364 35.6H60.9636V34.0545H53.2364V35.6ZM51.6909 30.9636H57.8727V29.4182H51.6909V30.9636ZM60.9636 34.0545H62.5091V32.5091H60.9636V34.0545ZM57.8727 29.4182H59.4182V27.8727H57.8727V29.4182ZM62.5091 32.5091H64.0545V30.9636H62.5091V32.5091ZM59.4182 27.8727H60.9636V21.6909H59.4182V27.8727ZM64.0545 30.9636H65.6V23.2364H64.0545V30.9636ZM60.9636 21.6909H62.5091V20.1455H60.9636V21.6909ZM62.5091 23.2364H64.0545V21.6909H62.5091V23.2364Z"
            fill="#18191B"
          />
          <defs>
            <linearGradient id="toggle-thumb-rim" x1="57.1292" y1="13.7738" x2="57.4011" y2="40.423" gradientUnits="userSpaceOnUse">
              <stop offset="0.503066" stopColor="white" />
              <stop offset="1" stopColor="#9D9D9D" />
            </linearGradient>
            {/* Restored from the original Figma export: a real pinwheel
                texture, not a "missing image" artifact as I'd first assumed. */}
            <pattern
              id="toggle-thumb-texture"
              patternUnits="userSpaceOnUse"
              patternTransform="matrix(2.9 0 0 2.9 55.9493 25.6505)"
              preserveAspectRatio="none"
              viewBox="0 0 29 29"
              width="1"
              height="1"
            >
              <rect width="14.5" height="14.5" fill="#F4F3F3" />
              <path d="M0 0H14.5L7.07738 7.07738L0 14.5V0Z" fill="#BBB8B8" />
              <rect x="14.5" width="14.5" height="14.5" fill="#D9D9D9" />
              <rect y="14.5" width="14.5" height="14.5" fill="#D9D9D9" />
              <path d="M14.5 14.5H29V29H14.5V14.5Z" fill="#F4F3F3" />
              <path d="M14.5 14.5H29L21.5774 21.5774L14.5 29V14.5Z" fill="#BBB8B8" />
            </pattern>
          </defs>
        </svg>
      </span>
    </button>
  );
}

// Item 4: splits text into individually-hoverable letters. Hovering "D"
// tilts and recolors only "D" (see .letter:hover in Hero.module.css) -
// every other letter is unaffected.
//
// `leadingTrim`: capital letters carry left-side-bearing baked into their
// glyph box (empty space before the ink starts), so a plain shape like
// the eyebrow's dot - which has no such bearing - always sits a few
// pixels left of where a letter's visible strokes begin, even though
// both start at the exact same box edge. This nudges only the FIRST
// letter's own box via margin-left (not a transform on the whole line),
// so it extends the line's left edge without moving its right edge -
// right-alignment with the word below stays exact.
function HoverLetters({ text, leadingTrim }: { text: string; leadingTrim?: number }) {
  return (
    <>
      {text.split("").map((ch, i) => (
        // Hover detection lives on this OUTER span, which never itself
        // transforms - a stable hitbox. The tilt is applied to the INNER
        // span only, purely visual. Without this split, a rotated letter's
        // hitbox shifts with it (browsers hit-test the transformed box),
        // which overlaps into neighboring letters and is exactly what was
        // causing the glitchy re-triggering on fast cursor movement.
        <span
          key={i}
          className={styles.letterHit}
          style={i === 0 && leadingTrim ? { marginLeft: -leadingTrim } : undefined}
        >
          <span className={styles.letter}>{ch === " " ? " " : ch}
        </span>
        </span>
      ))}
    </>
  );
}

function Eyebrow() {
  return (
    <div className="flex items-baseline gap-[8px]">
      <span className="h-[8px] w-[8px] shrink-0 bg-[#FE5B2A] opacity-80" />
      <p className="whitespace-nowrap font-outfit text-[20px] uppercase tracking-[1px] text-[#18191B] dark:text-[#EFF0F1]">
        Hi ! I&rsquo;m Jeevitesh Gaur. A&mdash;
      </p>
    </div>
  );
}

// Item 3: auto-swapping last word. Words display for ~2s, then cross-slide
// (new word in from below, old word out above) inside a fixed-width,
// right-aligned, overflow-hidden box. Every word renders as an invisible
// sizer (see .wordSizer in Hero.module.css) so the browser measures real
// widths and picks the true widest one - not just the longest string.
const SWAP_WORDS = ["Solves", "Builds", "Codes", "Crafts", "Shapes", "Tests", "Ships"];

function SwappingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % SWAP_WORDS.length);
    }, 2000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className={styles.wordSwap}>
      {SWAP_WORDS.map((word) => (
        <span key={word} className={styles.wordSizer} aria-hidden="true">
          {word}
        </span>
      ))}
      <AnimatePresence initial={false}>
        <motion.span
          key={index}
          className={styles.wordItem}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <HoverLetters text={SWAP_WORDS[index]} />
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const headlineTextClass = `${styles.headlineText} font-bricolage text-[100px] font-medium leading-[1.001] tracking-[1px] text-[#0C0C0C] dark:text-[#EFF0F1]`;
const headlineTextStyle = { fontVariationSettings: '"opsz" 14, "wdth" 100' } as const;

// Headline is two rows sharing one right edge, matching Figma: row 1 is
// "Designer Who" alone; row 2 is the audio player sitting beside the
// swapping word, with the word's own right edge lined up under "Who" -
// not the audio player's left edge lined up under "D" (that only happens
// to look true for whichever word's width happens to match, it isn't a
// real constraint). Flexbox can't express "match row 1's width exactly"
// on its own - align-items:flex-end lets whichever row is WIDER drag the
// other one along with it, which is exactly what shifted "Designer Who"
// off the eyebrow dot's left edge before. So row 2 gets an explicit width
// measured from row 1's real rendered box, then right-aligns its own
// content inside that fixed width - row 1 never moves regardless of how
// long the current swap word is.
function Headline() {
  const line1Ref = useRef<HTMLSpanElement>(null);
  const [line1Width, setLine1Width] = useState<number>();

  // A ResizeObserver, not a one-shot measurement + `document.fonts.ready`
  // callback: that promise can resolve before the browser has actually
  // reflowed this element with the real webfont, so the captured width
  // stayed locked to the narrower fallback-font render. A ResizeObserver
  // re-fires whenever this element's real layout box changes size, for
  // any reason (webfont swap included), so it can't go stale like that.
  useLayoutEffect(() => {
    const el = line1Ref.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setLine1Width(entry.contentRect.width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.headline} role="heading" aria-level={1}>
      <span ref={line1Ref} className={`${headlineTextClass} whitespace-nowrap`} style={headlineTextStyle}>
        <HoverLetters text="Designer Who" leadingTrim={10} />
      </span>
      <div className="relative flex items-center justify-end" style={{ width: line1Width }}>
        {/* Left edge pinned to 0 - row 2 shares the same left origin as
            row 1 (both flex-start in .headline), so 0 here IS "Designer"'s
            own left edge ("D"), a fixed anchor with no measurement needed. */}
        <div className="absolute left-0 top-1/2" style={{ transform: "translateY(calc(-50% + 7px))" }}>
          <AudioPlayer />
        </div>
        <span className={`${headlineTextClass} translate-y-[3px] whitespace-nowrap`} style={headlineTextStyle}>
          <SwappingWord />
        </span>
      </div>
    </div>
  );
}

function LocationPill() {
  return (
    <div className={pillClass}>
      <p className="whitespace-nowrap font-mono text-[15px] tracking-[-0.1px] text-[#18191B] dark:text-[#EFF0F1]">
        Ahmedabad, Gujarat
      </p>
    </div>
  );
}

function GradYearPill() {
  return (
    <div className={pillClass}>
      <p className="whitespace-nowrap font-mono text-[15px] tracking-[-0.1px] text-[#18191B] dark:text-[#EFF0F1]">
        Graduating 2027
      </p>
    </div>
  );
}

// Scrolls to the Featured Projects section on the same page - that's the
// site's actual "work" destination, there's no separate work index route.
//
// Hover sequence:
// 1. A darker orange fill starts squeezed to a zero-height horizontal
//    line at the vertical center (scaleY(0)) and grows outward to both
//    edges at once (scaleY(1)) - a curtain pushing from the middle
//    toward the top and bottom simultaneously, not a top-down wipe.
// 2. The text/arrow react on a short delay, timed to when the fill has
//    mostly covered the button, not from the very first frame.
// 3. The arrow rotates from its resting up-right point to point toward
//    the bottom.
function ViewWorkCta() {
  return (
    <button
      type="button"
      onClick={() => document.getElementById("featured-projects")?.scrollIntoView({ behavior: "smooth" })}
      className="group relative flex shrink-0 items-center gap-[10px] overflow-hidden rounded-[98px] bg-[#FE5B2A] px-[28px] py-[16px] shadow-[0px_20px_20px_0px_rgba(26,18,10,0.42)]"
    >
      <span
        aria-hidden
        className="absolute inset-0 z-[1] origin-center scale-y-0 bg-[#E75326] transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-y-100"
      />
      <span className="absolute inset-0 z-[2] rounded-[inherit] shadow-[inset_0px_-5px_4px_0px_rgba(255,255,255,0.31),inset_0px_8px_6.3px_0px_rgba(0,0,0,0.25)]" />
      <p className="relative z-[3] whitespace-nowrap font-mono text-[15px] font-extrabold tracking-[-0.1px] text-[#EFF0F1] transition-transform delay-150 duration-200 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-110">
        View Work
      </p>
      <img
        src="/images/hero/cta-arrow.svg"
        alt=""
        className="relative z-[3] h-[12px] w-[12px] -rotate-90 transition-transform delay-150 duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-rotate-45"
      />
    </button>
  );
}

// The uploaded photo already has its rounded frame + light stroke baked
// in, so this is just the image sized in place with the Figma drop
// shadow - no extra card/border wrapper on top of it. Right edge matches
// the header's own right inset (93px) so it lines up with the toggle,
// rather than Figma's literal (and slightly different) photo offset.
function HeroPhoto() {
  return (
    <img
      src="/images/hero-photo.jpg"
      alt="Jeevitesh Gaur"
      className="absolute right-[93px] top-[25.22%] h-[408px] w-[297px] object-cover object-bottom shadow-[0px_20px_40px_0px_rgba(26,18,10,0.42)]"
    />
  );
}

// Every position below is taken directly from the Figma frame (1440x900),
// converted to percentages of the section's height so the whole canvas
// scales to fit any viewport - see Hero.module.css: section is `h-screen`
// instead of a fixed 900px, which is what makes it fit without scrolling.
//
//   Header   x=93  y=19  h=56           -> top 19/900  = 2.11%
//   Eyebrow  x=96  y=~240 (Frame 491)   -> top 240/900 = 26.67%
//   Photo    x=1012 y=227 w=297 h=408   -> top 227/900 = 25.22%, right 1440-1012-297=131px
//   CTA row  x=103 y=594 w=642 h=55     -> top 594/900 = 66%
//   Nav bar  x=598 y=793 w=244 h=78     -> bottom (900-871)/900 = 3.22%, centered
export function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#EFF0F1] dark:bg-[#18191B]">
      {/* Item 1: plus-grid background, reusing the loading screen's asset at
          20% opacity. Dark mode swaps to a real dark-mode export from
          Figma (not just a CSS filter) - it's a different tile, not the
          same lines recolored - and is already composited at the right
          subtlety, so it renders at full opacity, not 20%. */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src="/images/plus-grid.png"
          alt=""
          className="absolute left-0 top-0 h-full w-[112.5%] object-cover opacity-20 dark:hidden"
        />
        <img
          src="/images/plus-grid-dark.png"
          alt=""
          className="absolute left-0 top-0 hidden h-full w-[112.5%] object-cover dark:block"
        />
      </div>

      {/* Item 2: this whole block scales up from 92% and fades in together,
          the instant IntroLoader's exit panel finishes (see Hero.module.css). */}
      <div className={`absolute inset-0 mx-auto max-w-[1440px] ${styles.content}`}>
        <header className="absolute left-[93px] right-[93px] top-[2.11%] flex items-center justify-between">
          <PortfolioBadge />
          <ThemeToggle />
        </header>

        <div className="absolute left-[93px] top-[26.67%] flex flex-col gap-[16px]">
          <Eyebrow />
          <Headline />
        </div>

        <HeroPhoto />

        <div className="absolute left-[103px] top-[66%] flex translate-y-[3px] items-center gap-[32px]">
          <LocationPill />
          <GradYearPill />
          <ViewWorkCta />
        </div>
      </div>
    </section>
  );
}
