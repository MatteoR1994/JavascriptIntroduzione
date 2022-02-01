const text = "L'Ateniese Milziade, figlio di Cimone, spiccava fra tutti sia per l'antichità della stirpe, sia per la gloria degli antenati, sia per la propria saggezza ed aveva un'età tale che i suoi concittadini potevano non più solo concepire buone speranze su di lui, ma anche confidare che sarebbe stato quale ebbero poi modo, alla prova, di riscontrare, quando gli Ateniesi decisero di inviare dei coloni nel Chersoneso. Ce n'era un grande numero e molti chiedevano di partecipare alla spedizione, tra loro ne furono scelti alcuni e inviati a Delfi per consultare l'oracolo di Apollo su chi dovessero preferire come comandante. Quelle regioni infatti le occupavano allora i Traci e con loro bisognava combattere. La Pizia in risposta a chi la interrogava, ordinò espressamente che si prendessero come capo Milziade: se lo avessero fatto, l'impresa avrebbe avuto buon esito. In seguito al responso dell'oracolo, Milziade con truppe scelte parti con la flotta per il Chersoneso e, approdato a Lemno voleva ridurre gli abitanti dell'isola sotto il dominio degli Ateniesi e chiese ai Lemnii di arrendersi spontaneamente; quelli, schernendolo, risposero che lo avrebbero fatto quando lui, salpato con la flotta da casa sua, avesse raggiunto Lemno con il vento di tramontana. Questo vento infatti sorgendo da settentrione tiene la direzione contraria per chi parte da Atene. Milziade, non avendo tempo di trattenersi, indirizzò la rotta verso la sua meta e arrivò nel Chersoneso."

let text2 = "L'Ateniese Milziade, figlio di Cimone, spiccava fra tutti sia per l'antichità della stirpe, sia per la gloria degli antenati, sia per la propria saggezza ed aveva un'età tale che i suoi concittadini potevano non più solo concepire buone speranze su di lui, ma anche confidare che sarebbe stato quale ebbero poi modo, alla prova, di riscontrare, quando gli Ateniesi decisero di inviare dei coloni nel Chersoneso. Ce n'era un grande numero e molti chiedevano di partecipare alla spedizione, tra loro ne furono scelti alcuni e inviati a Delfi per consultare l'oracolo di Apollo su chi dovessero preferire come comandante. Quelle regioni infatti le occupavano allora i Traci e con loro bisognava combattere. La Pizia in risposta a chi la interrogava, ordinò espressamente che si prendessero come capo Milziade: se lo avessero fatto, l'impresa avrebbe avuto buon esito. In seguito al responso dell'oracolo, Milziade con truppe scelte parti con la flotta per il Chersoneso e, approdato a Lemno voleva ridurre gli abitanti dell'isola sotto il dominio degli Ateniesi e chiese ai Lemnii di arrendersi spontaneamente; quelli, schernendolo, risposero che lo avrebbero fatto quando lui, salpato con la flotta da casa sua, avesse raggiunto Lemno con il vento di tramontana. Questo vento infatti sorgendo da settentrione tiene la direzione contraria per chi parte da Atene. Milziade, non avendo tempo di trattenersi, indirizzò la rotta verso la sua meta e arrivò nel Chersoneso."

let par = document.getElementById('replace-me');
let node = document.createTextNode(text2);
par.appendChild(node);

// quante parole è composto, caratteri, quante volte è ripetuta una parola e quante volte un carattere
// funzione, quante volte la parola si ripete nel testo + indice;
// prompt attivato da tasto che attiva la funzione di ricerca

let chars = {"'": ' ', '.':'',',':'', ';':'', ':':''};
let s = text.replace(/[',.;:]/g, m => chars[m]).toLowerCase();

// console.log(s);

let textSplittato = s.split(" ");

console.log(textSplittato);
console.log(textSplittato);

function contaParole(array) {
    return array.length;
}

console.log(contaParole(textSplittato));

function contaChr(text) {
    return [...text].length;
}

console.log(contaChr(text));

function conta(text, array) {

    let numeroArray = array.length;
    let numeroChar = text.length
    return "Il testo contiene " +  numeroArray + " parole e " + numeroChar + " caratteri";
}

console.log(conta(text, textSplittato));

function contaUnaParola(array, parola) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === parola.toLowerCase()) {
            counter++
        }
        
    }

    return counter;
}

//console.log(contaUnaParola(textSplittato, "milziade"));

// function contaUnaParolaKEYVALUE(array) {
//     const occurrencyCount = {};

//     for (const word of array) {
//         if (occurrencyCount[word]) {
//             occurrencyCount[word]++
//         }else{
//             occurrencyCount[word] = 1
//         }
//     }
// }


function contaUnaChar(text, char) {
    let tempArray = [...text.toLowerCase()]
    let counter = 0;
    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i] === char.toLowerCase()) {
            counter++
        }
        
    }

    return counter;
}

console.log(contaUnaChar(text, ","));



console.log(contaUnaParolaEIndice(textSplittato, "ateniese"));

function promptMe(){
    let userAdjective = prompt("Cerca Una parola");
    alert (contaUnaParolaEIndice(textSplittato, userAdjective));
}

function contaUnaParolaEIndice(array, parola) {
    let counter = 0;
    let indexArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === parola.toLowerCase()) {
            indexArray.push(i)
            counter++
        }
        
    }

    return "La parola si ripete " + counter + " volte e si trova nelle posizioni " + indexArray.join(", ")
}

let newText = document.getElementById('replace-me').innerHTML;

console.log(newText);