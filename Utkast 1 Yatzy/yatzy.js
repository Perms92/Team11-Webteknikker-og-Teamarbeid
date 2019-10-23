var mitt_kast = [];
var midlertidig_poeng = 0;
var antallKast = 0;
var runde = 0;

// En felles funksjon som endrer teksten på kasteknappen
function kasteKnapp() {
  console.log("Test mitt_kast " + mitt_kast);
  var x = document.getElementById("kasteKnapp");
  if (x.innerHTML === "Neste kast" && antallKast != 2) {
    antallKast += 1;
    console.log("Test 1 kasteKnapp()");
    nytt_kast_indexer();
  }
  else if (x.innerHTML === "Neste kast" && antallKast == 2) {
    antallKast = 0;
    console.log("Test 2 kasteKnapp()");
    x.innerHTML = "Start kast"
    nytt_kast_indexer();
    score();
  }
  else if (x.innerHTML === "Start kast") {
    antallKast += 1;
    console.log("Test 4 kasteKnapp()");
    x.innerHTML = "Neste kast";
    startKast();
  }
  else if (x.innerHTML === "Start spillet") {
    antallKast += 1;
    console.log("Test 5 kasteKnapp()");
    x.innerHTML = "Neste kast";
    startKast();
  }
}

// Oppretter første kast hver runde
function startKast(){
  console.log("Test antallKast startKast() " + antallKast);
  runde += 1;
  rundeForteller();
  // Lager 5 indekser/terninger
  for (i = 0; i <= 4; i++){
    // Setter random tall 1-6 på hver indeks/terning
    mitt_kast[i] = Math.floor((Math.random() * 6) + 1);
  }
  // Teller startkastet som kast nr. 1
  console.log("Test: antallKast startkast " + antallKast);
  // Returnerer arrayet med 5 terninger med random verdier
  document.getElementById("kast").innerHTML = mitt_kast;
}


// Bytter de terningene som ikke er huket i checkbox
function nyttKast(indekser){
  //console.log("Test: antallKast != 3");
  //console.log(indekser + " Test indeks nyttKast");
  for (i = 0; i <= 4; i++){
    if (indekser[i] == 0){
      //console.log("Test: indekser [0] " + indekser[i]);
      // console.log("Test bytte terning " + i);
      mitt_kast[i] = Math.floor((Math.random() * 6) + 1);
    }
  }
  console.log("Test:nyttKast1 antallKast " + antallKast);
  document.getElementById("kast").innerHTML = mitt_kast;
  console.log("Test: reset mitt_kast " + mitt_kast);
}


// Definerer hvilke indekser som skal kastes på nytt
function nytt_kast_indexer(){
  var nyeTerninger = [];
  for (var i = 0; i < 4; i++) {
    if (document.getElementById(i).checked) {
        nyeTerninger[i] = 1;
    }
    else {
      nyeTerninger[i] = 0;
    }
  }
  nyttKast(nyeTerninger);
}

// Funksjonsnavnet er selvforklarende
function rundeForteller(){
  console.log("Du er på runde " + (runde));
  if (runde < 7) {
    for (i = 0; i <= 5; i++) {
      console.log("Du vil nå ha " + runde + "-ere");
    }
  }
}

function score(){
  console.log("Test score()");
}

let spiller1 = document.getElementById("spiller1");

//må kobles sammen med en funksjon som heter kast, sjekk def kast i py
function førsteDel(kast, verdi) {
  poeng = 0;
  antall = sjekk(kast, verdi);
  poeng += verdi * antall;
  document.innerHTML ="Du fikk" + poeng + " poeng for å ha " + antall + "av " + verdi + " ";
}

function bonus(poeng) {
  bonuspoeng = 50;
  let ikkeBonus = 0;
  if poeng >=42 {
    "Du har " + poeng + " og får " + bonuspoeng + "!"
  }
  else {
    "Du har " + poeng + " det er ikke nok til å få bonus."
  };
}
