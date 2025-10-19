import { CriticalError } from "../../utils/lib/components/CriticalError";
import { EmptyProviderList } from "./EmptyProviderList";
import styles from "./ExceptionSearcherProvider.module.css";

export function ExceptionSearcherProvider({ children }) {
  return <div className={styles["wrapper-errors"]}>{children ? <CriticalError /> : <EmptyProviderList />}</div>;
}
