import PhysicsScene from './physics-scene';
import Player from './player';
import Thing from './thing';

export default class GameScene extends PhysicsScene {
  constructor(width, height) {
    super(width, height);

    this.player = new Player(this.width / 2, this.height / 2);
    this.addChild(this.player);

    for (let i = 0; i < 10; i++) {
      const thing = new Thing(
        Math.random() * this.width,
        Math.random() * this.height,
        0.5
      );
      this.addChild(thing);
    }

    this.itemCount = this.items.length;
  }

  update(step) {
    super.update(step);
    this.ensureItemCount();
    this.renderLevel();
  }

  ensureItemCount() {
    if (this.items.length < this.itemCount) {
      const thing = new Thing(
        Math.random() * this.width,
        Math.random() * this.height,
        0.5
      );

      this.addChild(thing);
    }
  }

  renderLevel() {
    document.title = `lvl ${this.player.target - 2}`;
  }
}
