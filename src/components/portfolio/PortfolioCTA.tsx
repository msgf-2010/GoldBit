"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./portfolioCTA.module.scss";

const E = [0.25, 0.1, 0.25, 1] as const;

export default function PortfolioCTA() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" as const }}
        transition={{ duration: 0.6, ease: E }}
      >
        <h2 className={styles.heading}>Your project could be next.</h2>
        <p className={styles.sub}>
          Every system we build starts with a conversation. Tell us what you're
          working on and where things are breaking down.
        </p>
        <Link href="/contact" className={styles.cta}>
          Start a Conversation
        </Link>
      </motion.div>
    </section>
  );
}
