"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PROJECTS } from "@/components/portfolio/projects";
import ProjectCard from "@/components/portfolio/ProjectCard";
import styles from "./featuredWork.module.scss";

const E = [0.25, 0.1, 0.25, 1] as const;

export default function FeaturedWork() {
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
          <div className={styles.headText}>
            <p className={styles.eyebrow}>Featured Work</p>
            <h2 className={styles.heading}>
              Real systems we&apos;ve built from the ground up
            </h2>
            <p className={styles.sub}>
              Full platforms that brought entire businesses into one connected
              workflow — designed around how each team actually works.
            </p>
          </div>
          <Link href="/portfolio" className={styles.viewAll}>
            View all case studies
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>

        <div className={styles.grid}>
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
