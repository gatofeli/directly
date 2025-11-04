import { ProviderType } from "@utils/lib/storage/type";

export function getStatusModal(providerList: ProviderType[], errorProviderList: boolean, loading: boolean) {
  if (loading) return STATUS_MODAL.LOADING;
  if (errorProviderList) return STATUS_MODAL.ERROR;
  if (providerList.length === 0) return STATUS_MODAL.EMPTY;

  return STATUS_MODAL.APP;
}

export const STATUS_MODAL = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  EMPTY: "EMPTY",
  APP: "APP",
};

export type StatusModalKeys = keyof typeof STATUS_MODAL;
