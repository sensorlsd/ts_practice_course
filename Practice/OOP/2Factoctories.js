// Factory object
function createCircle() {
    return {
        radius,
        localition: {
            x,
            y,
        },
        draw: function () {
            console.log('draw');
        }
    };
}


const cicrle = new createCircle(1);
console.log(cicrle.radius);