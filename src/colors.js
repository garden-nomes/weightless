const COLORS = ['#00ff00', '#0000ff', '#ff0000'];

export default function getColor() {
  return COLORS[~~(Math.random() * COLORS.length)];
}
