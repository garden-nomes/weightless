export default class Scale {
  constructor(base, steps) {
    this.base = base;
    this.steps = steps;
  }

  getStep(step) {
    return this.intervalToFrequency(this.steps[step]);
  }

  intervalToFrequency(interval) {
    return this.base * Math.pow(Math.pow(2, 1 / 12), interval);
  }

  stepToFrequency(step) {
    while (step < 0) step += this.steps.length;
    step %= this.steps.length;

    return this.intervalToFrequency(this.steps[step]);
  }

  getRandomFrequency() {
    const step = this.steps[~~(Math.random() * this.steps.length)];
    return this.intervalToFrequency(step);
  }

  getChord() {
    return [
      this.steps[0],
      this.steps[2],
      this.steps[4],
      this.steps[6]
    ].map(step => this.intervalToFrequency(step));
  }

  shift() {
    this.base = this.intervalToFrequency(5);
    if (this.base > 440) this.base /= 2;
  }

  setMajor(isMajor) {
    if (isMajor) {
      this.steps = [0, 2, 4, 5, 7, 9, 11];
    } else {
      this.steps = [0, 2, 3, 5, 7, 8, 10];
    }
  }
}
