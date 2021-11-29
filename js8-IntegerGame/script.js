let number = document.getElementById("number");
let randomNumber = Math.round(Math.random() * 10);
let count = 5;



function Game() {
    if (randomNumber == number.value) {
        alert("You Won! Congratulations!");
    } else if (randomNumber > number.value) {
        alert("Enter A Big Number!");
    } else {
        alert("Enter A Small Number");
    }
}



Game();
console.log(randomNumber);