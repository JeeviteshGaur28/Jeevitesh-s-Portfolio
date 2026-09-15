"use client";

import { useRouter } from "next/navigation";
import styles from "./Chrome.module.css";

export function BackButton() {
  const router = useRouter();
  return (
    <button className={styles.back} type="button" aria-label="Back to home" onClick={() => router.push("/")}>
      <span className={styles.backGlass} aria-hidden />
      <img src="/images/buried-in-the-crowd/back-arrow.svg" alt="" />
      <b>BACK</b>
    </button>
  );
}
