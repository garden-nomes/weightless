import Melody from './melody';
import Tone from './tone';

export default class Boop {
  constructor(context, scale) {
    this.melody = new Melody(scale);
    this.tone = new Tone(context);

    this.input = this.tone;
    this.output = this.tone;
  }

  trigger() {
    this.tone.play(this.melody.getNote());
  }

  connect(node) {
    if (node.input) {
      this.output.connect(node.input);
    } else {
      this.output.connect(node);
    }
  }
}
