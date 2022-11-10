import { GitMerge, YoutubeLogo } from "phosphor-react";
import { Skills } from "../skills/Skills";
import styles from "./SideBar.module.css";
import Curriculo from "./../../assets/curriculo.pdf"
import My from "./../../assets/my.jpg"


export function SideBar() {
  return (
    <div>
      <aside className={styles.sideContainer}>
        <img
          src="https://qph.fs.quoracdn.net/main-qimg-204bee6e5d4f289d02653cddf82a4475"
          alt="Imagem de capa"
        />

        <div className={styles.sideProfile}>
          <img
            className={styles.avatar}
            src={My}
            alt="Foto da Ingrid"
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
