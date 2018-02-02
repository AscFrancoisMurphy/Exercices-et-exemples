var joueur = document.getElementById("joueur");
var tailleJoueur = 20;




function bouger(unTruc, direction, distance) {

    var positionX;
    var positionY;

    function detecterLaPosition(unTruc, situation) {

        positionX = unTruc.offsetLeft;
        positionY = unTruc.offsetTop;

        console.log(situation,positionX, positionY);
    }

    detecterLaPosition("Avant déplacement", unTruc);

    switch (direction) {
        case "haut":
            unTruc.style.top = positionY - distance + "px";
            break;
        case "bas":
            unTruc.style.top = positionY + distance + "px";
            break;
        case "gauche":
            unTruc.style.left = positionX - distance + "px";
            break;
        case "droite":
            unTruc.style.left = positionX + distance + "px";
            break;
        default:
            break;
    }

    detecterLaPosition("Après déplacement", unTruc);


}


bouger(joueur, "gauche" , 50);