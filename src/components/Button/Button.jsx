import styles from "./Button.module.css";

export default function Button(props) {
  const { clicar, children } = props;
  return (
    <button onClick={clicar} className={styles.BotaoMrt}>
      {children}
    </button>
  );
}

export function Abc() {
  return <h1>Oi</h1>;
}
