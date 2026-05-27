"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "./projects";
import styles from "./projectCard.module.scss";

const E = [0.25, 0.1, 0.25, 1] as const;

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" as const }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: E }}
    >
      <Link href={`/portfolio/${project.slug}`} className={styles.cardLink}>
        <div className={styles.thumb}>
          <Image
            src={project.hero.src}
            alt={project.hero.alt}
            fill
            sizes="(max-width: 900px) 100vw, 560px"
            className={styles.thumbImg}
          />
        </div>

        <div className={styles.cardBody}>
          <div className={styles.tags}>
            {project.tags.slice(0, 2).map((t) => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>
          <h3 className={styles.cardTitle}>{project.cardTitle}</h3>
          <p className={styles.cardDesc}>{project.cardTagline}</p>
          <span className={styles.cardLinkText}>
            View case study
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
