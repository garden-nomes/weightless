export default class VCO {
  constructor(context, type = 'sine', gain = 1, detune = 0) {
    this.context = context;

    this.osc = context.createOscillator();
    this.osc.type = type;
    this.osc.detune.value = detune;
    this.setFrequency(440);
    this.osc.start(0);

    this.gain = context.createGain();
    this.gain.gain.value = gain;
    this.osc.connect(this.gain);

    this.input = this.osc;
    this.output = this.gain;
  }

  setType(type) {
    this.osc.type = type;
  }

  setFrequency(freq) {
    this.osc.frequency.setValueAtTime(freq, this.context.currentTime);
  }

  connect(node) {
    if (node.input) {
      this.output.connect(node.input);
    } else {
      this.output.connect(node);
    }
  }
}
