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

/*
import { useArrowFocus } from "@searcher/hooks/useArrowFocus";
import { useLinkActivatedStyle } from "@searcher/hooks/useLinkActivatedStyle";
import styles from "./List.module.css";

export function List({ children }) {
  const { containerRef, changeFocus, ARROW_KEY } = useArrowFocus();
  const { isActive, activeStyle, inactiveStyle, ENTER_KEY } = useLinkActivatedStyle()

  const handleChangeFocus = (event) => {
    const key = event.key;
    if (ARROW_KEY.includes(key)) {
      event.preventDefault();
      changeFocus(key);
    }
  };

  const handleEnterDown = (event) => {
    const key = event.key;
    if (key === ENTER_KEY) {
      activeStyle();
    }
  }
  const handleEnterUp = (event) => {
    const key = event.key;
    if (key === ENTER_KEY) {
      inactiveStyle();
    }
  }

  const handleClick = () => {
    //Evento para funcionalidad futura: origin + portapapeles
  }

  return (
    <nav className={styles["nav"]}>
      <ul className={styles["list"]} ref={containerRef} onKeyDown={handleChangeFocus}>

        {children.map(({ alias, url }, index) => (
          <li key={index}>
            <a className={`${styles["element"]} ${isActive ? styles["element-active"] : ''}`}
              href={url}
              rel="noopener noreferrer nofollow"
              autoFocus={index === 0}
              onKeyDown={handleEnterDown}
              onKeyUp={handleEnterUp}
              onClick={handleClick}
            >
              {alias}
            </a>
          </li>
        ))}

      </ul>
    </nav>
  );
}
*/