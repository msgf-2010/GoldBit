"use client";

import { motion } from "framer-motion";
import styles from "./portfolioHero.module.scss";

const E = [0.25, 0.1, 0.25, 1] as const;

export default function PortfolioHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} aria-hidden>
        <div className={styles.glow} />
        <div className={styles.grid} />
      </div>
      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: E }}
        >
          <p className={styles.eyebrow}>Our Work</p>
          <h1 className={styles.heading}>Case Studies</h1>
          <p className={styles.sub}>
            A look at systems we've built from the ground up — full platforms
            that brought entire businesses into one connected workflow. Each
            project is designed specifically for the operation it serves.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
