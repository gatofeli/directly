export const getNextFocusTarget = (list: HTMLAnchorElement[], currentIdx: number, arrow: ArrowKey) => {
  const ARROW_KEY = ["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"];

  if (!ARROW_KEY.includes(arrow)) return;

  const DIRECTIONS = {
    ArrowUp: () => prevTarget(list, currentIdx),
    ArrowDown: () => nextTarget(list, currentIdx),

    //Preparado para funcionalidad futura
    ArrowLeft: () => undefined,
    ArrowRight: () => undefined,
  };

  return DIRECTIONS[arrow]();
};

function prevTarget(list: HTMLAnchorElement[], currentIdx: number) {
  const wrappedIndex = currentIdx === 0 ? list.length : currentIdx;

  return list[wrappedIndex - 1];
}
function nextTarget(list: HTMLAnchorElement[], currentIdx: number) {
  const wrappedIndex = currentIdx === list.length - 1 ? 0 : currentIdx + 1;

  return list[wrappedIndex];
}

type ArrowKey = "ArrowDown" | "ArrowUp" | "ArrowRight" | "ArrowLeft";
