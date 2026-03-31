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

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: E }}
          aria-hidden
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className={styles.visualBox}>
      <svg viewBox="0 0 420 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.diagram}>
        {/* Main card */}
        <rect x="20" y="20" width="380" height="340" rx="16" fill="rgba(255,255,255,0.04)" stroke="rgba(245,166,35,0.25)" strokeWidth="1"/>

        {/* Header bar */}
        <rect x="20" y="20" width="380" height="52" rx="16" fill="rgba(245,166,35,0.08)"/>
        <rect x="20" y="56" width="380" height="16" rx="0" fill="rgba(245,166,35,0.08)"/>
        <circle cx="52" cy="46" r="8" fill="rgba(245,166,35,0.5)"/>
        <rect x="70" y="40" width="120" height="12" rx="6" fill="rgba(255,255,255,0.2)"/>
        <rect x="340" y="38" width="42" height="16" rx="6" fill="rgba(245,166,35,0.6)"/>

        {/* Workflow nodes */}
        <rect x="40" y="92" width="100" height="60" rx="10" fill="rgba(245,166,35,0.12)" stroke="rgba(245,166,35,0.4)" strokeWidth="1.5"/>
        <rect x="52" y="106" width="60" height="8" rx="4" fill="rgba(245,166,35,0.6)"/>
        <rect x="52" y="122" width="76" height="8" rx="4" fill="rgba(255,255,255,0.15)"/>
        <rect x="52" y="136" width="48" height="8" rx="4" fill="rgba(255,255,255,0.1)"/>

        {/* Arrow */}
        <path d="M145 122 L185 122" stroke="rgba(245,166,35,0.5)" strokeWidth="1.5" strokeDasharray="4 3"/>
        <path d="M181 118 L187 122 L181 126" stroke="rgba(245,166,35,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>

        <rect x="190" y="92" width="100" height="60" rx="10" fill="rgba(26,26,46,0.6)" stroke="rgba(245,166,35,0.5)" strokeWidth="1.5"/>
        <rect x="202" y="106" width="50" height="8" rx="4" fill="rgba(245,166,35,0.8)"/>
        <rect x="202" y="122" width="76" height="8" rx="4" fill="rgba(255,255,255,0.25)"/>
        <rect x="202" y="136" width="55" height="8" rx="4" fill="rgba(255,255,255,0.15)"/>

        {/* Arrow */}
        <path d="M295 122 L335 122" stroke="rgba(245,166,35,0.5)" strokeWidth="1.5" strokeDasharray="4 3"/>
        <path d="M331 118 L337 122 L331 126" stroke="rgba(245,166,35,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>

        <rect x="340" y="92" width="44" height="60" rx="10" fill="rgba(245,166,35,0.15)" stroke="rgba(245,166,35,0.35)" strokeWidth="1.5"/>
        <path d="M354 122 L362 130 L374 114" stroke="rgba(245,166,35,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

        {/* Data bars */}
        <rect x="40" y="180" width="340" height="1" fill="rgba(255,255,255,0.06)"/>

        <rect x="40" y="198" width="200" height="10" rx="5" fill="rgba(255,255,255,0.06)"/>
        <rect x="40" y="198" width="148" height="10" rx="5" fill="rgba(245,166,35,0.7)"/>
        <rect x="252" y="196" width="36" height="14" rx="4" fill="rgba(245,166,35,0.15)"/>
        <rect x="256" y="200" width="28" height="6" rx="3" fill="rgba(245,166,35,0.6)"/>

        <rect x="40" y="220" width="200" height="10" rx="5" fill="rgba(255,255,255,0.06)"/>
        <rect x="40" y="220" width="90" height="10" rx="5" fill="rgba(245,166,35,0.45)"/>

        <rect x="40" y="242" width="200" height="10" rx="5" fill="rgba(255,255,255,0.06)"/>
        <rect x="40" y="242" width="172" height="10" rx="5" fill="rgba(245,166,35,0.6)"/>

        {/* Bottom row */}
        <rect x="40" y="268" width="100" height="72" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
        <rect x="56" y="286" width="48" height="8" rx="4" fill="rgba(245,166,35,0.5)"/>
        <rect x="56" y="302" width="68" height="24" rx="6" fill="rgba(245,166,35,0.12)"/>
        <rect x="62" y="310" width="30" height="8" rx="4" fill="rgba(245,166,35,0.8)"/>

        <rect x="160" y="268" width="100" height="72" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
        <rect x="176" y="286" width="60" height="8" rx="4" fill="rgba(255,255,255,0.2)"/>
        <rect x="176" y="302" width="72" height="8" rx="4" fill="rgba(255,255,255,0.1)"/>
        <rect x="176" y="316" width="48" height="8" rx="4" fill="rgba(255,255,255,0.07)"/>

        <rect x="280" y="268" width="100" height="72" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
        <rect x="296" y="286" width="40" height="8" rx="4" fill="rgba(255,255,255,0.2)"/>
        <rect x="296" y="302" width="30" height="20" rx="4" fill="rgba(245,166,35,0.7)"/>
        <rect x="332" y="308" width="30" height="14" rx="4" fill="rgba(245,166,35,0.35)"/>
      </svg>
    </div>
  );
}
