//Oppretter første kast hver runde
function startKast(){
  var mitt_kast =[];
  //For hver terning
  for (i = 0; i < 5; i++){
    Math.floor(Math.random() * 6) +1);  //sjekk denne
  }
  //Returnerer arrayet med 5 terninger med random verdier
  return mitt_kast;
}

//Tar inn forrige kast og hvilke indekser som skal kastes på nytt
function nyttKast(innListe, indekser){
   var utListe = innListe;
  for (i = 0; i < 5; i++) {
    //Bytter ut terning i med ny terning
    utListe = nyTerning(utListe, i);
  }
  //Returnerer nytt kast
  return utListe;

function startKast(){

}

function nyttKast(){

}
