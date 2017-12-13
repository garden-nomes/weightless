export const easings = {
  // props to gre (https://gist.github.com/gre/1650294) for this list
  linear: t => t,
  easeInQuad: t => t * t,
  easeOutQuad: t => t * (2 - t),
  easeInOutQuad: t => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  easeInCubic: t => t * t * t,
  easeOutCubic: t => --t * t * t + 1,
  easeInOutCubic: t =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  easeInQuart: t => t * t * t * t,
  easeOutQuart: t => 1 - --t * t * t * t,
  easeInOutQuart: t => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t),
  easeInQuint: t => t * t * t * t * t,
  easeOutQuint: t => 1 + --t * t * t * t * t,
  easeInOutQuint: t =>
    t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
};

export default class Transition {
  constructor(config) {
    const defaultConfig = {
      start: 0,
      end: 0,
      duration: 60,
      easing: easings.linear
    };

    config = {
      ...defaultConfig,
      ...config
    };

    this.start = config.start;
    this.end = config.end;
    this.duration = config.duration;
    this.easing = config.easing;
    this.timer = 0;
  }

  step(step) {
    const t = this.timer / this.duration;
    if (t < 1) {
      this.timer += step;
      return this.easing(t) * (this.end - this.start) + this.start;
    } else {
      return this.end;
    }
  }
}
