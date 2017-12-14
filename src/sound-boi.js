class VCO {
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

class Envelope {
  constructor(context, attack = 0.1, release = 0.5) {
    this.context = context;
    this.attackTime = attack;
    this.releaseTime = release;
  }

  trigger() {
    const now = this.context.currentTime;
    const t1 = now + this.attackTime;
    const t2 = now + this.attackTime + this.releaseTime;

    this.param.cancelScheduledValues(now);
    this.param.setValueAtTime(0, now);
    this.param.linearRampToValueAtTime(1, t1);
    this.param.linearRampToValueAtTime(0, t2);
  }

  connect(param) {
    this.param = param;
  }
}

class VCA {
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

class Tone {
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

class Scale {
  constructor(base, steps) {
    this.base = base;
    this.steps = steps;
  }

  getStep(step) {
    return this.stepToFrequency(this.steps[step]);
  }

  stepToFrequency(step) {
    return this.base * (2 ** (1 / 12)) ** step;
  }

  getRandomFrequency() {
    const step = this.steps[~~(Math.random() * this.steps.length)];
    return this.stepToFrequency(step);
  }

  getChord() {
    return [
      this.steps[0],
      this.steps[2],
      this.steps[4],
      this.steps[6]
    ].map(step => this.stepToFrequency(step));
  }

  shift() {
    this.base = this.stepToFrequency(5);
    if (this.base > 440) this.base /= 2;
  }

  setMajor(isMajor) {
    if (isMajor) {
      this.steps = [0, 2, 4, 5, 7, 9, 11];
    } else {
      this.steps = [0, 2, 3, 5, 7, 8, 10];
    }
  }
}

class ProceduralMelody {
  constructor(scale) {
    this.scale = scale;
    this.scaleIndex = 0;
    this.record = [];
  }

  getNote() {
    const note = this.scale.stepToFrequency(this.scale.steps[this.scaleIndex]);
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

class Boop {
  constructor(context, scale) {
    this.melody = new ProceduralMelody(scale);
    console.log(this.melody);
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

class Pad {
  constructor(context, scale) {
    this.vcos = [];

    this.gain = context.createGain();
    this.gain.gain.value = 0.2;

    this.vca = new VCA(context);
    this.vca.connect(this.gain);

    this.envelope = new Envelope(context, 4, 60);
    this.envelope.connect(this.vca.amplitude);

    for (let i = 0; i < 2; i++) {
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
    const freq = this.scale.stepToFrequency(this.scale.steps[alt ? 3 : 5]) / 2;

    if (this.vcos[1].osc.frequency.value !== freq) {
      this.vcos[1].setFrequency(freq);
    }
  }

  setFrequencies() {
    this.vcos[0].setFrequency(this.scale.stepToFrequency(this.scale.steps[0]));
    this.vcos[1].setFrequency(this.scale.stepToFrequency(this.scale.steps[2]));
  }
}

class Ding {
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

export default class SoundBoi {
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
