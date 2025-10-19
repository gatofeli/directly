import styles from "./CriticalError.module.css";

export function CriticalError() {
  return (
    <div className={styles["wrapper"]} role="alert">
      <img
        className={styles["image"]}
        src="/icons/errorCat.png"
        alt="Dibujo estilo 'cartoon' de un gato tumbado boca arriba con cara de mareado, simbolizando un error crítico en la aplicación."
      />
      <p className={styles["message"]}>
        <span className={styles["message-span"]}>Upss...</span> ha habido un problema, prueba a recargar la página en
        unos segundos.
      </p>
    </div>
  );
}
