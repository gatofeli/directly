import { DEFAULT_NAME } from "../../constants/defaultName";

export function verificationName(name: string): [string, boolean] {
  let procesedName = typeof name !== "string" ? DEFAULT_NAME : name;

  procesedName = procesedName.trim();
  if (procesedName.length > 20) {
    procesedName = procesedName.slice(0, 20);
  }

  procesedName = procesedName || DEFAULT_NAME;

  const needsUpdate = name !== procesedName ? true : false;

  return [procesedName, needsUpdate];
}
