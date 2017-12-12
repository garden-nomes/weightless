import Vector from './vector';
import circle from './circle';

export default class Thing {
  constructor(x, y, mass) {
    this.pos = new Vector(x, y);
    this.vel = new Vector(0, 0);
    this.forces = new Vector(0, 0);
    this.mass = mass;
  }

  applyForce(force) {
    this.forces.add(force);
  }

  update(step) {
    this.vel.add(Vector.mult(this.forces, step));
    this.pos.add(Vector.mult(this.vel, step));
  }

  radius() {
    return this.mass * 30;
  }

  draw(ctx) {
    circle(ctx, this.pos.x, this.pos.y, this.radius(), '#fff');

    ctx.strokeStyle = '#0f0';
    ctx.beginPath();
    ctx.moveTo(this.pos.x, this.pos.y);
    ctx.lineTo(this.pos.x + this.vel.x * 10, this.pos.y + this.vel.y * 10);
    ctx.stroke();

    ctx.strokeStyle = '#f00';
    ctx.beginPath();
    ctx.moveTo(this.pos.x, this.pos.y);
    ctx.lineTo(
      this.pos.x + this.forces.x * 100,
      this.pos.y + this.forces.y * 100
    );
    ctx.stroke();

    this.forces.x = 0;
    this.forces.y = 0;
  }
}
