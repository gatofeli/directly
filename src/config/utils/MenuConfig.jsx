import styles from "./MenuConfig.module.css";

export function MenuConfig({ children }) {
  return (
    <menu className={styles["wrapper"]}>
      <ul className={styles["list"]}>
        <li>
          <a
            href="../provider/configProvider.html"
            className={`${styles["element"]} ${children === 0 ? styles["current"] : ""}`}
          >
            Webs guardadas
          </a>
        </li>

        <li>
          <a
            href="../theme/configTheme.html"
            className={`${styles["element"]} ${children === 1 ? styles["current"] : ""}`}
          >
            Temas
          </a>
        </li>

        <li>
          <a
            href="../report/configReport.html"
            className={`${styles["element"]} ${children === 2 ? styles["current"] : ""}`}
          >
            Errores y Sugerencias
          </a>
        </li>

        <li>
          <a href="../../doc/help.html" target="_blank" rel="noopener" className={styles["element"]}>
            Ayuda
          </a>
        </li>

        <li>
          <a href="../../doc/info.html" target="_blank" rel="noopener" className={styles["element"]}>
            información
          </a>
        </li>
      </ul>
    </menu>
  );
}
