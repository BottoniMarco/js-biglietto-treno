// Il programma dovrà chiedere all’utente il
// numero di chilometri che vuole
// percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà
// calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai
// km (0.21 € al km), ma va applicato uno
// sconto del 20% per i minorenni e del
// 40% per gli over 65.



// numero di chilometri che vuole percorrere
var distanza = prompt("Quanti Km devi percorrere?");
console.log(parseInt( distanza));

// età del passeggero.
var eta = prompt("età");
console.log(parseInt(eta));

// prezzo scontato over 65
if ( eta > 65) {
  var prezzo = Math.floor( (distanza * 0.21) - ((distanza * 0.21) * 0.4 ));
  document.getElementById('prezzoBiglietto').innerHTML = prezzo + "€";
  console.log(parseInt(prezzo));
}

// prezzo scontato minorenni
else if (eta < 18) {
  var prezzo = Math.floor( (distanza * 0.21) - ((distanza * 0.21) * 0.2));
  document.getElementById('prezzoBiglietto').innerHTML = prezzo + "€";
  console.log(parseInt(prezzo));
}

// prezzo pieno
else {
  var prezzo = Math.floor( (distanza * 0.21));
  document.getElementById('prezzoBiglietto').innerHTML = prezzo + "€";
  console.log(parseInt(prezzo));
}

// distanza negativa
if (distanza < 0) {
  alert("La distanza non può essere negativa!")
  document.getElementById('prezzoBiglietto').innerHTML = "Inserisci distanza correttamente";
}

// stringa
if (isNaN(distanza)) {
  alert("La distanza deve essere un numero positivo!")
  document.getElementById('prezzoBiglietto').innerHTML = "Inserisci distanza correttamente";
}
