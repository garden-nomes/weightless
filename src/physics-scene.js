const GRAVITATIONAL_CONSTANT = 150;
import Vector from './vector';
import Scene from './scene';
import { isKeyDown } from './key';

export default class PhysicsScene extends Scene {
  update(step) {
    this.applyGravity();

    super.update(step);

    this.checkCollisions();
  }

  applyGravity() {
    for (let i = 0; i < this.items.length - 1; i++) {
      for (let j = i + 1; j < this.items.length; j++) {
        const a = this.items[i];
        const b = this.items[j];

        if (a.__hasGravity && b.__hasGravity) {
          const d = Vector.sub(a.pos, b.pos);
          let f =
            GRAVITATIONAL_CONSTANT * a.mass * b.mass / Math.max(d.magSq(), 225);

          if (isKeyDown('Space')) f *= -1;
          a.applyForce(Vector.fromAngle(d.heading(), -f));
          b.applyForce(Vector.fromAngle(d.heading(), f));
        }
      }
    }
  }

  checkCollisions() {
    for (let i = 0; i < this.items.length - 1; i++) {
      for (let j = i + 1; j < this.items.length; j++) {
        const a = this.items[i];
        const b = this.items[j];

        if (a.onCollide && b.onCollide) {
          const d = Vector.sub(a.pos, b.pos).magSq();
          const sq = x => x * x;
          if (d < sq(a.radius + b.radius)) {
            a.onCollide(b);
            b.onCollide(a);
          }
        }
      }
    }
  }
}
