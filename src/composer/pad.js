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

    this.envelope = new Envelope(context, 4, 60);
    this.envelope.connect(this.vca.amplitude);

    for (let i = 0; i < 3; i++) {
      const vco = new VCO(context, 'sine');
      vco.connect(this.vca);
      this.vcos.push(vco);
    }

    this.output = this.gain;
    this.setScale(scale);
  }

  setScale(scale) {
    this.scale = scale;
    this.vcos[0].setFrequency(scale.stepToFrequency(scale.steps[0]));
    this.vcos[1].setFrequency(scale.stepToFrequency(scale.steps[2]));
    this.envelope.trigger();
  }

  connect(node) {
    if (node.input) {
      this.output.connect(node.input);
    } else {
      this.output.connect(node);
    }
  }

  setAlternate(alt) {
    const freq0 = this.scale.stepToFrequency(this.scale.steps[alt ? 0 : 2]) / 2;
    if (this.vcos[0].osc.frequency.value !== freq0)
      this.vcos[0].setFrequency(freq0);

    const freq1 = this.scale.stepToFrequency(this.scale.steps[alt ? 4 : 5]) / 2;
    if (this.vcos[1].osc.frequency.value !== freq1)
      this.vcos[1].setFrequency(freq1);

    const freq2 = this.scale.stepToFrequency(this.scale.steps[alt ? 0 : 2]);
    if (this.vcos[2].osc.frequency.value !== freq2)
      this.vcos[2].setFrequency(freq2);
  }

  setFrequencies() {
    this.vcos[0].setFrequency(this.scale.stepToFrequency(this.scale.steps[0]));
    this.vcos[1].setFrequency(this.scale.stepToFrequency(this.scale.steps[2]));
  }
}
