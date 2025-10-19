import { useEffect, useState } from "react";
import { ApiError, ApiOperation } from "../../../utils/error/apiError";
import { controller } from "../../../utils/lib/storage/Controller";
import { indexOfNewProvider } from "../logic/indexOfNewProvider";
import { prepareDefaultList } from "../logic/prepareDefaultList"

export function useProviders() {
  const [listOfEnabled, setListOfEnabled] = useState([]);
  const [listOfDefault, setListOfDefault] = useState([]);

  const [errorOfFetch, setErrorOfFetch] = useState(false);
  const [errorOfSaved, setErrorOfSaved] = useState(false);

  useEffect(() => {
    const fetchProviderList = async () => {
      try {
        const newStateOfEnabled = await controller.fetchProviders();
        setListOfEnabled(newStateOfEnabled);
        setListOfDefault(prepareDefaultList(newStateOfEnabled));
      } catch (error) {
        if (error instanceof ApiError !== false) {
          console.error("[config: provider] Get provider list - unexpected error", error);
          setErrorOfFetch(true);
          return;
        }

        if (error.operation === ApiOperation.STORAGE_SET) {
          setListOfEnabled(error.fallback);
          setListOfDefault(prepareDefaultList(error.fallback));
          return;
        }

        console.error("[config: provider] Get provider list - Chrome API error", error);
        setErrorOfFetch(true);
      }
    };

    fetchProviderList();
  }, []);

  const updateDataProvider = async ({ alias, url }, index) => {
    try {
      setErrorOfSaved(false);
      const newStateOfEnabled = [];

      const selectIndex = indexOfNewProvider(listOfEnabled.length, index);

      const msgInvalidURL = controller.canUrlOfProvider(url);
      if (msgInvalidURL.length !== 0) {
        return msgInvalidURL;
      }

      const enabledSet = new Set(listOfEnabled.map((provider, idx) => (selectIndex === idx ? "mock" : provider.url)));
      if (enabledSet.has(url)) {
        return ["Ésta URL ya existe en una de las webs que tienes activadas"];
      }

      listOfEnabled.forEach((prevProvider, idx) => {
        const newProvider =
          idx === selectIndex ? { alias: alias, url: url } : { alias: prevProvider.alias, url: prevProvider.url };

        newStateOfEnabled.push(newProvider);
      });

      await controller.updateProviders(newStateOfEnabled);

      setListOfEnabled(newStateOfEnabled);
      setListOfDefault(prepareDefaultList(newStateOfEnabled));
      return [];
    } catch (error) {
      setErrorOfSaved(true);

      error instanceof ApiError
        ? console.error("[config: provider] Update data provider - Chrome API error", error)
        : console.error("[config: provider] Update data provider - unexpected error", error);
    }
  };

  const removeProvider = async (url) => {
    try {
      setErrorOfSaved(false);
      const newStateOfEnabled = [];

      listOfEnabled.forEach((prevProvider) => {
        if (url !== prevProvider.url) {
          newStateOfEnabled.push({ alias: prevProvider.alias, url: prevProvider.url });
        }
      });

      await controller.updateProviders(newStateOfEnabled);

      setListOfEnabled(newStateOfEnabled);
      setListOfDefault(prepareDefaultList(newStateOfEnabled));
    } catch (error) {
      setErrorOfSaved(true);

      error instanceof ApiError
        ? console.error("[config: provider] Remove provider - Chrome API error", error)
        : console.error("[config: provider] Remove provider - unexpected error", error);
    }
  };

  const activateDefaultProvider = async (defaultProvider) => {
    try {
      setErrorOfSaved(false);
      const newStateOfEnabled = [];

      listOfEnabled.forEach((prevProvider) => {
        newStateOfEnabled.push({ alias: prevProvider.alias, url: prevProvider.url });
      });
      newStateOfEnabled.push({ alias: defaultProvider.alias, url: defaultProvider.url });

      await controller.updateProviders(newStateOfEnabled);

      setListOfEnabled(newStateOfEnabled);
      setListOfDefault(prepareDefaultList(newStateOfEnabled));
    } catch (error) {
      setErrorOfSaved(true);

      error instanceof ApiError
        ? console.error("[config: provider] Enable default provider - Chrome API error", error)
        : console.error("[config: provider] Enable default provider - unexpected error", error);
    }
  };

  const closeErrorOfSaved = () => {
    setErrorOfSaved(false);
  };

  return {
    data: {
      enabled: {
        list: listOfEnabled,
        actions: { updateDataProvider, removeProvider },
      },
      defaults: {
        list: listOfDefault,
        actions: { activateDefaultProvider, removeProvider },
      },
      errorOfSaved: { error: errorOfSaved, close: closeErrorOfSaved },
    },
    errorOfFetch,
  };
}
