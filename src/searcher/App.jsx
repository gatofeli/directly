import { ConfigIcon } from "./components/ConfigIcon";
import { HelpIcon } from "./components/HelpIcon";
import { ProviderList } from "./components/ProviderList";
import { useHandleForm } from "./hooks/useHandleForm";
import { useListOfProviders } from "./hooks/useListOfProviders";

export function App() {
  const { isHiddenProviders, desactivateProvidersList, setCtrlSubmit, handleSubmit } = useHandleForm();
  const { listOfProviders } = useListOfProviders();

  return (
    <div className="extension">
      <main className="main">
        <form onSubmit={handleSubmit} className="form">
          <div className="searchWrapper" aria-expanded={!isHiddenProviders} aria-controls="providersWrapper">
            <input
              type="search"
              name="query"
              className="searchBox"
              aria-label="Pulsa la tecla 'Enter' o escribe tu consulta"
              placeholder="[ENTER] / 'Galletas en el microondas'"
              autoFocus
              maxLength="500"
              onFocus={desactivateProvidersList}
            />

            <button
              type="submit"
              onFocus={desactivateProvidersList}
              className="searchBtn"
              aria-label="Ver la lista de webs"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div
            id="providersWrapper"
            className="providersWrapper"
            hidden={isHiddenProviders}
            aria-hidden={isHiddenProviders}
          >
            {listOfProviders.length > 0 ? (
              <ProviderList providers={listOfProviders} setCtrlSubmit={setCtrlSubmit} />
            ) : (
              <p className="noProviders" role="alert">
                No hay webs guardadas
              </p>
            )}
          </div>
        </form>
      </main>

      <footer className="footer">
        <HelpIcon />
        <ConfigIcon />
      </footer>
    </div>
  );
}
