import { GitMerge } from 'phosphor-react';
import styles from './SideBar.module.css';

export function SideBar() {
    return (
        <aside className={styles.sideContainer}>
            <img src="https://qph.fs.quoracdn.net/main-qimg-204bee6e5d4f289d02653cddf82a4475" alt="" />

            <div className={styles.sideProfile}>
                <img className={styles.avatar} src="https://github.com/ingridaquino.png" alt="" />

                <p>Ingrid Aquino</p>
                <span>Web Developer</span>
            </div>

            <footer className={styles.curriculoSide}>
                <a 
                    href="https://docs.google.com/document/d/171Zj2FYJCrZq2ArPTR186ra9bI7li1cLiz_BiBlGFps/edit?usp=sharing" 
                    download>
                        <GitMerge />
                        Curriculo
                </a>
            </footer>
        </aside>
    )
    
}