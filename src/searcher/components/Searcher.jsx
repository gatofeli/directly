import { useList } from "@searcher/hooks/useList";
import { List } from "./List";
import { SearchIcon } from "../../utils/icons/SearchIcon";
import styles from "./Searcher.module.css";

export function Searcher({ children }) {
  const { showList, closeList, list, dialogNavRef } = useList(children);

  const handleSubmit = (event) => {
    event.preventDefault()
    const userQuery = new FormData(event.target).get("query")
    showList(userQuery)
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

      <dialog ref={dialogNavRef} closedby="none" className={styles["dialog"]}>
        <nav className={styles["nav-dialog"]} aria-label="Resultados de búsqueda" >
          {list.length > 0 && <List>{list}</List>}
        </nav>
      </dialog>
    </search>
  );
}
