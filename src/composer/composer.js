import Scale from './scale';
import Boop from './boop';
import Ding from './ding';
import Pad from './Pad';

export default class Composer {
  constructor() {
    this.context = new (window.AudioContext || window.webkitAudioContext)();

    this.scale = new Scale(Math.random() * 220 + 220, [0, 2, 4, 5, 7, 9, 11]);

    this.boop = new Boop(this.context, this.scale);
    this.boop.connect(this.context.destination);

    this.ding = new Ding(this.context, this.scale);
    this.ding.connect(this.context.destination);

    this.pad = new Pad(this.context, this.scale);
    this.pad.connect(this.context.destination);
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

  alternatePad(value) {
    this.pad.setAlternate(!value);
    // this.scale.setMajor(!value);
    // this.pad.setFrequencies();
  }
}
