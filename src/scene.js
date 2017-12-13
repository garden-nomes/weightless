export default class Scene {
  constructor(width, height) {
    this.items = [];
    this.width = width;
    this.height = height;
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

  draw(ctx) {
    this.items.forEach(i => i.draw(ctx));
  }
}
