//// déclatation des variables

var randomNumber;
var playerNumber;
var maxValue = 100;
var tries = 1;

//// Elements du DOM

var playerField = document.getElementsByName("champJoueur");
var textField1 = document.getElementById("retourTextuel1");
var textField2 = document.getElementById("retourTextuel2");
var submit = document.getElementById("submit");

// Création des fonctions

function setRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max) + 1);
};

function sendValue() {
    console.log(playerField.value);
    return playerField.value;

};

function initialise() {

    function setRandomNumber(max) {
        return Math.floor(Math.random() * Math.floor(max) + 1);
    };

    tries = 1;
    maxValue = 100;
    randomNumber = setRandomNumber(maxValue);
    console.log(randomNumber, maxValue);
};

function jouer() {
    initialise();
    test();

    function victoire() {
        textField1.innerHTML = "Gagné !!";
        textField2.innerHTML = "Gagné !!";

    }

    function test() {

        function askANumber() {
            textField1.innerHTML = "Quel est votre choix ?";
            //à faire : Demander la valeur
        }

        function compare(playerNumber, randomNumber) {
            if (playerNumber > randomNumber) {
                textField2.innerHTML = "Trop grand!";
            } else if (playerNumber < randomNumber) {
                textField2.innerHTML = "Trop petit!";
            } else {
                victoire;
            };
        }
    }

};


submit.addEventListener("click", sendValue);

console.log(tries);