import { STATUS_MODAL, StatusModalKeys } from "./getStatusModal";

export function getClassNameModal(status: StatusModalKeys) {
  const CLASS_MODAL = {
    [STATUS_MODAL.LOADING]: "dialog-load",
    [STATUS_MODAL.ERROR]: "dialog-alert",
    [STATUS_MODAL.EMPTY]: "dialog-info",
    [STATUS_MODAL.APP]: "dialog-app",
  };

  return CLASS_MODAL[status];
}
