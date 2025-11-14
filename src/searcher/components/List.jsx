import { useArrowFocus } from "@searcher/hooks/useArrowFocus";
import styles from "./List.module.css";
import { Link } from "./Link";

export function List({ children }) {
  const { containerRef, changeFocus, ARROW_KEY } = useArrowFocus();

  const handleChangeFocus = (event) => {
    const key = event.key;
    if (ARROW_KEY.includes(key)) {
      event.preventDefault();
      changeFocus(key);
    }
  };

  return (
    <nav className={styles["nav"]}>
      <ul className={styles["list"]} ref={containerRef} onKeyDown={handleChangeFocus}>

        {children.map(({ alias, url }, index) => (
          <Link key={index} alias={alias} url={url} index={index} />
        ))}

      </ul>
    </nav>
  );
}
