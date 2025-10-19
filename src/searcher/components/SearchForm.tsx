import { FormEvent, useState } from "react";
import { ProvaiderList } from "./ProvaiderList";
import { SearchBar } from "./SearchBar";

/*
 * roving focus
 * <suspense>
 ? aria-activedescendant
 
 */

export function SearchForm({ children }: { children: { name: string; url: string; id: number; alert: boolean }[] }) {
  const [showProvider, setShowProvider] = useState(false);
  const [focus, setFocus] = useState(0);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showProvider ? setFocus(0) : setShowProvider(true);
  };

  return (
    <form role="search" onSubmit={onSubmit}>
      <SearchBar />

      {showProvider && <ProvaiderList focus={[focus, setFocus]}>{children}</ProvaiderList>}
    </form>
  );
}
