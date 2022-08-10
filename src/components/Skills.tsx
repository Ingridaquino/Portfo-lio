import { Code } from "phosphor-react";
import { Cashier } from "./Cashier";


import styles from './Skills.module.css';


export function Skills() {

    return (
        <div className={styles.containerSkill}>       
            <section className={styles.contentSkills}>
            {/* <Code size={32}/>  */}
            <h2> Minhas Skills </h2>

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

                    <Cashier 
                        tecnologia="Java"
                        porcetagem={30}
                        line={false}
                    />

                    <Cashier 
                        tecnologia="Spring Boot"
                        porcetagem={25}
                        line={false}
                    />

                    <Cashier 
                        tecnologia="MySql"
                        porcetagem={20}
                        line={false}
                    />

                    
                </div>
            </section>
        </div>
        
    )
}