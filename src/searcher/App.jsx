import { SearchProviders } from "./components/SearchProviders";
import { useHandleForm } from "./hooks/useHandleForm";
import { useSearchProviders } from "./hooks/useSearchProviders";

export function App() {
  const { isHiddenProviders, desactivateProvidersSelection, setCtrlSubmit, handleSubmit } = useHandleForm();
  const { searchProviders } = useSearchProviders();

  return (
    <>
      <main>
        <form onSubmit={handleSubmit}>
          <div aria-expanded={!isHiddenProviders} aria-controls="listOfSearchProviders">
            <input
              type="search"
              name="query"
              onFocus={desactivateProvidersSelection}
              placeholder="[ENTER] / 'Galletas en el microondas'"
              autoFocus
              aria-label="Press Enter or write your query"
            />

            <button type="submit" onFocus={desactivateProvidersSelection}>
              Next
            </button>
          </div>

          <div id="listOfSearchProviders" hidden={isHiddenProviders} aria-hidden={isHiddenProviders}>
            {searchProviders.length > 0 ? (
              <SearchProviders providers={searchProviders} setCtrlSubmit={setCtrlSubmit} />
            ) : (
              <p role="alert">No hay datos guardados</p>
            )}
          </div>
        </form>
      </main>

      <footer>
        <a href="https://helphelphelp.com">Help</a>
        <a href="https://optionsoptions.com">options</a>
      </footer>
    </>
  );
}
