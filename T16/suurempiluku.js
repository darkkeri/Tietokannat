const prompt = require('prompt-sync')();

var sluku = prompt("Syötä luku");
var luku = parseFloat(sluku);
var sluku2 = prompt("Syötä luku");
var luku2 = parseFloat(sluku2);

if (luku>luku2){
    console.log("Suurempi luku on "+ luku);
} else if (luku2>luku){
    console.log("Suurempi luku on "+ luku2);
} else {
    console.log("Luvut ovat yhtassuuret");
}