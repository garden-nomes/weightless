export default class Scene {
  constructor(camera) {
    this.items = [];
    this.camera = camera;
  }

  addChild(item, front = false) {
    item.setParent(this);
    if (front) {
      this.items.splice(0, 0, item);
    } else {
      this.items.push(item);
    }
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
