import { Projetos } from "./Projetos";


import styles from './Skills.module.css';

export function Skills() {

    return (
        <article className={styles.skills}>
            <h2>Minhas Skills</h2>
            
            <section className={styles.contentSkills}>
                <p> Tenho conhecimentos em HTML, CSS, JavaScript e um pouco de React.</p>
                <p> Recentemente comecei a estudar no bootcamp de Desenvolvedor web da Generation Brasil </p>
            </section>

            <section>
                <Projetos />          
            </section>
        </article>
    )
}