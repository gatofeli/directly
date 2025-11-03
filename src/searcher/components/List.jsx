import { useArrowFocus } from "@searcher/hooks/useArrowFocus";
import styles from "./List.module.css";

export function List({ children }) {
  const { containerRef, changeFocus } = useArrowFocus();

  const handleChangeFocus = (event) => {
    const ARROW_KEYS = ["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"];
    const key = event.key || event.metaKey;

    if (ARROW_KEYS.includes(key)) {
      event.preventDefault();
      changeFocus(key);
    }
  };

  const handleClick = () => {
    //Evento para funcionalidad futura: origin + portapapeles
    return
  }

  return (
    <nav className={styles["nav"]} aria-label="Resultados de búsqueda" >

      <ul className={styles["list"]} ref={containerRef} onKeyDown={handleChangeFocus}>

        {children.map(({ alias, url }, index) => (
          <li key={index}>
            <a className={styles["element"]}

              href={url}
              rel="noopener noreferrer nofollow"
              onClick={handleClick}
              autoFocus={index === 0}
            >
              {alias}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
