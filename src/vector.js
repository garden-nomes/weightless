export default class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static fromAngle(heading, magnitude) {
    return new Vector(
      Math.cos(heading) * magnitude,
      Math.sin(heading) * magnitude
    );
  }

  static add(lhs, rhs) {
    return lhs.clone().add(rhs);
  }

  static sub(lhs, rhs) {
    return lhs.clone().sub(rhs);
  }

  static mult(lhs, rhs) {
    return lhs.clone().mult(rhs);
  }

  clone() {
    return new Vector(this.x, this.y);
  }

  add(other) {
    this.x += other.x;
    this.y += other.y;
    return this;
  }

  sub(other) {
    this.x -= other.x;
    this.y -= other.y;
    return this;
  }

  mult(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }

  magSq() {
    const sq = x => x * x;
    return sq(this.x) + sq(this.y);
  }

  heading() {
    return Math.atan2(this.y, this.x);
  }

  limit(mag) {
    if (this.magSq() > mag * mag) {
      const h = this.heading();
      this.x = Math.cos(h) * mag;
      this.y = Math.sin(h) * mag;
    }
    return this;
  }
}
