import { useWebList } from "@searcher/hooks/useWebList";
import { SearchIcon } from "../../utils/icons/SearchIcon";
import { useToggleList } from "../hooks/useToggleList";
import { ProviderList } from "./ProviderList";
import styles from "./Searcher.module.css";

export function Searcher({ children }) {
  const { isVisibleList, hiddenList, showList } = useToggleList();
  const { webList, generateList } = useWebList(children)

  const handleSubmit = (event) => {
    event.preventDefault()
    const userQuery = new FormData(event.target).get("query")
    generateList(userQuery)
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

      {(isVisibleList && webList.length > 0) && (
        <nav
          id="navProviderList"
          className={styles["provider-wrapper"]}
        >
          <ProviderList>{webList}</ProviderList>
        </nav>
      )}

    </form>
  );
}
