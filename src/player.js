import Thing from './thing';
import Vector from './vector';
import { isKeyDown } from './key';

const FORCE = 0.1;

export default class Player extends Thing {
  constructor(x, y) {
    super(x, y, 1);
  }

  update(step) {
    if (isKeyDown('ArrowRight')) this.applyForce(new Vector(FORCE, 0));
    if (isKeyDown('ArrowLeft')) this.applyForce(new Vector(-FORCE, 0));
    if (isKeyDown('ArrowDown')) this.applyForce(new Vector(0, FORCE));
    if (isKeyDown('ArrowUp')) this.applyForce(new Vector(0, -FORCE));

    super.update(step);
  }

  onCollide(other) {
    if (other.constructor.name === 'Thing') {
      this.addMass(other.mass);
    }
  }
}
