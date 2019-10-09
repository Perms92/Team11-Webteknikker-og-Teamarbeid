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


//Tar inn forrige kast og hvilke indekser som skal kastes på nytt
function nyttKast(indekser){
  prompt(indekser + " Test indeks nyttKast");
  if (i != null){
    mitt_kast[i] = Math.floor((Math.random() * 6) + 1);
    prompt("Test nyttKast " + i);
  }
  //Returnerer arrayet med 5 terninger med random verdier
  // return mitt_kast;
  document.getElementById("kast").innerHTML = mitt_kast;
}


// Definerer hvilke indekser som skal kastes på nytt
function nytt_kast_indexer(){
  var nyeTerninger = [];
  if (document.getElementById("check1").checked){
    nyeTerninger[0] = 0;
    prompt("Test1");
  }
  if (document.getElementById("check2").checked) {
    nyeTerninger[1] = 1;
    prompt("Test2");
  }
  if (document.getElementById("check3").checked) {
    nyeTerninger[2] = 2;
    prompt("Test3");
  }
  if (document.getElementById("check4").checked) {
    nyeTerninger[3] = 3;
    prompt("Test4");
  }
  if (document.getElementById("check5").checked) {
    nyeTerninger[4] = 4;
    prompt("Test5");
  }
  prompt(nyeTerninger);
  nyeTerninger.forEach(nytt_kast_indexer);
}

function regler(){
  document.getElementById("regler").innerHTML= "Her er reglene bla bla bla bla bla"
}
