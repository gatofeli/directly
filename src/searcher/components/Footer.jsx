import { ConfigIcon } from '@utils/icons/ConfigIcon'
import { HelpIcon } from '@utils/icons/HelpIcon'
import styles from './Footer.module.css'

export function Footer() {

  return (
    <footer className={styles["footer"]}>
      <a hidden
        href="#"
        className={styles["footer-anchor"]}
        aria-label="Ayuda">
        <HelpIcon />
      </a>

      <a
        href="../../../../../src/config/provider/configProvider.html"
        className={styles["footer-anchor"]}
        aria-label="Configuración"
      >
        <ConfigIcon />
      </a>
    </footer>
  )
}