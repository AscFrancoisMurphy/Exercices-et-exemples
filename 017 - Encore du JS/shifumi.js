var choixJoueur;
var tirage;
var random;
var resultat;
// var submit = document.getElementById("Submit");

function faireUnTirage() {
    rdm = Math.floor(Math.random() * 3);
    // console.log(rdm);
    switch (rdm) {
        case 0:
            tirage = "Pierre";
            break;
        case 1:
            tirage = "Papier";
            break;
        case 2:
            tirage = "Ciseau";
            break;
    }
    console.log("Le tirage : " + tirage);
}

function recupererChoix() {

    console.log("---------------------------------");


    var pierre = document.getElementById("Pierre");
    var feuille = document.getElementById("Feuille");
    var ciseau = document.getElementById("Ciseaux");

    if (pierre.checked) {
        choixJoueur = "Pierre"
    } else if (feuille.checked) {
        choixJoueur = "Feuille"
    } else if (ciseau.checked) {
        choixJoueur = "Ciseaux"
    }




    console.log("Le choix du joueur : " + choixJoueur);

    faireUnTirage();
    comparer();

}

function comparer() {

    switch (choixJoueur) {
        case "Pierre":
            if (tirage == "Feuille") {
                resultat = "Le joueur à Perdu!";
            } else if (tirage == "Pierre") {
                resultat = "Egalité"
            } else {
                resultat = "Le joueur à Gagné !";
            }
            break;
        case "Feuille":
            if (tirage == "Ciseaux") {
                resultat = "Le joueur à Perdu!";
            } else if (tirage == "Feuille") {
                resultat = "Egalité"
            } else {
                resultat = "Le joueur à Gagné !";
            }
            break;
        case "Ciseaux":
            if (tirage == "Pierre") {
                resultat = "Le joueur à Perdu!";
            } else if (tirage == "Ciseaux") {
                resultat = "Egalité"
            } else if (tirage == "Feuille") {
                resultat = "Le joueur à Gagné !";
            }
            break;
    }

    console.log(resultat);
}