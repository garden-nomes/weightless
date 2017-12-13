import Vector from './vector';
import Rect from './rect';

export default class Camera {
  constructor(width, height) {
    this.center = new Vector(0, 0);
    this.width = width;
    this.height = height;
  }

  getScreenCoordinates(x, y) {
    return new Vector(x, y)
      .sub(this.center)
      .add(new Vector(this.width / 2, this.height / 2));
  }

  getBounds() {
    const tl = new Vector(-this.width / 2, -this.height / 2).add(this.center);
    return new Rect(tl.x, tl.y, tl.x + this.width, tl.y + this.height);
  }

  getRandomInBounds() {
    const bounds = this.getBounds();

    return new Vector(
      Math.random() * bounds.width() + bounds.x1,
      Math.random() * bounds.height() + bounds.y1
    );
  }

  setCenter(x, y) {
    this.center = new Vector(x, y);
  }

  isInBounds(x, y, margin = 0) {
    const bounds = this.getBounds();

    return (
      x + margin > bounds.x1 &&
      x - margin < bounds.x2 &&
      y + margin > bounds.y1 &&
      y - margin < bounds.y2
    );
  }
}
