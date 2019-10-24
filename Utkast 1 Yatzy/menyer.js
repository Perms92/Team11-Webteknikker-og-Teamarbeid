function regler(){
  var x = document.getElementById("regler");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function playerName(){
  text = String(prompt("Skriv inn ditt spillernavn her!"));
  document.getElementById("spiller1").innerHTML += text + "";
  text1 = String(prompt("Skriv inn ditt spillernavn her!"));
  document.getElementById("spiller2").innerHTML += text1 + "";
  document.getElementById('navneknapp').style.display="none";
  document.getElementById("kasteKnapp").style.visibility="visible";
  document.getElementById("brett").style.backgroundColor="#468f15";
  document.getElementById("brett").style.backgroundImage="url('https://www.transparenttextures.com/patterns/60-lines.png')";
  document.getElementById("brett").style.borderColor="saddlebrown #713F00";
}
