import { CriticalError } from "../../utils/lib/components/CriticalError";
import { MenuConfig } from "../utils/MenuConfig";
import styles from "./App.module.css";
import { ConfigProviders } from "./components/ConfigProviders";
import { useProviders } from "./hooks/useProviders";

export function App() {
  const { data, errorOfFetch } = useProviders();

  return (
    <>
      <MenuConfig>{0}</MenuConfig>

      {errorOfFetch ? (
        <div className={styles["critical-error"]}>
          <CriticalError />
        </div>
      ) : (
        <main className={styles["main"]}>
          <ConfigProviders>{data}</ConfigProviders>
        </main>
      )}
    </>
  );
}
