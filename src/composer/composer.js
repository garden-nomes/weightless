import Scale from './scale';
import Boop from './boop';
import Ding from './ding';
import Pad from './Pad';

export default class Composer {
  constructor() {
    this.context = new (window.AudioContext || window.webkitAudioContext)();

    this.scale = new Scale(Math.random() * 220 + 220, [0, 2, 4, 5, 7, 9, 11]);

    this.gain = this.context.createGain();
    this.gain.gain.value = 1;
    this.gain.connect(this.context.destination);

    this.boop = new Boop(this.context, this.scale);
    this.boop.connect(this.gain);

    this.ding = new Ding(this.context, this.scale);
    this.ding.connect(this.gain);

    this.pad = new Pad(this.context, this.scale);
    this.pad.connect(this.gain);
  }

  boopMe() {
    this.boop.trigger();
  }

  dingMe() {
    this.ding.trigger();
  }

  shift() {
    this.scale.shift();
    this.pad.setScale(this.scale);
  }

  mute() {
    this.gain.gain.value = 0;
  }

  unmute() {
    this.gain.gain.value = 1;
  }

  alternatePad(value) {
    this.pad.setAlternate(!value);
    // this.scale.setMajor(!value);
    // this.pad.setFrequencies();
  }
}
