"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Chrome.module.css";

export function FloatingNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY >= 100);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          className={styles.nav}
          href="mailto:jeeviteshgaur28@gmail.com"
          aria-label="Email Jeevitesh Gaur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <span className={styles.navGlass} aria-hidden />
          <span className={styles.navContent}>
            <img className={styles.avatar} src="/images/buried-in-the-crowd/nav-avatar.png" alt="Jeevitesh Gaur" />
            <span className={styles.availability}>Available for work</span>
            <span className={styles.statusShell}><motion.i animate={{ opacity: [1, .15, 1], scale: [1, 1.25, 1] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} /></span>
            <span className={styles.email}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M4 6h16v12H4z" stroke="#18191B" strokeWidth="1.6" strokeLinejoin="round"/><path d="M4 7l8 6 8-6" stroke="#18191B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Email me !</span></span>
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
