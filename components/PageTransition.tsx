"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

// Same slip-up mechanic as IntroLoader's exit panel (see
// IntroLoader.module.css: translateY(100%) -> 0%, crossfading color at
// the same time), reused here as a page-to-page transition instead of a
// one-time splash. One panel, persisted in the root layout so it survives
// route changes, driven directly via style mutation rather than React
// state per frame - this is a rare, deliberate transform/color animation,
// not something that benefits from Framer Motion's own render cycle.
//
// Sequence: COVER (slides up from below, orange brand accent blending
// into whichever page is being LEFT) -> navigate -> wait for the
// destination route to actually mount -> instant color swap to whichever
// page is being ARRIVED at (invisible - the panel already fully covers
// the screen at that point) -> REVEAL (continues sliding up and off, at
// the arrival color, so there's no visible seam when it uncovers the new
// page).
const BRAND_ACCENT = "#FE5B2A";
const COVER_MS = 650;
const REVEAL_MS = 650;
const EASE = "cubic-bezier(0.65,0,0.35,1)";
// Safety net only: if the destination route somehow never mounts, don't
// leave the viewer staring at a solid panel forever.
const REVEAL_TIMEOUT_MS = 4000;

type TransitionContextValue = {
  navigate: (href: string, leavingColor: string, arrivingColor: string) => void;
};

const TransitionContext = createContext<TransitionContextValue | null>(null);

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const busyRef = useRef(false);
  const [active, setActive] = useState(false);

  // Set once the cover animation finishes and router.push() has been
  // issued; cleared once the reveal actually runs. A ref, not state -
  // read from the pathname effect below without needing to be a
  // dependency that re-fires navigate.
  const pendingRef = useRef<{ href: string; arrivingColor: string } | null>(null);
  const revealTimeoutRef = useRef<number>();

  const runReveal = useCallback((arrivingColor: string) => {
    const el = panelRef.current;
    if (!el) return;
    window.clearTimeout(revealTimeoutRef.current);

    // Instant swap while fully covered - invisible to the viewer, and
    // puts the panel at the exact color the new page will show.
    el.style.transition = "none";
    el.style.backgroundColor = arrivingColor;
    void el.offsetHeight;

    el.style.transition = `transform ${REVEAL_MS}ms ${EASE}`;
    el.style.transform = "translateY(-100%)";

    window.setTimeout(() => {
      busyRef.current = false;
      setActive(false);
      pendingRef.current = null;
      const el2 = panelRef.current;
      if (el2) {
        el2.style.transition = "none";
        el2.style.transform = "translateY(100%)";
      }
    }, REVEAL_MS + 30);
  }, []);

  // The real "destination is ready" signal: usePathname() updates as part
  // of the same commit that swaps in the new route's page tree, so by the
  // time this effect runs, the destination is actually mounted underneath
  // the (still fully covering) panel. This replaces a fixed setTimeout
  // that fired a guessed delay after router.push() - router.push() only
  // schedules navigation, it doesn't wait for the new route to fetch,
  // render and commit, so on anything slower than the guess the panel
  // used to start sliding away while the OLD page was still what was
  // mounted, flashing it back into view before the new page took over.
  useEffect(() => {
    const pending = pendingRef.current;
    if (pending && pathname === pending.href) {
      runReveal(pending.arrivingColor);
    }
  }, [pathname, runReveal]);

  const navigate = useCallback(
    (href: string, leavingColor: string, arrivingColor: string) => {
      const panel = panelRef.current;
      if (!panel || busyRef.current) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        router.push(href);
        return;
      }

      busyRef.current = true;
      setActive(true);

      // Kick the fetch off immediately, in parallel with the cover
      // animation, so the destination is as likely as possible to already
      // be loaded by the time the panel finishes covering the screen.
      router.prefetch(href);

      panel.style.transition = "none";
      panel.style.backgroundColor = BRAND_ACCENT;
      panel.style.transform = "translateY(100%)";
      void panel.offsetHeight; // force reflow so the next change actually transitions

      panel.style.transition = `transform ${COVER_MS}ms ${EASE}, background-color ${COVER_MS}ms ease`;
      panel.style.transform = "translateY(0%)";
      panel.style.backgroundColor = leavingColor;

      window.setTimeout(() => {
        pendingRef.current = { href, arrivingColor };
        router.push(href);

        // Safety net only - the pathname effect above is what actually
        // triggers the reveal in the normal case, once the destination
        // route has genuinely mounted.
        revealTimeoutRef.current = window.setTimeout(() => {
          if (pendingRef.current) runReveal(pendingRef.current.arrivingColor);
        }, REVEAL_TIMEOUT_MS);
      }, COVER_MS);
    },
    [router, runReveal]
  );

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}
      <div
        ref={panelRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          transform: "translateY(100%)",
          pointerEvents: active ? "auto" : "none",
        }}
      />
    </TransitionContext.Provider>
  );
}

export function usePageTransition() {
  const ctx = useContext(TransitionContext);
  if (!ctx) throw new Error("usePageTransition must be used within PageTransitionProvider");
  return ctx;
}
