function handleClick() {
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
}

// document.querySelector("button").addEventListener("click", handleClick);

var buttons = document.querySelectorAll(".drum");

var amountOfButtons = buttons.length;

for (let i = 0; i < amountOfButtons; i++) {
    buttons[i].addEventListener("click", handleClick);
}