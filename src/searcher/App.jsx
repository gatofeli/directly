import { useApp } from "./hooks/useApp";
import { Loading } from "./components/Loading";
import { CriticalError } from "@utils/lib/components/CriticalError";
import { EmptyProviderList } from "./components/EmptyProviderList";
import { Searcher } from "./components/Searcher";
import { Footer } from "./components/Footer";
import styles from "./App.module.css";

export function App() {
  const { dialogRef, status, providerList } = useApp()

  return (
    <dialog ref={dialogRef}>
      {status === 'loading' && <Loading />}
      {status === 'error' && <CriticalError />}
      {status === 'empty' && <EmptyProviderList />}
      {status === 'app' && (
        <>
          <main className={styles["main"]}>
            <Searcher>{providerList}</Searcher>
          </main>
          <Footer />
        </>
      )}
    </dialog>
  );
}










