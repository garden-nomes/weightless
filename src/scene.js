export default class Scene {
  constructor(camera) {
    this.items = [];
    this.camera = camera;
  }

  addChild(item) {
    item.setParent(this);
    this.items.push(item);
  }

  removeChild(child) {
    const index = this.items.indexOf(child);
    if (index > -1) this.items.splice(index, 1);
  }

  update(step) {
    this.items.forEach(i => i.update(step));
  }

  draw(renderer) {
    this.items.forEach(i => i.draw(renderer));
  }
}
