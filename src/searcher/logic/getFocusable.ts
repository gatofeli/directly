export const calcNewFocus = (list: HTMLAnchorElement[], currentIdx: number, arrow: ArrowKey) => {
  const ARROW_KEY = ["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"];

  if (!ARROW_KEY.includes(arrow)) return;

  const OPTIONS = {
    ArrowUp: () => prevFocusable(list, currentIdx),
    ArrowDown: () => nextFocusable(list, currentIdx),
    ArrowLeft: () => undefined,
    ArrowRight: () => undefined,
  };

  return OPTIONS[arrow]();
};

function prevFocusable(list: HTMLAnchorElement[], currentIdx: number) {
  const wrappedIndex = currentIdx === 0 ? list.length : currentIdx;

  return list[wrappedIndex - 1];
}
function nextFocusable(list: HTMLAnchorElement[], currentIdx: number) {
  const wrappedIndex = currentIdx === list.length - 1 ? 0 : currentIdx + 1;

  return list[wrappedIndex];
}

type ArrowKey = "ArrowDown" | "ArrowUp" | "ArrowRight" | "ArrowLeft";
