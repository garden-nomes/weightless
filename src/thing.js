import Vector from './vector';
import Node from './node';
import Transition from './transition';
import { easeBackOut, easeCubicOut } from 'd3-ease';
import getColor from './colors';

export default class Thing extends Node {
  constructor(x, y, mass) {
    super();

    this.pos = new Vector(x, y);
    this.vel = new Vector(0, 0);
    this.forces = new Vector(0, 0);
    this.mass = mass;
    this.color = getColor();

    this.radius = 0;
    this.radiusTransition = new Transition({
      start: 0,
      end: this.calcRadius(),
      duration: 30,
      easing: easeCubicOut
    });
  }

  applyForce(force) {
    this.forces.add(force.mult(1 / this.mass));
  }

  update(step) {
    this.vel.add(Vector.mult(this.forces, step));
    this.pos.add(Vector.mult(this.vel, step));

    if (this.radiusTransition !== null) {
      this.radius = this.radiusTransition.step(step);
    }
  }

  calcRadius() {
    return Math.sqrt(this.mass * 600 / Math.PI);
  }

  addMass(amount) {
    this.setMass(this.mass + amount);
  }

  setMass(mass) {
    this.mass = mass;
    this.radiusTransition = new Transition({
      start: this.radius,
      end: this.calcRadius(),
      duration: 30,
      easing: easeBackOut.overshoot(2)
    });
  }

  onCollide(other) {
    if (other.constructor.name === 'Player') {
      this.remove();
    }
  }

  draw(renderer) {
    renderer.drawCircle(this.pos.x, this.pos.y, this.radius, {
      color: this.color
    });

    this.forces.x = 0;
    this.forces.y = 0;
  }
}
