var mitt_kast = [];
var midlertidig_poeng = 0;
var antallKast = 0;
var runde = 0;
var totalScore1 = 0;
var totalScore2 = 0;
var totalScore3 = 0;
var totalScore4 = 0;
var antallSpillere = 1;
var spiller1 = "";
var spiller2 = "";
var spiller3 = "";
var spiller4 = "";
var hvemSinTur = 1;

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
  } else if (x.innerHTML === "Neste kast" && antallKast == 2) {
    antallKast = 0;
    nytt_kast_indexer();
    //console.log("Test 2 kasteKnapp()");
    x.innerHTML = "Start kast";
    showDice();
    score();
    moveToTable();
    fakeYatzy();

    if (hvemSinTur != antallSpillere) {
      hvemSinTur += 1;
      if (hvemSinTur == 2) {
        rundeForteller(spiller2);
      } else if (hvemSinTur == 3) {
        rundeForteller(spiller3);
      } else if (hvemSinTur == 4) {
        rundeForteller(spiller4);
      }
    } else if (hvemSinTur == antallSpillere) {
      runde += 1;
      hvemSinTur = 1;
      rundeForteller(spiller1);
    }

    if (runde == 16) {
      x.innerHTML = "Nytt spill";
    }
  } else if (x.innerHTML === "Start kast") {
    antallKast += 1;
    //console.log("Test 4 kasteKnapp()");
    x.innerHTML = "Neste kast";
    startKast();
    showDice();
  } else if (x.innerHTML === "Start runde 1" || x.innerHTML === "Nytt spill") {
    if (x.innerHTML === "Nytt spill") {
      finalScore();
      resetSpill();
    }
    spiller1 = document.getElementById("spiller1").innerHTML;
    spiller2 = document.getElementById("spiller2").innerHTML;
    spiller3 = document.getElementById("spiller3").innerHTML;
    spiller4 = document.getElementById("spiller4").innerHTML;
    if (spiller4 != "") {
      antallSpillere = 4;
    } else if (spiller3 != "") {
      antallSpillere = 3;
    } else if (spiller2 != "") {
      antallSpillere = 2;
    }
    antallKast += 1;
    //console.log("Test 5 kasteKnapp()");
    x.innerHTML = "Neste kast";
    startKast();
    showDice();
  }
}

// Oppretter første kast hver runde
function startKast() {
  //console.log("Test antallKast startKast() " + antallKast);
  if (hvemSinTur == 1 && runde == 0) {
    runde += 1;
    rundeForteller(spiller1);
  }
  // Lager 5 indekser/terninger
  for (i = 0; i <= 4; i++) {
    // Setter random tall 1-6 på hver indeks/terning
    mitt_kast[i] = Math.floor(Math.random() * 6 + 1);
  }
  // Teller startkastet som kast nr. 1
  //console.log("Test: antallKast startkast " + antallKast);
  // Returnerer arrayet med 5 terninger med random verdier
  document.getElementById("kast").innerHTML = mitt_kast;
  document.getElementById("dicePos0").style.transition = "all 0.3s";
  document.getElementById("dicePos0").style.marginBottom = "0%";
  document.getElementById("dicePos1").style.transition = "all 0.3s";
  document.getElementById("dicePos1").style.marginBottom = "0%";
  document.getElementById("dicePos2").style.transition = "all 0.3s";
  document.getElementById("dicePos2").style.marginBottom = "0%";
  document.getElementById("dicePos3").style.transition = "all 0.3s";
  document.getElementById("dicePos3").style.marginBottom = "0%";
  document.getElementById("dicePos4").style.transition = "all 0.3s";
  document.getElementById("dicePos4").style.marginBottom = "0%";
  document.getElementById("rundeForteller").style.border = "solid";
  document.getElementById("rundeForteller").style.borderColor = "black";
  document.getElementById("rundeForteller").style.borderWidth = "5px";

  document.getElementById(0).checked = false;
  document.getElementById(1).checked = false;
  document.getElementById(2).checked = false;
  document.getElementById(3).checked = false;
  document.getElementById(4).checked = false;
}

