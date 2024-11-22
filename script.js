//inserisci immagini
function inserisciImmagine(immagine) {
    const cardImmagine = document.createElement("div");
    cardImmagine.className = "cardImmagine"
    cardImmagine.innerHTML = `<img src="${immagine}" class="img-fluid rounded" alt="Icona FIlm">`;
    return cardImmagine;
}

//riga imamgini
function immaginiRiga(miaRiga, inizio, fine) {
    const riga = document.getElementById(miaRiga);
    for (let i = inizio; i <= fine; i++) {
        const card = inserisciImmagine(`assets/img/${i}.png`);
        riga.appendChild(card)
    }
}

//bottone scorrere immagini
function bottoneFunzionante(cinema) {
   
    const slider = document.getElementById(cinema);
    const sezioneFilm = slider.closest(".rigaFilm");

    const bottoneIndietro = sezioneFilm.querySelector(".bottone2");
    const bottoneAvanti = sezioneFilm.querySelector(".bottone1");
     currentTranslate = 0;


    bottoneAvanti.addEventListener("click", () => {
        currentTranslate -= 1000;

        currentTranslate = Math.max(currentTranslate, -slider.scrollWidth + sezioneFilm.offsetWidth); // Limita il movimento verso destra per evitare di andare oltre i contenuti dello slider.
         //La funzione Math.max() è una funzione integrata di JavaScript che restituisce il valore massimo tra i numeri forniti come argomenti
        //Cosa succede quando usiamo Math.max?
        /* ESEMPIO: 
        La funzione Math.max(currentTranslate, -1800) confronta il valore corrente di currentTranslate con il limite -1800: 
        Se currentTranslate è più piccolo di -1800, la funzione Math.max() restituisce -1800 per impedire che lo slider vada oltre il limite.
        Se currentTranslate è maggiore di -1800, allora il valore di currentTranslate rimane invariato. */

        slider.style.transform = `translateX(${currentTranslate}px)`;
    })

    bottoneIndietro.addEventListener(`click`, () => {
        currentTranslate += 1000;
        currentTranslate = Math.min(currentTranslate, 0); 
        slider.style.transform = `translateX(${currentTranslate}px)`;
    })

}

//aggiungi le immagini alle righe
document.addEventListener("DOMContentLoaded", () => {
    immaginiRiga("TrendingNow", 1, 6);
    immaginiRiga("WatchItAgain", 7, 12);
    immaginiRiga("NewReleases", 13, 18);

    bottoneFunzionante("TrendingNow");
    bottoneFunzionante("WatchItAgain");
    bottoneFunzionante("NewReleases");

})





