import { useEffect, useRef, useState } from "react";
import { getStatusApp, STATUS_MODAL } from "@searcher/logic/getStatusApp";
import { useAppGetData } from "./useAppGetData";


export function useApp() {
  const { providerList, errorProviderList, loading } = useAppGetData();
  const [status, setStatus] = useState(STATUS_MODAL.LOADING)
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (dialog.open) {
      dialog.close()
    }
    dialog.showModal()
  }, [])

  useEffect(() => {
    const currentMode = getStatusApp(providerList, errorProviderList, loading)
    setStatus(currentMode)
  }, [providerList, errorProviderList, loading])


  return { dialogRef, status, providerList }
}
