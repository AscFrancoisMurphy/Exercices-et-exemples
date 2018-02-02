var random;
var resultat;
var submit = document.getElementById("Submit");

function faireUnTirage() {
    rdm = Math.floor(Math.random() * 3);
    // console.log(rdm);
    switch (rdm) {
        case 0:
            return "Pierre";
            break;
        case 1:
            return "Feuille";
            break;
        case 2:
            return "Ciseaux";
            break;
    }

}

function recupererChoix() {

    var pierre = document.getElementById("Pierre");
    var feuille = document.getElementById("Feuille");
    var ciseau = document.getElementById("Ciseaux");

    if (pierre.checked) {
        return "Pierre"
    } else if (feuille.checked) {
        return "Feuille"
    } else if (ciseau.checked) {
        return "Ciseaux"
    }
}

function comparer(choixJoueur, tirage) {

    // if (choixJoueur == "Pierre") {
    //     if (tirage == "Feuille") {
    //         return "Le joueur à Perdu!";
    //     } else if (tirage == "Pierre") {
    //         return "Egalité"
    //     } else {
    //         return "Le joueur à Gagné !";
    //     }
    // } else if (choixJoueur == "Feuille") {
    //     if (tirage == "Ciseaux") {
    //         return "Le joueur à Perdu!";
    //     } else if (tirage == "Feuille") {
    //         return "Egalité"
    //     } else {
    //         return "Le joueur à Gagné !";
    //     }
    // } else if (choixJoueur == "Ciseaux") {
    //     if (tirage == "Pierre") {
    //         return "Le joueur à Perdu!";
    //     } else if (tirage == "Ciseaux") {
    //         return "Egalité"
    //     } else if (tirage == "Feuille") {
    //         return "Le joueur à Gagné !";
    //     }
    // }

    if (choixJoueur == tirage) {
        return "Egalité"
    } else if ((choixJoueur == "Pierre" && tirage == "Feuille") ||
        (choixJoueur == "Feuille" && tirage == "Ciseaux") ||
        (choixJoueur == "Ciseaux" && tirage == "Pierre")) {
        return "Le Joueur à perdu !!!"
    } else {
        return "Le Joueur à gagné !!!"
    }
}




function jeu() {
    var choixJoueur;
    var tirage;
    var resultat;

    choixJoueur = recupererChoix();
    tirage = faireUnTirage();
    resultat = comparer(choixJoueur, tirage);


    console.log("---------------------------------");
    console.log("Le tirage : " + tirage);
    console.log("Le choix du joueur : " + choixJoueur);
    console.log(resultat);

}

submit.addEventListener("click", jeu);