import Thing from './thing';
import Vector from './vector';
import circle from './circle';
import { isKeyDown } from './key';

const FORCE = 0.1;
const INITIAL_COLOR = '#fff';

export default class Player extends Thing {
  constructor(x, y) {
    super(x, y, 1);
    this.color = INITIAL_COLOR;

    this.target = 3;
    this.items = 0;

    this.scoreAngle = 0;
  }

  update(step) {
    if (isKeyDown('ArrowRight')) this.applyForce(new Vector(FORCE, 0));
    if (isKeyDown('ArrowLeft')) this.applyForce(new Vector(-FORCE, 0));
    if (isKeyDown('ArrowDown')) this.applyForce(new Vector(0, FORCE));
    if (isKeyDown('ArrowUp')) this.applyForce(new Vector(0, -FORCE));

    super.update(step);
    this.scoreAngle += step * this.vel.x / 100;
  }

  score() {
    this.items++;
    if (this.items >= this.target) {
      this.target++;
      this.reset();
    }
  }

  reset() {
    this.items = 0;
    this.mass = 1;
    this.color = INITIAL_COLOR;
  }

  onCollide(other) {
    if (other.constructor.name === 'Thing') {
      if (other.color === this.color) {
        this.addMass(other.mass);
        this.score();
      } else {
        this.reset();
        this.color = other.color;
        this.mass = 1 + other.mass;
        this.score();
      }
    }
  }

  draw(ctx) {
    super.draw(ctx);
    this.renderScore(ctx);
  }

  renderScore(ctx) {
    for (let i = 0; i < this.target; i++) {
      const theta = Math.PI * 2 / this.target * i + this.scoreAngle;
      const offset = this.radius() + 20;
      const pos = Vector.add(this.pos, Vector.fromAngle(theta, offset));

      circle(
        ctx,
        pos.x,
        pos.y,
        5,
        this.color,
        i >= this.items ? 0.3 : 1,
        i >= this.items
      );
    }
  }
}
