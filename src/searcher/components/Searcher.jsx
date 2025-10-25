import { SearchIcon } from "../../utils/icons/SearchIcon";
import { useDialog } from "../hooks/useDialog";
import { ProviderList } from "./ProviderList";
import styles from "./Searcher.module.css";

export function Searcher({ children }) {
  const { list, prepareList, closeList } = useDialog(children);

  const handleSubmit = (event) => {
    event.preventDefault()
    const userQuery = new FormData(event.target).get("query")
    prepareList(userQuery)
  }

  return (
    <search>
      <form onSubmit={handleSubmit} className={styles["form"]}>
        <input
          type="search"
          name="query"
          className={styles["search-box"]}
          placeholder="[ENTER] / 'Galletas en el microondas'"
          aria-label="Buscar"
          autoComplete="on"
          maxLength={500}
          onFocus={closeList}
          autoFocus
        />

        <button type="submit" className={styles["search-btn"]} onFocus={closeList} aria-label="Mostrar lista de resultados">
          <SearchIcon aria-hidden="true" />
        </button>
      </form >

      <dialog closedby="none" className={styles["dialog"]}>
        <nav className={styles["nav-dialog"]} aria-label="Resultados de búsqueda" >
          {list.length > 0 && <ProviderList>{list}</ProviderList>}
        </nav>
      </dialog>
    </search>
  );
}
