"use client";

import { motion } from "framer-motion";
import styles from "./processSection.module.scss";

const E = [0.25, 0.1, 0.25, 1] as const;

const STEPS = [
  {
    num: "01",
    title: "Discovery",
    desc: "We start by understanding your business: your workflows, your team, your pain points, and what success looks like. No assumptions, no off-the-shelf framing.",
  },
  {
    num: "02",
    title: "Planning and Architecture",
    desc: "We map out the system design, data models, and technical approach before writing a single line of code. You review and approve before we proceed.",
  },
  {
    num: "03",
    title: "Design",
    desc: "User experience and interface design focused on clarity and ease of use. Designed for the people who will actually use it every day.",
  },
  {
    num: "04",
    title: "Development",
    desc: "Iterative development with regular check-ins. You see progress as it happens, not just at the end. Feedback is incorporated continuously.",
  },
  {
    num: "05",
    title: "Testing and QA",
    desc: "Thorough testing across real-world scenarios before anything goes live. We validate that the system handles your actual operations correctly.",
  },
  {
    num: "06",
    title: "Deployment and Support",
    desc: "We handle deployment and stay involved post-launch. If something needs adjusting or a new requirement comes up, we're already in context.",
  },
];

export default function ProcessSection() {
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
          <p className={styles.eyebrow}>Our Process</p>
          <h2 className={styles.heading}>How we work with you</h2>
          <p className={styles.sub}>
            A structured process with clear communication at every step. You
            know what we're building, why, and when.
          </p>
        </motion.div>

        <div className={styles.steps}>
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              className={styles.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" as const }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: E }}
            >
              <div className={styles.stepNum}>
                <span>{step.num}</span>
              </div>
              <div className={styles.stepLine} aria-hidden />
              <div className={styles.stepBody}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
