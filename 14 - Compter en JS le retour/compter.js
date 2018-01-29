console.log("slt");

function compter(min, max, inter, mot) {
    for (i = min; i <= max; i = i + inter) {
        console.log(i);
    }
    console.log("Je sais compter de " + inter + " en " + inter);
    console.log("à partir de " + min + " et jusqu\'à " + max + " !!!");
    console.log("et je pense au mot : " + mot);
    
}

compter(1, 12, 3, "nictalope");
compter(1, 20, 5, "mayonnaise");
compter(501, 503, 1, "alambic");