import PhysicsScene from './physics-scene';
import Vector from './vector';
import Player from './player';
import Thing from './thing';

const MAX_ITEMS = 30;

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
    this.moveCamera();
  }

  ensureItemCount() {
    // count items on screen
    let onScreen = 0;
    this.items.forEach(item => {
      if (this.camera.isInBounds(item.pos.x, item.pos.y, item.radius)) {
        onScreen++;
      }
    });

    if (onScreen < this.itemCount) {
      this.spawnThing();
    }

    if (this.items.length > MAX_ITEMS) this.removeFarthestThing();
  }

  spawnThing() {
    const coords = this.camera.getRandomInBounds();
    const thing = new Thing(coords.x, coords.y, 0.5);
    this.addChild(thing);
  }

  removeFarthestThing() {
    if (!this.items.length) return;

    let farthestThing = this.items[0];
    this.items.forEach(item => {
      const d1 = Vector.sub(farthestThing.pos, this.player.pos).magSq();
      const d2 = Vector.sub(item.pos, this.player.pos).magSq();

      if (d2 > d1) {
        farthestThing = item;
      }
    });

    this.removeChild(farthestThing);
  }

  renderLevel() {
    document.title = `lvl ${this.player.target - 2}`;
  }

  moveCamera() {
    this.camera.center.x = this.player.pos.x;
    this.camera.center.y = this.player.pos.y;
  }
}
