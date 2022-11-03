import styles from "./Provided.module.css";

export function Provided() {
  return (
    <div className={styles.provided}>
      <h2>Contrate-me</h2>
      <form>
        <div className={styles.message}>
          <div>
            <input type="text" name="name" placeholder="Nome" />
          </div>
          <div>
            <input type="text" name="email" placeholder="E-mail" />
          </div>
        </div>
        <textarea placeholder="Mensagem" />
        <input className={styles.button} type="submit" value="Enviar" />
      </form>
    </div>
  );
}
