import { BookmarkIcon } from "../../../utils/icons/BookmarkIcon";
import { BookmarkSlashIcon } from "../../../utils/icons/BookmarkSlashIcon";
import styles from "./DefaultProviderElement.module.css";

export function DefaultProviderElement({ children, actions }) {
  const classNameIsEnabled = children.isEnabled ? "enabled" : "disabled";
  const classNameAnimation = children.isEnabled ? "animation-to-disable" : "animation-to-enable";
  const ariaLabelBtn = children.isEnabled ? `Desactivar ${children.alias}` : `Activar ${children.alias}`;
  const statusElement = children.isEnabled ? " (Activado)" : " (Desactivado)";

  const handleAction = () => {
    children.isEnabled ? actions.removeProvider(children.url) : actions.activateDefaultProvider(children);
  };

  return (
    <li className={styles["wrapper"]}>
      <h3 className={`${styles["title"]} ${styles[classNameIsEnabled]}`}>
        {children.alias} <span className={`${styles["sr-only"]}`}>{statusElement}</span>
      </h3>

      <button
        type="button"
        className={`${styles["button"]} ${styles[classNameIsEnabled]} ${styles[classNameAnimation]}`}
        onClick={handleAction}
        aria-label={ariaLabelBtn}
        key={classNameIsEnabled} //key se usa para re-renderizar el elemento y que pierda el focus
      >
        {children.isEnabled ? <BookmarkSlashIcon /> : <BookmarkIcon />}
      </button>
    </li>
  );
}
