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


/*//Tar inn forrige kast og hvilke indekser som skal kastes på nytt
function nyttKast(innListe, indekser){
   var utListe = innListe;
  for (i = 0; i < 5; i++) {
    //Bytter ut terning i med ny terning
    utListe = nyTerning(utListe, i);
  }
  //Returnerer nytt kast
  return utListe;
}
*/

// Definerer hvilke indekser som skal kastes på nytt
function nytt_kast_indexer(){
  var nyeTerninger = [];
  /*var checkBox1 = document.getElementById("check1");*/
  if (document.getElementById("check1").checked){

  }
  if (document.getElementById("check2").checked) {

  }
}

/*
function nyTerning(liste, posisjon){
  var utListe = liste;
  utListe[posisjon] = Math.floor(Math.random() * 6) +1);
}
return utListe;
*/
