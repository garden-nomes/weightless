import Thing from './thing';

export default class Particle extends Thing {
  constructor(x, y) {
    super(x, y, 0.02);
    this.color = '#aaa';
  }

  onCollide() {}
}
