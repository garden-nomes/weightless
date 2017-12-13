import GameScene from './game-scene';
import Renderer from './renderer';
import Camera from './camera';

export default class Game {
  constructor(canvas) {
    // set up camera
    this.camera = new Camera(canvas.width, canvas.height);

    // set up renderer
    this.renderer = new Renderer(canvas.getContext('2d'), this.camera);

    // set up root scene
    this.scene = new GameScene(this.camera);

    this.update = this.update.bind(this);
    this.prevTimestamp = null;
  }

  start() {
    window.requestAnimationFrame(this.update);
  }

  update(timestamp) {
    this.renderer.clear();

    if (this.prevTimestamp !== null) {
      const step = timestamp - this.prevTimestamp;

      this.scene.update(step * 60 / 1000);
      this.scene.draw(this.renderer);
    }

    this.prevTimestamp = timestamp;
    window.requestAnimationFrame(this.update);
  }
}