// Bytter de terningene som ikke er huket i checkbox
function nyttKast(indekser) {
  //console.log("Test: antallKast != 3");
  //console.log(indekser + " Test indeks nyttKast");
  for (i = 0; i <= 4; i++) {
    if (indekser[i] == 0) {
      //console.log("Test: indekser [0] " + indekser[i]);
      // console.log("Test bytte terning " + i);
      mitt_kast[i] = Math.floor(Math.random() * 6 + 1);
    }
  }
  //console.log("Test:nyttKast1 antallKast " + antallKast);
  document.getElementById("kast").innerHTML = mitt_kast;
  //console.log("Test: reset mitt_kast " + mitt_kast);
}

// Definerer hvilke indekser som skal kastes på nytt
function nytt_kast_indexer() {
  var nyeTerninger = [];
  for (var i = 0; i <= 4; i++) {
    if (document.getElementById(i).checked) {
      nyeTerninger[i] = 1;
    } else {
      nyeTerninger[i] = 0;
    }
  }
  nyttKast(nyeTerninger);
}

// Funksjonsnavnet er selvforklarende
function rundeForteller(spiller) {
  if (runde <= 6) {
    document.getElementById("rundeForteller").innerHTML =
      spiller + " sin tur." + "<br />" + " Du vil nå ha " + runde + "-ere";
  } else if (runde == 7) {
    document.getElementById("rundeForteller").innerHTML =
      spiller + " sin tur." + "<br />" + " Du vil nå ha ett par";
  } else if (runde == 8) {
    document.getElementById("rundeForteller").innerHTML =
      spiller + " sin tur." + "<br />" + " Du vil nå ha to par";
  } else if (runde == 9) {
    document.getElementById("rundeForteller").innerHTML =
      spiller + " sin tur." + "<br />" + " Du vil nå ha tre like";
  } else if (runde == 10) {
    document.getElementById("rundeForteller").innerHTML =
      spiller + " sin tur." + "<br />" + " Du vil nå ha fire like";
  } else if (runde == 11) {
    document.getElementById("rundeForteller").innerHTML =
      spiller + " sin tur." + "<br />" + " Du vil nå ha liten straight";
  } else if (runde == 12) {
    document.getElementById("rundeForteller").innerHTML =
      spiller + " sin tur." + "<br />" + " Du vil nå ha stor straight";
  } else if (runde == 13) {
    document.getElementById("rundeForteller").innerHTML =
      spiller + " sin tur." + "<br />" + " Du vil nå ha fullt hus";
  } else if (runde == 14) {
    document.getElementById("rundeForteller").innerHTML =
      spiller + " sin tur." + "<br />" + " Sjanse!";
  } else if (runde == 15) {
    document.getElementById("rundeForteller").innerHTML =
      spiller + " sin tur." + "<br />" + " Du vil nå ha fem like - Yatzy!";
  }
}

