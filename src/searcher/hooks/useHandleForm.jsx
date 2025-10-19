import { useEffect, useRef, useState } from "react";
import { internalMessage } from "../../utils/message/InternalMessage";
import { buildSearchUrl } from "../logic/buildSearchUrl";
import { sanitizeQuery } from "../logic/sanitizeQuery";

export function useHandleForm() {
  const [isHiddenProviders, setIsHiddenProviders] = useState(true);
  const ctrlSubmit = useRef(false);

  useEffect(() => {
    if (!isHiddenProviders) {
      document.querySelector("#providersWrapper > ul > li > button")?.focus();
    }
  }, [isHiddenProviders]);

  const setCtrlSubmit = (newValue) => {
    ctrlSubmit.current = newValue;
  };
  const activateProvidersList = () => {
    setIsHiddenProviders(false);
  };
  const desactivateProvidersList = () => {
    setIsHiddenProviders(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const provider = event.nativeEvent.submitter.value;

    if (provider === "") {
      activateProvidersList();
      return;
    }

    const queryInput = new FormData(event.target).get("query");
    const query = sanitizeQuery(queryInput);

    const searchUrl = buildSearchUrl(query, provider);
    const isSameTab = !ctrlSubmit.current;

    internalMessage.requestNavigation(searchUrl, isSameTab);
  };

  return { isHiddenProviders, handleSubmit, setCtrlSubmit, desactivateProvidersList };
}
