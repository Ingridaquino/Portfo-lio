import { Code } from "phosphor-react";
import { Cashier } from "../cashier/Cashier";


import styles from './Skills.module.css';

const skills = [
    {
        tecnologia: 'HTML',
    },

    {
        tecnologia: 'CSS',
    },
    
    {
        tecnologia: 'Javascript',
    },
    {
        tecnologia: 'React',
    },
    {
        tecnologia: 'Typescript',
    },
    {
        tecnologia: 'Java',
    },
    {
        tecnologia: 'Spring boot',
    },
    {
        tecnologia: 'MySQL',
    },
    {
        tecnologia: 'Figma',
    }, 
]


export function Skills() {

    return (
        <div className={styles.containerSkill}>       
            <section className={styles.contentSkills}>
                <div className={styles.listSkills}>
                    {
                        skills.map((skill) => (
                            <Cashier 
                                tecnologia={skill.tecnologia}
                                porcetagem={75}
                            />

                        ))
                    }
                </div>
            </section>
        </div>
        
    )
}