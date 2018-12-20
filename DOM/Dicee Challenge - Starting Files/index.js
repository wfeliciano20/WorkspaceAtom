var randomNumber1, randomNumber2, imgLeft, imgRight;

var img1 = document.getElementById("img1");

var img2 = document.getElementById("img2");

randomNumber1 = 1 + Math.floor(6 * Math.random());

randomNumber2 = 1 + Math.floor(6 * Math.random());

imgLeft = "images/dice" + randomNumber1 + ".png";

imgRight = "images/dice" + randomNumber2 + ".png";

img1.addEventListener("click", clicked);

img2.addEventListener("click", clicked);

function clicked() {

    img1.setAttribute("src", imgLeft);

    img2.setAttribute("src", imgRight);

    if (randomNumber1 < randomNumber2) {

        document.querySelector("h1").innerHTML = "Player 2 Wins";

    } else if (randomNumber1 > randomNumber2) {

        document.querySelector("h1").innerHTML = "Player 1 Wins";

    } else {

        document.querySelector("h1").innerHTML = "It's a DRAW";

    }

}