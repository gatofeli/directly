import { InBuild } from "../utils/InBuild";
import { MenuConfig } from "../utils/MenuConfig";
import styles from "./App.module.css";

export function App() {
  return (
    <>
      <MenuConfig>{3}</MenuConfig>

      <main className={styles["config-main"]}>
        <InBuild />
      </main>
    </>
  );
}
