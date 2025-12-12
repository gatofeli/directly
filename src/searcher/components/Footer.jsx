import { ConfigIcon } from "@utils/icons/ConfigIcon";
import { HelpIcon } from "@utils/icons/HelpIcon";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles["wrapper"]}>
      <a
        href="../../../../../src/doc/help.html"
        target="_blank"
        rel="noopener"
        className={styles["anchor"]}
        aria-label="Ayuda"
      >
        <HelpIcon />
      </a>

      <a
        href="../../../../../src/config/provider/configProvider.html"
        className={styles["anchor"]}
        aria-label="Configuración"
      >
        <ConfigIcon />
      </a>
    </footer>
  );
}
