import { GitMerge, YoutubeLogo } from "phosphor-react";
import { Skills } from "../skills/Skills";
import styles from "./SideBar.module.css";
import Curriculo from "./../../assets/curriculo.pdf"

export function SideBar() {
  return (
    <div>
      <aside className={styles.sideContainer}>
        <img
          src="https://qph.fs.quoracdn.net/main-qimg-204bee6e5d4f289d02653cddf82a4475"
          alt=""
        />

        <div className={styles.sideProfile}>
          <img
            className={styles.avatar}
            src="https://media-exp1.licdn.com/dms/image/C4D03AQGDw_-EUW0htw/profile-displayphoto-shrink_100_100/0/1660654278832?e=1668038400&v=beta&t=xr1MedP2hb77TuP6aWn6NexZi0IPKFJo9JXUsheQyMg"
            alt=""
          />

          <p>Ingrid Aquino</p>
          <span>Web Developer</span>
        </div>

        <footer className={styles.footer}>
          <a
            className={styles.curriculo}
            href={Curriculo}
            target="_blank"
            download
          >
            <GitMerge />
            Currículo
          </a>

          <a
            className={styles.pitch}
            href="https://www.youtube.com/watch?v=ChIs5xD2fqM"
            target="_blank"
          >
            <YoutubeLogo />
            Pitch
          </a>
        </footer>
      </aside>
      <Skills />
    </div>
  );
}
