import Game from './game';
import './index.css';

function init() {
  const canvas = document.getElementById('canvas');
  canvas.setAttribute('width', window.innerWidth);
  canvas.setAttribute('height', window.innerHeight);

  const game = new Game(canvas);
  game.start();
}

init();
