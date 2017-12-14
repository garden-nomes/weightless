import PhysicsScene from './physics-scene';
import Vector from './vector';
import Player from './player';
import Thing from './thing';
import Particle from './particle';

const MIN_THINGS_ON_SCREEN = 10;
const MAX_THINGS = 15;
const MIN_PARTICLES_ON_SCREEN = 5;
const MAX_PARTICLES = 10;

export default class GameScene extends PhysicsScene {
  constructor(camera) {
    super(camera);

    for (let i = 0; i < 10; i++) {
      this.spawnParticle();
    }

    this.player = new Player(0, 0);
    this.addChild(this.player);

    for (let i = 0; i < 10; i++) {
      this.spawnThing();
    }

    this.itemCount = this.items.length;
  }

  update(step) {
    super.update(step);
    this.ensureThingCount();
    this.ensureParticleCount();
    this.renderLevel();
    this.moveCamera();
  }

  ensureThingCount() {
    // count items on screen
    let thingCount = 0;
    let onScreenCount = 0;

    this.items.forEach(item => {
      if (item.constructor.name === 'Thing') {
        thingCount++;
        if (this.camera.isInBounds(item.pos.x, item.pos.y, item.radius))
          onScreenCount++;
      }
    });

    if (onScreenCount < MIN_THINGS_ON_SCREEN) this.spawnThing();
    if (thingCount > MAX_THINGS) this.removeFarthestThing();
  }

  ensureParticleCount() {
    // count items on screen
    let particleCount = 0;
    let onScreenCount = 0;

    this.items.forEach(item => {
      if (item.constructor.name === 'Particle') {
        particleCount++;
        if (this.camera.isInBounds(item.pos.x, item.pos.y, item.radius))
          onScreenCount++;
      }
    });

    if (onScreenCount < MIN_PARTICLES_ON_SCREEN) this.spawnParticle();
    if (particleCount > MAX_PARTICLES) this.removeFarthestParticle();
  }

  spawnThing() {
    const coords = this.camera.getRandomInBounds();
    const thing = new Thing(coords.x, coords.y, 0.5);
    this.addChild(thing);
  }

  spawnParticle() {
    const coords = this.camera.getRandomInBounds();
    const particle = new Particle(coords.x, coords.y);
    this.addChild(particle, true);
  }

  removeFarthestThing() {
    if (!this.items.length) return;

    let farthestThing = null;
    this.items.forEach(item => {
      if (item.constructor.name === 'Thing') {
        if (farthestThing === null) {
          farthestThing = item;
        } else {
          const d1 = Vector.sub(farthestThing.pos, this.player.pos).magSq();
          const d2 = Vector.sub(item.pos, this.player.pos).magSq();
          if (d2 > d1) farthestThing = item;
        }
      }
    });

    this.removeChild(farthestThing);
  }

  removeFarthestParticle() {
    if (!this.items.length) return;

    let farthestThing = null;
    this.items.forEach(item => {
      if (item.constructor.name === 'Particle') {
        if (farthestThing === null) {
          farthestThing = item;
        } else {
          const d1 = Vector.sub(farthestThing.pos, this.player.pos).magSq();
          const d2 = Vector.sub(item.pos, this.player.pos).magSq();
          if (d2 > d1) farthestThing = item;
        }
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
