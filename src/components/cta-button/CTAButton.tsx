"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./ctaButton.module.scss";

interface CTAButtonProps {
  href: string;
  label: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function CTAButton({
  href,
  label,
  variant = "primary",
  size = "md",
  className = "",
}: CTAButtonProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      transition={{ duration: 0.15 }}
      style={{ display: "inline-block" }}
    >
      <Link
        href={href}
        className={`${styles.btn} ${styles[variant]} ${styles[size]} ${className}`}
      >
        {label}
        {variant === "primary" && (
          <span className={styles.arrow}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        )}
      </Link>
    </motion.div>
  );
}
