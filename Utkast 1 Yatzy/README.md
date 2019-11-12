Team11-Webteknikker og Teamarbeid

Medlemmer i Team 11:
- Mina
- Edvard
- Vetle
- Per Morten
- Sigrun
- Mats


Her forklares funksjonene og variablene i yatzy.js
Vi velger å la consol.log() kodene være slik at det vises hva vi har testet


- mitt_kast er arrayet med verdiene til de 5 terningene som kastes
- midlertidig_poeng er variabelen som mellomlagrer poengsummen til spilleren som spiller og setter den inn i poengsum tabellen
- antallKast holder orden på hvor mange kast hver enkelt spiller har kastet på den runden. Går fra 0-3
- runde holder orden på hvilken runde spillet er på, går fra 0-16
- totalScore1-4 holder scoren til spillerne
- antallSpillere går fra 1-4 og sier hvor mange spillere det er
- hvemSinTur holder orden på hvilken spiller sin tur det er. Går fra 1 til antallSpillere
- drop tar inn lyden "diceSound"
- diceroll tar inn lyden "rollsound"

startKast():
  - Denne funksjonen gjør runde 1 større og kjører rundeForteller til spiller1 hvis hvemSinTur er lik 1 og runde er lik 0
  - Math.floor lager nye verdier mellom 1 og 6 i mitt_kast på pos 0-4 som tilsvarer ett helt nytt kast
  - Den tilbakestiller terningene på brettet til original posisjon
  - Unchecker checkboxene som tar vare på indexene til terningene som skal kastes på nytt


kasteKnapp():
  Denne funksjonen gjør forskjellige ting gitt visse parametre
  - Spiller av diceroll lyd når knappen trykkes
  - Henter inn hva som står på knapen i spillet og gjør handlinger ut ifra det
  - Hvis kasteknappen viser "Neste kast" og antallKast ikke er lik 2 så økes antallKast med 1, og nytt_kast_indexer() å showDice() kjøres.
  - Hvis kasteknappen viser "Neste kast" og antallKast er lik 2 så endres antallKast til 0, kasteknappen endres til "Start kast" og følgende funksjoner kjøres: nytt_kast_indexer(), showDice(), score(), moveToTable(), fakeYatzy();
  - Hvis hvemSinTur ikke er lik antallSpillere når kasteknappen viser "Neste kast" og antallKast er lik 2, så øker hvemSinTur med 1 og rundeForteller() kjøres med tilhørende spiller. Hvis runde er lik 16 i tillegg så endres knappen til "Nytt spill"
  - Hvis kasteknappen viser "Start kast" så kjøres startKast() og showDice(), antallKast økes med 1, og hvis runde er lik 0 så endres det til 1 og hvemSinTur til 1.
  - Hvis knappen viser "Nytt spill" så kjøres finalScore(), startKast() og showDice(). I tillegg til at antallKast øker med 1 og knappen endres til "Neste kast".
  - Hvis knappen viser "Start runde 1" så skjer det samme som om den viser "Nytt spill", foruten at den ikke kjører finalScore().


nyttKast():
  Denne funksjonen bytter terningene som ikke er huket av i checkbox.


nytt_kast_indexer():
  Denne funksjonen sjekker hvilke checkboxer i index.html som er huket av (de terningene som blir klikket ned), og lager array med 1 hvis den er checket, og 0 hvis ikke. Kjører nyttKast() med denne informasjonen


rundeForteller():
  Denne finksjonen tar inn hvilken spiller det er sin tur og hvilken runde den spilleren er på for så å displaye frem hvem dette i index.html.


score():
  Denne funksjonen setter midlertidig_poeng til 0 og sjekker om nåværende hånd gir poeng ut ifra hvilken runde spillet er på. Det gjør den ved å kjøre funksjonene til de forskjellige poeng funksjonene gitt hvem sin tur og hvilken runde


like():
  Denne funksjonen blir kjørt i score() når runde er lik 7
  Den kjører sjekk() med input av 6 til 1 for å se hvor mange det er av tall x i kastet. Hvis sjekk() er større eller lik input antall så returnerer en verdi av antall ganger tallet den sjekker mot


sjekk():
  Denne funksjonen sjekker og returnerer hvor mange av tall x som er i mitt_kast


faseEn():
  Denne funksjonen tar inn kastet og hvilken verdi den skal sjelle mot. Kjører sjekk() på denne og returnerer antall ganger verdien den blir bedt om.
  F.eks. Hvis den skal sjekke hvor mange 6-ere det er, det er 4 stk. 6-ere, så den returnerer 4*6 som er 24


bonus():
  Denne funksjonen sjekker hver sin spiller sin totalScore og 


antallAvatarer():
  Denne tar inn input fra index sidene og viser frem avatarene til spillerne som er med i spillet



Her forklares index.html:

id="container"
  Her er knappene samlet

id="playerNames"
