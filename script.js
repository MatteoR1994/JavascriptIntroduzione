// OPERAZIONI BASE DI JAVASCRIPT: 
//  + = addizione
//  - = sottrazione
//  * = moltiplicazione
//  / = divisione
//  % = resto della divisione
// ** = potenza

// Per altre cose, non di base di javascript, usare libreria Math
// Es: sqrt = radice quadrata

// NUMERI
// Numeri con la virgola vanno messi col .
// Posso usare anche la notazione scientifica. Es: 2.998e8 --> 2.998 x 10^8
// -Infinity / Infinity = -Infinito / (+)Infinito
// NaN = Not a Number

// STRINGHE
// Nessuna distinzione tra stringa, come insieme di caratteri, e carattere singolo. Tutto è stringa
// Modi per scrivere stringhe:
//  - "stringa"
//  - 'stringa'
//  ` = Backtrick (ALT+96). Usato per eseguire codice all'interno della stringa. Es: `half of 100 is ${100/2}`
// Modi per unire le stringhe:
//  - "pippo" + "mangia" + "una" + "mela". Se voglio gli spazi devo aggiungerli come stringhe singole = "pippo" + " " + "mangia" + " " + "una" + " " + "mela"
// Es: "pippo" * 6 = Nan
//     "3" * 6 = 18
// Perché javascript forza le conversioni.
// == -> Operatore uguaglianza 1. Es: "3" == 3 darà true, anche se non è vero. Perché forza le conversioni.
// === -> Operatore uguaglianza 2. Es: "3" === 3 darà false
// "Ciao a tutti"[2] = prendo l'elemento con indice 2 nella stringa (partendo da 0), quindi il terzo.

// typeof 5 = gli chiedo di che tipo è la cosa che gli passo. Es: typeof 5 = number / typeof "pippo" = string

// Per noi la conversione forzata (quindi ==), se non richiesta, non è gradita. Per le uguaglianze usare ===. Per il contrario usare !==.

// CONFRONTI
// 5 < 4 = false / 5 > 4 = true
// 5 <= 5 = true / 5 >= 6 = false
// 5 !== 5 = false

// OPERATORI LOGICI
// A noi servono:
//  - ! = not. Cambia il valore booleano nel suo opposto, si usa su un elemento solo (elemento unario). Es: !true = false / !false = true
//  - && = and. Operatore binario, su 2 elementi. Es: true && true = true / true && false = false / false && true = false / false && false = true. && è vero solo se entrambe le condizioni sono vere.
//  - || = or. Operatore binario, su 2 elementi. Es: true || true = true / true || false = true / false || true = true / false || false = false. || è vero se almeno una delle condizioni è vera.
// Sistema completo = se ha NOT - AND - OR.

// OPERATORE TERNARIO
// (5 > 7) ? 1 : 2 = Se (5 > 7) è vera, prendi 1. Se è falsa prendi 2.

// VALORE VUOTO = valore di una variabile quando non è stata riempita con niente
//  - null
//  - undefined
// Sono quasi identici. La convezione è: null = definita dai programmatori quando si vuole indicare qualcosa come vuoto / undefined = lasciamo che lo usi javascript, come valore restituito.
// Forzando la conversione, 8 * null darà 0. Perchè javascript un valore vuoto lo forza a 0.

// Nella conversione forzata, nel * vince quella a numero, nel + quella a stringa.

console.log( (5 < 7) ? 1 : 2 );
