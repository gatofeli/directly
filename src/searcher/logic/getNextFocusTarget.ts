export function getNextFocusTarget(list: HTMLAnchorElement[], currentIdx: number, arrow: ArrowKeyType) {
  if (!ARROW_KEY.includes(arrow)) return;

  const DIRECTIONS = {
    [ARROW_KEY[0]]: () => prevTarget(list, currentIdx),
    [ARROW_KEY[1]]: () => nextTarget(list, currentIdx),

    //Preparado para funcionalidad futura
    [ARROW_KEY[2]]: () => undefined,
    [ARROW_KEY[3]]: () => undefined,
  };

  return DIRECTIONS[arrow]();
}

function prevTarget(list: HTMLAnchorElement[], currentIdx: number) {
  const wrappedIndex = currentIdx === 0 ? list.length : currentIdx;

  return list[wrappedIndex - 1];
}

function nextTarget(list: HTMLAnchorElement[], currentIdx: number) {
  const wrappedIndex = currentIdx === list.length - 1 ? 0 : currentIdx + 1;

  return list[wrappedIndex];
}

export const ARROW_KEY = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"] as const;

type ArrowKeyType = (typeof ARROW_KEY)[number];
