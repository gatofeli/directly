import { getStatusModal, STATUS_MODAL } from "@searcher/logic/getStatusModal";
import { useAppGetData } from "./useAppGetData";
import { useEffect, useRef, useState } from "react";


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
    const currentMode = getStatusModal(providerList, errorProviderList, loading)
    setStatus(currentMode)
  }, [providerList, errorProviderList, loading])


  return { dialogRef, status, providerList, STATUS_MODAL }
}
