import { BookmarkSlashIcon } from "../../../utils/icons/BookmarkSlashIcon";
import { EditIcon } from "../../../utils/icons/EditIcon";
import styles from "./ProviderCompacted.module.css";

export function ProviderCompacted({ provider, setIsExpanded, removeProvider }) {
  const handleRemove = () => {
    removeProvider(provider.url);
  };

  return (
    <div className={styles["wrapper"]}>
      <h3 className={styles["title"]}>{provider.alias}</h3>
      <button type="button" className={styles["edit"]} onClick={() => setIsExpanded(true)} aria-label="Editar">
        <EditIcon />
      </button>

      <button
        type="button"
        className={`${styles["disable"]} ${styles["animation-to-disable"]}`}
        onClick={handleRemove}
        aria-label="Eliminar"
      >
        <BookmarkSlashIcon />
      </button>
    </div>
  );
}
