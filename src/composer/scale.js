export default class Scale {
  constructor(base, steps) {
    this.base = base;
    this.steps = steps;
  }

  getStep(step) {
    return this.stepToFrequency(this.steps[step]);
  }

  stepToFrequency(step) {
    return this.base * Math.pow(Math.pow(2, 1 / 12), step);
  }

  getRandomFrequency() {
    const step = this.steps[~~(Math.random() * this.steps.length)];
    return this.stepToFrequency(step);
  }

  getChord() {
    return [
      this.steps[0],
      this.steps[2],
      this.steps[4],
      this.steps[6]
    ].map(step => this.stepToFrequency(step));
  }

  shift() {
    this.base = this.stepToFrequency(5);
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
