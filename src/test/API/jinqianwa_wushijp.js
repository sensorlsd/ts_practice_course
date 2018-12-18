let mathPart = (num, cons, value) => {
    console.log(num);
    console.log(cons);
    console.log(value);
}

mathPart(20,15,16);

let generator = _=> {return 25 - 15  * ( 25 / 14 - ( 2 - 1))};

console.log(Math.ceil(generator()));



