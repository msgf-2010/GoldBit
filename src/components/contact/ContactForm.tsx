"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./contactForm.module.scss";

const E = [0.25, 0.1, 0.25, 1] as const;

interface FormState {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

const INITIAL: FormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = (): boolean => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Enter a valid email address.";
    }
    if (!form.message.trim()) errs.message = "Message is required.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send message.");
      setSubmitted(true);
    } catch {
      setServerError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        className={styles.success}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: E }}
      >
        <div className={styles.successIcon}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h3 className={styles.successTitle}>Message received.</h3>
        <p className={styles.successSub}>
          We'll be in touch shortly. In the meantime, feel free to reach us
          directly at{" "}
          <a href="mailto:info@goldbitsolutions.com">
            info@goldbitsolutions.com
          </a>{" "}
          or <a href="tel:2039414333">203-941-4333</a>.
        </p>
      </motion.div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>
            Full Name <span className={styles.req}>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
            placeholder="Jane Smith"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
          />
          {errors.name && <p className={styles.error}>{errors.name}</p>}
        </div>

        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            Email Address <span className={styles.req}>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
            placeholder="jane@company.com"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="company" className={styles.label}>
            Company Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className={styles.input}
            placeholder="Acme Logistics LLC"
            value={form.company}
            onChange={handleChange}
            autoComplete="organization"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="phone" className={styles.label}>
            Phone Number{" "}
            <span className={styles.optional}>(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={styles.input}
            placeholder="203-555-0100"
            value={form.phone}
            onChange={handleChange}
            autoComplete="tel"
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          Tell us about your project <span className={styles.req}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
          placeholder="Describe what you're working on, what's not working with your current process, or what you're trying to build..."
          value={form.message}
          onChange={handleChange}
        />
        {errors.message && <p className={styles.error}>{errors.message}</p>}
      </div>

      {serverError && <p className={styles.error}>{serverError}</p>}
      <button type="submit" className={styles.submit} disabled={loading}>
        {loading ? "Sending…" : "Send Message"}
        {!loading && (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
    </form>
  );
}
