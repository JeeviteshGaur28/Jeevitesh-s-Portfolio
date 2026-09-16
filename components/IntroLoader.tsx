"use client";

import { useLayoutEffect, useRef, useState } from "react";
import styles from "./IntroLoader.module.css";

type Segment = { t: number; v: number };

function easeOutCubic(x: number) {
  return 1 - Math.pow(1 - x, 3);
}

/**
 * Builds a reveal curve that jumps, stalls, jumps again, then finishes —
 * a real loading bar rather than a smooth linear sweep. Randomized so it
 * never plays back identically twice.
 */
function buildSegments(total: number): Segment[] {
  const v1 = 15 + Math.random() * 15; // first burst lands 15-30%
  const t1 = total * (0.12 + Math.random() * 0.08);
  const stall1End = t1 + total * (0.12 + Math.random() * 0.1);

  const v2 = Math.max(v1, 55 + Math.random() * 20); // second burst lands 55-75%
  const t2 = stall1End + total * (0.15 + Math.random() * 0.1);
  const stall2End = Math.min(t2 + total * (0.05 + Math.random() * 0.08), total - total * 0.1);

  return [
    { t: 0, v: 0 },
    { t: t1, v: v1 },
    { t: stall1End, v: v1 },
    { t: t2, v: v2 },
    { t: stall2End, v: v2 },
    { t: total, v: 100 },
  ];
}

function valueAt(segments: Segment[], elapsed: number) {
  if (elapsed <= 0) return segments[0].v;
  for (let i = 1; i < segments.length; i++) {
    const prev = segments[i - 1];
    const cur = segments[i];
    if (elapsed <= cur.t) {
      if (cur.t === prev.t) return cur.v;
      const localT = (elapsed - prev.t) / (cur.t - prev.t);
      return prev.v + (cur.v - prev.v) * easeOutCubic(localT);
    }
  }
  return 100;
}

/**
 * One-time splash shown on every visit. The plus-grid reveal runs on a
 * randomized bursty timeline (~2.2-3s) rather than a fixed linear one, so
 * it reads like a real load instead of a progress bar. Once the exit
 * panel finishes its color blend, this unmounts entirely — the hero
 * underneath (already mounted, see Hero.module.css) picks up the
 * `html.site-intro-done` class at the same instant and scales/fades in,
 * so the two halves read as one continuous motion.
 */
export function IntroLoader() {
  const coverRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useLayoutEffect(() => {
    // `<html>` (set by app/layout.tsx) never remounts across client-side
    // navigation - only a genuine fresh document load starts without this
    // class. Without this check, going home -> case study -> back
    // re-mounted this component (page.tsx renders fresh each time it's
    // navigated to) and replayed the entire splash on every single return
    // to "/", not just the real first visit. useLayoutEffect (not
    // useEffect) so this resolves before paint - no one-frame flash of
    // the splash's resting state on a skipped replay.
    if (document.documentElement.classList.contains("site-intro-done")) {
      setHidden(true);
      return;
    }

    const cover = coverRef.current;
    const panel = panelRef.current;
    if (!cover || !panel) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const total = reduceMotion ? 1 : 2200 + Math.random() * 800; // 2.2-3s
    const exitDuration = reduceMotion ? 20 : 900; // matches exitSlide's animation-duration
    const segments = reduceMotion ? [{ t: 0, v: 0 }, { t: total, v: 100 }] : buildSegments(total);

    // Only `transform` is touched per frame — GPU-composited, no
    // style/mask recalculation, so this stays smooth regardless of
    // how complex the underlying grid image is.
    const setReveal = (v: number) => {
      cover.style.transform = `translateX(${v}%)`;
    };

    let raf = 0;
    let doneTimer = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      setReveal(valueAt(segments, elapsed));
      if (elapsed >= total) {
        panel.classList.add(styles.exit!);
        // Signal completion once the exit panel's color blend actually
        // finishes, so the hero's reveal (see Hero.module.css) starts
        // with no gap — one continuous motion instead of two steps.
        doneTimer = window.setTimeout(() => {
          document.documentElement.classList.add("site-intro-done");
          setHidden(true);
        }, exitDuration);
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    setReveal(0);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(doneTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div className={styles.root} role="presentation" aria-hidden="true">
      <img src="/images/plus-grid.png" alt="" className={styles.grid} />
      <div ref={coverRef} className={styles.cover} />

      <div className={styles.pillWrap}>
        <div className={styles.pill}>
          <div className={styles.pillInner}>
            <span className={styles.pillText}>Loading</span>
            <span className={styles.dot} />
          </div>
        </div>
      </div>

      <div ref={panelRef} className={styles.exitPanel} />
    </div>
  );
}
