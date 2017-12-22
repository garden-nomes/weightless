import PhysicsScene from './physics-scene';
import Vector from './vector';
import Player from './player';
import Thing from './thing';
import Particle from './particle';
import SpawnController from './spawn-controller';

const MIN_THINGS_ON_SCREEN = 10;
const MAX_THINGS = 15;
const MIN_PARTICLES_ON_SCREEN = 10;
const MAX_PARTICLES = 15;

export default class GameScene extends PhysicsScene {
  constructor(camera, composer, levelUp) {
    super(camera, composer);

    this.player = new Player(0, 0, composer, levelUp);
    this.addChild(this.player);

    this.thingController = new SpawnController({
      spawn: (x, y) => this.addChild(new Thing(x, y, 0.5)),
      remove: thing => this.removeChild(thing),
      safeDistance: 200
    });

    this.particleController = new SpawnController({
      spawn: (x, y) => this.addChild(new Particle(x, y), true),
      remove: particle => this.removeChild(particle)
    });

    this.itemCount = this.items.length;
  }

  update(step) {
    super.update(step);

    this.thingController.check(this.getItemsByType('Thing'), this.player.pos);
    this.particleController.check(
      this.getItemsByType('Particle'),
      this.player.pos
    );

    this.moveCamera();
  }

  draw(renderer) {
    // renderer.drawTilingBackground();
    super.draw(renderer);
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

  moveCamera() {
    this.camera.center.x = this.player.pos.x;
    this.camera.center.y = this.player.pos.y;
    this.camera.zoom = Math.min(
      Math.max(0.5, 1.1 - this.player.vel.mag() / 50),
      0.85
    );
  }
}