// Sjekker score for alle rundet etter bonus
function score() {
  console.log("Test let spiller1 score " + spiller1);
  console.log("Test let spiller2 score " + spiller2);
  midlertidig_poeng = 0;
  if (runde < 7) {
    console.log("Test runde 1-6: " + runde);
    if (hvemSinTur == 1) {
      totalScore1 += faseEn(mitt_kast, runde);
      console.log("Test totalScore1: " + totalScore1);
    } else if (hvemSinTur == 2) {
      totalScore2 += faseEn(mitt_kast, runde);
      console.log("Test totalScore2: " + totalScore1);
    } else if (hvemSinTur == 3) {
      totalScore3 += faseEn(mitt_kast, runde);
      console.log("Test totalScore3: " + totalScore3);
    } else if (hvemSinTur == 4) {
      totalScore4 += faseEn(mitt_kast, runde);
      console.log("Test totalScore4: " + totalScore4);
    }
    if (runde == 6) {
      bonus();
    }
  } else if (runde == 7) {
    if (hvemSinTur == 1) {
      midlertidig_poeng = like(mitt_kast, 2);
      totalScore1 += midlertidig_poeng;
    } else if (hvemSinTur == 2) {
      midlertidig_poeng = like(mitt_kast, 2);
      totalScore2 += midlertidig_poeng;
    } else if (hvemSinTur == 3) {
      midlertidig_poeng = like(mitt_kast, 3);
      totalScore3 += midlertidig_poeng;
    } else if (hvemSinTur == 4) {
      midlertidig_poeng = like(mitt_kast, 4);
      totalScore4 += midlertidig_poeng;
    }
  } else if (runde == 8) {
    if (hvemSinTur == 1) {
      midlertidig_poeng = toPar(mitt_kast);
      totalScore1 += midlertidig_poeng;
    } else if (hvemSinTur == 2) {
      midlertidig_poeng = toPar(mitt_kast);
      totalScore2 += midlertidig_poeng;
    } else if (hvemSinTur == 3) {
      midlertidig_poeng = toPar(mitt_kast);
      totalScore3 += midlertidig_poeng;
    } else if (hvemSinTur == 4) {
      midlertidig_poeng = toPar(mitt_kast);
      totalScore4 += midlertidig_poeng;
    }
  } else if (runde == 9) {
    if (hvemSinTur == 1) {
      midlertidig_poeng = treLike();
      totalScore1 += midlertidig_poeng;
    } else if (hvemSinTur == 2) {
      midlertidig_poeng = treLike();
      totalScore2 += midlertidig_poeng;
    } else if (hvemSinTur == 3) {
      midlertidig_poeng = treLike();
      totalScore3 += midlertidig_poeng;
    } else if (hvemSinTur == 4) {
      midlertidig_poeng = treLike();
      totalScore4 += midlertidig_poeng;
    }
  } else if (runde == 10) {
    if (hvemSinTur == 1) {
      midlertidig_poeng = fireLike();
      totalScore1 += midlertidig_poeng;
    } else if (hvemSinTur == 2) {
      midlertidig_poeng = fireLike();
      totalScore2 += midlertidig_poeng;
    } else if (hvemSinTur == 3) {
      midlertidig_poeng = fireLike();
      totalScore3 += midlertidig_poeng;
    } else if (hvemSinTur == 4) {
      midlertidig_poeng = fireLike();
      totalScore4 += midlertidig_poeng;
    }
  } else if (runde == 11) {
    if (hvemSinTur == 1) {
      midlertidig_poeng = litenStraight();
      totalScore1 += midlertidig_poeng;
    } else if (hvemSinTur == 2) {
      midlertidig_poeng = litenStraight();
      totalScore2 += midlertidig_poeng;
    } else if (hvemSinTur == 3) {
      midlertidig_poeng = litenStraight();
      totalScore3 += midlertidig_poeng;
    } else if (hvemSinTur == 4) {
      midlertidig_poeng = litenStraight();
      totalScore4 += midlertidig_poeng;
    }
  } else if (runde == 12) {
    if (hvemSinTur == 1) {
      midlertidig_poeng = storStraight();
      totalScore1 += midlertidig_poeng;
    } else if (hvemSinTur == 2) {
      midlertidig_poeng = storStraight();
      totalScore2 += midlertidig_poeng;
    } else if (hvemSinTur == 3) {
      midlertidig_poeng = storStraight();
      totalScore3 += midlertidig_poeng;
    } else if (hvemSinTur == 4) {
      midlertidig_poeng = storStraight();
      totalScore4 += midlertidig_poeng;
    }
  } else if (runde == 13) {
    if (hvemSinTur == 1) {
      midlertidig_poeng = hus();
      totalScore1 += midlertidig_poeng;
    } else if (hvemSinTur == 2) {
      midlertidig_poeng = hus();
      totalScore2 += midlertidig_poeng;
    } else if (hvemSinTur == 3) {
      midlertidig_poeng = hus();
      totalScore3 += midlertidig_poeng;
    } else if (hvemSinTur == 4) {
      midlertidig_poeng = hus();
      totalScore4 += midlertidig_poeng;
    }
  } else if (runde == 14) {
    if (hvemSinTur == 1) {
      midlertidig_poeng = sjanse();
      totalScore1 += midlertidig_poeng;
    } else if (hvemSinTur == 2) {
      midlertidig_poeng = sjanse();
      totalScore2 += midlertidig_poeng;
    } else if (hvemSinTur == 3) {
      midlertidig_poeng = sjanse();
      totalScore3 += midlertidig_poeng;
    } else if (hvemSinTur == 4) {
      midlertidig_poeng = sjanse();
      totalScore4 += midlertidig_poeng;
    }
  } else if (runde == 15) {
    if (hvemSinTur == 1) {
      midlertidig_poeng = yatzy();
      totalScore1 += midlertidig_poeng;
    } else if (hvemSinTur == 2) {
      midlertidig_poeng = yatzy();
      totalScore2 += midlertidig_poeng;
    } else if (hvemSinTur == 3) {
      midlertidig_poeng = yatzy();
      totalScore3 += midlertidig_poeng;
    } else if (hvemSinTur == 4) {
      midlertidig_poeng = yatzy();
      totalScore4 += midlertidig_poeng;
    }
  }
}

