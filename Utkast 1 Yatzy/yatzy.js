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
    showDice();
  }
  else if (x.innerHTML === "Neste kast" && antallKast == 2) {
    antallKast = 0;
    nytt_kast_indexer();
    if (runde < 7) {
      console.log("Test runde 1-7: " + runde);
      totalScore += faseEn(mitt_kast, runde);
      console.log("Test totalScore: " + totalScore);
      if (runde == 6) {
        bonus();
      }
    }
    //console.log("Test 2 kasteKnapp()");
    x.innerHTML = "Start kast";
    score();
    moveToTable();
    showDice();
  }
  else if (x.innerHTML === "Start kast") {
    antallKast += 1;
    //console.log("Test 4 kasteKnapp()");
    x.innerHTML = "Neste kast";
    startKast();
    showDice();
  }
  else if (x.innerHTML === "Start spillet") {
    antallKast += 1;
    //console.log("Test 5 kasteKnapp()");
    x.innerHTML = "Neste kast";
    startKast();
    showDice();
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

// Sjekker score for alle rundet etter bonus
function score(){
  if (runde == 7) {
    ettPar();
  }
}

function ettPar(){
  var tall6 = 0;
  var tall5 = 0;
  var tall4 = 0;
  var tall3 = 0;
  var tall2 = 0;
  var tall1 = 0;
  for (var i = 0; i <= 4; i++) {
    for (var y = 0; y <= 6; y++) {
      if (mitt_kast[i] == y){
        // Sett inn +antall her
      }
    }
  }
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
  var bonuspoeng = 50;
  var ikkeBonus = 0;
  if (poeng >= 42) {
    console.log("Du har " + poeng + " og får " + bonuspoeng + "!");
    document.getElementById("1-faseEn").innerHTML = totalScore;
    document.getElementById("1-bonus").innerHTML = bonuspoeng;
    totalScore += bonuspoeng;
  }
  else {
    console.log("Du har " + poeng + " det er ikke nok til å få bonus.");
    document.getElementById("1-faseEn").innerHTML = totalScore;
    document.getElementById("1-bonus").innerHTML = ikkeBonus;
  }
}

function moveToTable(){
  let spiller1 = 1;
  let sendTilId = spiller1 + "-" + runde;
  console.log("Test moveToTable: " + sendTilId);
  document.getElementById(sendTilId).innerHTML = midlertidig_poeng;
}

function showDice(){
  console.log("Test showDice() function");
  for (var i = 0; i <= 4; i++) {
    var diceName = "img/dice" + mitt_kast[i] + ".png";
    var showDiceId = "dicePos" + i;
    console.log("Test showDice diceName " + diceName);
    console.log("Test showDiceId " + showDiceId);
    document.getElementById(showDiceId).src = diceName;
  }
}
