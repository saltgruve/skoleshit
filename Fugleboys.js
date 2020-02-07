window.onload = oppstart;
function oppstart() {
  document.getElementById('fugl0').addEventListener('click', fugl);
  document.getElementById('fugl1').addEventListener('click', fugl);
}
var oppgaveNr = 1;
var fugler = {
  0: {navn:"Dette er en svartmeis!", lyd:"fugl0.mp3", quiznavn:"svartmeis"},
  1: {navn:"Dette er en flaggspett!", lyd: "fugl1.mp3", quiznavn:"flaggspett"},
  2: {navn:"Dette er en gråspurv!", lyd: "fugl2.mp3", quiznavn:"gråspurv"},
  3: {navn:"Dette er en gulspurv!", lyd: "fugl3.mp3", quiznavn:"gulspurv"},
  4: {navn:"Dette er en kjøttmeis!", lyd: "fugl4.mp3", quiznavn:"kjøttmeis"},
  5: {navn:"Dette er en pilfink!", lyd: "fugl5.mp3", quiznavn:"pilfink"},
  6: {navn:"Dette er en blåmeis!", lyd: "fugl6.mp3", quiznavn:"blåmeis"},
  7: {navn:"Dette er en dompap!", lyd: "fugl7.mp3", quiznavn:"dompap"},
  8: {navn:"Dette er en dompap!", lyd: "fugl8.mp3", quiznavn:"dompap"},
}
var quizSvar = {
}
var ut = "";
var randTall;
function bruh() {
  var alderVar = document.getElementById('alder').value;
  var navnVar = document.getElementById('navn').value;
  if (alderVar < 11) {
    ut = "Hei, " +navnVar+ "! Håper du har stelt pent med småfuglene."
  }
  else if (alderVar > 10 && alderVar < 15) {
    ut = "Hei, " +navnVar+ "! Her kan du lære deg sangen til småfuglene på fuglebrettet."
  }
  else {
    ut = "Hei, " +navnVar+ "! Ikke glem og legg ut mat til fuglene om vinteren."
  }
  document.getElementById('utskrift').innerText = ut;
}
function fugl(event) {
  var i = event.target.alt;
  console.log(i)
  document.getElementById('nyttbilde').src = "fugl"+i+".jpg";
  console.log(fugler[i].navn)
  var intFugl = fugler[i].navn;
  var sangFugl = fugler[i].lyd;
  document.getElementById('fuglnavn').innerText = intFugl;
  document.getElementById('audio1').style.display = "block";
  document.getElementById('audio1').src = "fugl"+i+".mp3";
  document.getElementById('audio1').play();
  document.getElementById('nyttbilde').style.left = "20px";
  document.getElementById('nyttbilde').style.position = "absolute";
  document.getElementById('nyttbilde').style.display = "block";
  document.getElementById('storbilde').style.opacity = "0";
  document.getElementById('tilbakeBtn').style.opacity = "1";
}
function tilbake() {
  document.getElementById('nyttbilde').style.right = "0px";
  document.getElementById('nyttbilde').style.display = "none";
  document.getElementById('storbilde').style.opacity = "1";
}
function quiz() {
  document.getElementById('trekknapp').style.opacity = "1";
  document.getElementById('startQuiz').style.opacity = "0";
}
function trekke() {
  randTall = Math.floor((Math.random() * 8) + 0);
  document.getElementById('quizImg').src = "fugl"+randTall+".jpg";
  document.getElementById('quizImg').style.display = "block";
  document.getElementById('trekknapp').innerText = "Trekk ny";
  document.getElementById('buttonQuizLever').style.display ="block";
  document.getElementById('inputQuiz').style.display ="block";
  document.getElementById('audio2').style.display = "block";
  document.getElementById('audio2').src = fugler[randTall].lyd;
  document.getElementById('audio2').play();
  document.getElementById('trekknapp').style.opacity = "0";}

function leverSvar() {
  document.getElementById('inputQuiz').style.display = "none";
  document.getElementById('buttonQuizLever').style.display = "none";
  if(document.getElementById('inputQuiz').value.toLowerCase() === fugler[randTall].quiznavn){
    document.getElementById('outputQuiz').innerText = "Correcto";
    quizSvar[oppgaveNr] = "yes";
  }
  else {
    document.getElementById('outputQuiz').innerText = "Feil!"
    quizSvar[oppgaveNr] = "no";
  }
  console.log(quizSvar)
  oppgaveNr++;
  document.getElementById('trekknapp').style.opacity = "1";
}
function quizFerdig() {
  document.getElementById('quizImg').style.display = "none";
  document.getElementById('buttonQuizLever').style.display = "none";
  document.getElementById('ferdigQuiz').style.display = "none";
  document.getElementById('trekknapp').style.display = "none";
  for (const property in quizSvar) {
  if(quizSvar[property]=== "yes") {
    var img = document.createElement('img');
    img.style.height = "75px";
    img.src = "grønnfjær.jpg";
    document.getElementById('svarContainer').appendChild(img);

  }
  else{
    var img = document.createElement('img');
    img.src = "rødfjær.jpg";
    img.style.height = "75px";
    document.getElementById('svarContainer').appendChild(img);
  };
}
}
