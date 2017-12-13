const COLORS = ['#ffff00', '#00ffff', '#ff00ff'];

export default function getColor() {
  return COLORS[~~(Math.random() * COLORS.length)];
}
