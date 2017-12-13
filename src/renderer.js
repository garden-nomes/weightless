export default class Renderer {
  constructor(drawingContext, camera) {
    this.ctx = drawingContext;
    this.camera = camera;
  }

  withStyle(style, callback) {
    if (style.opacity !== undefined) {
      this.ctx.globalAlpha = style.opacity;
    }

    if (style.stroke) {
      if (style.color !== undefined) this.ctx.strokeStyle = style.color;
      if (style.strokeWidth !== undefined)
        this.ctx.lineWidth = style.strokeWidth;
    } else {
      if (style.color !== undefined) this.ctx.fillStyle = style.color;
    }

    callback();

    this.ctx.globalAlpha = 1;
    this.ctx.lineWidth = 1;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.camera.width, this.camera.height);
  }

  drawCircle(x, y, radius, style) {
    if (this.camera.isInBounds(x, y, radius)) {
      const coords = this.camera.getScreenCoordinates(x, y);

      this.withStyle(style, () => {
        this.ctx.beginPath();
        this.ctx.arc(coords.x, coords.y, radius, 0, 2 * Math.PI);

        if (style.stroke) {
          this.ctx.stroke();
        } else {
          this.ctx.fill();
        }
      });
    }
  }
}
