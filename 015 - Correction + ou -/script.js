var reponseJoueur;
var chiffreAleat;



function tirage(valmax) {
    chiffreAleat = Math.floor(Math.random() * valmax + 1);
    console.log("chiffre tiré : " + chiffreAleat);
}

function demanderUnChiffre() {
    console.log("choisis un nombre ?");
    reponseJoueur = prompt("choisis un nombre ?");
    console.log("chiffre joueur : " + reponseJoueur);
    comparer(chiffreAleat,reponseJoueur);
}

function comparer(nombreAleatoire, nombreATester) {
    if (nombreAleatoire == nombreATester) {
        console.log("C'est gagné !");
    } else if (nombreAleatoire < nombreATester) {
        console.log("C'est trop haut !");
        demanderUnChiffre();
    } else if (nombreAleatoire > nombreATester) {
        console.log("C'est trop bas !");
        demanderUnChiffre();
    }
}

tirage(150);
demanderUnChiffre();