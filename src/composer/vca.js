export default class VCA {
  constructor(context) {
    this.gain = context.createGain();
    this.gain.gain.value = 0;

    this.input = this.gain;
    this.output = this.gain;

    this.amplitude = this.gain.gain;
  }

  connect(node) {
    if (node.input) {
      this.output.connect(node.input);
    } else {
      this.output.connect(node);
    }
  }
}
