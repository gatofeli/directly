import { SearchIcon } from "../../utils/icons/SearchIcon";
import { useHandleForm } from "../hooks/useHandleForm";
import { ProviderList } from "./ProviderList";
import styles from "./Searcher.module.css";

export function Searcher({ children }) {
  const { isHiddenProviders, hiddenProvidersList, setCtrlSubmit, handleSubmit } = useHandleForm();

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles["search-wrapper"]} aria-expanded={!isHiddenProviders} aria-controls="providerWrapper">
        <input
          type="search"
          name="query"
          className={styles["search-box"]}
          aria-label="Consulta"
          placeholder="[ENTER] / 'Galletas en el microondas'"
          autoFocus
          maxLength="500"
          onFocus={hiddenProvidersList}
        />
        <button
          type="submit"
          onFocus={hiddenProvidersList}
          className={styles["search-btn"]}
          aria-label="Siguiente paso"
        >
          <SearchIcon />
        </button>
      </div>

      <nav
        id="providerWrapper"
        className={styles["provider-wrapper"]}
        hidden={isHiddenProviders}
        aria-hidden={isHiddenProviders}
      >
        <ProviderList setCtrlSubmit={setCtrlSubmit}>{children}</ProviderList>
      </nav>
    </form>
  );
}
