import styles from "./contactInfo.module.scss";

export default function ContactInfo() {
  return (
    <div className={styles.info}>
      <div className={styles.block}>
        <p className={styles.blockLabel}>Email</p>
        <a href="mailto:info@goldbitsolutions.com" className={styles.blockValue}>
          info@goldbitsolutions.com
        </a>
      </div>

      <div className={styles.block}>
        <p className={styles.blockLabel}>Phone</p>
        <a href="tel:2039414333" className={styles.blockValue}>
          203-941-4333
        </a>
      </div>

      <div className={styles.block}>
        <p className={styles.blockLabel}>Location</p>
        <p className={styles.blockText}>Connecticut, USA</p>
      </div>

      <div className={styles.divider} />

      <div className={styles.promise}>
        <div className={styles.promiseIcon}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <div>
          <p className={styles.promiseTitle}>You talk to the builder</p>
          <p className={styles.promiseDesc}>
            No account managers or intermediaries. Your message goes directly
            to the person who will design and build your solution.
          </p>
        </div>
      </div>

      <div className={styles.promise}>
        <div className={styles.promiseIcon}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
        </div>
        <div>
          <p className={styles.promiseTitle}>Fast response</p>
          <p className={styles.promiseDesc}>
            We respond to all inquiries within one business day.
          </p>
        </div>
      </div>

      <div className={styles.promise}>
        <div className={styles.promiseIcon}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>
        <div>
          <p className={styles.promiseTitle}>No commitment required</p>
          <p className={styles.promiseDesc}>
            The first conversation is just a conversation. We figure out
            together if there's a fit before anything else.
          </p>
        </div>
      </div>
    </div>
  );
}
