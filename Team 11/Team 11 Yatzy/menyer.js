let hidden = true;
let hiddenPopHs = true;

function regler() {
  let x = document.getElementById("regler");
  // x.style,display = "none"; ved eventuelt onload, da vil den fungere igjen
  if (!hidden) {
    x.style.display = "none";
    hidden = true;
  } else {
    x.style.display = "block";
    hidden = false;
  }
}

function visHighscore() {
  let y = document.getElementById("popUpContainer");
  let hsPopUp = document.getElementById("hsPopUp");
  renderHighscores();
  if (!hiddenPopHs) {
    y.style.display = "none";
    hiddenPopHs = true;
  } else {
    y.style.display = "block";
    hiddenPopHs = false;
  }
}


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

function setStyleSheet(url) {
  let stylesheet = document.getElementById("stylesheet");
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


// Shuffles
function shuffle(avatars) {
  let currentIndex = avatars.length,
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

function dropmenu() {
  let x = document.getElementById("toggleButtons");
  // x.style,display = "none"; ved eventuelt onload, da vil den fungere igjen
  if (!hidden) {
    x.style.display = "none";
    hidden = true;
  } else {
    x.style.display = "block";
    hidden = false;
  }
}
