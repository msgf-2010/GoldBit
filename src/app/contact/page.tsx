import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import styles from "./contact.module.scss";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with GoldBit Solutions. Tell us about your operation and we'll discuss what a custom software solution could look like for your business.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroBg} aria-hidden>
            <div className={styles.glow} />
            <div className={styles.grid} />
          </div>
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <p className={styles.eyebrow}>Get in Touch</p>
              <h1 className={styles.heading}>Let's talk about your business.</h1>
              <p className={styles.sub}>
                Tell us about your workflows, your challenges, and what you're
                trying to build. We'll figure out together whether a custom
                solution is the right fit.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.body}>
          <div className={styles.bodyInner}>
            <div className={styles.formCol}>
              <ContactForm />
            </div>
            <div className={styles.infoCol}>
              <ContactInfo />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
