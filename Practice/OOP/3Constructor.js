// Constructor function #1
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(1);
console.log(circle);

// Constructor function #2
class SecondCircle {

    constructor(radius, x, y) {
        this.radius = radius;
        this.x = x;
        this.y = y;

        this.math = function () {
            console.log('test math')
        }
    }

    clickButton() {

    }
}