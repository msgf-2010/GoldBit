import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.scss";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/GoldBitSolutions_FF.png"
                alt="GoldBit Solutions"
                height={84}
                width={306}
                className={styles.logoImg}
              />
            </Link>
            <p className={styles.tagline}>
              Software built around your business, not the other way around.
            </p>
            <div className={styles.contact}>
              <a href="mailto:info@goldbitsolutions.com" className={styles.contactLink}>
                info@goldbitsolutions.com
              </a>
              <a href="tel:2034417319" className={styles.contactLink}>
                203-441-7319
              </a>
            </div>
          </div>

          <nav className={styles.nav}>
            <p className={styles.navLabel}>Navigation</p>
            <ul className={styles.navList}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.navLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.cta}>
            <p className={styles.ctaText}>
              Ready to build something that actually fits your business?
            </p>
            <Link href="/contact" className={styles.ctaBtn}>
              Start a Conversation
            </Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.legal}>
            &copy; 2026 GoldBit Solutions LLC. All rights reserved.
          </p>
          <p className={styles.location}>Connecticut, USA</p>
        </div>
      </div>
    </footer>
  );
}
