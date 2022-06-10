import { Atom } from 'phosphor-react';
import styles from './Header.module.css';

export function Header() {
    return(
        <header className={styles.header}>
            <strong>
                Ingrid Aquin
            </strong>
            <Atom size={24} />
        </header>
    )
}