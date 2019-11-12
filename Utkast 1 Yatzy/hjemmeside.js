let isOneGo = false;
let isTwoGo = false;
let isThreeGo = false;
let isFourGo = false;


function oneGo() {
  isTwoGo = false;
  isThreeGo = false;
  isFourGo = false;

  document.getElementById("playerOne").style.visibility = "visible";
  document.getElementById("playerTwo").style.visibility = "hidden";
  document.getElementById("playerThree").style.visibility = "hidden";
  document.getElementById("playerFour").style.visibility = "hidden";
  document.getElementById("hjemmesideSpiller2").style.visibility = "hidden";
  document.getElementById("hjemmesideSpiller3").style.visibility = "hidden";
  document.getElementById("hjemmesideSpiller4").style.visibility = "hidden";

  isOneGo = true;
}

function twoGo() {
  isThreeGo = false;
  isFourGo = false;

  document.getElementById("playerOne").style.visibility = "visible";
  document.getElementById("playerTwo").style.visibility = "visible";
  document.getElementById("hjemmesideSpiller2").style.visibility = "visible";
  document.getElementById("playerThree").style.visibility = "hidden";
  document.getElementById("playerFour").style.visibility = "hidden";
  document.getElementById("hjemmesideSpiller3").style.visibility = "hidden";
  document.getElementById("hjemmesideSpiller4").style.visibility = "hidden";

    isOneGo = true;
    isTwoGo = true;
}

function threeGo() {
  isFourGo = false;

  document.getElementById("playerOne").style.visibility = "visible";
  document.getElementById("playerTwo").style.visibility = "visible";
  document.getElementById("playerThree").style.visibility = "visible";
  document.getElementById("hjemmesideSpiller2").style.visibility = "visible";
  document.getElementById("hjemmesideSpiller3").style.visibility = "visible";
  document.getElementById("playerFour").style.visibility = "hidden";
  document.getElementById("hjemmesideSpiller4").style.visibility = "hidden";

  isOneGo = true;
  isTwoGo = true;
  isThreeGo = true;
}

function fourGo() {
  
  document.getElementById("playerOne").style.visibility = "visible";
  document.getElementById("playerTwo").style.visibility = "visible";
  document.getElementById("playerThree").style.visibility = "visible";
  document.getElementById("playerFour").style.visibility = "visible";
  document.getElementById("hjemmesideSpiller2").style.visibility = "visible";
  document.getElementById("hjemmesideSpiller3").style.visibility = "visible";
  document.getElementById("hjemmesideSpiller4").style.visibility = "visible";

  isOneGo = true;
  isTwoGo = true;
  isThreeGo = true;
  isFourGo = true;
}

function play() {
  if (isFourGo) {
    localStorage["spiller4"] = document.getElementById("playerFour").value;
    try {
      if(localStorage["spiller4"] == "")  throw "empty";
    }
    catch(err) {
      document.getElementById("hjemmesideSpiller1").style.color = "red";
    }
  }

  if (isThreeGo) {
    localStorage["spiller3"] = document.getElementById("playerThree").value;
  }

  if (isTwoGo) {
    localStorage["spiller2"] = document.getElementById("playerTwo").value;
  }

  localStorage["spiller1"] = document.getElementById("playerOne").value;

  //localStorage["spillere"] = [localStorage["spiller1"], localStorage["spiller2"], ]

  if (screen.width <= 1024) {
  location.replace("mobile.html");
}
  else {
    location.replace("index.html");
  }
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
