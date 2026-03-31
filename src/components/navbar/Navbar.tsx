"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./navbar.module.scss";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const E = [0.25, 0.1, 0.25, 1] as const;

const menuContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
};

const menuItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: E } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: E } },
};

export default function Navbar() {
  const pathname = usePathname();
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const toggleTheme = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${menuOpen ? styles.menuIsOpen : ""}`}>
        <div className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
            <LogoMark />
            <span className={styles.logoText}>
              <span className={styles.logoGold}>Gold</span>
              <span className={styles.logoBit}>Bit</span>
            </span>
            <span className={styles.logoSep} aria-hidden />
            <span className={styles.logoSolutions}>Solutions</span>
          </Link>

          {/* Desktop nav */}
          <nav className={styles.desktopNav} aria-label="Main navigation">
            <ul className={styles.links}>
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href} className={styles.linkItem}>
                    <Link
                      href={link.href}
                      className={`${styles.link} ${active ? styles.active : ""}`}
                    >
                      {link.label}
                      {active && (
                        <motion.span
                          className={styles.linkIndicator}
                          layoutId="nav-indicator"
                          transition={{ duration: 0.3, ease: E }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right actions */}
          <div className={styles.actions}>
            {mounted && (
              <button
                className={styles.themeToggle}
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={resolvedTheme}
                    initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
                    transition={{ duration: 0.2, ease: E }}
                    style={{ display: "flex" }}
                  >
                    {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
                  </motion.span>
                </AnimatePresence>
              </button>
            )}

            <Link href="/contact" className={styles.ctaBtn}>
              <span>Get Started</span>
              <span className={styles.ctaArrow}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>

            <button
              className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ""}`}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span className={styles.menuBtnBar} />
              <span className={styles.menuBtnBar} />
            </button>
          </div>
        </div>

        {/* Gold progress line */}
        {scrolled && (
          <motion.div
            className={styles.scrollLine}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4, ease: E }}
          />
        )}
      </header>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.4, ease: E }}
          >
            <motion.nav
              className={styles.overlayNav}
              variants={menuContainer}
              initial="hidden"
              animate="show"
              exit="exit"
              aria-label="Mobile navigation"
            >
              <ul className={styles.overlayLinks}>
                {NAV_LINKS.map((link) => (
                  <motion.li key={link.href} variants={menuItem}>
                    <Link
                      href={link.href}
                      className={`${styles.overlayLink} ${pathname === link.href ? styles.overlayLinkActive : ""}`}
                    >
                      <span className={styles.overlayLinkNum}>
                        {String(NAV_LINKS.indexOf(link) + 1).padStart(2, "0")}
                      </span>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div className={styles.overlayFooter} variants={menuItem}>
                <div className={styles.overlayContact}>
                  <a href="mailto:info@goldbitsolutions.com" className={styles.overlayContactLink}>
                    info@goldbitsolutions.com
                  </a>
                  <a href="tel:2034417319" className={styles.overlayContactLink}>
                    203-441-7319
                  </a>
                </div>
                <Link href="/contact" className={styles.overlayCta} onClick={() => setMenuOpen(false)}>
                  Get Started
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function LogoMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className={styles.logoMark}>
      <rect x="1" y="1" width="9" height="9" rx="2.5" fill="currentColor" opacity="1"/>
      <rect x="12" y="1" width="9" height="9" rx="2.5" fill="currentColor" opacity="0.4"/>
      <rect x="1" y="12" width="9" height="9" rx="2.5" fill="currentColor" opacity="0.4"/>
      <rect x="12" y="12" width="9" height="9" rx="2.5" fill="currentColor" opacity="0.15"/>
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4.5" />
      <line x1="12" y1="2" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="2" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
