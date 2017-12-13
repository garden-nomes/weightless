import PhysicsScene from './physics-scene';
import Player from './player';
import Thing from './thing';

export default class GameScene extends PhysicsScene {
  constructor(camera) {
    super(camera);

    this.player = new Player(0, 0);
    this.addChild(this.player);

    for (let i = 0; i < 10; i++) {
      this.spawnThing();
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
      this.spawnThing();
    }
  }

  spawnThing() {
    const coords = this.camera.getRandomInBounds();
    const thing = new Thing(coords.x, coords.y, 0.5);
    this.addChild(thing);
  }

  renderLevel() {
    document.title = `lvl ${this.player.target - 2}`;
  }
}
