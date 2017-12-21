export default class Envelope {
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
