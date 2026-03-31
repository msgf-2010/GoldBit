"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./servicesCTA.module.scss";

const E = [0.25, 0.1, 0.25, 1] as const;

export default function ServicesCTA() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" as const }}
        transition={{ duration: 0.6, ease: E }}
      >
        <p className={styles.eyebrow}>Get Started</p>
        <h2 className={styles.heading}>
          Tell us about your operation.
        </h2>
        <p className={styles.sub}>
          We'll ask the right questions to understand your workflows and
          identify exactly where a custom system can help.
        </p>
        <div className={styles.actions}>
          <Link href="/contact" className={styles.primary}>
            Contact Us
          </Link>
          <Link href="/about" className={styles.secondary}>
            Learn About Our Approach
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
