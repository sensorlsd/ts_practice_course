class Class {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let man = new Class("Dmitry", 30);
console.log(typeof man);

let validator = (age) => {return age - 2018};
console.log(validator(man.age));