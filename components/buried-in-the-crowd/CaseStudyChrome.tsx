import { BackButton } from "./BackButton";
import { FloatingNav } from "./FloatingNav";
import styles from "./CaseStudyChrome.module.css";

export function CaseStudyChrome() {
  return (
    <div className={styles.layer}>
      <BackButton />
      <FloatingNav />
    </div>
  );
}
