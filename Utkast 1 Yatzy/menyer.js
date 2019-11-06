let hidden = true;
function regler() {
  var x = document.getElementById("regler");
  // x.style,display = "none"; ved eventuelt onload, da vil den fungere igjen
  if (!hidden) {
    x.style.display = "none";
    hidden = true;
  } else {
    x.style.display = "block";
    hidden = false;
  }
  /*  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  */
}

let hiddenPopHs = true;
function visHighscore() {
  var y = document.getElementById("popUpContainer");
  var hsPopUp = document.getElementById("hsPopUp");

  if (!hiddenPopHs) {
    y.style.display = "none";
    hiddenPopHs = true;
  } else {
    y.style.display = "block";
    hiddenPopHs = false;
  }
}

/*function playerName() {*/
  /*spiller1 = String(prompt("Skriv inn spiller 1 her"));
  let erTomt = "true";
  while (erTomt == "true") {
    try {
      if (spiller1 == "" || spiller1 == "null")
        throw "Spiller 1 må ha et navn, dummen!";
      if (spiller1 != "") {
        erTomt = "false";
      }
    } catch (err) {
      spiller1 = String(prompt(err));
    }
  }
  document.getElementById("spiller1").innerHTML = spiller1 + "";
  spiller2 = String(prompt("Skriv inn spiller 2 eller la stå åpen"));
  if (spiller2 == "null") {
    spiller2 = "";
  }
  document.getElementById("spiller2").innerHTML = spiller2 + "";
  if (spiller2 != "") {
    spiller3 = String(prompt("Skriv inn spiller 3 eller la stå åpen"));
    if (spiller3 == "null") {
      spiller3 = "";
    }
    document.getElementById("spiller3").innerHTML = spiller3 + "";
    if (spiller3 != "") {
      spiller4 = String(prompt("Skriv inn spiller 4 eller la stå åpen"));
      if (spiller4 == "null") {
        spiller4 = "";
      }
    }
  }
  document.getElementById("spiller4").innerHTML = spiller4 + "";*/
  /*let spillerEn = document.getElementById("playerOne").value;
  console.log("Test hjemmesideSpiller1 " + spillerEn);
  let spillerTo = document.getElementById("playerTwo");
  let spillerTre = document.getElementById("playerThree");
  let spillerFire = document.getElementById("playerFour");
  href="index.html";*/
  /*document.getElementById("navneknapp").style.display = "none";
  document.getElementById("kasteKnapp").style.visibility = "visible";
  document.getElementById("brett").style.backgroundColor = "#b03434";
  document.getElementById("brett").style.backgroundImage =
    "url('https://www.transparenttextures.com/patterns/60-lines.png')";
  document.getElementById("brett").style.borderColor = "#5d5d5d #414141";
}

/*let testpersoner = [
  { navn: "Peder", score: 123 },
  { navn: "Andy", score: 156 }
];

//Husk å fjerne testpersoner

localStorage.setItem("highscores", JSON.stringify(testpersoner));

console.log(JSON.parse(localStorage.getItem("highscores")));

function sorterer(pers1, pers2) {
  if (pers1.score > pers2.score) {
    return -1;
  } else if (pers2.score > pers1.score) {
    return 1;
  }
  return 0;
}

function localSet(person, score) {
  //henter data fra localStorage, legger til den nye personen, sorterer og lagrer den
  //let before = JSON.parse(localStorage.getItem("highscore"));
  let hs = localGet();
  let nyPerson = {
    navn: person,
    score: score
  };

  //Legger til ny person før listen sorteres og lagres
  hs.push(nyPerson);
  //Sorterer listen før den lagres
  hs.sort(sorterer);

  //Lagrer listen
  localStorage.setItem("highscores", JSON.stringify(hs));
}

//localSet("mina", 200);

function localGet() {
  return JSON.parse(localStorage.getItem("highscores")).sort(sorterer);
}

function renderHighscores() {
  let highscores = localGet();
  console.log(highscores);
  for (let person of highscores) {
    let li = document.createElement("li");
    li.textContent = person.navn + " har score: " + person.score;
    document.getElementById("hs").append(li);
  }
}

renderHighscores();*/

/*var database = firebase.database();
var yatzyDB = database.ref("yatzy/");
var liste = document.getElementById("liste");

var hsPopUp = document.getElementById("hsPopUp");
var hs = document.getElementById("hs");

function hentHS(snapshot) {
  var yatzy = snapshot.key;
}
yatzyDB.orderByChild("score").on("child_added", hentHS);

function visHighscore() {
  var navn = snapshot.key;
  var score = snapshot.val().alder;

  liste.innerHTML += `<ol>
<li>${navn} fikk ${score} poeng </li>
  </ol>`;
}

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/7.2.3/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/7.2.3/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>*/
