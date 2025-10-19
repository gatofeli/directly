export function SearchBar() {
  return (
    <label>
      <input
        type="search"
        id="query"
        className="query"
        placeholder="..."
        autoFocus
        autoComplete="off"
        aria-autocomplete="list"
        aria-controls="providerList"
        tabIndex={0}
      />
    </label>
  );
}
