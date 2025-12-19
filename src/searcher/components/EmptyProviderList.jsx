import { NAME } from "@utils/constants/default";
import styles from "./EmptyProviderList.module.css";

export function EmptyProviderList() {
  return (
    <>
      <main className={styles["epl-main"]}>
        <h1 className={styles["epl-title"]}>Tu lista de "webs activas" está vacía</h1>

        <p>No te preocupes, es una simple configuración.</p>

        <section aria-labelledby="section-new-user" className={styles["epl-section_details"]}>
          <details>
            <summary>
              <h2 id="section-new-user">¿ Acabas de instalar la extensión ?</h2>
            </summary>
            <p>¡ Gracias por instalar {NAME} !</p>
            <p>
              Antes de configurar el listado de webs activas, comprueba que tienes configurado un atajo de teclado para
              abrir esta extensión:
            </p>
            <ol>
              <li>
                Copia y dirígete a este link en tu navegador: <strong>chrome://extensions/shortcuts</strong>
              </li>
              <li>Revisa que en la sección de la extensión de {NAME} exista un atajo de teclado.</li>
            </ol>

            <p>Y ahora sí, te dejamos con la configuración de las webs.</p>
          </details>
        </section>

        <section className={styles["epl-section_no-details"]}>
          <p>
            Para ir a la configuración del listado de webs activas{" "}
            <a rel="noopener" target="_blank" href="../../../../src/config/provider/configProvider.html">
              Clic aquí.
            </a>
          </p>
        </section>
      </main>

      <footer className={styles["epl-footer"]}>
        <p>
          Si tienes alguna duda por favor usa la{" "}
          <a rel="noopener" target="_blank" href="../../../../src/doc/help.html">
            Guía de la extensión.
          </a>
        </p>
      </footer>
    </>
  );
}
