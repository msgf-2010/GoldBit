"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "./projects";
import styles from "./caseStudy.module.scss";

const E = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" as const },
  transition: { duration: 0.6, delay, ease: E },
});

export default function CaseStudy({ project }: { project: Project }) {
  const {
    title,
    summary,
    tags,
    meta,
    hero,
    highlights,
    overview,
    features,
    challenges,
    process,
    gallery,
    results,
    closing,
  } = project;

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden>
          <div className={styles.glow} />
          <div className={styles.gridLines} />
        </div>
        <div className={styles.heroInner}>
          <Link href="/portfolio" className={styles.back}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M7 4 3 8l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: E }}
          >
            <div className={styles.tags}>
              {tags.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.summary}>{summary}</p>
            <Link href="/contact" className={styles.heroCta}>
              Start a Similar Project
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ---------- Body ---------- */}
      <section className={styles.body}>
        <div className={styles.inner}>
          {/* Meta strip */}
          <motion.div className={styles.meta} {...fadeUp()}>
            {meta.map((m) => (
              <div key={m.label} className={styles.metaItem}>
                <span className={styles.metaLabel}>{m.label}</span>
                <span className={styles.metaValue}>{m.value}</span>
              </div>
            ))}
          </motion.div>

          {/* Hero screenshot */}
          <motion.figure className={styles.shot} {...fadeUp(0.05)}>
            <div className={styles.frame}>
              <div className={styles.frameBar}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
              </div>
              <div className={styles.frameBody}>
                <Image
                  src={hero.src}
                  alt={hero.alt}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1100px"
                  className={styles.frameImg}
                  priority
                />
              </div>
            </div>
            {hero.caption && (
              <figcaption className={styles.caption}>{hero.caption}</figcaption>
            )}
          </motion.figure>

          {/* Highlights */}
          {highlights && (
            <motion.div className={styles.highlights} {...fadeUp()}>
              {highlights.map((h) => (
                <div key={h.label} className={styles.highlight}>
                  <span className={styles.highlightStat}>{h.stat}</span>
                  <span className={styles.highlightLabel}>{h.label}</span>
                </div>
              ))}
            </motion.div>
          )}

          {/* Overview */}
          <motion.div className={styles.overview} {...fadeUp()}>
            <p className={styles.eyebrow}>Overview</p>
            <h2 className={styles.sectionHeading}>{overview.heading}</h2>
            <p className={styles.overviewBody}>{overview.body}</p>
            {overview.bullets && (
              <ul className={styles.bullets}>
                {overview.bullets.map((b) => (
                  <li key={b} className={styles.bullet}>
                    <span className={styles.check} aria-hidden>
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                        <path d="m3 8.5 3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>

          {/* Features grid */}
          {features && (
            <div className={styles.featuresWrap}>
              <motion.h3 className={styles.sectionHeading} {...fadeUp()}>
                What we built
              </motion.h3>
              <div className={styles.features}>
                {features.map((f, i) => (
                  <motion.div key={f.title} className={styles.feature} {...fadeUp((i % 3) * 0.07)}>
                    <span className={styles.featureNum}>{String(i + 1).padStart(2, "0")}</span>
                    <h4 className={styles.featureTitle}>{f.title}</h4>
                    <p className={styles.featureDesc}>{f.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges */}
          {challenges && (
            <div className={styles.challengesWrap}>
              <motion.div {...fadeUp()}>
                <p className={styles.eyebrow}>The Problem</p>
                <h3 className={styles.sectionHeading}>Challenges We Solved</h3>
              </motion.div>
              <div className={styles.challenges}>
                {challenges.map((c, i) => (
                  <motion.div key={c.title} className={styles.challenge} {...fadeUp((i % 2) * 0.08)}>
                    <span className={styles.challengeNum}>{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h4 className={styles.challengeTitle}>{c.title}</h4>
                      <p className={styles.challengeDesc}>{c.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Process */}
          {process && (
            <div className={styles.processWrap}>
              <motion.div {...fadeUp()}>
                <p className={styles.eyebrow}>Our Process</p>
                <h3 className={styles.sectionHeading}>How We Delivered</h3>
              </motion.div>
              <ol className={styles.process}>
                {process.map((p, i) => (
                  <motion.li key={p.title} className={styles.step} {...fadeUp()}>
                    <span className={styles.stepNum}>{i + 1}</span>
                    <div className={styles.stepBody}>
                      <h4 className={styles.stepTitle}>{p.title}</h4>
                      <p className={styles.stepDesc}>{p.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          )}

          {/* Gallery */}
          {gallery && (
            <div className={gallery.length > 1 ? styles.gallery : styles.gallerySingle}>
              {gallery.map((g, i) => (
                <motion.figure key={g.src} className={styles.galleryItem} {...fadeUp(i * 0.08)}>
                  <div className={styles.galleryFrame}>
                    <Image
                      src={g.src}
                      alt={g.alt}
                      fill
                      sizes={gallery.length > 1 ? "(max-width: 760px) 100vw, 540px" : "(max-width: 1100px) 100vw, 1100px"}
                      className={styles.galleryImg}
                    />
                  </div>
                  {g.caption && (
                    <figcaption className={styles.caption}>{g.caption}</figcaption>
                  )}
                </motion.figure>
              ))}
            </div>
          )}

          {/* Results */}
          {results && (
            <div className={styles.resultsWrap}>
              <motion.div {...fadeUp()}>
                <p className={styles.eyebrow}>Results</p>
                <h3 className={styles.sectionHeading}>Results That Speak for Themselves</h3>
              </motion.div>
              <ul className={styles.results}>
                {results.map((r, i) => (
                  <motion.li key={r} className={styles.result} {...fadeUp((i % 2) * 0.06)}>
                    <span className={styles.resultCheck} aria-hidden>
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                        <path d="m3 8.5 3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {r}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* Closing */}
          {closing && (
            <motion.div className={styles.closing} {...fadeUp()}>
              <p className={styles.closingText}>{closing}</p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
