import { useState } from "react";
import { ProviderCompacted } from "./ProviderCompacted";
import { ProviderExpanded } from "./ProviderExpanded";

export function EnabledProvider({ children, actions }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { updateDataProvider, removeProvider } = actions;

  return (
    <li aria-expanded={isExpanded}>
      {isExpanded ? (
        <ProviderExpanded provider={children} setIsExpanded={setIsExpanded} updateDataProvider={updateDataProvider} />
      ) : (
        <ProviderCompacted provider={children} setIsExpanded={setIsExpanded} removeProvider={removeProvider} />
      )}
    </li>
  );
}
