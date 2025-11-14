import { ApiError, ApiOperation } from "@utils/error/apiError";
import { controller } from "@utils/lib/storage/Controller";
import { useEffect, useRef, useState } from "react";

export function useAppGetData() {
  const [providerList, setProviderList] = useState([]);
  const [errorProviderList, setErrorProviderList] = useState(false);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProviderList = async () => {
      try {
        const newProviders = await controller.fetchProviders();
        setProviderList(newProviders);
        setErrorProviderList(false)
      } catch (error) {
        if (error instanceof ApiError === false) {
          console.error("[searcher] Get provider list - unexpected error", error);
          setErrorProviderList(true);
          return;
        }

        if (error.operation === ApiOperation.STORAGE_SET) {
          setProviderList(error.fallback);
          setErrorProviderList(false)

          return;
        }

        console.error("[searcher] Get provider list - Chrome API error", error);
        setErrorProviderList(true);
      } finally {
        setLoading(false)
      }
    }

    fetchProviderList();
  }, []);



  return { providerList, errorProviderList, loading };
}
