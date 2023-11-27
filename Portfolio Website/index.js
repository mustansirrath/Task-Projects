const openBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("menu-close");
const ul = document.getElementById("links");

openBtn.addEventListener("click", showMenu);
closeBtn.addEventListener("click", hideMenu);

function showMenu() {
  ul.classList.add("active");
}

function hideMenu() {
  ul.classList.remove("active");
}

const generateQuotes = document.getElementById("quotesGenerate");
const displayQuotes = document.getElementById("quotes");

const arrforquotes = [
  "'Any fool can write code that a computer can understand, Good programmers write code that humans can understand.'",
  "'If, at first, you do not succeed, call it version 1.0.'",
  "'Experience is the name everyone gives to their mistakes'",
  "'Code is like humor. When you have to explain it, it’s bad'",
  "'Make it work, make it right, make it fast'",
  "'If you tell the truth, you don’t have to remember anything'",
  "'If you don’t like something, change it. If you can’t change it, change your attitude'",
  "'Programmer: A machine that turns coffee into code'",
  "'Computers are fast; developers keep them slow.'",
  "'When I wrote this code, only God and I understood what I did. Now only God knows.'",
  "'I’m not a great programmer; I’m just a good programmer with great habits.'",
];

generateQuotes.addEventListener("click", ChangeTheText);

let i = 0;
function ChangeTheText() {
  if (i < arrforquotes.length) {
    displayQuotes.innerHTML = arrforquotes[i];
    i++;
  } else {
    i = 0;
  }
}

function darkMode() {
  let contactsec = document.getElementById('contact')
  let darkBtn = document.getElementById("dark-toggle");
  let lightBtn = document.getElementById("light-toggle");
  
  lightBtn.style.display = "block";
  darkBtn.style.display = "none";
  
  document.body.classList.remove("light");
  document.body.classList.add("dark");
  contactsec.classList.add('contactbgdark')
  contactsec.classList.remove('contactbg')
  
}

function lightMode() {
  let darkBtn = document.getElementById("dark-toggle");
  let lightBtn = document.getElementById("light-toggle");
  let contactsec = document.getElementById('contact')
  
  lightBtn.style.display = "none";
  darkBtn.style.display = "block";
  
  document.body.classList.remove("dark");
  document.body.classList.add("light");
  contactsec.classList.add('contactbg')
  contactsec.classList.remove('contactbgdark')
}

