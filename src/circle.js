export default function circle(ctx, x, y, r, color, alpha = 1, stroke = false) {
  ctx.globalAlpha = alpha;

  if (stroke) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
  } else {
    ctx.fillStyle = color;
  }

  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);

  if (stroke) {
    ctx.stroke();
  } else {
    ctx.fill();
  }

  ctx.globalAlpha = 1;
}
