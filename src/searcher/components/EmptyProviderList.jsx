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
            Activa algunas de las webs predefinidas que te proponemos{" "}
            <a className={styles["anchor"]} href="../../../../src/config/provider/configProvider.html">
              desde la configuración.
            </a>
          </li>

          <li>
            <p><span style={{ fontWeight: "bold", color: "#685b2ecc" }}>{"(Provisional) "}</span> Añade la web que prefieras, modificando la URL de una web activada.</p>
            <p>Si modificaste una web predefinida podrás volvera a activarla.</p>
          </li>

          <br />

          <li>
            <span style={{ fontWeight: "bold", color: "#ad9332ff" }}>{"(Próximamente) "}</span> Añadir la web que prefieras directamente, sin entrar en la configuración.
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
