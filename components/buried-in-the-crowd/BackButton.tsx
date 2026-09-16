"use client";

import { useTheme } from "next-themes";
import { usePageTransition } from "../PageTransition";
import styles from "./Chrome.module.css";

export function BackButton() {
  const { navigate } = usePageTransition();
  const { resolvedTheme } = useTheme();
  return (
    <button
      className={styles.back}
      type="button"
      aria-label="Back to home"
      onClick={() => navigate("/", "#E9E4D7", resolvedTheme === "dark" ? "#18191B" : "#EFF0F1")}
    >
      <span className={styles.backGlass} aria-hidden />
      <img src="/images/buried-in-the-crowd/back-arrow.svg" alt="" />
      <b>BACK</b>
    </button>
  );
}
