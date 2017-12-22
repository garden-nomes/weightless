import VCA from './vca';
import Envelope from './envelope';
import VCO from './vco';

export default class Pad {
  constructor(context, scale) {
    this.vcos = [];

    this.gain = context.createGain();
    this.gain.gain.value = 0.6;

    this.vca = new VCA(context);
    this.vca.connect(this.gain);

    this.envelope = new Envelope(context, 3, 60);
    this.envelope.connect(this.vca.amplitude);

    this.output = this.gain;

    this.isMajor = true;
    this.setScale(scale);
    const chord = this.getChord();

    for (let i = 0; i < chord.length; i++) {
      const vco = new VCO(context, 'sine', i > 0 ? 0.2 : 1);
      vco.connect(this.vca);
      vco.setFrequency(chord[i]);
      this.vcos.push(vco);
    }

    this.envelope.trigger();
  }

  setScale(scale) {
    this.scale = scale;
    this.setFrequencies();
    this.envelope.trigger();
  }

  getChord() {
    return [
      this.isMajor
        ? this.scale.stepToFrequency(0) / 2
        : this.scale.stepToFrequency(6) / 4,
      this.isMajor
        ? this.scale.stepToFrequency(0)
        : this.scale.stepToFrequency(6) / 2,
      this.scale.stepToFrequency(this.isMajor ? 2 : 0),
      this.scale.stepToFrequency(this.isMajor ? 4 : 2),
      this.scale.stepToFrequency(this.isMajor ? 7 : 5)
    ];
  }

  setFrequencies() {
    const chord = this.getChord();
    this.vcos.forEach((vco, i) => {
      vco.setFrequency(chord[i]);
    });
  }

  connect(node) {
    if (node.input) {
      this.output.connect(node.input);
    } else {
      this.output.connect(node);
    }
  }

  setAlternate(alt) {
    if (this.isMajor !== alt) {
      this.isMajor = !this.isMajor;
      this.setFrequencies();
    }
  }
}
