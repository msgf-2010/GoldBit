"use client";

import { motion } from "framer-motion";
import styles from "./portfolioGrid.module.scss";

const E = [0.25, 0.1, 0.25, 1] as const;

const PLACEHOLDER_CASES = [
  {
    tag: "Logistics",
    title: "Dispatch and Route Management System",
    desc: "A custom dispatching platform built for a regional delivery operation. Replaced a combination of spreadsheets and phone calls with a real-time routing and assignment system.",
    outcomes: ["Reduced dispatch time by 60%", "Eliminated scheduling conflicts", "Real-time driver tracking"],
    status: "coming-soon",
  },
  {
    tag: "Operations",
    title: "Internal Operations Dashboard",
    desc: "End-to-end visibility dashboard for a manufacturing company's daily operations. Integrated data from multiple sources into a single, real-time view for management.",
    outcomes: ["Single source of truth", "Automated daily reporting", "Reduced manual data entry"],
    status: "coming-soon",
  },
  {
    tag: "Workflow Automation",
    title: "Automated Ordering and Inventory System",
    desc: "Custom inventory management system with automated reorder logic, supplier communication, and purchase order generation for a wholesale distributor.",
    outcomes: ["Automated reorder triggers", "Reduced stockouts by 80%", "Supplier portal integration"],
    status: "coming-soon",
  },
];

export default function PortfolioGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.notice}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" as const }}
          transition={{ duration: 0.55, ease: E }}
        >
          <div className={styles.noticeIcon}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <p className={styles.noticeText}>
            Detailed case studies are being prepared. The examples below
            represent the types of projects we work on. Real client case
            studies will be added here as they are completed and approved for
            publication.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {PLACEHOLDER_CASES.map((cs, i) => (
            <motion.div
              key={cs.title}
              className={styles.card}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" as const }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: E }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.tag}>{cs.tag}</span>
                <span className={styles.badge}>Example</span>
              </div>

              <h3 className={styles.cardTitle}>{cs.title}</h3>
              <p className={styles.cardDesc}>{cs.desc}</p>

              <div className={styles.outcomes}>
                <p className={styles.outcomesLabel}>Key Outcomes</p>
                <ul className={styles.outcomeList}>
                  {cs.outcomes.map((o) => (
                    <li key={o} className={styles.outcomeItem}>
                      <span className={styles.outcomeDot} />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.placeholder}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  Full case study coming soon
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
