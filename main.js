/* 
Palidroma 
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma*/

//RICHIESTA PAROLA A UTENTE
let parola1 = prompt("inserisci una parola")
// FUNZIONE CON VARIABILE PER CONVERTIRE STRINGA IN ARRAY, ROVESCIAROLO E CONVERTIRE ANCORA IN STRINGA
function Palindromo(parola1) {
    let rev = parola1.split("").reverse().join("");
    //CONFRONTA SE CORRISPONDONO, E IN CASO CONTRARIO RESTITUISCI FALSO
    if (rev == parola1) {
        return true
    } else {
        return false
    }
    
}
//OUTPUT
console.log(Palindromo(parola1));



/*Pari e Dispari 
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
Dichiariamo chi ha vinto.*/
 


