import styles from "./EmptyProviderList.module.css";

export function EmptyProviderList() {
  return (
    <div className={styles["wrapper"]}>
      <p className={styles["symbol"]} aria-hidden="true">
        ^◔ᴥ◔^
      </p>
      <h1 className={styles["title"]}>Parece que tu lista de webs favoritas está vacía...</h1>

      <div>
        <p className={styles["text"]}>Todo tiene solución:</p>

        <ul className={`${styles["text"]} ${styles["list"]}`}>
          <li>
            Activa algunas de las webs predefinidas que te proponemos{" "}
            <a className={styles["anchor"]} href="../../../../src/config/provider/configProvider.html">
              desde la configuración.
            </a>
          </li>

          <li>
            <p>
              <span className={styles["temporary"]}>{"( Provisional )  "}</span>
              Añade la web que prefieras, y luego modifica su URL. <br />
              Si modificaste una web predefinida podrás volvera a activarla.
            </p>
          </li>

          <li>
            <span className={styles["coming"]}>{"( Próximamente )  "}</span> Añadir la web que prefieras directamente, sin entrar en la configuración.
          </li>

          <li hidden>
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
