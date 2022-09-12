import { GitMerge, YoutubeLogo } from 'phosphor-react';
import styles from './SideBar.module.css';

export function SideBar() {
    return (
        <aside className={styles.sideContainer}>
            <img src="https://qph.fs.quoracdn.net/main-qimg-204bee6e5d4f289d02653cddf82a4475" alt="" />

            <div className={styles.sideProfile}>
                <img className={styles.avatar} src="https://media-exp1.licdn.com/dms/image/C4D03AQGDw_-EUW0htw/profile-displayphoto-shrink_100_100/0/1660654278832?e=1668038400&v=beta&t=xr1MedP2hb77TuP6aWn6NexZi0IPKFJo9JXUsheQyMg" alt="" />

                <p>Ingrid Aquino</p>
                <span>Web Developer</span>
            </div>

            <footer className={styles.footer}>
                <a 
                    className={styles.curriculo}
                    href="https://docs.google.com/document/d/1L1RlcpR7AYQXj4-dKVYttI_cSRPFNHoq/edit?usp=sharing&ouid=112183367245397609295&rtpof=true&sd=true" 
                    download>
                        <GitMerge />
                        Curriculo
                </a>

                <a 
                    className={styles.pitch}
                    href="https://www.youtube.com/watch?v=ChIs5xD2fqM"  >
                        <YoutubeLogo />
                        Pitch
                </a>
            </footer>
        </aside>
    )
    
}