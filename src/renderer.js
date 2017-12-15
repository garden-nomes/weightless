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
        this.ctx.arc(
          coords.x,
          coords.y,
          radius * this.camera.getZoom(),
          0,
          2 * Math.PI
        );

        if (style.stroke) {
          this.ctx.stroke();
        } else {
          this.ctx.fill();
        }
      });
    }
  }

  drawTilingBackground() {
    const bounds = this.camera.getBounds();

    this.withStyle(
      {
        stroke: true,
        strokeWidth: 2,
        color: '#373737'
      },
      () => {
        const radius = 200;

        const xOffset = this.camera.center.x % radius;
        const yOffset = this.camera.center.y % radius;

        let xStart = bounds.x1 - radius - xOffset;
        let yStart = bounds.y1 - radius - yOffset;

        this.ctx.beginPath();
        for (let x = xStart; x < bounds.x2 + radius; x += radius * 1) {
          for (let y = yStart; y < bounds.y2 + radius; y += radius * 1) {
            const coords = this.camera.getScreenCoordinates(x, y);
            this.ctx.moveTo(coords.x + radius * this.camera.zoom - 1, coords.y);

            this.ctx.arc(
              coords.x,
              coords.y,
              radius * this.camera.zoom - 1,
              0,
              2 * Math.PI
            );
          }
        }
        this.ctx.stroke();
      }
    );
  }
}