function like(mitt_kast, antall) {
  var verdi = 0;
  if (sjekk(mitt_kast, 6) >= antall) {
    verdi = antall * 6;
    return verdi;
  } else if (sjekk(mitt_kast, 5) >= antall) {
    verdi = antall * 5;
    return verdi;
  } else if (sjekk(mitt_kast, 4) >= antall) {
    verdi = antall * 4;
    return verdi;
  } else if (sjekk(mitt_kast, 3) >= antall) {
    verdi = antall * 3;
    return verdi;
  } else if (sjekk(mitt_kast, 2) >= antall) {
    verdi = antall * 2;
    console.log("Test like2 " + verdi);
    return verdi;
  } else if (sjekk(mitt_kast, 1) >= antall) {
    verdi = antall * 1;
    return verdi;
  }
  return 0;
}

// Sjekker hvor mange av tall x er i kastet
function sjekk(hand, tall) {
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
  console.log(
    "Du fikk " +
      midlertidig_poeng +
      " poeng for å ha " +
      antall +
      " av " +
      verdi
  );
  return midlertidig_poeng;
}

function bonus() {
  var bonuspoeng = 50;
  var ikkeBonus = 0;

  if (hvemSinTur == 1) {
    document.getElementById("1-faseEn").innerHTML = totalScore1;
    if (totalScore1 >= 42) {
      document.getElementById("1-bonus").innerHTML = bonuspoeng;
      totalScore1 += bonuspoeng;
    } else {
      document.getElementById("1-bonus").innerHTML = ikkeBonus;
    }
  } else if (hvemSinTur == 2) {
    document.getElementById("2-faseEn").innerHTML = totalScore2;
    if (totalScore2 >= 42) {
      document.getElementById("2-bonus").innerHTML = bonuspoeng;
      totalScore2 += bonuspoeng;
    } else {
      document.getElementById("2-bonus").innerHTML = ikkeBonus;
    }
  } else if (hvemSinTur == 3) {
    document.getElementById("3-faseEn").innerHTML = totalScore3;
    if (totalScore3 >= 42) {
      document.getElementById("3-bonus").innerHTML = bonuspoeng;
      totalScore3 += bonuspoeng;
    } else {
      document.getElementById("3-bonus").innerHTML = ikkeBonus;
    }
  } else if (hvemSinTur == 4) {
    document.getElementById("4-faseEn").innerHTML = totalScore4;
    if (totalScore4 >= 42) {
      document.getElementById("2-bonus").innerHTML = bonuspoeng;
      totalScore4 += bonuspoeng;
    } else {
      document.getElementById("4-bonus").innerHTML = ikkeBonus;
    }
  }
}

function toPar(mitt_kast) {
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
        totalScoreToPar += tall6 * 6;
        antallToPar += 1;
      }
    }
    if (mitt_kast[i] == 5) {
      tall5 += 1;
      if (tall5 == 2) {
        totalScoreToPar += tall5 * 5;
        antallToPar += 1;
      }
    }
    if (mitt_kast[i] == 4) {
      tall4 += 1;
      if (tall4 == 2) {
        totalScoreToPar += tall4 * 4;
        antallToPar += 1;
      }
    }
    if (mitt_kast[i] == 3) {
      tall3 += 1;
      if (tall3 == 2) {
        totalScoreToPar += tall3 * 3;
        antallToPar += 1;
      }
    }
    if (mitt_kast[i] == 2) {
      tall2 += 1;
      if (tall2 == 2) {
        totalScoreToPar += tall2 * 2;
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
  } else {
    console.log("Test toPar score 0: " + totalScoreToPar);
    return 0;
  }
}

function treLike() {
  let treLikeSum = 0;
  mitt_kast.sort();
  console.log("Test trelike Sort() " + mitt_kast);
  if (mitt_kast[0] == mitt_kast[2]) {
    treLikeSum = mitt_kast[0] + mitt_kast[1] + mitt_kast[2];
    return treLikeSum;
  } else if (mitt_kast[1] == mitt_kast[3]) {
    treLikeSum = mitt_kast[1] + mitt_kast[2] + mitt_kast[3];
    return treLikeSum;
  } else if (mitt_kast[2] == mitt_kast[4]) {
    treLikeSum = mitt_kast[2] + mitt_kast[3] + mitt_kast[4];
    return treLikeSum;
  } else {
    return 0;
  }
}

