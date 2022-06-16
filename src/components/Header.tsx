import { Atom, GithubLogo, LinkedinLogo } from 'phosphor-react';
import styles from './Header.module.css';

export function Header() {
    return(
        <header className={styles.header}>
            <strong>
                Ingrid Aquin
            <Atom size={25} />
            </strong>

            <div className={styles.network}>
                <div className={styles.linkedin}>
                    <a 
                        href="https://www.linkedin.com/in/ingrid-aquino-88a8b9147/" >
                            <LinkedinLogo size={20} />
                            LinkedIn
                    </a>
                </div>

                <div className={styles.github}>
                    <a href="https://www.linkedin.com/in/ingrid-aquino-88a8b9147/">
                        <GithubLogo size={20} />
                        GitHub
                    </a>
                </div>

            </div>
        </header>
    )
}