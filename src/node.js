import getId from './get-id';

export default class Node {
  constructor() {
    this.__isNode = true;
    this.id = getId();
    this.parent = null;
  }

  setParent(parent) {
    this.parent = parent;
  }

  remove() {
    this.parent.removeChild(this);
  }

  update() {}

  draw() {}
}
