var SomeClass = function () {
    var privateProperty = 'data';
    this.someMethod = function () {
        return privateProperty;
    };
};
var data = [];
for (var i = 0; i < 10000; i++) {
    data.push(new SomeClass());
}

let arr = [1,2,3,4,1231,2,3,12,3,1,23];

for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    // arr.push(25)
    // console.log(arr[i]);

}
console.log(arr.reverse(arr));
// console.log(arr.forEach(arr));
console.log(arr.sort());

function compareNumbers(a, b) {
    return a - b;
}

console.log(arr.sort(function (a, b ) {
    return a - b;
}));


