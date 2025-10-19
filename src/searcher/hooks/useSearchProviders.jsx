import { useEffect, useState } from "react";
import { controller } from "../../utils/storage/Controller";

export function useSearchProviders() {
  const [searchProviders, setSearchProviders] = useState([]);

  const fetchProviders = async () => {
    const newProviders = await controller.getSearchProviders();
    setSearchProviders(newProviders);
  };

  useEffect(() => {
    fetchProviders();
  }, []);

  return { searchProviders };
}
