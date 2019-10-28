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
    //console.log("Test 2 kasteKnapp()");
    x.innerHTML = "Start kast";
    showDice();
    score();
    moveToTable();
    if (runde == 15) {
      alert("Spillet er ferdig! Din score ble " + totalScore +
      ". Bra jobba!")
    }
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

  document.getElementById(0).checked = false;
  document.getElementById(1).checked = false;
  document.getElementById(2).checked = false;
  document.getElementById(3).checked = false;
  document.getElementById(4).checked = false;

  /*var checks = document.querySelectorAll('#' + checkboxer + 'input[type="checkbox"]');
    for(var i =0; i< checks.length;i++){
        var check = checks[i];
        if(!check.disabled){
            check.checked = false;
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
  if (runde <= 6) {
    document.getElementById("rundeForteller").innerHTML = "Du vil nå ha " + runde + "-ere";
  }
  else if (runde == 7) {
    document.getElementById("rundeForteller").innerHTML = "Du vil nå ha ett par";
  }
  else if (runde == 8) {
    document.getElementById("rundeForteller").innerHTML = "Du vil nå ha to par";
  }
  else if (runde == 9) {
    document.getElementById("rundeForteller").innerHTML = "Du vil nå ha tre like";
  }
  else if (runde == 10) {
    document.getElementById("rundeForteller").innerHTML = "Du vil nå ha fire like";
  }
  else if (runde == 11) {
    document.getElementById("rundeForteller").innerHTML = "Du vil nå ha Liten Straight";
  }
  else if (runde == 12) {
    document.getElementById("rundeForteller").innerHTML = "Du vil nå ha Stor Straight";
  }
  else if (runde == 13) {
    document.getElementById("rundeForteller").innerHTML = "Du vil nå ha Fullt Hus";
  }
  else if (runde == 14) {
    document.getElementById("rundeForteller").innerHTML = "Sjanse!";
  }
  else if (runde == 15) {
    document.getElementById("rundeForteller").innerHTML = "Du vil nå ha fem like - Yatzy!";
  }
}

// Sjekker score for alle rundet etter bonus
function score(){
  if (runde < 7) {
    console.log("Test runde 1-7: " + runde);
    totalScore += faseEn(mitt_kast, runde);
    console.log("Test totalScore: " + totalScore);
    if (runde == 6) {
      bonus();
    }
  }
  else if (runde == 7) {
    midlertidig_poeng = 0;
    midlertidig_poeng = like(mitt_kast, 2);
    totalScore += midlertidig_poeng;
    console.log("test score() runde 7 " + totalScore);
    console.log("test score() midlertidig_poeng " + midlertidig_poeng);
  }
  else if (runde == 8) {
    midlertidig_poeng = 0;
    midlertidig_poeng = toPar(mitt_kast);
    totalScore += midlertidig_poeng;
    console.log("test score() runde 8 " + totalScore);
    console.log("test score() midlertidig_poeng " + midlertidig_poeng);
  }
  else if (runde == 9) {
    midlertidig_poeng = 0;
    midlertidig_poeng = treLike();
    totalScore += midlertidig_poeng;
    console.log("test score() runde 9 " + totalScore);
    console.log("test score() midlertidig_poeng " + midlertidig_poeng);
  }
  else if (runde == 10) {
    midlertidig_poeng = 0;
    midlertidig_poeng = fireLike();
    totalScore += midlertidig_poeng;
    console.log("test score() runde 10 " + totalScore);
    console.log("test score() midlertidig_poeng " + midlertidig_poeng);
  }
  else if (runde == (11 || 12)) {
    midlertidig_poeng = 0;
    midlertidig_poeng = straight();
    totalScore += midlertidig_poeng;
    console.log("test score() runde: " + runde + " score: " + totalScore);
    console.log("test score() midlertidig_poeng " + midlertidig_poeng);
  }
  else if (runde == 13) {
    midlertidig_poeng = 0;
    midlertidig_poeng = hus();
    totalScore += midlertidig_poeng;
    console.log("test score() runde 13 " + totalScore);
    console.log("test score() midlertidig_poeng " + midlertidig_poeng);
  }
  else if (runde == 14) {
    midlertidig_poeng = sjanse();
    totalScore += midlertidig_poeng;
    console.log("test score() runde 14 " + totalScore);
    console.log("test score() midlertidig_poeng " + midlertidig_poeng);
  }
  else if (runde == 15) {
    midlertidig_poeng = yatzy();
    totalScore += midlertidig_poeng;
    console.log("test score() runde 14 " + totalScore);
    console.log("test score() midlertidig_poeng " + midlertidig_poeng);
  }
}


function like(mitt_kast, antall){
  var verdi = 0;
  if (sjekk(mitt_kast, 6) >= antall) {
    verdi = antall * 6;
    return verdi;
  }
  else if (sjekk(mitt_kast, 5) >= antall) {
    verdi = antall * 5;
    return verdi;
  }
  else if (sjekk(mitt_kast, 4) >= antall) {
    verdi = antall * 4;
    return verdi;
  }
  else if (sjekk(mitt_kast, 3) >= antall) {
    verdi = antall * 3;
    return verdi;
  }
  else if (sjekk(mitt_kast, 2) >= antall) {
    verdi = antall * 2;
    console.log("Test like2 " + verdi);
    return verdi;
  }
  else if (sjekk(mitt_kast, 1) >= antall) {
    verdi = antall * 1;
    return verdi;
  }
  return 0;
}


// Hva gjør denne?
let spiller1 = document.getElementById("spiller1");

// Sjekker hvor mange av tall x er i kastet
function sjekk(hand, tall){
  var antall = 0;
  for (var i = 0; i < hand.length; i++) {
    //console.log("Test for-løkke sjekk() " + i);
    if (hand[i] == tall) {
      //console.log("Test sjekk(), i: " + i + ", tall: " + tall);
      antall += 1;
      //console.log("Test sjekk() antall: "+ antall);
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

function treLike(){
  let treLikeSum = 0;
  mitt_kast.sort();
  console.log("Test trelike Sort() " + mitt_kast);
  if (mitt_kast[0] == mitt_kast[2]) {
    treLikeSum = mitt_kast[0] + mitt_kast[1] + mitt_kast[2];
    return treLikeSum;
  }
  else if (mitt_kast[1] == mitt_kast[3]) {
    treLikeSum = mitt_kast[1] + mitt_kast[2] + mitt_kast[3];
    return treLikeSum;
  }
  else if (mitt_kast[2] == mitt_kast[4]) {
    treLikeSum = mitt_kast[2] + mitt_kast[3] + mitt_kast[4];
    return treLikeSum;
  }
  else {
    return 0;
  }
}

function fireLike(){
  let firelikeSum = 0;
  mitt_kast.sort();
  console.log("Test fireLike sort() " + mitt_kast);
  if (mitt_kast[0] == mitt_kast[3]) {
    // Kunne laget for-løkke, men det blir flere linjer
    firelikeSum = mitt_kast[0] + mitt_kast[1] + mitt_kast[2] + mitt_kast[3];
    return firelikeSum;
  }
  else if (mitt_kast[1] == mitt_kast[4]) {
    firelikeSum = mitt_kast[1] + mitt_kast[2] + mitt_kast[3] + mitt_kast[4];
    return firelikeSum;
  }
  else {
    return 0;
  }
}

function straight(){
  mitt_kast.sort();
  console.log("Test straight sort() " + mitt_kast);
  if ((mitt_kast[0] == 1 && mitt_kast[4] == 5) || (mitt_kast[0] == 2 && mitt_kast[4] == 6)) {
    console.log("Test straight 1-5/2-6");
    for (var i = 0; i < 4; i++) {
      console.log("Test straight [i]: " + i);
      if ((mitt_kast[i+1] - mitt_kast[i]) == 1) {
        console.log("Test straight: Ja");
      }
      else {
        console.log("Test straight: Nei");
        return 0;
      }
    }
    if (mitt_kast[0] == 1) {
      console.log("Test litenStraight return 15");
      return 15;
    }
    else if (mitt_kast[4] == 6) {
      console.log("Test storStraight return 20");
      return 20;
    }
  }
  return 0;
}

function hus(){
  mitt_kast.sort();
  if ((mitt_kast[0] == mitt_kast[1]) && (mitt_kast[2] == mitt_kast[4]) && (mitt_kast[1] != mitt_kast[2])) {
    return mitt_kast.reduce((a, b) => a + b, 0);
  }
  else if ((mitt_kast[0] == mitt_kast[2]) && (mitt_kast[3] == mitt_kast[4]) && (mitt_kast[2] != mitt_kast[3])) {
    return mitt_kast.reduce((a, b) => a + b, 0);
  }
  else {
    return 0;
  }
}

function sjanse(){
  return mitt_kast.reduce((a, b) => a + b, 0);
}

function yatzy(){
  mitt_kast.sort();
  if (mitt_kast[0] == mitt_kast[4]) {
    console.log("DU HAR YAAAAAATZYYYY!!");
    return 50;
  }
  return 0;
}

function moveToTable(){
  let spiller1 = 1;
  let sendTilId = spiller1 + "-" + runde;
  console.log("Test moveToTable: " + sendTilId);
  console.log("Test moveToTable midlertidig_poeng: " + midlertidig_poeng);
  document.getElementById(sendTilId).innerHTML = midlertidig_poeng;
}

function showDice(){
  //console.log("Test showDice() function");
  for (var i = 0; i <= 4; i++) {
    var diceName = "img/dice" + mitt_kast[i] + ".png";
    var showDiceId = "dicePos" + i;
    //console.log("Test showDice diceName " + diceName);
    //console.log("Test showDiceId " + showDiceId);
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
