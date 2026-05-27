"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { PROJECTS } from "./projects";
import styles from "./projectGrid.module.scss";

const E = [0.25, 0.1, 0.25, 1] as const;

export default function ProjectGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.slug}
              className={styles.card}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" as const }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: E }}
            >
              <Link href={`/portfolio/${p.slug}`} className={styles.cardLink}>
                <div className={styles.thumb}>
                  <Image
                    src={p.hero.src}
                    alt={p.hero.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 560px"
                    className={styles.thumbImg}
                  />
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.tags}>
                    {p.tags.slice(0, 2).map((t) => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                  <h2 className={styles.cardTitle}>{p.cardTitle}</h2>
                  <p className={styles.cardDesc}>{p.cardTagline}</p>
                  <span className={styles.cardLinkText}>
                    View case study
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
