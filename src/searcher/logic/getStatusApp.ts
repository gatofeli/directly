import { ProviderType } from "@utils/lib/storage/type";

export function getStatusApp(providerList: ProviderType[], errorProviderList: boolean, loading: boolean) {
  if (loading) return "loading";
  if (errorProviderList) return "error";
  if (providerList.length === 0) return "empty";

  return "app";
}
