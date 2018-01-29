console.log("slt");

function compter(min, max, inter) {
    for (i = min; i <= max; i = i + inter) {
        console.log(i);
    }
    console.log("Je sais compter de " + inter + " en " + inter);
    console.log("à partir de " + min + " et jusqu\'à " + max + " !!!");
}

compter(1, 12, 3);
compter(1, 20, 5);
compter(501, 503, 1);