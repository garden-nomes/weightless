const keys = {};

const CONTROLLED_KEYS = [
  'ArrowUp',
  'ArrowRight',
  'ArrowDown',
  'ArrowLeft',
  'Space'
];

function onKeyDown(event) {
  keys[event.code] = true;
  if (CONTROLLED_KEYS.indexOf(event.code) !== -1) event.preventDefault();
}

function onKeyUp(event) {
  keys[event.code] = false;
  event.preventDefault();
}

document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);

export function isKeyDown(code) {
  return !!keys[code];
}
