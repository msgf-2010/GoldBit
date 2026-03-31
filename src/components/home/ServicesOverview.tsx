"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./servicesOverview.module.scss";

const E = [0.25, 0.1, 0.25, 1] as const;

const CAPABILITIES = [
  "Custom web applications",
  "Internal tools and dashboards",
  "Workflow automation",
  "Operations and logistics systems",
  "Database design and architecture",
  "API integrations",
  "Legacy system modernization",
  "AI-powered features and automation",
];

export default function ServicesOverview() {
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
            <p className={styles.eyebrow}>What We Build</p>
            <h2 className={styles.heading}>Custom Software Development</h2>
            <p className={styles.desc}>
              We design and build tailored software solutions that match your
              exact business workflows. Whether you need a full system from
              scratch or improvements to an existing platform, we develop
              scalable and efficient applications that eliminate manual
              processes.
            </p>
            <p className={styles.desc}>
              From initial planning to deployment and ongoing support, we handle
              the entire process. You stay informed and in control throughout.
            </p>
            <div className={styles.actions}>
              <Link href="/services" className={styles.primaryLink}>
                See Our Full Process
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/contact" className={styles.secondaryLink}>
                Get a Free Consultation
              </Link>
            </div>
          </motion.div>

          <motion.div
            className={styles.right}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" as const }}
            transition={{ duration: 0.6, delay: 0.15, ease: E }}
          >
            <div className={styles.capCard}>
              <p className={styles.capLabel}>Capabilities</p>
              <ul className={styles.capList}>
                {CAPABILITIES.map((cap) => (
                  <li key={cap} className={styles.capItem}>
                    <span className={styles.capDot} />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
