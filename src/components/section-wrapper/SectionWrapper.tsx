import { ReactNode } from "react";
import styles from "./sectionWrapper.module.scss";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  narrow?: boolean;
}

export default function SectionWrapper({
  children,
  className = "",
  id,
  dark = false,
  narrow = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`${styles.section} ${dark ? styles.dark : ""} ${className}`}
    >
      <div className={`${styles.inner} ${narrow ? styles.narrow : ""}`}>
        {children}
      </div>
    </section>
  );
}
