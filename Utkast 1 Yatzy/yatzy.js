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
    showDice();
    score();
    moveToTable();
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
  document.getElementById("dicePos0").style.marginBottom = "0%";
  document.getElementById("dicePos1").style.marginBottom = "0%";
  document.getElementById("dicePos2").style.marginBottom = "0%";
  document.getElementById("dicePos3").style.marginBottom = "0%";
  document.getElementById("dicePos4").style.marginBottom = "0%";
  /*var checks = document.querySelectorAll('#' + checkboxer + 'input[type="checkbox"]');
    for(var i =0; i< checks.length;i++){
        var check = checks[i];
        if(!check.disabled){
            check.checked = false;
        }
    }*/
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
    midlertidig_poeng = like(mitt_kast, 2);
    totalScore += midlertidig_poeng;
    console.log("test score() runde 7" + totalScore);
    console.log("test score() midlertidig_poeng " + midlertidig_poeng);
  }
  if (runde == 8) {
    midlertidig_poeng = toPar(mitt_kast);
    totalScore += midlertidig_poeng;
    console.log("test score() runde 8 " + totalScore);
    console.log("test score() midlertidig_poeng " + midlertidig_poeng);
  }
}

function toPar(mitt_kast){
  let tall6 = 0;
  let tall5 = 0;
  let tall4 = 0;
  let tall3 = 0;
  let tall2 = 0;
  let tall1 = 0;

  let antallToPar = 0;
  let totalScoreToPar = 0;

  // Grunnen til at denne inne ble forenklet i en for-løkke
  // er fordi vi ikke kan .pop() ut verdiene vi bruker
  // Disse verdiene må hentes for terningbildene
  for (var i = 0; i < 5; i++) {
    if (mitt_kast[i] == 6) {
      tall6 += 1;
      if (tall6 == 2) {
        totalScoreToPar += (tall6 * 6);
        antallToPar += 1;
      }
    }
    if (mitt_kast[i] == 5) {
      tall5 += 1;
      if (tall5 == 2) {
        totalScoreToPar += (tall5 * 5);
        antallToPar += 1;
      }
    }
    if (mitt_kast[i] == 4) {
      tall4 += 1;
      if (tall4 == 2) {
        totalScoreToPar += (tall4 * 4);
        antallToPar += 1;
      }
    }
    if (mitt_kast[i] == 3) {
      tall3 += 1;
      if (tall3 == 2) {
        totalScoreToPar += (tall3 * 3);
        antallToPar += 1;
      }
    }
    if (mitt_kast[i] == 2) {
      tall2 += 1;
      if (tall2 == 2) {
        totalScoreToPar += (tall2 * 2);
        antallToPar += 1;
      }
    }
    if (mitt_kast[i] == 1) {
      tall1 += 1;
      if (tall1 == 2) {
        totalScoreToPar += tall1;
        antallToPar += 1;
      }
    }
  }
  if (antallToPar == 2) {
    console.log("Test toPar score: " + totalScoreToPar);
    return totalScoreToPar;
  }
  else {
    console.log("Test toPar score 0: " + totalScoreToPar);
    return 0;
  }
}

function like(mitt_kast, antall){
  var verdi = 0;
  if (sjekk(mitt_kast, 6) >= antall) {
    verdi = antall * 6;
    return verdi;
  }
  if (sjekk(mitt_kast, 5) >= antall) {
    verdi = antall * 5;
    return verdi;
  }
  if (sjekk(mitt_kast, 4) >= antall) {
    verdi = antall * 4;
    return verdi;
  }
  if (sjekk(mitt_kast, 3) >= antall) {
    verdi = antall * 3;
    return verdi;
  }
  if (sjekk(mitt_kast, 2) >= antall) {
    verdi = antall * 2;
    console.log("Test like2 " + verdi);
    return verdi;
  }
  if (sjekk(mitt_kast, 1) >= antall) {
    verdi = antall * 1;
    return verdi;
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

function bonus() {
  var bonuspoeng = 50;
  var ikkeBonus = 0;
  if (totalScore >= 42) {
    console.log("Du har " + totalScore + " og får " + bonuspoeng + "!");
    document.getElementById("1-faseEn").innerHTML = totalScore;
    document.getElementById("1-bonus").innerHTML = bonuspoeng;
    totalScore += bonuspoeng;
  }
  else {
    console.log("Du har " + totalScore + " det er ikke nok til å få bonus.");
    document.getElementById("1-faseEn").innerHTML = totalScore;
    document.getElementById("1-bonus").innerHTML = ikkeBonus;
  }
}

function moveToTable(){
  let spiller1 = 1;
  let sendTilId = spiller1 + "-" + runde;
  console.log("Test moveToTable: " + sendTilId);
  console.log("Test moveToTable midlertidig_poeng: " + midlertidig_poeng);
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

function moveDice0() {
  if(document.getElementById("dicePos0").style.marginBottom == "-850%") {
    document.getElementById("dicePos0").style.marginBottom = "0%";
  }
  else {
    document.getElementById("dicePos0").style.marginBottom = "-850%";
  }
}

function moveDice1() {
  if(document.getElementById("dicePos1").style.marginBottom == "-850%") {
    document.getElementById("dicePos1").style.marginBottom = "0%";
  }
  else {
    document.getElementById("dicePos1").style.marginBottom = "-850%";
  }
}

function moveDice2() {
  if(document.getElementById("dicePos2").style.marginBottom == "-850%") {
    document.getElementById("dicePos2").style.marginBottom = "0%";
  }
  else {
    document.getElementById("dicePos2").style.marginBottom = "-850%";
  }
}

function moveDice3() {
  if(document.getElementById("dicePos3").style.marginBottom == "-850%") {
    document.getElementById("dicePos3").style.marginBottom = "0%";
  }
  else {
    document.getElementById("dicePos3").style.marginBottom = "-850%";
  }
}

function moveDice4() {
  if(document.getElementById("dicePos4").style.marginBottom == "-850%") {
    document.getElementById("dicePos4").style.marginBottom = "0%";
  }
  else {
    document.getElementById("dicePos4").style.marginBottom = "-850%";
  }
}
