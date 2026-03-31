"use client";

import { motion } from "framer-motion";
import styles from "./aboutApproach.module.scss";

const E = [0.25, 0.1, 0.25, 1] as const;

const PRINCIPLES = [
  {
    title: "Direct Communication",
    desc: "You work directly with the person designing and building your solution. No account managers, no project coordinators relaying messages. Faster decisions, clearer communication, and a smoother process from start to finish.",
    highlight: true,
  },
  {
    title: "No Templates, No Shortcuts",
    desc: "Every solution is designed from scratch around your specific business. We don't have a catalog of prebuilt modules we try to fit your needs into. Your workflows drive our design.",
    highlight: false,
  },
  {
    title: "Practical Over Theoretical",
    desc: "We build for how your business works today, with room to grow. Not for ideal scenarios or textbook architectures. If a simpler approach works better for your team, that's what we build.",
    highlight: false,
  },
  {
    title: "Full Transparency",
    desc: "You see what we're building as we build it. Decisions are explained, tradeoffs are discussed, and nothing is a black box. You stay informed without needing to micromanage.",
    highlight: false,
  },
];

export default function AboutApproach() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" as const }}
          transition={{ duration: 0.6, ease: E }}
        >
          <p className={styles.eyebrow}>Our Approach</p>
          <h2 className={styles.heading}>How we think about every project</h2>
        </motion.div>

        <div className={styles.grid}>
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.title}
              className={`${styles.card} ${p.highlight ? styles.featured : ""}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" as const }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: E }}
            >
              <div className={styles.cardAccent} />
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
