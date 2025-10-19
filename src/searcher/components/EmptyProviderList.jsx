import styles from "./EmptyProviderList.module.css";

export function EmptyProviderList() {
  return (
    <div className={styles["wrapper"]}>
      <p className={styles["symbol"]} aria-hidden>
        ^◔ᴥ◔^
      </p>
      <h1 className={styles["title"]}>Parece que tu lista de webs favoritas está vacía...</h1>

      <div>
        <p className={styles["text"]}>Todo tiene solución:</p>
        <ul className={`${styles["text"]} ${styles["list"]}`}>
          <li>
            Activa algunas de las webs por defecto que te proponemos,{" "}
            <a className={styles["anchor"]} href="../../../../src/config/provider/configProvider.html">
              desde la configuración.
            </a>
          </li>

          <li>
            Añade la web que más te interese{" "}
            <a className={styles["anchor"]} href="">
              siguiendo estos sencillos pasos.
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
