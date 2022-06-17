import styles from './Cashier.module.css';

interface CashierProps {
    tecnologia: string;
    porcetagem: number;
    line?: boolean;
}

export function Cashier({tecnologia, porcetagem, line = true}:CashierProps) {
    return (
        <div className={styles.tecCashier}>
            <div className={styles.infoTec}>
                <span>{tecnologia}</span>
                <span>{porcetagem}%</span>
            </div>
            <div className={line ? styles.lineTec : styles.lineTecNew}></div>
        </div>
    )
}