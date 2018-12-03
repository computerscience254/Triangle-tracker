function tracker() {
    var sides = [];
    sides.push(document.getElementById("side1").value);
    sides.push(document.getElementById("side2").value);
    sides.push(document.getElementById("side3").value);
    var display = document.querySelector(#display);

    var [side1, side2, side3] = sides;
    if (side1.length === 0 || side2.length === 0 || side3.length === 0) {} else {
        userInput(side1, side2, side3);
    }



    function userInput(side1, side2, side3) {
        if (side1 === side2 && side2 === side3) {
            display.innerHTML = < p > Equilateral triangle. < /p>;
        } else if (side1 === side2 || side1 === side3 || side3 === side2) {
            display.innerHTML = < p > Isosceles triangle < /p>;
        } else if ((side1 !== side2 && side2 !== side3)) {
            display.innerHTML = < p > Scalene triangle. < /p>;
        } else if (side1 >= (side2 + side3) && side2 >= (side3 + side1) && side3 >= (side1 + side2)) {
            display.innerHTML = < p > NOT a triangle at all. < /p>;
        }
    }
}

function reset() {
    location.reload();
}