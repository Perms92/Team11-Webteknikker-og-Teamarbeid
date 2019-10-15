var mitt_kast = [];

//Oppretter første kast hver runde
function startKast(){
  //For hver terning
  for (i = 0; i <= 4; i++){
    mitt_kast[i] = Math.floor((Math.random() * 6) + 1);
  }
  //Returnerer arrayet med 5 terninger med random verdier
  // return mitt_kast;
  document.getElementById("kast").innerHTML = mitt_kast;
}


// Bytter de terningene som ikke er huket i checkbox
function nyttKast(indekser){
  console.log(indekser + " Test indeks nyttKast");
  for (i = 0; i <= 4; i++){
    if (indekser[i] == 0){
      console.log("Test: indekser [0] " + indekser[i]);
      mitt_kast[i] = Math.floor((Math.random() * 6) + 1);
    }
    else {
      console.log("Test: indekser [1] " + indekser[i]);
    }
  }
  document.getElementById("kast").innerHTML = mitt_kast;
}


// Definerer hvilke indekser som skal kastes på nytt
function nytt_kast_indexer(){
  var nyeTerninger = [];
  if (document.getElementById("check1").checked){
    nyeTerninger[0] = 1;
    console.log("Test: Terning 1");
  }
  else {
    nyeTerninger[0] = 0;
    console.log("Test: Ikke terning 1");
  }
  if (document.getElementById("check2").checked) {
    nyeTerninger[1] = 1;
    console.log("Test: Terning 2");
  }
  else {
    nyeTerninger[1] = 0;
    console.log("Test: Ikke terning 2");
  }
  if (document.getElementById("check3").checked) {
    nyeTerninger[2] = 1;
    console.log("Test: Terning 3");
  }
  else {
    nyeTerninger[2] = 0;
    console.log("Test: Ikke terning 3");
  }
  if (document.getElementById("check4").checked) {
    nyeTerninger[3] = 1;
    console.log("Test: Terning 4");
  }
  else {
    nyeTerninger[3] = 0;
    console.log("Test: Ikke terning 4");
  }
  if (document.getElementById("check5").checked) {
    nyeTerninger[4] = 1;
    console.log("Test: Terning 5");
  }
  else {
    nyeTerninger[4] = 0;
    console.log("Test: Ikke terning 5");
  }
  console.log("Test: slutt nytt_kast_indexer " + nyeTerninger);
  nyttKast(nyeTerninger);
}
