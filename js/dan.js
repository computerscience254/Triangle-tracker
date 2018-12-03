function tracker() {


    var side1 = parseInt(document.getElementById('idside1').value);
    var side2 = parseInt(document.getElementById('idside2').value);
    var side3 = parseInt(document.getElementById('idside3').value);
    var display = document.querySelector("#display");

    sides.push(side1, side2, side3);

    var sides = [];
    var side1 = sides[0]
    var side2 = sides[1]
    var side3 = sides[2]

    if (side1 <= (side2 + side3) && side2 <= (side3 + side1) && side3 <= (side1 + side2)) {
        if (side1 === side2 && side2 === side3) {
            display.innerHTML = "Equilateral triangle";
        } else if (side1 === side2 || side1 === side3 || side3 === side2) {
            display.innerHTML = "Isosceles triangle";
        } else if ((side1 !== side2 && side2 !== side3)) {
            display.innerHTML = "Scalene triangle";
        }
    } else {
        display.innerHTML = "NOT a triangle at all";
    }

}