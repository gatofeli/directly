import { useApp } from "./hooks/useApp";
import { Loading } from "./components/Loading";
import { CriticalError } from "@utils/lib/components/CriticalError";
import { EmptyProviderList } from "./components/EmptyProviderList";
import { Searcher } from "./components/Searcher";
import { Footer } from "./components/Footer";
import styles from "./App.module.css";
import { getDataModal } from "./logic/getDataModal";
import { STATUS_MODAL } from "./logic/getStatusApp";

export function App() {
  const { dialogRef, status, providerList } = useApp()

  const { className, ariaLabel } = getDataModal(status)

  return (
    <dialog ref={dialogRef} className={`${styles[className]} ${styles['dialog']}`} aria-label={ariaLabel}>
      {status === STATUS_MODAL.LOADING && <Loading />}
      {status === STATUS_MODAL.ERROR && <CriticalError />}
      {status === STATUS_MODAL.EMPTY && <EmptyProviderList />}
      {status === STATUS_MODAL.APP && (
        <>
          <main>
            <Searcher>{providerList}</Searcher>
          </main>

          <Footer />
        </>
      )}
    </dialog>
  );
}

/*
<!-- <!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="base.css">
  <title>Directly</title>
</head>

<body>
  <div id="root"></div>
  <script type="module" src="./main.jsx"></script>
</body>


</html> -->
*/








