import { STATUS_MODAL, StatusModalKeys } from "./getStatusApp";

export function getDataModal(status: StatusModalKeys) {
  let className;
  let ariaLabel;

  if (status === STATUS_MODAL.LOADING) {
    className = CLASS_MODAL.LOADING;
    ariaLabel = "";
  }
  if (status === STATUS_MODAL.ERROR) {
    className = CLASS_MODAL.ERROR;
    ariaLabel = "";
  }
  if (status === STATUS_MODAL.EMPTY) {
    className = CLASS_MODAL.EMPTY;
    ariaLabel = "";
  }
  if (status === STATUS_MODAL.APP) {
    className = CLASS_MODAL.APP;
    ariaLabel = "";
  }

  return { className, ariaLabel };
}

const CLASS_MODAL = {
  LOADING: "dialog-load",
  ERROR: "dialog-alert",
  EMPTY: "dialog-info",
  APP: "dialog-app",
};
