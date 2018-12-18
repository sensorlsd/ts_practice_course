Math.seed = function(s) {
    return function() {
        s = Math.sin(s) * 10000;
        return s - Math.floor(s);
        console.log(s)
    };
};

// usage:
var random1 = Math.seed(42);
var random2 = Math.seed(random1());
Math.random = Math.seed(random2());



console.log(random1);