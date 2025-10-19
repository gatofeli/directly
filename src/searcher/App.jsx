import { ConfigIcon } from "../utils/icons/ConfigIcon";
import { HelpIcon } from "../utils/icons/HelpIcon";
import styles from "./App.module.css";
import { ExceptionSearcherProvider } from "./components/ExceptionSearcherProvider";
import { Searcher } from "./components/Searcher";
import { useListOfProviders } from "./hooks/useListOfProviders";

export function App() {
  const { providerList, errorProviderList } = useListOfProviders();

  return errorProviderList || providerList.length === 0 ? (
    <ExceptionSearcherProvider>{errorProviderList}</ExceptionSearcherProvider>
  ) : (
    <div className={styles["backdrop"]}>
      <main className={styles["main"]}>
        <Searcher>{providerList}</Searcher>
      </main>

      <footer className={styles["footer"]}>
        <a href="#" className={styles["footer-anchor"]} aria-label="Ayuda">
          <HelpIcon />
        </a>

        <a
          href="../../../../src/config/provider/configProvider.html"
          className={styles["footer-anchor"]}
          aria-label="Configuración"
        >
          <ConfigIcon />
        </a>
      </footer>
    </div>
  );
}
