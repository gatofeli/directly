import styles from "./MenuConfig.module.css";

export function MenuConfig({ children }) {
  return (
    <menu className={styles["wrapper"]}>
      <ul className={styles["list"]}>
        <a
          href="../provider/configProvider.html"
          className={`${styles["element"]} ${children === 0 ? styles["current"] : ""}`}
        >
          Webs guardadas
        </a>
        <a
          href="../theme/configTheme.html"
          className={`${styles["element"]} ${children === 1 ? styles["current"] : ""}`}
        >
          Temas
        </a>
        <a
          href="../reportBug/ConfigBug.html"
          className={`${styles["element"]} ${children === 2 ? styles["current"] : ""}`}
        >
          Bugs
        </a>
        <a href="../info/ConfigInfo.html" className={`${styles["element"]} ${children === 3 ? styles["current"] : ""}`}>
          Información
        </a>
      </ul>
    </menu>
  );
}
