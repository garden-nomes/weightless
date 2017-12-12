const GRAVITATIONAL_CONSTANT = 100;
import Vector from './vector';
import { isKeyDown } from './key';

export default class Scene {
  constructor(width, height) {
    this.items = [];
    this.width = width;
    this.height = height;
  }

  add(item) {
    item.setParent(this);
    this.items.push(item);
  }

  update(step) {
    this.applyGravity();
    this.items.forEach(i => i.update(step));
    this.wrapItems();
    this.checkCollisions();
  }

  applyGravity() {
    for (let i = 0; i < this.items.length - 1; i++) {
      for (let j = i + 1; j < this.items.length; j++) {
        const a = this.items[i];
        const b = this.items[j];

        const d = Vector.sub(a.pos, b.pos);
        let f =
          GRAVITATIONAL_CONSTANT * a.mass * b.mass / Math.max(d.magSq(), 100);

        if (isKeyDown('Space')) f *= -1;
        a.applyForce(Vector.fromAngle(d.heading(), -f));
        b.applyForce(Vector.fromAngle(d.heading(), f));
      }
    }
  }

  removeChild(child) {
    const index = this.items.indexOf(child);
    if (index > -1) this.items.splice(index, 1);
  }

  checkCollisions() {
    for (let i = 0; i < this.items.length - 1; i++) {
      for (let j = i + 1; j < this.items.length; j++) {
        const a = this.items[i];
        const b = this.items[j];

        const d = Vector.sub(a.pos, b.pos).magSq();

        const sq = x => x * x;
        if (d < sq(a.radius() + b.radius())) {
          if (
            a.constructor.name === 'Thing' &&
            b.constructor.name === 'Player'
          ) {
            b.addMass(a.mass);
            this.removeChild(a);
          } else if (
            b.constructor.name === 'Thing' &&
            a.constructor.name === 'Player'
          ) {
            a.addMass(a.mass);
            this.removeChild(b);
          }
        }
      }
    }
  }

  wrapItems() {
    this.items.forEach(item => {
      const { x, y } = item.pos;
      if (x < 0) item.pos.x += this.width;
      if (y < 0) item.pos.y += this.height;
      if (x > this.width) item.pos.x -= this.width;
      if (y > this.height) item.pos.y -= this.height;
    });
  }

  draw(ctx) {
    this.items.forEach(i => i.draw(ctx));
  }
}
