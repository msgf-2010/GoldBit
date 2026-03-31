"use client";

import { motion } from "framer-motion";
import styles from "./aboutStory.module.scss";

const E = [0.25, 0.1, 0.25, 1] as const;

export default function AboutStory() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" as const }}
            transition={{ duration: 0.6, ease: E }}
          >
            <p className={styles.eyebrow}>Who We Are</p>
            <h2 className={styles.heading}>Focused on real business problems</h2>
          </motion.div>

          <motion.div
            className={styles.right}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" as const }}
            transition={{ duration: 0.6, delay: 0.12, ease: E }}
          >
            <p className={styles.body}>
              GoldBit Solutions is a software development company focused on
              building practical, business-driven technology solutions for small
              to mid-sized businesses that rely heavily on operations, logistics,
              and internal workflows.
            </p>
            <p className={styles.body}>
              We don't build products. We build systems for specific businesses
              with specific needs. Every engagement starts with understanding
              how your operation actually works, what slows you down, and what a
              better system would look like in practice.
            </p>
            <p className={styles.body}>
              The result is software that your team actually uses, that fits
              your data, and that grows as your business grows. No unnecessary
              complexity. No forcing you into a prebuilt mold.
            </p>
            <div className={styles.tags}>
              {["Operations", "Logistics", "Workflow Automation", "Internal Tools", "Web Applications"].map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
