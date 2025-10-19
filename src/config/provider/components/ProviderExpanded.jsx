import { useState } from "react";
import { CancelIcon } from "../../../utils/icons/CancelIcon";
import { SaveIcon } from "../../../utils/icons/SaveIcon";
import styles from "./ProviderExpanded.module.css";

export function ProviderExpanded({ provider, setIsExpanded, updateDataProvider }) {
  const [errorListURL, setErrorListURL] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { alias, url } = Object.fromEntries(new FormData(event.target));

    if (provider.alias === alias && provider.url === url) {
      setIsExpanded(false);
      return;
    }

    setErrorListURL([]);
    const msgErrorURL = await updateDataProvider({ alias, url }, provider.index);

    msgErrorURL.length === 0 ? setIsExpanded(false) : setErrorListURL(msgErrorURL);
  };

  const handleCloseForm = () => {
    setIsExpanded(false);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["form"]}>
      <fieldset className={styles["wrapper-alias"]}>
        <input
          type="text"
          name="alias"
          className={styles["input-alias"]}
          defaultValue={provider.alias}
          maxLength={20}
          autoComplete="off"
          autoFocus
          required
          aria-label="Alias"
        />
      </fieldset>

      <fieldset className={styles["wrapper-url"]}>
        <input
          type="url"
          name="url"
          className={styles["input-url"]}
          defaultValue={provider.url}
          required
          aria-label="URL"
          aria-invalid={errorListURL.length !== 0}
          aria-errormessage="errorURL"
        />

        {errorListURL.length !== 0 && (
          <ul id="errorURL" className={styles["error-url-list"]} role="alert">
            {errorListURL.map((errorMsg) => (
              <li key={errorMsg}>{errorMsg}</li>
            ))}
          </ul>
        )}
      </fieldset>

      <div className={styles["wrapper-button"]}>
        <button type="submit" className={styles["save"]} aria-label="Guardar">
          <SaveIcon />
        </button>
        <button type="button" className={styles["cancel"]} onClick={handleCloseForm} aria-label="Cancelar">
          <CancelIcon />
        </button>
      </div>
    </form>
  );
}
