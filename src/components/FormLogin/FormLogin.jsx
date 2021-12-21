import styles from "./FormLogin.module.css";
import Button from "../Button/Button";

export default function FormLogin() {


  function clicou() {
    alert('clique')
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
          <button className={styles.FormLogin__RememberEmail}>
            Esqueci meu e-mail
          </button>
          <span className={styles.FormLogin__NewClient}>
            Ainda não é cliente? Abra sua empresa com a gente e tenha acesso à
            sua contabilidade online 24 horas por dia.
            <a className={styles.FormLogin__NewClient} href="#" target="_blank">
              Saiba mais
            </a>
          </span>
          <Button clicar={clicou}>
            Próximo
          </Button>
        </div>
      </div>
    </div>
  );
}
