//// déclatation des variables

var randomNumber;
var playerNumber;
var maxValue = 100;
var tries = 1;
var response = false;

// Création des fonctions

//Cette fonction génére un chiffre aléatoire
//max : valeur max que peux prendre le chiffre aléatoire

function setRandomNumber(max) {
    return Math.floor(Math.random()*Math.floor(max)+1);
};

//// Initialiser la partie

// Définir la valeur max

maxValue = Math.floor(prompt("Entrer la valeur max", 100));

// Tirer un nombre

randomNumber = setRandomNumber(maxValue);

//// Lancer la partie

console.log(randomNumber, maxValue);

for( tries; tries<50; tries++ ) {

    playerNumber = Math.floor(prompt("Faites votre proposition !", 100));

    if(playerNumber>randomNumber) {
        alert("trop grand!");
    } else if(playerNumber<randomNumber) {
        alert("trop petit!");
    } else {
        alert("Gagné !!");
        break;
    };
    console.log(tries);    
}










