import Vector from './vector';
import Rect from './rect';

export default class Camera {
  constructor(width, height) {
    this.center = new Vector(0, 0);
    this.width = width;
    this.height = height;
    this.zoom = 1;
  }

  getScreenCoordinates(x, y) {
    return new Vector(x, y)
      .sub(this.center)
      .mult(this.zoom)
      .add(new Vector(this.width / 2, this.height / 2));
  }

  getBounds() {
    const tl = new Vector(-this.width / 2, -this.height / 2)
      .mult(1 / this.zoom)
      .add(this.center);

    return new Rect(
      tl.x,
      tl.y,
      tl.x + this.width / this.zoom,
      tl.y + this.height / this.zoom
    );
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

  getZoom() {
    return this.zoom;
  }

  setZoom(zoom) {
    this.zoom = zoom;
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
