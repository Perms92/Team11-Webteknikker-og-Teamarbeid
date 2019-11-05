let hidden = true;
function regler() {
  var x = document.getElementById("regler");
  // STUDASS TANKER :)
  // x.style,display = "none"; ved eventuelt onload, da vil den fungere igjen
  if (!hidden) {
    x.style.display = "none";
    hidden = true;
  } else {
    x.style.display = "block";
    hidden = false;
  }
  //STUDASS FERDIG
  /*  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  */
}

function playerName(){
  spiller1 = String(prompt("Skriv inn spiller 1 her"));
  let erTomt = "true";
  while (erTomt == "true") {
    try {
      if (spiller1 == "") throw "Spiller 1 må ha et navn, dummen!";
      if (spiller1 != "") {
        erTomt = "false";
      }
    }
    catch(err) {
      spiller1 = String(prompt(err));
    }
  }
  document.getElementById("spiller1").innerHTML = spiller1 + "";
  spiller2 = String(prompt("Skriv inn spiller 2 eller la stå åpen"));
  document.getElementById("spiller2").innerHTML = spiller2 + "";
  document.getElementById('navneknapp').style.display="none";
  document.getElementById("kasteKnapp").style.visibility="visible";
  document.getElementById("brett").style.backgroundColor="#730400";
  document.getElementById("brett").style.backgroundImage="url('https://www.transparenttextures.com/patterns/60-lines.png')";
  document.getElementById("brett").style.borderColor="#3d3d3d #2b2b2b";
}
