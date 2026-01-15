import { MenuConfig } from "../utils/MenuConfig";
import styles from "./App.module.css";

export function App() {
  const version: string = chrome.runtime.getVersion();

  return (
    <>
      <MenuConfig>{2}</MenuConfig>

      <div className={styles["content-wrapper"]}>
        <header>
          <h1>Buzón de Errores y Sugerencias</h1>
          <p>Gracias por instalar Directly y colaborar informando de los errores y sugerencias</p>
        </header>

        <main>
          <div>
            <p className={styles["intro-question"]}>
              ¿Tu problema, sugerencia o duda no se encuentra solucionado en las secciones de
              <a href="../../doc/help.html" target="_blank" rel="noopener">
                {" "}
                Ayuda{" "}
              </a>
              o
              <a href="../../doc/info.html" target="_blank" rel="noopener">
                {" "}
                Información sobre la extensión{" "}
              </a>
              ?
            </p>
            <p className={styles["intro-response"]}>
              Entonces estaré encantado de leer tu reporte e intentar solucionarlo lo antes posible.
            </p>
          </div>

          <article>
            <h2>Tipos de reportes</h2>
            <div className={styles["report-wrapper"]}>
              <section className={styles["report"]}>
                <h3>Sugerencias</h3>
                <p>Cuéntame que mejoras o cambios te gustaría tener en siguientes actualizaciones.</p>
                <a
                  href="https://github.com/gatofeli/directly/discussions/new?category=ideas"
                  target="_blank"
                  rel="noopener"
                >
                  Reportar Sugerencia
                </a>
              </section>

              <section className={styles["report"]}>
                <h3>Errores</h3>
                <p>Si no estas seguro/a de que sea un error es mejor reportar una duda.</p>
                <a
                  href={`https://github.com/gatofeli/directly/issues/new?template=bug_report_user.yaml&ext=${version}`}
                  target="_blank"
                  rel="noopener"
                >
                  Reportar Error
                </a>
              </section>

              <section className={styles["report"]}>
                <h3>Dudas</h3>
                <p>Dudas que tengas o reportes que no entre dentro de reportar error o sugerencia.</p>
                <a
                  href="https://github.com/gatofeli/directly/discussions/new?category=general"
                  target="_blank"
                  rel="noopener"
                >
                  Reportar Duda
                </a>
              </section>
            </div>
          </article>
          <p>* Los reportes se gestionan mediante GitHub para un mejor seguimiento.</p>
        </main>
      </div>
    </>
  );
}
