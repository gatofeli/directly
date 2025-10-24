import { SearchIcon } from "../../utils/icons/SearchIcon";
import { useToggleList } from "../hooks/useToggleList";
import { ProviderList } from "./ProviderList";
import styles from "./Searcher.module.css";

export function Searcher({ children }) {
  const { isVisibleList, hiddenList, showList } = useToggleList();
  //todo: -------------------------------------------------------------------- generar un hook: manipular-lista

  const handleSubmit = (event) => {
    event.preventDefault()
    //todo: ------------------------------------------------------------------ Llamar a hook: manipular-lista
    showList()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles["search-wrapper"]} aria-expanded={isVisibleList} aria-controls="navProviderList">
        <input
          type="search"
          name="query"
          className={styles["search-box"]}
          aria-label="Consulta"
          placeholder="[ENTER] / 'Galletas en el microondas'"
          autoFocus
          maxLength="500"
          onFocus={hiddenList}
        />
        <button
          type="submit"
          onFocus={hiddenList}
          className={styles["search-btn"]}
          aria-label="Mostrar listado de webs"
        >
          <SearchIcon />
        </button>
      </div>

      {isVisibleList && (
        <nav
          id="navProviderList"
          className={styles["provider-wrapper"]}
        >
          <ProviderList>{children}</ProviderList>
        </nav>
      )}




      {/* <nav
        id="providerWrapper"
        className={styles["provider-wrapper"]}
        hidden={isHiddenProviders}
      >
        <ProviderList>{children}</ProviderList>
      </nav> */}

    </form>
  );
}
