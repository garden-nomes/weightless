import GameScene from './game-scene';

export default class Game {
  constructor(canvas) {
    this.context = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;
    this.update = this.update.bind(this);
    this.prevTimestamp = null;

    this.scene = new GameScene(this.width, this.height);
  }

  start() {
    window.requestAnimationFrame(this.update);
  }

  update(timestamp) {
    const ctx = this.context;
    ctx.clearRect(0, 0, this.width, this.height);

    if (this.prevTimestamp !== null) {
      const step = timestamp - this.prevTimestamp;

      this.scene.update(step * 60 / 1000);
      this.scene.draw(ctx);
    }

    this.prevTimestamp = timestamp;
    window.requestAnimationFrame(this.update);
  }
}
