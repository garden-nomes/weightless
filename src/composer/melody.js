export default class Melody {
  constructor(scale) {
    this.scale = scale;
    this.scaleIndex = 0;
    this.record = [];
  }

  getNote() {
    const note = this.scale.stepToFrequency(this.scaleIndex);
    this.scaleIndex += ~~(Math.random() * 7 - 3);

    if (this.scaleIndex < 0) this.scaleIndex += this.scale.steps.length;
    if (this.scaleIndex >= this.scale.steps.length)
      this.scaleIndex -= this.scale.steps.length;

    this.record.push(note);
    return note;
  }

  getRecord() {
    const r = this.record;
    this.record = [];
    return r;
  }
}
