"use client";

import { motion } from "framer-motion";
import styles from "./aboutHero.module.scss";

const E = [0.25, 0.1, 0.25, 1] as const;

export default function AboutHero() {
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
          <p className={styles.eyebrow}>About Us</p>
          <h1 className={styles.heading}>
            Practical software for how businesses actually operate.
          </h1>
          <p className={styles.sub}>
            GoldBit Solutions was built on a simple belief: software should fit
            your business, not the other way around. We work with small to
            mid-sized businesses that are running real operations and need
            systems that keep up.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
