//Oppretter første kast hver runde
function startKast(){
  mitt_kast =[];
  for (i = 0; i < 5; i++){
    Math.random(1,6));
  }
  return mitt_kast;
}

//Tar inn forrige kast og hvilke indekser som skal kastes på nytt
function nyttKast(innListe, indekser){
  utListe = innListe;
  for (i = 0; i < 5; i++) {
    utListe = nyTerning(utListe, i);
  }
  return utListe;
}
