"use client";

import { motion } from "framer-motion";
import styles from "./serviceDetail.module.scss";

const E = [0.25, 0.1, 0.25, 1] as const;

const WHAT_WE_BUILD = [
  {
    title: "Custom Web Applications",
    desc: "Full-stack web apps tailored to your exact requirements. Built for performance, security, and ease of use.",
  },
  {
    title: "Internal Tools and Dashboards",
    desc: "Operational dashboards and internal platforms that give your team real-time visibility and control.",
  },
  {
    title: "Workflow Automation",
    desc: "Systems that automate repetitive tasks, reduce manual entry, and eliminate the gaps between your tools.",
  },
  {
    title: "Operations and Logistics Systems",
    desc: "Purpose-built software for managing routes, inventory, dispatching, scheduling, and field operations.",
  },
  {
    title: "API Integrations",
    desc: "Connect your existing tools and data sources into a unified, reliable system that works together.",
  },
  {
    title: "Legacy System Modernization",
    desc: "Take outdated systems that hold critical data and workflows and rebuild them on modern, maintainable foundations.",
  },
  {
    title: "Database Design and Architecture",
    desc: "Structured data models that support fast queries, accurate reporting, and future scalability.",
  },
  {
    title: "AI-Powered Features",
    desc: "Practical AI integrations that add real value: smart routing, predictive alerts, natural language interfaces, and more.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: E } },
};

export default function ServiceDetail() {
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
          <p className={styles.eyebrow}>Custom Software Development</p>
          <h2 className={styles.heading}>What we design and build</h2>
          <p className={styles.sub}>
            We design and build tailored software solutions that match your
            exact business workflows. Whether you need a full system from
            scratch or improvements to an existing platform, we develop
            scalable and efficient applications that eliminate manual processes.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" as const }}
        >
          {WHAT_WE_BUILD.map((item_) => (
            <motion.div key={item_.title} variants={item} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.accent} />
                <h3 className={styles.cardTitle}>{item_.title}</h3>
              </div>
              <p className={styles.cardDesc}>{item_.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
