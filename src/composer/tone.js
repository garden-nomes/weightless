import VCO from './vco';
import Envelope from './envelope';
import VCA from './vca';

export default class Tone {
  constructor(context) {
    this.osc1 = new VCO(context, 'sine', 0.5);
    this.osc2 = new VCO(context, 'triangle', 0.2, 4);
    this.osc3 = new VCO(context, 'square', 0.5, -2);

    this.envelope = new Envelope(context, 0.1, 2.5);
    this.vca = new VCA(context);
    this.filter = context.createBiquadFilter();

    this.filter.type = 'lowpass';
    this.filter.frequency.value = 440;

    this.input = this.vco;
    this.output = this.filter;

    this.osc1.connect(this.vca);
    this.osc2.connect(this.vca);
    this.osc3.connect(this.vca);
    this.envelope.connect(this.vca.amplitude);
    this.vca.connect(this.filter);
  }

  play(frequency) {
    this.osc1.setFrequency(frequency);
    this.osc2.setFrequency(frequency);
    this.osc3.setFrequency(frequency);
    this.envelope.trigger();
  }

  connect(node) {
    if (node.input) {
      this.output.connect(node.input);
    } else {
      this.output.connect(node);
    }
  }
}
