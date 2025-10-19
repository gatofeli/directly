export function indexOfNewProvider(maxIndex: number, index?: number) {
  if (typeof index !== "number" || !Number.isInteger(index)) {
    return maxIndex;
  }

  if (index < 0 || index > maxIndex) {
    return maxIndex;
  }

  return index;
}
