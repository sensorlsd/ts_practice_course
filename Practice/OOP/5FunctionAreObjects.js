// Constructor function
class SecondCircle {

    constructor(radius, x, y) {
        this.radius = radius;
        this.x = x;
        this.y = y;

        this.math = function () {
            console.log('test math')
        }
    }
}

const another = new SecondCircle(20,4,6);

const fs = require('fs')
let content
try {
    content = fs.readFileSync('sw_dj.json', 'utf-8')
} catch (ex) {
    console.log(ex)
}
// console.log(content)
console.log(content.length);

let limits = JSON.parse(content);

// console.log(limits.EUR);
//
// limits.EUR.stakeDef = 0.5;
//
// console.log(limits.EUR.stakeDef);

for (let i = 0; i < limits.EUR.lenght; i++) {
    console.log(limits)
}
