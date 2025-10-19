import { useFocusProvider } from "../hooks/useFocusProvider";
import { useSubmitProvider } from "../hooks/useSubmitProvider";
import styles from "./ProviderList.module.css";

export function ProviderList({ children, setCtrlSubmit }) {
  const { handleButtonClick, handleButtonKey } = useSubmitProvider({ setCtrlSubmit });
  const { listRef, changeFocus } = useFocusProvider();

  const handleChangeFocus = (event) => {
    const ARROW_KEYS = ["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"];
    const key = event.key || event.metaKey;

    if (ARROW_KEYS.includes(key)) {
      event.preventDefault();
      changeFocus(key);
    }
  };

  return (
    <ul className={styles["list"]} ref={listRef} onKeyDown={handleChangeFocus}>
      {children.map(({ alias, url }) => (
        <li key={url}>
          <button
            type="submit"
            name="provider"
            className={styles["element"]}
            value={url}
            onClick={handleButtonClick}
            onKeyDown={handleButtonKey}
          >
            {alias}
          </button>
        </li>
      ))}
    </ul>
  );
}
