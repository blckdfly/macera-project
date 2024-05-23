var button = document.getElementById("myButton");
var bookDetailContainer = document.getElementById('popOut1');

var button1 = document.getElementById("myButton1");
var aboutContainer = document.getElementById('popOut2');

var blackout = document.getElementById("blackout");

bookDetailContainer.style.visibility = 'hidden';
aboutContainer.style.visibility = 'hidden';

function donePay(){
  alert("Payment Sucessfull")
  window.location.href = "index.html";
}

function showDetail(){
  bookDetailContainer.style.visibility = 'visible';
  blackout.style.visibility = 'hidden';
}

function hideDetail(){
  bookDetailContainer.style.visibility = 'hidden';
  blackout.style.visibility = 'visible';
}

function showAbout(){
  aboutContainer.style.visibility = 'visible';
}
function hiddenAbout(){
  aboutContainer.style.visibility = 'hidden';
}