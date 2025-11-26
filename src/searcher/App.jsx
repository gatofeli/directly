import styles from "@searcher/App.module.css";
import { EmptyProviderList } from "@searcher/components/EmptyProviderList";
import { Loading } from "@searcher/components/Loading";
import { Searcher } from "@searcher/components/Searcher";
import { Footer } from "@searcher/components/Footer";
import { useApp } from "@searcher/hooks/useApp";
import { getClassNameModal } from "@searcher/logic/getClassNameModal";
import { NAME } from "@utils/constants/default";
import { CriticalError } from "@utils/lib/components/CriticalError";



//TODO: APLICAR exit al cerrar el dialog



export function App(exit) {
  const { dialogRef, status, providerList, STATUS_MODAL } = useApp()

  const className = getClassNameModal(status)

  return (
    <dialog ref={dialogRef} className={`${styles[className]} ${styles['modal']}`} aria-label={`Extensión ${NAME}`}>
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
