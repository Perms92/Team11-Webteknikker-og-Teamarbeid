let hidden = true;
let hiddenPopHs = true;

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
function visHighscore() {
  var y = document.getElementById("popUpContainer");
  var hsPopUp = document.getElementById("hsPopUp");
  renderHighscores();
  if (!hiddenPopHs) {
    y.style.display = "none";
    hiddenPopHs = true;
  } else {
    y.style.display = "block";
    hiddenPopHs = false;
  }
}

/* function playerName() {

  spiller1 = String(prompt("Skriv inn spiller 1 her"));
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
*/
let testpersoner = [
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

/* function changeCSS() {
let y =
  if (document.getElementById("stylesheet1") == "stylesheet.css"){
    document.getElementById("stylesheet1") = "stylesheet2.css";
  } else {
    document.getElementById("stylesheet1")="stylesheet.css";
  }
} */

function setStyleSheet(url) {
  var stylesheet = document.getElementById("stylesheet");
  stylesheet.setAttribute("href", url);
}

let avatars = [
  "img/avatarBear.png",
  "img/avatarCat.png",
  "img/avatarFox.png",
  "img/avatarGiraffe.png",
  "img/avatarGorilla.png",
  "img/avatarKoala.png",
  "img/avatarPanda.png",
  "img/avatarPug.png"
];

function tildelBilde() {
  avatars = shuffle(avatars);

  let avatarEn = document.getElementById("imgAvatar1");
  let avatarTo = document.getElementById("imgAvatar2");
  let avatarTre = document.getElementById("imgAvatar3");
  let avatarFire = document.getElementById("imgAvatar4");

  avatarEn.src = avatars[0];
  avatarTo.src = avatars[1];
  avatarTre.src = avatars[2];
  avatarFire.src = avatars[3];
}
function antallAvatarer() {
  for (i=1;i<antallSpillere;i++)
  {
    let y = "imgAvatar" + i + "";
    document.getElementById(y).style.visibility = visible;
  }
}

function shuffle(avatars) {
  var currentIndex = avatars.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = avatars[currentIndex];
    avatars[currentIndex] = avatars[randomIndex];
    avatars[randomIndex] = temporaryValue;
  }
  return avatars;
}
