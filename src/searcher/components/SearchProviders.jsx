import { useSubmitProvider } from "../hooks/useSubmitProvider";

export function SearchProviders({ providers, setCtrlSubmit }) {
  const { autoSubmit, manualSubmit } = useSubmitProvider({ setCtrlSubmit });

  return (
    <ul aria-label="Seleccionar el sitio web en donde se quiera realizar la búsqueda">
      {providers.map(({ alias, url }, index) => (
        <li key={index}>
          <button type="submit" name="provider" tabIndex={0} onClick={autoSubmit} onKeyDown={manualSubmit} value={url}>
            {alias}
          </button>
        </li>
      ))}
    </ul>
  );
}
