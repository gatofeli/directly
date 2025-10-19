import styles from "./DefaultProviderCategory.module.css";
import { DefaultProviderElement } from "./DefaultProviderElement";

export function DefaultProviderCategory({ children, category, actions }) {
  return (
    <li>
      <details className={styles["wrapper"]}>
        <summary className={styles["title"]}>{category}</summary>
        <ul className={styles["sublist"]}>
          {children.map((provider) => (
            <DefaultProviderElement key={`D-${provider.url}`} actions={actions}>
              {provider}
            </DefaultProviderElement>
          ))}
        </ul>
      </details>
    </li>
  );
}
