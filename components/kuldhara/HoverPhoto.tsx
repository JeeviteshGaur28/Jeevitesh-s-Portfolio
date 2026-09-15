"use client";

import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

/**
 * Wraps a single gallery photograph to add the hover micro-interaction:
 * scale to 1.05 from center, ease-out, and a z-index bump so the photo
 * clears any overlapping neighbours in a scattered gallery. Any static
 * rotation on the photo itself (set on inner elements) is untouched —
 * this wrapper only ever adds scale.
 */
export function HoverPhoto({
  className,
  style,
  children,
}: {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <motion.div
      className={className}
      style={{ transformOrigin: "center", zIndex: 1, ...style }}
      whileHover={{ scale: 1.05, zIndex: 40 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
