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
}
