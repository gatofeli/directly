import { STATUS_MODAL, StatusModalKeys } from "./getStatusModal";

export function getClassNameModal(status: StatusModalKeys) {
  const CLASS_MODAL = {
    [STATUS_MODAL.LOADING]: "modal-load",
    [STATUS_MODAL.ERROR]: "modal-alert",
    [STATUS_MODAL.EMPTY]: "modal-info",
    [STATUS_MODAL.APP]: "modal-app",
  };

  return CLASS_MODAL[status];
}