function fireLike() {
  let firelikeSum = 0;
  mitt_kast.sort();
  console.log("Test fireLike sort() " + mitt_kast);
  if (mitt_kast[0] == mitt_kast[3]) {
    // Kunne laget for-løkke, men det blir flere linjer
    firelikeSum = mitt_kast[0] + mitt_kast[1] + mitt_kast[2] + mitt_kast[3];
    return firelikeSum;
  } else if (mitt_kast[1] == mitt_kast[4]) {
    firelikeSum = mitt_kast[1] + mitt_kast[2] + mitt_kast[3] + mitt_kast[4];
    return firelikeSum;
  } else {
    return 0;
  }
}

function litenStraight() {
  mitt_kast.sort();
  console.log("Test mitt_kast.sort() litenStraight " + mitt_kast);
  if (mitt_kast[0] == 1 && mitt_kast[4] == 5) {
    for (var i = 0; i < 4; i++) {
      if (mitt_kast[i + 1] - mitt_kast[i] == 1) {
        console.log("Test liten straight: Ja");
      } else {
        console.log("Test liten straight: Nei");
        return 0;
      }
    }
    return 15;
  } else {
    return 0;
  }
}

function storStraight() {
  mitt_kast.sort();
  if (mitt_kast[0] == 2 && mitt_kast[4] == 6) {
    for (var i = 0; i < 4; i++) {
      if (mitt_kast[i + 1] - mitt_kast[i] == 1) {
        console.log("Test stor straight: Ja");
      } else {
        console.log("Test stor straight: Nei");
        return 0;
      }
    }
    return 20;
  } else {
    return 0;
  }
}

function hus() {
  mitt_kast.sort();
  if (
    mitt_kast[0] == mitt_kast[1] &&
    mitt_kast[2] == mitt_kast[4] &&
    mitt_kast[1] != mitt_kast[2]
  ) {
    return mitt_kast.reduce((a, b) => a + b, 0);
  } else if (
    mitt_kast[0] == mitt_kast[2] &&
    mitt_kast[3] == mitt_kast[4] &&
    mitt_kast[2] != mitt_kast[3]
  ) {
    return mitt_kast.reduce((a, b) => a + b, 0);
  } else {
    return 0;
  }
}

function sjanse() {
  return mitt_kast.reduce((a, b) => a + b, 0);
}

function yatzy() {
  mitt_kast.sort();
  if (mitt_kast[0] == mitt_kast[4]) {
    console.log("DU HAR YAAAAAATZYYYY!!");
    alert("DU HAR FÅTT YATZY!!!");
    return 50;
  }
  return 0;
}

function fakeYatzy() {
  mitt_kast.sort();
  if (
    (((mitt_kast[0] == mitt_kast[1]) == mitt_kast[2]) == mitt_kast[3]) ==
      mitt_kast[4] &&
    runde <= 14
  ) {
    alert("Yatzy!! Beklager, men det telles ikke denne gang.");
  }
}

