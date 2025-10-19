import { useEffect, useRef, useState } from "react";
import { internalMessage } from "../../utils/message/InternalMessage";
import { buildSearchUrl } from "../logic/buildSearchUrl";
import { sanitizeQuery } from "../logic/sanitizeQuery";

export function useHandleForm() {
  const [isHiddenProviders, setIsHiddenProviders] = useState(true);
  const ctrlSubmit = useRef(false);

  useEffect(() => {
    if (isHiddenProviders) {
      return;
    }

    document.querySelector("ul")?.firstElementChild.firstElementChild.focus();
  }, [isHiddenProviders]);

  const setCtrlSubmit = (newValue) => {
    ctrlSubmit.current = newValue;
  };

  const activateProvidersSelection = () => {
    isHiddenProviders & setIsHiddenProviders(false);
  };

  const desactivateProvidersSelection = () => {
    isHiddenProviders || setIsHiddenProviders(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const provider = event.nativeEvent.submitter.value;

    if (provider === "") {
      activateProvidersSelection();
      return;
    }

    const queryInput = new FormData(event.target).get("query");
    const query = sanitizeQuery(queryInput);

    const searchUrl = buildSearchUrl(query, provider);
    const isSameTab = !ctrlSubmit.current;

    internalMessage.requestNavigation(searchUrl, isSameTab);
  };

  return { isHiddenProviders, handleSubmit, setCtrlSubmit, desactivateProvidersSelection };
}
