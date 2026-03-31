"use client";

import { motion } from "framer-motion";
import styles from "./servicesHero.module.scss";

const E = [0.25, 0.1, 0.25, 1] as const;

export default function ServicesHero() {
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
          <p className={styles.eyebrow}>What We Do</p>
          <h1 className={styles.heading}>
            One service, done right.
          </h1>
          <p className={styles.sub}>
            We specialize in custom software development for small to mid-sized
            businesses. Not a dozen service lines, not a catalog of templates.
            One focused discipline, applied to your specific problem.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
