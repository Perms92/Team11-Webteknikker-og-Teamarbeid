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
    let spillerEn = document.getElementById("playerOne").value;
    let spillerTo = document.getElementById("playerTwo").value;
    let spillerTre = document.getElementById("playerThree").value;
    let spillerFire = document.getElementById("playerFour").value;
}