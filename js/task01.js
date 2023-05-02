class Circle {
  constructor({ x, y }, radius) {
    this.center = { x, y };
    this.radius = radius;
  }

  static getLength(radius) {
    return 2 * Math.PI * radius;
  }

  static getNewCircle(coordinates, radius) {
    return new Circle(coordinates, radius);
  }

  getCircleLength() {
    return Circle.getLength(this.radius);
  }

  getCircle() {
    return this;
  }

  isInCircle({ x, y }) {
    if (
      Math.abs(this.center.x - x) > this.radius ||
      Math.abs(this.center.y - y) > this.radius
    ) {
      return false;
    }
    return true;
  }
}
