"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./ctaBanner.module.scss";

const E = [0.25, 0.1, 0.25, 1] as const;

export default function CTABanner() {
  return (
    <section className={styles.section}>
      <div className={styles.bg} aria-hidden>
        <div className={styles.glow} />
      </div>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" as const }}
        transition={{ duration: 0.65, ease: E }}
      >
        <h2 className={styles.heading}>
          Ready to build something that actually fits your business?
        </h2>
        <p className={styles.sub}>
          Let's talk about your workflows, your challenges, and what a custom
          solution could look like for your operation.
        </p>
        <div className={styles.actions}>
          <Link href="/contact" className={styles.primary}>
            Start a Conversation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <a href="tel:2039414333" className={styles.secondary}>
            203-941-4333
          </a>
        </div>
      </motion.div>
    </section>
  );
}
