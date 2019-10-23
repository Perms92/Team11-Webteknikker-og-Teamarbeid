var mitt_kast = [];
var midlertidig_poeng = 0;
var antallKast = 0;
var runde = 0;
var totalScore = 0;

// En felles funksjon som endrer teksten på kasteknappen,
// teller runder, og kjører spillet
function kasteKnapp() {
  //console.log("Test mitt_kast " + mitt_kast);
  var x = document.getElementById("kasteKnapp");
  if (x.innerHTML === "Neste kast" && antallKast != 2) {
    antallKast += 1;
    //console.log("Test 1 kasteKnapp()");
    nytt_kast_indexer();
  }
  else if (x.innerHTML === "Neste kast" && antallKast == 2) {
    antallKast = 0;
    nytt_kast_indexer();
    if (runde < 7) {
      console.log("Test runde 1-7: " + runde);
      totalScore += faseEn(mitt_kast, runde);
      console.log("Test totalScore: " + totalScore);
    }
    //console.log("Test 2 kasteKnapp()");
    x.innerHTML = "Start kast";
    score();
  }
  else if (x.innerHTML === "Start kast") {
    antallKast += 1;
    //console.log("Test 4 kasteKnapp()");
    x.innerHTML = "Neste kast";
    startKast();
  }
  else if (x.innerHTML === "Start spillet") {
    antallKast += 1;
    //console.log("Test 5 kasteKnapp()");
    x.innerHTML = "Neste kast";
    startKast();
  }
}

// Oppretter første kast hver runde
function startKast(){
  //console.log("Test antallKast startKast() " + antallKast);
  runde += 1;
  rundeForteller();
  // Lager 5 indekser/terninger
  for (i = 0; i <= 4; i++){
    // Setter random tall 1-6 på hver indeks/terning
    mitt_kast[i] = Math.floor((Math.random() * 6) + 1);
  }
  // Teller startkastet som kast nr. 1
  //console.log("Test: antallKast startkast " + antallKast);
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
  //console.log("Test:nyttKast1 antallKast " + antallKast);
  document.getElementById("kast").innerHTML = mitt_kast;
  //console.log("Test: reset mitt_kast " + mitt_kast);
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
  //console.log("Test score()");
}

// Hva gjør denne?
let spiller1 = document.getElementById("spiller1");

// Sjekker hvor mange av tall x er i kastet
function sjekk(hand, tall){
  var antall = 0;
  for (var i = 0; i < hand.length; i++) {
    console.log("Test for-løkke sjekk() " + i);
    if (hand[i] == tall) {
      console.log("Test sjekk(), i: " + i + ", tall: " + tall);
      antall += 1;
      console.log("Test sjekk() antall: "+ antall);
    }
  }
  return antall;
}

// Må kobles sammen med en funksjon som heter kast, sjekk def kast i py
function faseEn(kast, verdi) {
  midlertidig_poeng = 0;
  var antall = sjekk(kast, verdi);
  midlertidig_poeng += verdi * antall;
  console.log("Du fikk " + midlertidig_poeng + " poeng for å ha " + antall + " av " + verdi);
  return midlertidig_poeng;
}

function bonus(poeng) {
  bonuspoeng = 50;
  let ikkeBonus = 0;
  if (poeng >= 42) {
    "Du har " + poeng + " og får " + bonuspoeng + "!"
  }
  else {
    "Du har " + poeng + " det er ikke nok til å få bonus."
  };
}
function spillernavn() {
  text = String(prompt("Skriv inn ditt spillernavn her!"));
  document.getElementById("spiller1").innerHTML += text + "";
  text1 = String(prompt("Skriv inn ditt spillernavn her!"));
  document.getElementById("spiller2").innerHTML += text1 + "";
document.getElementById('navneknapp').style.display="none";
}
