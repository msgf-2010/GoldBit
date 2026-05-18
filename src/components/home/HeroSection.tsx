"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
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

const ORANGE = "rgba(245,166,35,";
const BLUE = "rgba(80,140,255,";
const WHITE = "rgba(255,255,255,";

function HeroVisual() {
  const reduced = useReducedMotion();
  const drawProps = reduced
    ? { initial: { pathLength: 1, opacity: 1 } }
    : {
        initial: { pathLength: 0, opacity: 0 },
        animate: { pathLength: 1, opacity: 1 },
      };
  const growX = (delay: number) =>
    reduced
      ? { initial: { scaleX: 1 } }
      : {
          initial: { scaleX: 0 },
          animate: { scaleX: 1 },
          transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] as const },
          style: { transformOrigin: "left center" },
        };
  const growY = (delay: number) =>
    reduced
      ? { initial: { scaleY: 1 } }
      : {
          initial: { scaleY: 0 },
          animate: { scaleY: 1 },
          transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const },
        };

  // Line chart: 7 points across width 180 (x: 280 → 460)
  const linePts = [
    [280, 232],
    [310, 220],
    [340, 226],
    [370, 208],
    [400, 212],
    [430, 196],
    [460, 184],
  ];
  const linePath = linePts
    .map((p, i) => (i === 0 ? `M${p[0]} ${p[1]}` : `L${p[0]} ${p[1]}`))
    .join(" ");
  const lineFill = `${linePath} L460 268 L280 268 Z`;

  // Donut: 2 arcs out of a circle, cx=110 cy=350 r=24
  const C = 2 * Math.PI * 24;
  const yellowSeg = C * 0.55;
  const blueSeg = C * 0.3;

  return (
    <div className={styles.visualBox}>
      <svg
        viewBox="0 0 480 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.diagram}
      >
        <defs>
          <linearGradient id="hv-line-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={`${BLUE}0.35)`} />
            <stop offset="100%" stopColor={`${BLUE}0)`} />
          </linearGradient>
          <linearGradient id="hv-bar-active" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={`${ORANGE}0.85)`} />
            <stop offset="100%" stopColor={`${ORANGE}0.55)`} />
          </linearGradient>
        </defs>

        {/* Frame */}
        <rect
          x="8"
          y="8"
          width="464"
          height="404"
          rx="16"
          fill={`${WHITE}0.025)`}
          stroke={`${WHITE}0.08)`}
          strokeWidth="1"
        />

        {/* Top bar / browser chrome */}
        <circle cx="28" cy="32" r="6" fill={`${ORANGE}0.9)`} />
        <rect x="48" y="26" width="180" height="12" rx="6" fill={`${WHITE}0.05)`} />
        <circle cx="376" cy="32" r="4" fill={`${WHITE}0.18)`} />
        <circle cx="392" cy="32" r="4" fill={`${BLUE}0.75)`} />
        <rect x="412" y="22" width="44" height="20" rx="5" fill={`${ORANGE}0.9)`} />
        <line x1="8" y1="56" x2="472" y2="56" stroke={`${WHITE}0.06)`} />

        {/* Sidebar separator */}
        <line x1="50" y1="56" x2="50" y2="412" stroke={`${WHITE}0.06)`} />

        {/* Sidebar icon 1 — apps grid (active) */}
        <rect x="22" y="76" width="20" height="20" rx="4" fill={`${ORANGE}0.12)`} stroke={`${ORANGE}0.6)`} />
        <rect x="26" y="80" width="5" height="5" rx="1" fill={`${ORANGE}0.9)`} />
        <rect x="33" y="80" width="5" height="5" rx="1" fill={`${ORANGE}0.9)`} />
        <rect x="26" y="87" width="5" height="5" rx="1" fill={`${ORANGE}0.9)`} />
        <rect x="33" y="87" width="5" height="5" rx="1" fill={`${ORANGE}0.9)`} />

        {/* Sidebar icon 2 — pie */}
        <circle cx="32" cy="120" r="8" stroke={`${BLUE}0.7)`} strokeWidth="1.5" />
        <path d="M32 120 L32 112 A8 8 0 0 1 40 120 Z" fill={`${BLUE}0.7)`} />

        {/* Sidebar icon 3 — chart */}
        <path d="M24 152 L28 146 L33 150 L40 142" stroke={`${BLUE}0.7)`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

        {/* Sidebar icon 4 — cube */}
        <path d="M32 174 L40 178 L40 188 L32 192 L24 188 L24 178 Z M32 174 L32 184 M24 178 L32 184 L40 178" stroke={`${BLUE}0.7)`} strokeWidth="1.3" strokeLinejoin="round" fill="none" />

        {/* Sidebar icon 5 — user */}
        <circle cx="32" cy="214" r="3.5" stroke={`${BLUE}0.7)`} strokeWidth="1.5" fill="none" />
        <path d="M24 226 Q32 220 40 226" stroke={`${BLUE}0.7)`} strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Sidebar icon 6 — settings */}
        <circle cx="32" cy="252" r="6" stroke={`${BLUE}0.55)`} strokeWidth="1.5" fill="none" />
        <circle cx="32" cy="252" r="2" fill={`${BLUE}0.55)`} />

        {/* === Workflow row === */}
        {/* Card 1 (active orange) */}
        <rect x="68" y="74" width="108" height="68" rx="10" fill={`${ORANGE}0.10)`} stroke={`${ORANGE}0.5)`} strokeWidth="1.3" />
        <rect x="80" y="88" width="58" height="8" rx="4" fill={`${ORANGE}0.9)`} />
        <rect x="80" y="104" width="78" height="6" rx="3" fill={`${WHITE}0.18)`} />
        <rect x="80" y="116" width="48" height="6" rx="3" fill={`${WHITE}0.10)`} />

        {/* Arrow 1 */}
        <motion.path
          d="M180 108 L208 108"
          stroke={`${ORANGE}0.6)`}
          strokeWidth="1.3"
          strokeDasharray="4 3"
          {...drawProps}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        />
        <path d="M204 104 L210 108 L204 112" stroke={`${ORANGE}0.6)`} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />

        {/* Card 2 (blue) */}
        <rect x="212" y="74" width="108" height="68" rx="10" fill={`${BLUE}0.10)`} stroke={`${BLUE}0.55)`} strokeWidth="1.3" />
        <rect x="224" y="88" width="58" height="8" rx="4" fill={`${BLUE}0.9)`} />
        <rect x="224" y="104" width="78" height="6" rx="3" fill={`${WHITE}0.18)`} />
        <rect x="224" y="116" width="48" height="6" rx="3" fill={`${WHITE}0.10)`} />

        {/* Arrow 2 */}
        <motion.path
          d="M324 108 L352 108"
          stroke={`${ORANGE}0.6)`}
          strokeWidth="1.3"
          strokeDasharray="4 3"
          {...drawProps}
          transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
        />
        <path d="M348 104 L354 108 L348 112" stroke={`${ORANGE}0.6)`} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />

        {/* Card 3 (check) */}
        <rect x="356" y="74" width="68" height="68" rx="10" fill={`${ORANGE}0.10)`} stroke={`${ORANGE}0.45)`} strokeWidth="1.3" />
        <motion.path
          d="M373 108 L386 121 L406 95"
          stroke={`${ORANGE}1)`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          {...drawProps}
          transition={{ duration: 0.7, delay: 1.2, ease: "easeOut" }}
        />

        {/* === Middle row: progress bars (left) + line chart (right) === */}
        {/* Bars */}
        <rect x="68" y="170" width="40" height="8" rx="4" fill={`${WHITE}0.10)`} />
        <rect x="68" y="186" width="180" height="10" rx="5" fill={`${WHITE}0.05)`} />
        <motion.rect x="68" y="186" width="148" height="10" rx="5" fill="url(#hv-bar-active)" {...growX(0.35)} />

        <rect x="68" y="206" width="180" height="10" rx="5" fill={`${WHITE}0.05)`} />
        <motion.rect x="68" y="206" width="124" height="10" rx="5" fill={`${ORANGE}0.75)`} {...growX(0.45)} />

        <rect x="68" y="226" width="180" height="10" rx="5" fill={`${WHITE}0.05)`} />
        <motion.rect x="68" y="226" width="78" height="10" rx="5" fill={`${ORANGE}0.55)`} {...growX(0.55)} />

        <rect x="68" y="246" width="180" height="10" rx="5" fill={`${WHITE}0.05)`} />
        <motion.rect x="68" y="246" width="60" height="10" rx="5" fill={`${ORANGE}0.6)`} {...growX(0.65)} />
        <motion.rect x="128" y="246" width="38" height="10" rx="5" fill={`${BLUE}0.65)`} {...growX(0.85)} />

        {/* Line chart */}
        <rect x="262" y="166" width="200" height="100" rx="8" fill={`${WHITE}0.02)`} stroke={`${WHITE}0.05)`} />
        <rect x="430" y="174" width="24" height="10" rx="3" fill={`${WHITE}0.08)`} />
        {/* Dotted grid */}
        {[300, 340, 380, 420].map((x) => (
          <line key={x} x1={x} y1="186" x2={x} y2="258" stroke={`${WHITE}0.05)`} strokeDasharray="2 3" />
        ))}
        <motion.path
          d={lineFill}
          fill="url(#hv-line-fill)"
          initial={reduced ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
        />
        <motion.path
          d={linePath}
          stroke={`${BLUE}0.95)`}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...drawProps}
          transition={{ duration: 1.3, delay: 0.6, ease: "easeOut" }}
        />
        {linePts.map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r="2.5"
            fill={`${BLUE}1)`}
            initial={reduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.7 + i * 0.12, ease: "easeOut" }}
          />
        ))}

        {/* === Bottom row === */}
        {/* Donut tile */}
        <rect x="68" y="282" width="124" height="118" rx="10" fill={`${WHITE}0.02)`} stroke={`${WHITE}0.05)`} />
        <circle cx="110" cy="335" r="24" stroke={`${WHITE}0.06)`} strokeWidth="8" fill="none" />
        <motion.circle
          cx="110"
          cy="335"
          r="24"
          stroke={`${ORANGE}0.95)`}
          strokeWidth="8"
          fill="none"
          strokeDasharray={`${yellowSeg} ${C}`}
          strokeDashoffset="0"
          transform="rotate(-90 110 335)"
          initial={reduced ? { strokeDashoffset: 0 } : { strokeDashoffset: yellowSeg }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.9, delay: 1.0, ease: "easeOut" }}
        />
        <motion.circle
          cx="110"
          cy="335"
          r="24"
          stroke={`${BLUE}0.9)`}
          strokeWidth="8"
          fill="none"
          strokeDasharray={`${blueSeg} ${C}`}
          strokeDashoffset={`-${yellowSeg}`}
          transform="rotate(-90 110 335)"
          initial={reduced ? { strokeDashoffset: -yellowSeg } : { strokeDashoffset: -yellowSeg + blueSeg }}
          animate={{ strokeDashoffset: -yellowSeg }}
          transition={{ duration: 0.9, delay: 1.4, ease: "easeOut" }}
        />
        {/* Legend dots */}
        <circle cx="150" cy="320" r="3" fill={`${ORANGE}0.9)`} />
        <rect x="158" y="317" width="24" height="6" rx="3" fill={`${WHITE}0.12)`} />
        <circle cx="150" cy="335" r="3" fill={`${BLUE}0.9)`} />
        <rect x="158" y="332" width="28" height="6" rx="3" fill={`${WHITE}0.12)`} />
        <circle cx="150" cy="350" r="3" fill={`${WHITE}0.25)`} />
        <rect x="158" y="347" width="20" height="6" rx="3" fill={`${WHITE}0.08)`} />

        {/* Bullet list tile */}
        <rect x="200" y="282" width="124" height="118" rx="10" fill={`${WHITE}0.02)`} stroke={`${WHITE}0.05)`} />
        {[300, 320, 340, 360, 380].map((y, i) => (
          <g key={y}>
            <circle cx="214" cy={y} r="2.5" fill={`${BLUE}0.85)`} />
            <rect x="224" y={y - 3} width={70 - (i % 2) * 14} height="6" rx="3" fill={`${WHITE}0.10)`} />
          </g>
        ))}

        {/* Bar chart tile */}
        <rect x="332" y="282" width="132" height="118" rx="10" fill={`${WHITE}0.02)`} stroke={`${WHITE}0.05)`} />
        {/* metric tabs */}
        <rect x="342" y="292" width="24" height="22" rx="5" fill={`${ORANGE}0.15)`} />
        <path d="M348 304 L352 300 L356 305 L362 297" stroke={`${ORANGE}0.95)`} strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <rect x="368" y="295" width="32" height="6" rx="3" fill={`${WHITE}0.10)`} />
        <rect x="368" y="305" width="20" height="5" rx="2" fill={`${WHITE}0.06)`} />

        <rect x="402" y="292" width="24" height="22" rx="5" fill={`${BLUE}0.18)`} />
        <path d="M408 304 L412 308 L416 300 L422 304" stroke={`${BLUE}0.95)`} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />

        {/* bars baseline */}
        <line x1="342" y1="386" x2="456" y2="386" stroke={`${WHITE}0.06)`} />
        {[
          { x: 346, h: 30 },
          { x: 364, h: 22 },
          { x: 382, h: 38 },
          { x: 400, h: 18 },
          { x: 418, h: 28 },
          { x: 436, h: 16 },
        ].map((b, i) => (
          <motion.rect
            key={b.x}
            x={b.x}
            y={386 - b.h}
            width="12"
            height={b.h}
            rx="2"
            fill={`${BLUE}0.85)`}
            style={{ transformOrigin: `${b.x + 6}px 386px` }}
            {...growY(1.3 + i * 0.07)}
          />
        ))}
      </svg>
    </div>
  );
}
