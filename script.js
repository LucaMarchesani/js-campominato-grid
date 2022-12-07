// Consegna:
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.

const inputButton = document.getElementById('btn');
const divGridElement = document.querySelector('div.grid');

divGridElement.classList.remove('active');

inputButton.addEventListener('click', function(){
    divGridElement.classList.add('active');
})

for (let i = 1; i <= 100; i++) {

    const newSquare = document.createElement('div');

    newSquare.classList.add('square');
    newSquare.innerText = i;

    divGridElement.appendChild(newSquare);
    newSquare.addEventListener('click', function(){
        newSquare.classList.toggle('clicked');
    })
}








