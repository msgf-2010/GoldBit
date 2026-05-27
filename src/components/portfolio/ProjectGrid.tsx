import ProjectCard from "./ProjectCard";
import { PROJECTS } from "./projects";
import styles from "./projectGrid.module.scss";

export default function ProjectGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
