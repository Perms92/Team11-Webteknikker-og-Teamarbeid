let oneP = document.getElementById("playerOne");
let twoP = document.getElementById("playerTwo");
let threeP = document.getElementById("playerThree");
let fourP = document.getElementById("playerFour");

function oneGo() {
  twoP.style.visibility = "hidden";
  threeP.style.visibility = "hidden";
  fourP.style.visibility = "hidden";
}

function twoGo() {
  twoP.style.visibility = "visible";
  threeP.style.visibility = "hidden";
  fourP.style.visibility = "hidden";
}

function threeGo() {
  twoP.style.visibility = "visible";
  threeP.style.visibility = "visible";
  fourP.style.visibility = "hidden";
}

function fourGo() {
  twoP.style.visibility = "visible";
  threeP.style.visibility = "visible";
  fourP.style.visibility = "visible";
}

function play() {
  localStorage["spiller1"] = document.getElementById("playerOne").value;
  localStorage["spiller2"] = document.getElementById("playerTwo").value;
  localStorage["spiller3"] = document.getElementById("playerThree").value;
  localStorage["spiller4"] = document.getElementById("playerFour").value;

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
