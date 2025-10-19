import styles from "./InBuild.module.css";

export function InBuild() {
  return (
    <div className={styles["wrapper"]}>
      <img
        className={styles["image"]}
        src="/icons/build.png"
        alt="Dibujo estilo 'cartoon' de un gato negro con patitas blancas, tiene puesto un casco de minero y está picando una pequeña roca."
      />
      <h1 className={styles["title"]}>Estamos trabajando en ello</h1>
    </div>
  );
}