function moveToTable() {
  let spiller = hvemSinTur;
  let sendTilId = spiller + "-" + runde;
  console.log("Test moveToTable: " + sendTilId);
  console.log("Test moveToTable midlertidig_poeng: " + midlertidig_poeng);
  document.getElementById(sendTilId).innerHTML = midlertidig_poeng;
  // legge til animasjon
  if (runde == 15) {
    if (hvemSinTur == 1) {
      document.getElementById("1-totalsum").innerHTML = totalScore1;
    } else if (hvemSinTur == 2) {
      document.getElementById("2-totalsum").innerHTML = totalScore2;
    } else if (hvemSinTur == 3) {
      document.getElementById("3-totalsum").innerHTML = totalScore3;
    } else if (hvemSinTur == 4) {
      document.getElementById("4-totalsum").innerHTML = totalScore4;
    }
    if (hvemSinTur == antallSpillere) {
      let finalScoreListe = [];
      if (antallSpillere == 4) {
        finalScoreListe[0] = totalScore1;
        finalScoreListe[1] = totalScore2;
        finalScoreListe[2] = totalScore3;
        finalScoreListe[3] = totalScore4;
        finalScoreListe.sort(function(a, b) {
          return b - a;
        });
        document.getElementById("plass1").innerHTML = finalScoreListe[0];
        document.getElementById("plass2").innerHTML = finalScoreListe[1];
        document.getElementById("plass3").innerHTML = finalScoreListe[2];
        document.getElementById("plass4").innerHTML = finalScoreListe[3];
      } else if (antallSpillere == 3) {
        finalScoreListe[0] = totalScore1;
        finalScoreListe[1] = totalScore2;
        finalScoreListe[2] = totalScore3;
        finalScoreListe.sort(function(a, b) {
          return b - a;
        });
        document.getElementById("plass1").innerHTML = finalScoreListe[0];
        document.getElementById("plass2").innerHTML = finalScoreListe[1];
        document.getElementById("plass3").innerHTML = finalScoreListe[2];
      } else if (antallSpillere == 2) {
        finalScoreListe[0] = totalScore1;
        finalScoreListe[1] = totalScore2;
        finalScoreListe.sort(function(a, b) {
          return b - a;
        });
        document.getElementById("plass1").innerHTML = finalScoreListe[0];
        document.getElementById("plass2").innerHTML = finalScoreListe[1];
      } else if (antallSpillere == 1) {
        finalScoreListe[0] = totalScore1;
        document.getElementById("plass1").innerHTML =
          spiller1 + " fikk: " + finalScoreListe[0] + " poeng";
      }
    }
  }
}

function showDice() {
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
  if (document.getElementById("dicePos0").style.marginBottom == "-770%") {
    document.getElementById("dicePos0").style.marginBottom = "0%";
  } else {
    document.getElementById("dicePos0").style.marginBottom = "-770%";
  }
}

function moveDice1() {
  if (document.getElementById("dicePos1").style.marginBottom == "-770%") {
    document.getElementById("dicePos1").style.marginBottom = "0%";
  } else {
    document.getElementById("dicePos1").style.marginBottom = "-770%";
  }
}

function moveDice2() {
  if (document.getElementById("dicePos2").style.marginBottom == "-770%") {
    document.getElementById("dicePos2").style.marginBottom = "0%";
  } else {
    document.getElementById("dicePos2").style.marginBottom = "-770%";
  }
}

function moveDice3() {
  if (document.getElementById("dicePos3").style.marginBottom == "-770%") {
    document.getElementById("dicePos3").style.marginBottom = "0%";
  } else {
    document.getElementById("dicePos3").style.marginBottom = "-770%";
  }
}

function moveDice4() {
  if (document.getElementById("dicePos4").style.marginBottom == "-770%") {
    document.getElementById("dicePos4").style.marginBottom = "0%";
  } else {
    document.getElementById("dicePos4").style.marginBottom = "-770%";
  }
}

function resetSpill() {
  midlertidig_poeng = 0;
  antallKast = 0;
  runde = 0;
  totalScore1 = 0;
  totalScore2 = 0;
  totalScore3 = 0;
  totalScore4 = 0;
  if (localStorage["spiller4"] != "") {
    antallSpillere = 4;
  } else if (localStorage["spiller3"] != "") {
    antallSpillere = 3;
  } else if (localStorage["spiller2"] != "") {
    antallSpillere = 2;
  } else {
    antallSpillere = 1;
  }
  spiller1 = "";
  spiller2 = "";
  spiller3 = "";
  spiller4 = "";
  hvemSinTur = 1;
  for (var i = 1; i <= 4; i++) {
    for (var y = 1; y < 16; y++) {
      document.getElementById(i + "-" + y).innerHTML = "";
    }
    document.getElementById(i + "-faseEn").innerHTML = "";
    document.getElementById(i + "-bonus").innerHTML = "";
    document.getElementById(i + "-totalsum").innerHTML = "";
  }
}

let hiddenPopFinalScore = true;

function finalScore(nyttEllerGjenta) {
  var y = document.getElementById("finalScore");
  var finalScorePopUp = document.getElementById("finalScorePopUp");

  if (!hiddenPopFinalScore) {
    y.style.display = "none";
    hiddenPopFinalScore = true;
    if (nyttEllerGjenta == "nyeSpillere") {
      location.replace("hjemmeside.html");
    }
    console.log("Test nyttEllerGjenta: " + nyttEllerGjenta);
  } else {
    y.style.display = "block";
    hiddenPopFinalScore = false;
    console.log("Test nyttEllerGjenta: " + nyttEllerGjenta);
  }
}
