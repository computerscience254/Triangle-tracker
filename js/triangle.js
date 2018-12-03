function tracker() {

    var side1 = parseInt(document.getElementById('idside1').value);
    var side2 = parseInt(document.getElementById('idside2').value);
    var side3 = parseInt(document.getElementById('idside3').value);
    var display = document.querySelector("#display");

    var sides = [];
    sides.push(side1, side2, side3);

    if (side1 <= (side2 + side3) && side2 <= (side3 + side1) && side3 <= (side1 + side2)) {
        if (side1 === side2 && side2 === side3) {
            document.getElementById("display").innerHTML = "Equilateral triangle";
        } else if (side1 === side2 || side1 === side3 || side3 === side2) {
            document.getElementById("display").innerHTML = "Isosceles triangle";
        } else if ((side1 !== side2 && side2 !== side3)) {
            document.getElementById("display").innerHTML = "Scalene triangle";
        }
    } else {
        document.getElementById("display").innerHTML = "NOT a triangle at all";
    }

}

function reset() {
    location.reload();
}