"use client";

import { useLayoutEffect, useRef, useState } from "react";

const DESIGN_WIDTH = 1440;

// Scales the whole 1440px-wide design up to exactly fill any wider
// viewport, uniformly (width and height together) - every pixel value
// already authored against the 1440 Figma canvas stays proportionally
// identical at any screen size, instead of centering the canvas with
// blank margin on either side.
//
// Below 1440px this is a deliberate no-op (scale stays 1, no transform
// applied at all) - narrow/mobile layouts are a separate pass, so those
// widths keep today's behavior completely unchanged.
//
// Scaling is done with a real `transform: scale()`, not the non-standard
// `zoom` property, so it's fully spec-compliant - but transform doesn't
// change the element's LAYOUT size, only its painted size, so the outer
// wrapper's own height is set explicitly (measured natural height *
// scale) to keep the page's real scrollable height matching what's
// visually on screen.
export function ScaleStage({ children }: { children: React.ReactNode }) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [naturalHeight, setNaturalHeight] = useState(0);

  useLayoutEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;

    const recomputeScale = () => {
      const vw = window.innerWidth;
      setScale(vw >= DESIGN_WIDTH ? vw / DESIGN_WIDTH : 1);
    };

    recomputeScale();
    window.addEventListener("resize", recomputeScale);

    // A ResizeObserver, not a one-shot measurement: it reports the
    // element's real LAYOUT box, which `transform` never affects, so it
    // keeps reflecting this content's true natural (unscaled) height
    // even as fonts finish loading or content otherwise reflows.
    const observer = new ResizeObserver(([entry]) => {
      setNaturalHeight(entry.contentRect.height);
    });
    observer.observe(inner);

    return () => {
      window.removeEventListener("resize", recomputeScale);
      observer.disconnect();
    };
  }, []);

  const isScaled = scale > 1;

  return (
    <div style={{ height: isScaled ? naturalHeight * scale : undefined, overflow: "hidden" }}>
      <div
        ref={innerRef}
        style={isScaled ? { transform: `scale(${scale})`, transformOrigin: "top center" } : undefined}
      >
        {children}
      </div>
    </div>
  );
}
