import Vector from './vector';

export default class SpawnController {
  constructor(config) {
    const defaultConfig = {
      min: 10,
      max: 15,
      range: 700,
      safeDistance: 0,
      spawn: () => {},
      remove: () => {}
    };

    config = {
      ...defaultConfig,
      ...config
    };

    this.spawnItem = config.spawn;
    this.removeItem = config.remove;
    this.min = config.min;
    this.max = config.max;
    this.range = config.range;
    this.safeDistance = config.safeDistance;

    for (let i = 0; i < this.min; i++) {
      this.spawn(new Vector(0, 0));
    }
  }

  check(items, center) {
    let inRangeCount = 0;

    items.forEach(item => {
      if (Vector.sub(item.pos, center).magSq() < this.range * this.range)
        inRangeCount++;
    });

    if (inRangeCount < this.min) this.spawn(center);
    if (items.length > this.max) this.removeFarthest(items, center);
  }

  spawn(center) {
    const heading = Math.random() * Math.PI * 2;
    const magnitude =
      Math.random() * (this.range - this.safeDistance) + this.safeDistance;
    const vec = Vector.fromAngle(heading, magnitude).add(center);
    this.spawnItem(vec.x, vec.y);
  }

  removeFarthest(items, center) {
    let farthest = items[0];
    items.forEach(item => {
      const d1 = Vector.sub(farthest.pos, center).magSq();
      const d2 = Vector.sub(item.pos, center).magSq();
      if (d2 > d1) farthest = item;
    });

    this.removeItem(farthest);
  }
}
