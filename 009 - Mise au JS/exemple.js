var maVariable = "quelque chose";

// plusieurs types de variables : nombre, bool, string...

var a = 10;
var b = 10.3;
var c = "coucou";
var d = true;

// opérateur de déclaration : "="

console.log(typeof(a), typeof(b), typeof(c), typeof(d));

var e = 5;

console.log(a+e)
console.log("a"+e)
console.log("a"+"e")

//opérateurs arithmétiques = + - * / %

console.log(a%e)

// Opérateur relationnels < > <= >= == === !=

//if

// if (une_condition) {il se passe quelque chose} 

if (4==="4") {console.log("vrai")} else {console.log("faux")}
if (4=="4") {console.log("vrai")} else {console.log("faux")}

// boucles

function calcul(a,b) {
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
    console.log(a%b);
} ;

// for (var i=0; i<=5; i++) {
//     console.log(calcul(a,b*i))
// } ;

function table(a) {
    for (var i=0; i<=5; i++) {
        console.log(calcul(a,i));
    } ;
} ;


