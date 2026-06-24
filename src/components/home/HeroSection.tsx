"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./heroSection.module.scss";

const E = [0.25, 0.1, 0.25, 1] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      ease: E,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: E } },
};

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Background geometric shapes */}
      <div className={styles.bg} aria-hidden>
        <div className={styles.shape1} />
        <div className={styles.shape2} />
        <div className={styles.shape3} />
        <div className={styles.gridLines} />
      </div>

      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className={styles.eyebrow}>
            <span className={styles.dot} />
            Custom Software Development
          </motion.div>

          <motion.h1 variants={item} className={styles.heading}>
            Software built{" "}
            <span className={styles.highlight}>around your business</span>
            {", "}not the other way around.
          </motion.h1>

          <motion.p variants={item} className={styles.subheading}>
            We design and build tailored software solutions for small to
            mid-sized businesses that rely on operations, logistics, and
            internal workflows. Practical systems that actually fit how you
            work.
          </motion.p>

          <motion.div variants={item} className={styles.actions}>
            <Link href="/contact" className={styles.primaryCta}>
              Start a Conversation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/services" className={styles.secondaryCta}>
              View Services
            </Link>
          </motion.div>

          <motion.div variants={item} className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>100%</span>
              <span className={styles.statLabel}>Custom-built solutions</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>End-to-end</span>
              <span className={styles.statLabel}>From planning to support</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>Direct</span>
              <span className={styles.statLabel}>Access to your developer</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
