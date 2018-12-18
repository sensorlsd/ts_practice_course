let limit = 100;
let position = "partizan";
let sex = "male";
let car = "family system";

let result = position + sex + car;
console.log(result.length);
let mathLimits = limit - result.length;

console.log("Your limit 100." + " " + "But you should add " + result.length + " symbols.");

function baz() {console.log("baz");}

function bar() {console.log("bar");}

function foo() {
    console.log("foo");
    setTimeout(bar, 0);
    new Promise((resolve, rejects) =>
        resolve("should be right after baz, before bar")
    ).then(resolve => console.log(resolve));
    baz()
}

foo();

