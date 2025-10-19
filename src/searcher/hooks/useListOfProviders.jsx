import { useEffect, useState } from "react";
import { ApiError, ApiOperation } from "../../utils/error/apiError";
import { controller } from "../../utils/lib/storage/Controller";

export function useListOfProviders() {
  const [providerList, setProviderList] = useState([]);
  const [errorProviderList, setErrorProviderList] = useState(false);

  useEffect(() => {
    fetchProviderList();
  }, []);

  const fetchProviderList = async () => {
    try {
      const newProviders = await controller.fetchProviders();
      setProviderList(newProviders);
    } catch (error) {
      if (error instanceof ApiError !== false) {
        console.error("[searcher] Get provider list - unexpected error", error);
        setErrorProviderList(true);
        return;
      }

      if (error.operation === ApiOperation.STORAGE_SET) {
        setProviderList(error.fallback);
        return;
      }

      console.error("[searcher] Get provider list - Chrome API error", error);
      setErrorProviderList(true);
    }
  };

  return { providerList, errorProviderList };
}
