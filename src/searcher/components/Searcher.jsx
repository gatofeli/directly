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
    <search className={styles["wrapper"]}>
      <form onSubmit={handleSubmit} className={styles["search-box"]}>
        <input
          type="search"
          name="query"
          className={styles["input"]}
          placeholder="[ENTER] / 'Galletas en el microondas'"
          aria-label="Buscar"
          autoComplete="on"
          maxLength={500}
          onFocus={closeList}
          autoFocus
        />

        <button type="submit" className={styles["btn"]} onFocus={closeList} aria-label="Mostrar lista de resultados">
          <SearchIcon />
        </button>
      </form >

      <dialog ref={dialogNavRef} closedby="none" className={styles["dialog"]}>
        {list.length > 0 && <List>{list}</List>}
      </dialog>
    </search>
  );
}
