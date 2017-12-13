import Player from './player';
import Thing from './thing';
import PhysicsScene from './physics-scene';

export default class Game {
  constructor(canvas) {
    this.context = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;
    this.update = this.update.bind(this);

    this.scene = new PhysicsScene(this.width, this.height);

    this.player = new Player(this.width / 2, this.height / 2);
    this.scene.addChild(this.player);

    this.prevTimestamp = null;

    for (let i = 0; i < 10; i++) {
      const thing = new Thing(
        Math.random() * this.width,
        Math.random() * this.height,
        0.5
      );
      this.scene.addChild(thing);
    }
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
