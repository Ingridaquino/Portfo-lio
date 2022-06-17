import { Cashier } from "./Cashier";
import { Projetos } from "./Projetos";

import styles from './Skills.module.css';


export function Skills() {

    return (
        <div className={styles.cashier}>       
            <section className={styles.contentSkills}>
                <h2>Minhas Skills</h2>

                <div className={styles.listSkills}>
                    <Cashier 
                        tecnologia="HTML"
                        porcetagem={75}
                    />

                    <Cashier 
                        tecnologia="CSS"
                        porcetagem={80}
                    />

                    <Cashier 
                        tecnologia="JavaScript"
                        porcetagem={60}
                        line={false}
                    />

                    <Cashier 
                        tecnologia="React"
                        porcetagem={50}
                        line={false}
                    />
                </div>
            </section>
        </div>
        
    )
}