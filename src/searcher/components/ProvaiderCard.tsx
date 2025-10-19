import { MouseEvent } from "react";
import { handleSearch } from "../logic/handleSearch";

export function ProviderCard({ children, url, index }: { children: string; url: string; index: number }) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const isNewTab = e.ctrlKey || e.metaKey;
    handleSearch(url, isNewTab);
  };

  const data = index === 0 ? { tabIndex: 0, autoFocus: true } : { tabIndex: -1, autoFocus: false };

  return (
    <li role="option">
      <button
        type="button"
        tabIndex={data.tabIndex}
        data-index={index}
        onClick={handleClick}
        autoFocus={data.autoFocus}
      >
        {children}
      </button>
    </li>
  );
}
