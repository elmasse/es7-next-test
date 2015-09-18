

var TrianglePrototype = {a:1, b:2, c:3};

function ColoredTriangle() {
  this.color = "red";
}

ColoredTriangle.prototype = TrianglePrototype;


let triangle = new ColoredTriangle();

console.log('TRIANGLE');

console.log('for ...in');

for (const key in triangle) {
    console.log(`> ${key}`)
}

console.log('Object.keys(triangle).forEach');

Object.keys(triangle).forEach((key) => console.log(`> ${key}`));



class Style {
    property = 'in class'

    constructor (options = {}) {
        Object.assign(this, options)
    }
}

let obj   = {background: 'black'};
let style = new Style(obj);

console.log('STYLE');

console.log('for ...in');

for (const key in style) {
    console.log(`> ${key}`)
}

console.log('Object.keys(style).forEach');

Object.keys(style).forEach((key) => console.log(`> ${key}`));