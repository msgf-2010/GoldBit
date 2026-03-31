"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./aboutCTA.module.scss";

const E = [0.25, 0.1, 0.25, 1] as const;

export default function AboutCTA() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" as const }}
        transition={{ duration: 0.6, ease: E }}
      >
        <div className={styles.content}>
          <h2 className={styles.heading}>Work directly with us.</h2>
          <p className={styles.sub}>
            No sales team, no handoffs. You talk to the person building your
            solution from day one.
          </p>
        </div>
        <div className={styles.actions}>
          <Link href="/contact" className={styles.primary}>
            Start a Conversation
          </Link>
          <Link href="/services" className={styles.secondary}>
            See What We Build
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
