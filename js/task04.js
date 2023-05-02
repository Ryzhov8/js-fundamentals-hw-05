class Marker {
  constructor(color, percent) {
    this.color = color;
    this.percent = percent;
  }

  print(string) {
    const letters = string.split("");
    const text = [];
    for (const letter of letters) {
      if (this.percent === 0) {
        break;
      }

      text.push(letter);

      if (letter !== " ") {
        this.percent -= 0.5;
      }
    }

    console.log(`%c${text.join("")}`, `color: ${this.color}`);
  }
}

const marker = new Marker("green", 4);

marker.print("hello World");

class SuperMarker extends Marker {
  refill() {
    this.percent = 100;
  }
}

const newMarker = new SuperMarker("red", 5);
newMarker.print("JS is awesome!!!");
newMarker.refill();
newMarker.print("JS is awesome!!!");
