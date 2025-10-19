import { useFocusProvider } from "../hooks/useFocusProvider";
import { useSubmitProvider } from "../hooks/useSubmitProvider";

export function ProviderList({ providers, setCtrlSubmit }) {
  const { handleButtonClick, handleButtonKey } = useSubmitProvider({ setCtrlSubmit });
  const { listRef, changeFocus } = useFocusProvider();

  const handleChangeFocus = (event) => {
    const key = event.key || event.metaKey;
    if (key === "ArrowDown" || key === "ArrowUp" || key === "ArrowRight" || key === "ArrowLeft") {
      event.preventDefault();
    }
    if (key === "ArrowDown" || key === "ArrowUp") {
      changeFocus(key);
    }
  };

  return (
    <ul
      className="providerList"
      ref={listRef}
      aria-label="Seleccionar el sitio web en donde se quiera realizar la búsqueda"
      onKeyDown={handleChangeFocus}
    >
      {providers.map(({ alias, url }, index) => (
        <li key={index}>
          <button
            type="submit"
            name="provider"
            className="provider"
            value={url}
            onClick={handleButtonClick}
            onKeyDown={handleButtonKey}
            aria-label={`Navegar a ${alias}`}
          >
            {alias}
          </button>
        </li>
      ))}
    </ul>
  );
}
