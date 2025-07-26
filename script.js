let currentcn;
let total = 0;
let right = 0;
var r = document.querySelector(":root");
setInterval(function(){
	document.querySelector(".score").innerHTML = right+"/"+total;
}, 10);
function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(/[\s-_]+/) // Split by spaces, hyphens, or underscores
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
async function getRandomKeyValuePair() {
	
  try {
    const response = await fetch('cntrys.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const jsonObj = await response.json();
    const keys = Object.keys(jsonObj);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomKey = keys[randomIndex];
    const randomValue = jsonObj[randomKey];

    return randomValue;
  } catch (error) {
    console.error('Error:', error);
  }
}
async function shuffle() {
	document.querySelector(".coolthing").value = "";
	document.querySelector(".coolthing").focus();
	const idkatp = await getRandomKeyValuePair();
	document.querySelector(".flag").src = "https://flagcdn.com/w1280/"+idkatp.code.toLowerCase()+".png";
	document.getElementById('favicon').setAttribute('href', "https://flagcdn.com/w1280/"+idkatp.code.toLowerCase()+".png");
	currentcn = idkatp.name;
}
function diezneuf() {
	if (currentcn == document.querySelector(".coolthing").value.toLowerCase()) {
		document.querySelector(".changer").innerHTML = "Correct!";
		right++;
	}
	else {
		document.querySelector(".changer").innerHTML = "Incorrect. Correct answer: " + toTitleCase(currentcn);
	}
	total++;
	shuffle();
}
shuffle();


  document.querySelector('.coolthing').addEventListener('keydown', function(event) {
    if (event.key === "Enter" || event.keyCode === 13) {  // Check if Enter key was pressed
      event.preventDefault();  // Prevent default form submit or other actions
      document.querySelector('.myButton').click();  // Trigger button click
    }
  });
function closePopup() {
  document.querySelector(".popup2").className = "nodisp";
  document.querySelector(".hide").className = "settings";
}

function Popup() {
  document.querySelector(".nodisp").className = "popup2";
  document.querySelector(".settings").className = "hide";
}

function whiteTheme() {
  r.style.setProperty("--bg", "hsl(0, 0%, 100%)");
  r.style.setProperty("--fg", "hsl(0, 0%, 0%)");
  r.style.setProperty("--wr", "hsl(0, 100%, 50%)");
}

function blackTheme() {
  r.style.setProperty("--bg", "hsl(0, 0%, 0%)");
  r.style.setProperty("--fg", "hsl(0, 0%, 100%)");
  r.style.setProperty("--wr", "hsl(0, 100%, 50%)");
}

function blueTheme() {
  r.style.setProperty("--bg", "hsl(210, 97%, 18%)");
  r.style.setProperty("--fg", "hsl(0, 0%, 100%)");
  r.style.setProperty("--wr", "hsl(0, 100%, 50%)");
}

function redTheme() {
  r.style.setProperty("--bg", "hsl(0, 97%, 27%)");
  r.style.setProperty("--fg", "hsl(0, 0%, 100%)");
  r.style.setProperty("--wr", "hsl(0, 0%, 100%)");
}

function greenTheme() {
  r.style.setProperty("--bg", "hsl(120, 97%, 27%)");
  r.style.setProperty("--fg", "hsl(0, 0%, 100%)");
  r.style.setProperty("--wr", "hsl(0, 100%, 50%)");
}

function orangeTheme() {
  r.style.setProperty("--bg", "hsl(24, 100%, 50%)");
  r.style.setProperty("--fg", "hsl(0, 0%, 100%)");
  r.style.setProperty("--wr", "hsl(0, 100%, 50%)");
}

function yellowTheme() {
  r.style.setProperty("--bg", "hsl(54, 100%, 50%)");
  r.style.setProperty("--fg", "hsl(0, 0%, 0%)");
  r.style.setProperty("--wr", "hsl(0, 100%, 50%)");
}

function purpleTheme() {
  r.style.setProperty("--bg", "hsl(277, 97%, 24%)");
  r.style.setProperty("--fg", "hsl(0, 0%, 100%)");
  r.style.setProperty("--wr", "hsl(0, 100%, 50%)");
}

function latoFont() {
  r.style.setProperty("--fnt", "'Lato', sans-serif");
}

function notoFont() {
  r.style.setProperty("--fnt", "'Noto Serif', serif");
}

function robFont() {
  r.style.setProperty("--fnt", "'Roboto Mono', monospace");
}

function ralFont() {
  r.style.setProperty("--fnt", "'Raleway', sans-serif");
}

function pacFont() {
  r.style.setProperty("--fnt", "'Pacifico', sans-serif");
}

function nabFont() {
  r.style.setProperty("--fnt", "'Nabla', sans-serif");
}

function pirFont() {
  r.style.setProperty("--fnt", "'Pirata One', sans-serif");
}

function aluFont() {
  r.style.setProperty("--fnt", "'Alumni Sans Pinstripe', sans-serif");
}
