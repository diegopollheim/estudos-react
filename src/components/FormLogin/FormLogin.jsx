import styles from "./FormLogin.module.css";
import Button from "../Button/Button";
import ButtonS from "../ButtonS/ButtonS";

export default function FormLogin() {
  function clicou() {
    alert("clique");
  }

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Card}>
        <div className={styles.Card__Logo}>
          <img src="/imagens/logo.svg" alt="" />
        </div>
        <div className={styles.Card__Titulo}>
          <h1>Fazer Login</h1>
          <p>Use a sua conta da moreto.co</p>
        </div>
        <div className={styles.FormLogin}>
          <input
            className={styles.FormLogin__inputMail}
            type="email"
            placeholder="Insira o seu email"
          />
          <input
            className={styles.FormLogin__inputPassword}
            type="password"
            placeholder="Insira a sua senha"
          />
          <div className={styles.FormLogin__RememberEmail}>
            <ButtonS variant="link">Esqueci meu e-mail</ButtonS>
          </div>

          <span className={styles.FormLogin__NewClient}>
            Ainda não é cliente? Abra sua empresa com a gente e tenha acesso à
            sua contabilidade online 24 horas por dia.
            <a className={styles.FormLogin__NewClient} href="#" target="_blank">
              Saiba mais
            </a>
          </span>
          <ButtonS variant="filled">Proximo</ButtonS>
        </div>
      </div>
    </div>
  );
}
