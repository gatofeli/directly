import { useLinkStatusClassName } from "@searcher/hooks/useLinkStatusClassName";
import styles from "./Link.module.css";

useLinkStatusClassName

export function Link({ alias, url, index }) {
  const { statusLink, styleActive, styleVisited, ENTER_KEY, META_KEY } = useLinkStatusClassName()

  const handleEnterDown = (event) => {
    const key = event.key;
    if (key === ENTER_KEY) styleActive();
  }
  const handleEnterUp = (event) => {
    const key = event.key;
    if (key === ENTER_KEY || key === META_KEY) styleVisited();

  }

  const handleClick = (event) => {
    const mouseClicks = event.detail
    if (mouseClicks) styleVisited(true)

    //todo: Mantener ésta función mientras se acepte la funcionalidad futura de origin + portapapeles
  }


  return (
    <li>
      <a className={`${styles["anchor"]} ${statusLink ? styles[statusLink] : ''}`}
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
  );
}