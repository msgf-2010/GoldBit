"use client";

import { motion } from "framer-motion";
import styles from "./uspSection.module.scss";

const E = [0.25, 0.1, 0.25, 1] as const;

const USPS = [
  {
    num: "01",
    title: "Built Around Your Business — No Templates",
    desc: "We don't force your business into prebuilt software. Every solution is designed around your exact workflows and goals.",
  },
  {
    num: "02",
    title: "Practical, Real-World Approach",
    desc: "We build systems that work in real operations, leveraging modern technology, automation, and AI to keep your business efficient, adaptable, and ahead of change.",
  },
  {
    num: "03",
    title: "End-to-End Execution",
    desc: "From planning and design to development and ongoing support, we handle the full process so nothing falls through the cracks.",
  },
  {
    num: "04",
    title: "Simplifying Complexity",
    desc: "We take complex processes and turn them into clear, streamlined systems that are easy to use and manage.",
  },
  {
    num: "05",
    title: "Scalable by Design",
    desc: "Everything we build is designed to grow with your business, so you don't outgrow your systems.",
  },
  {
    num: "06",
    title: "Direct Communication",
    desc: "You work directly with the person designing and building your solution. No middlemen, no unnecessary layers. Faster decisions, clearer communication, and a smoother process from start to finish.",
  },
];

export default function USPSection() {
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
          <p className={styles.eyebrow}>How We Work</p>
          <h2 className={styles.heading}>
            What sets us apart
          </h2>
        </motion.div>

        <div className={styles.list}>
          {USPS.map((usp, i) => (
            <motion.div
              key={usp.num}
              className={styles.item}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" as const }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: E }}
            >
              <div className={styles.numBox}>
                <span className={styles.num}>{usp.num}</span>
              </div>
              <div className={styles.text}>
                <h3 className={styles.itemTitle}>{usp.title}</h3>
                <p className={styles.itemDesc}>{usp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
