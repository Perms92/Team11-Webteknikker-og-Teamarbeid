function oneGo() {
   /* document.getElementsByClassName("multiplayer").style.visibility = "hidden";*/
    document.getElementById("playerTwo").style.visibility = "hidden";
    document.getElementById("playerThree").style.visibility = "hidden";
    document.getElementById("playerFour").style.visibility = "hidden";
}

function twoGo() {
    document.getElementById("playerTwo").style.visibility = "visible";
    document.getElementById("playerThree").style.visibility = "hidden";
    document.getElementById("playerFour").style.visibility = "hidden";
}

function threeGo() {
    document.getElementById("playerTwo").style.visibility = "visible";
    document.getElementById("playerThree").style.visibility = "visible";
    document.getElementById("playerFour").style.visibility = "hidden";
}

function fourGo() {
    document.getElementById("playerTwo").style.visibility = "visible";
    document.getElementById("playerThree").style.visibility = "visible";
    document.getElementById("playerFour").style.visibility = "visible";
}

/*function play() {
  let spillerEn = document.getElementById("playerOne").value;
  console.log("Test hjemmesideSpiller1 " + spillerEn);
  let spillerTo = document.getElementById("playerTwo");
  let spillerTre = document.getElementById("playerThree");
  let spillerFire = document.getElementById("playerFour");
  document.getElementById("spiller1").innerHTML = spillerEn + "";
  document.getElementById("spiller2").innerHTML = spillerTo + "";
  document.getElementById("spiller3").innerHTML = spillerTre + "";
  document.getElementById("spiller4").innerHTML = spillerFire + "";
  href="index.html";
}*/
