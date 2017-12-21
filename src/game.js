import GameScene from './game-scene';
import Renderer from './renderer';
import Camera from './camera';
import Composer from './composer';

export default class Game {
  constructor(canvas) {
    this.canvas = canvas;

    this.composer = new Composer();

    // set up camera
    this.camera = new Camera(canvas.width, canvas.height);

    // set up renderer
    this.renderer = new Renderer(canvas.getContext('2d'), this.camera);

    // set up root scene
    this.scene = new GameScene(this.camera, this.composer);

    this.update = this.update.bind(this);
    this.resize = this.resize.bind(this);

    this.prevTimestamp = null;
  }

  start() {
    window.requestAnimationFrame(this.update);
    window.addEventListener('resize', this.resize);
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

  resize(event) {
    this.canvas.setAttribute('width', window.innerWidth);
    this.canvas.setAttribute('height', window.innerHeight);
    this.camera.width = this.canvas.width;
    this.camera.height = this.canvas.height;
  }
}
