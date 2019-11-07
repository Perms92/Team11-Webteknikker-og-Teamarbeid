function oneGo() {
  /* document.getElementsByClassName("multiplayer").style.visibility = "hidden";*/
  document.getElementById("playerTwo").style.visibility = "hidden";
  document.getElementById("playerThree").style.visibility = "hidden";
  document.getElementById("playerFour").style.visibility = "hidden";
  document.getElementById("hjemmesideSpiller2").style.visibility = "hidden";
  document.getElementById("hjemmesideSpiller3").style.visibility = "hidden";
  document.getElementById("hjemmesideSpiller4").style.visibility = "hidden";
}

function twoGo() {
  document.getElementById("playerTwo").style.visibility = "visible";
  document.getElementById("hjemmesideSpiller2").style.visibility = "visible";
  document.getElementById("playerThree").style.visibility = "hidden";
  document.getElementById("playerFour").style.visibility = "hidden";
  document.getElementById("hjemmesideSpiller3").style.visibility = "hidden";
  document.getElementById("hjemmesideSpiller4").style.visibility = "hidden";
}

function threeGo() {
  document.getElementById("playerTwo").style.visibility = "visible";
  document.getElementById("playerThree").style.visibility = "visible";
  document.getElementById("hjemmesideSpiller2").style.visibility = "visible";
  document.getElementById("hjemmesideSpiller3").style.visibility = "visible";
  document.getElementById("playerFour").style.visibility = "hidden";
  document.getElementById("hjemmesideSpiller4").style.visibility = "hidden";
}

function fourGo() {
  document.getElementById("playerTwo").style.visibility = "visible";
  document.getElementById("playerThree").style.visibility = "visible";
  document.getElementById("playerFour").style.visibility = "visible";
  document.getElementById("hjemmesideSpiller2").style.visibility = "visible";
  document.getElementById("hjemmesideSpiller3").style.visibility = "visible";
  document.getElementById("hjemmesideSpiller4").style.visibility = "visible";
}

function play() {
  localStorage["spiller1"] = document.getElementById("playerOne").value;
  localStorage["spiller2"] = document.getElementById("playerTwo").value;
  localStorage["spiller3"] = document.getElementById("playerThree").value;
  localStorage["spiller4"] = document.getElementById("playerFour").value;
  //localStorage["spillere"] = [localStorage["spiller1"], localStorage["spiller2"], ]

  location.replace("index.html");
}

function settSpillernavn() {
  document.getElementById("spiller1").innerHTML = localStorage["spiller1"];
  document.getElementById("spiller2").innerHTML = localStorage["spiller2"];
  document.getElementById("spiller3").innerHTML = localStorage["spiller3"];
  document.getElementById("spiller4").innerHTML = localStorage["spiller4"];
  document.getElementById("avatar1").innerHTML = localStorage["spiller1"];
  document.getElementById("avatar2").innerHTML = localStorage["spiller2"];
  document.getElementById("avatar3").innerHTML = localStorage["spiller3"];
  document.getElementById("avatar4").innerHTML = localStorage["spiller4"];
  console.log("Test localStorage " + localStorage["spiller1"]);
}
