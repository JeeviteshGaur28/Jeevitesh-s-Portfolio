"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";
import { useRouter } from "next/navigation";

// Same slip-up mechanic as IntroLoader's exit panel (see
// IntroLoader.module.css: translateY(100%) -> 0%, crossfading color at
// the same time), reused here as a page-to-page transition instead of a
// one-time splash. One panel, persisted in the root layout so it survives
// route changes, driven directly via style mutation rather than React
// state per frame - this is a rare, deliberate transform/color animation,
// not something that benefits from Framer Motion's own render cycle.
//
// Sequence: COVER (slides up from below, orange brand accent blending
// into whichever page is being LEFT) -> navigate -> instant color swap to
// whichever page is being ARRIVED at (invisible - the panel already fully
// covers the screen at that point) -> REVEAL (continues sliding up and
// off, at the arrival color, so there's no visible seam when it uncovers
// the new page).
const BRAND_ACCENT = "#FE5B2A";
const COVER_MS = 650;
const HOLD_MS = 120;
const REVEAL_MS = 650;
const EASE = "cubic-bezier(0.65,0,0.35,1)";

type TransitionContextValue = {
  navigate: (href: string, leavingColor: string, arrivingColor: string) => void;
};

const TransitionContext = createContext<TransitionContextValue | null>(null);

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const panelRef = useRef<HTMLDivElement>(null);
  const busyRef = useRef(false);
  const [active, setActive] = useState(false);

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

      panel.style.transition = "none";
      panel.style.backgroundColor = BRAND_ACCENT;
      panel.style.transform = "translateY(100%)";
      void panel.offsetHeight; // force reflow so the next change actually transitions

      panel.style.transition = `transform ${COVER_MS}ms ${EASE}, background-color ${COVER_MS}ms ease`;
      panel.style.transform = "translateY(0%)";
      panel.style.backgroundColor = leavingColor;

      window.setTimeout(() => {
        router.push(href);

        window.setTimeout(() => {
          const el = panelRef.current;
          if (!el) return;
          // Instant swap while fully covered - invisible to the viewer,
          // and puts the panel at the exact color the new page will show.
          el.style.transition = "none";
          el.style.backgroundColor = arrivingColor;
          void el.offsetHeight;

          el.style.transition = `transform ${REVEAL_MS}ms ${EASE}`;
          el.style.transform = "translateY(-100%)";

          window.setTimeout(() => {
            busyRef.current = false;
            setActive(false);
            const el2 = panelRef.current;
            if (el2) {
              el2.style.transition = "none";
              el2.style.transform = "translateY(100%)";
            }
          }, REVEAL_MS + 30);
        }, HOLD_MS);
      }, COVER_MS);
    },
    [router]
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
