var randomNumber1, randomNumber2, imgLeft, imgRight;

var images

var img1 = document.querySelectorAll("img")[0];

var img2 = document.querySelectorAll("img")[1];

var button = document.querySelector("button");

randomNumber1 = 1 + Math.floor(6 * Math.random());

randomNumber2 = 1 + Math.floor(6 * Math.random());

imgLeft = "images/dice" + randomNumber1 + ".png";

imgRight = "images/dice" + randomNumber2 + ".png";

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

button.addEventListener("click", clicked);