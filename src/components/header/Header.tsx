import {
  Atom,
  GithubLogo,
  LinkedinLogo,
  Selection,
  SelectionBackground,
} from "phosphor-react";
import { useState } from "react";
import styles from "./Header.module.css";

export function Header() {
  const [active, setMode] = useState(false);

  const ToggleMode = () => {
    setMode(!active);
  };

  return (
    <header className={styles.header}>
      <strong>&lt;Ingrid Aquino /&gt;</strong>

      <div className={styles.network}>
        <div className={styles.linkedin}>
          <a
            href="https://www.linkedin.com/in/ingrid-aquino-88a8b9147/"
            target="_blank"
          >
            <LinkedinLogo size={20} />
            LinkedIn
          </a>
        </div>

        <div className={styles.github}>
          <a href="https://github.com/Ingridaquino" target="_blank">
            <GithubLogo size={20} />
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
