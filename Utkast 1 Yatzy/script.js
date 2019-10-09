var arr = [];

function fyllarray() {
  for(var h=0; h<=4; h++){
    arr[h]=Math.round(Math.random()*(6-1)+1);
  }
}

function visarray() {
  if(typeof(arr[4]) == "number"){
    for(h=0; h<=4; h++);{
  document.getElementById("utdata").innerHTML += arr + " ";
  }
}

else {
  alert("Du må generere tall først");
  }
}
