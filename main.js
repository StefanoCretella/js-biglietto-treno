// Nome e cognome del passeggero
let currentText = document.getElementById('name').innerHTML;
console.log(currentText);

const name = prompt('Inserisca il suo nome e cognome');

currentText = `${currentText} ${name}`;
console.log(currentText);

document.getElementById('name').innerHTML = currentText;

// Il programma chiede quanti chilometri dovrà percorrere il passeggero
let currentText2 = document.getElementById('chilometri').innerHTML;
console.log(currentText2);

const chilometri = parseFloat(prompt("Quanti chilometri devi percorrere?"));

currentText2 = `${currentText2} ${chilometri}`;
console.log(currentText2);

document.getElementById('chilometri').innerHTML = currentText2

// Il programma chiede l'età al passeggero
let età = parseInt(prompt("Inserisca la sua età"));

// Prezzo del biglietto per Km (0,21€)
const prezzoBase = chilometri * 0.21;

// Il programma applica uno sconto in base all'età del passeggero
let prezzoFinale;
if (età < 18) {
    prezzoFinale = prezzoBase * 0.8; // Sconto del 20% per i minorenni
} else if (età >= 65) {
    prezzoFinale = prezzoBase * 0.6; // Sconto del 40% per gli over 65
} else {
    prezzoFinale = prezzoBase; // Nessuno sconto
}

// Formatta il prezzo finale con massimo due decimali
prezzoFinale = prezzoFinale.toFixed(2);

// Il programma stampa il prezzo finale
console.log("Il prezzo del biglietto è: " + prezzoFinale + "€");
