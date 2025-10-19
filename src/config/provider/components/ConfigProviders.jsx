import { CloseIcon } from "../../../utils/icons/CloseIcon";
import styles from "./ConfigProviders.module.css";
import { DefaultProviderCategory } from "./DefaultProviderCategory";
import { EnabledProvider } from "./EnabledProvider";

export function ConfigProviders({ children }) {
  const { errorOfSaved, enabled, defaults } = children;

  return (
    <div className={styles["wrapper"]}>
      {errorOfSaved.error && (
        <div className={styles["error-saved"]} role="alertdialog">
          <p>
            Upss... parece que ha ocurrido un error al intentar guardar los cambios, vuelve a intentarlo dentro de unos
            segundos.
          </p>
          <button type="button" onClick={errorOfSaved.close} aria-label="Cerrar">
            <CloseIcon />
          </button>
        </div>
      )}

      <section className={styles["section"]}>
        <h2 className={styles["title"]}>Webs activas</h2>
        <ul className={styles["enabled-list"]}>
          {enabled.list.map((provider, index) => (
            <EnabledProvider key={provider.url} actions={enabled.actions}>
              {{ ...provider, index }}
            </EnabledProvider>
          ))}
        </ul>
      </section>

      <section className={styles["section"]}>
        <h2 className={styles["title"]}>Webs default</h2>
        <ul className={styles["default-list"]}>
          {defaults.list.map(([category, value]) => (
            <DefaultProviderCategory key={category} category={category} actions={defaults.actions}>
              {value}
            </DefaultProviderCategory>
          ))}
        </ul>
      </section>
    </div>
  );
}
