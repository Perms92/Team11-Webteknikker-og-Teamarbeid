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
