import Tone from './tone';

export default class Ding {
  constructor(context, scale) {
    this.scale = scale;

    this.tones = [];
    this.gain = context.createGain();

    this.scale.getChord().forEach(() => {
      const tone = new Tone(context);
      tone.connect(this.gain);
      this.tones.push(tone);
    });

    this.input = null;
    this.output = this.gain;
  }

  trigger() {
    this.scale.getChord().forEach((frequency, i) => {
      this.tones[i].play(frequency);
    });
  }

  connect(node) {
    if (node.input) {
      this.output.connect(node.input);
    } else {
      this.output.connect(node);
    }
  }
}
