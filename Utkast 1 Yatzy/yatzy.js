var mitt_kast = [];
var antallKast = 0;
var runde = 0;

function kasteKnapp() {
  console.log("Du er på runde " + runde);
  var x = document.getElementById("kasteKnapp");
  if (x.innerHTML === "Neste kast" && antallKast != 2) {
    console.log("Test 1 kasteKnapp()");
    nytt_kast_indexer();
  }
  else if (x.innerHTML === "Neste kast" && antallKast <= 2) {
    antallKast = 0;
    console.log("Test 2 kasteKnapp()");
    x.innerHTML = "Start kast"
    startKast();
  }
  else if (x.innerHTML === "Start kast") {
    console.log("Test 4 kasteKnapp()");
    x.innerHTML = "Neste kast";
    startKast();
  }
  else if (x.innerHTML === "Start spillet") {
    console.log("Test 5 kasteKnapp()");
    x.innerHTML = "Neste kast";
    startKast();
  }
}

// Oppretter første kast hver runde
function startKast(){
  if (antallKast == 0) {
    runde += 1;
    rundeForteller();
    // Skjer bare om det er første kast
    if (antallKast == 0) {
      // Lager 5 indekser/terninger
      for (i = 0; i <= 4; i++){
        // Setter random tall 1-6 på hver indeks/terning
        mitt_kast[i] = Math.floor((Math.random() * 6) + 1);
      }
      // Teller startkastet som kast nr. 1
      antallKast = 1;
      console.log("Test: antallKast startkast " + antallKast);
      // Returnerer arrayet med 5 terninger med random verdier
      document.getElementById("kast").innerHTML = mitt_kast;
    }
    else {
      console.log("Bare første kast her");
    }
  }
}


// Bytter de terningene som ikke er huket i checkbox
function nyttKast(indekser){
  if (antallKast != 3) {
    console.log("Test: antallKast != 3");
    console.log(indekser + " Test indeks nyttKast");
    if (antallKast > 0 && antallKast < 3) {
      for (i = 0; i <= 4; i++){
        if (indekser[i] == 0){
          //console.log("Test: indekser [0] " + indekser[i]);
          mitt_kast[i] = Math.floor((Math.random() * 6) + 1);
        }
      }
      console.log("Test: antallKast " + antallKast);
      if (antallKast == 3) {
        //score(); Fungerer ikke som en funksjon, vet ikke hvorfor
        console.log("Du har nå kastet 3 ganger, start på nytt");
        antallKast = 0;
      }
    }
    else {
      console.log("Test: Du må starte spillet for å kaste på nytt");
      console.log(antallKast);
    }
    antallKast += 1;
    console.log("Test: antallKast " + antallKast);
  }
  document.getElementById("kast").innerHTML = mitt_kast;
  //mitt_kast = [];
  console.log("Test: reset mitt_kast " + mitt_kast);
}


// Definerer hvilke indekser som skal kastes på nytt
function nytt_kast_indexer(){
  var nyeTerninger = [];
  if (document.getElementById("check1").checked){
    nyeTerninger[0] = 1;
    //console.log("Test: Terning 1");
  }
  else {
    nyeTerninger[0] = 0;
    //console.log("Test: Ikke terning 1");
  }
  if (document.getElementById("check2").checked) {
    nyeTerninger[1] = 1;
    //console.log("Test: Terning 2");
  }
  else {
    nyeTerninger[1] = 0;
    //console.log("Test: Ikke terning 2");
  }
  if (document.getElementById("check3").checked) {
    nyeTerninger[2] = 1;
    //console.log("Test: Terning 3");
  }
  else {
    nyeTerninger[2] = 0;
    //console.log("Test: Ikke terning 3");
  }
  if (document.getElementById("check4").checked) {
    nyeTerninger[3] = 1;
    //console.log("Test: Terning 4");
  }
  else {
    nyeTerninger[3] = 0;
    //console.log("Test: Ikke terning 4");
  }
  if (document.getElementById("check5").checked) {
    nyeTerninger[4] = 1;
    //console.log("Test: Terning 5");
  }
  else {
    nyeTerninger[4] = 0;
    //console.log("Test: Ikke terning 5");
  }
  //console.log("Test: slutt nytt_kast_indexer " + nyeTerninger);
  nyttKast(nyeTerninger);
}

function rundeForteller(){
  if (runde < 7) {
    for (i = 0; i <= 5; i++) {
      console.log("Du vil nå ha " + runde + "-ere");
    }
  }
}
