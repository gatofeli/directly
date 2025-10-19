import { useEffect, useRef, useState } from "react";
import { goToSearch } from "../logic/goToSearch";

export function useHandleForm() {
  const [isHiddenProviders, setIsHiddenProviders] = useState(true);
  const ctrlSubmit = useRef(false);

  useEffect(() => {
    if (!isHiddenProviders) {
      document.querySelector("#providerWrapper > ul > li > button")?.focus();
    }
  }, [isHiddenProviders]);

  const setCtrlSubmit = (newValue) => {
    ctrlSubmit.current = newValue;
  };

  const hiddenProvidersList = () => {
    setIsHiddenProviders(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const provider = event.nativeEvent.submitter.value;

    provider === "" ? setIsHiddenProviders(false) : goToSearch(provider, event.target, ctrlSubmit.current);
  };

  return { isHiddenProviders, handleSubmit, setCtrlSubmit, hiddenProvidersList };
}
