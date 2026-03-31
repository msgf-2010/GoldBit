"use client";

import { motion } from "framer-motion";
import styles from "./valuePropsSection.module.scss";

const E = [0.25, 0.1, 0.25, 1] as const;

const PROPS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "Save Time and Reduce Manual Work",
    desc: "Automate repetitive processes and eliminate unnecessary steps so your team can focus on what matters.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: "Increase Visibility and Control",
    desc: "Get clear, real-time insight into your operations, data, and performance.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Reduce Errors and Risk",
    desc: "Minimize mistakes caused by manual entry, disconnected systems, or lack of oversight.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: "Build Systems That Actually Fit",
    desc: "Instead of adjusting your business to software, we build software that fits your business.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: "Create a Foundation for Growth",
    desc: "Strong systems enable smoother scaling, better decision-making, and long-term efficiency.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: E } },
};

export default function ValuePropsSection() {
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
          <p className={styles.eyebrow}>Why It Matters</p>
          <h2 className={styles.heading}>
            Real business outcomes, not just features.
          </h2>
          <p className={styles.subheading}>
            Every system we build is designed to solve a specific problem and
            deliver measurable results.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" as const }}
        >
          {PROPS.map((prop) => (
            <motion.div key={prop.title} variants={cardVariant} className={styles.card}>
              <div className={styles.icon}>{prop.icon}</div>
              <h3 className={styles.cardTitle}>{prop.title}</h3>
              <p className={styles.cardDesc}>{prop.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
