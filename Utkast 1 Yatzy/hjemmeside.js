let isTwoGo = false;
let isThreeGo = false;
let isFourGo = false;


function oneGo() {
  isTwoGo = false;
  isThreeGo = false;
  isFourGo = false;

  document.getElementById("playerTwo").style.visibility = "hidden";
  document.getElementById("playerThree").style.visibility = "hidden";
  document.getElementById("playerFour").style.visibility = "hidden";
  document.getElementById("hjemmesideSpiller2").style.visibility = "hidden";
  document.getElementById("hjemmesideSpiller3").style.visibility = "hidden";
  document.getElementById("hjemmesideSpiller4").style.visibility = "hidden";
}

function twoGo() {
  isThreeGo = false;
  isFourGo = false;

  document.getElementById("playerTwo").style.visibility = "visible";
  document.getElementById("hjemmesideSpiller2").style.visibility = "visible";
  document.getElementById("playerThree").style.visibility = "hidden";
  document.getElementById("playerFour").style.visibility = "hidden";
  document.getElementById("hjemmesideSpiller3").style.visibility = "hidden";
  document.getElementById("hjemmesideSpiller4").style.visibility = "hidden";

    isTwoGo = true;
}

function threeGo() {
  isFourGo = false;

  document.getElementById("playerTwo").style.visibility = "visible";
  document.getElementById("playerThree").style.visibility = "visible";
  document.getElementById("hjemmesideSpiller2").style.visibility = "visible";
  document.getElementById("hjemmesideSpiller3").style.visibility = "visible";
  document.getElementById("playerFour").style.visibility = "hidden";
  document.getElementById("hjemmesideSpiller4").style.visibility = "hidden";

  isTwoGo = true;
  isThreeGo = true;
}

function fourGo() {
  document.getElementById("playerTwo").style.visibility = "visible";
  document.getElementById("playerThree").style.visibility = "visible";
  document.getElementById("playerFour").style.visibility = "visible";
  document.getElementById("hjemmesideSpiller2").style.visibility = "visible";
  document.getElementById("hjemmesideSpiller3").style.visibility = "visible";
  document.getElementById("hjemmesideSpiller4").style.visibility = "visible";

  isTwoGo = true;
  isThreeGo = true;
  isFourGo = true;
}

function play() {
  if (isFourGo) {
    localStorage["spiller4"] = document.getElementById("playerFour").value;
  }

  if (isThreeGo) {
    if (!isFourGo) {
      localStorage["spiller4"] = "";
    }
    localStorage["spiller3"] = document.getElementById("playerThree").value;
  }

  if (isTwoGo) {
    if (!isThreeGo) {
      localStorage["spiller3"] = "";
      localStorage["spiller4"] = "";
    }
    localStorage["spiller2"] = document.getElementById("playerTwo").value;
  } else {
    localStorage["spiller2"] = "";
    localStorage["spiller3"] = "";
    localStorage["spiller4"] = "";
  }

  localStorage["spiller1"] = document.getElementById("playerOne").value;

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
