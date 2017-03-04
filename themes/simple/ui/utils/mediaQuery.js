export function isAbove(width) {
  return window.matchMedia(`(min-width: ${width}px)`).matches;
}

export function isBelow(width) {
  return window.matchMedia(`(max-width: ${width}px)`).matches;
}
