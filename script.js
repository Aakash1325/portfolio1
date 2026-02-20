const text = "UI/UX Designer | Problem Solver | Creative Thinker";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}

window.onload = typeEffect;
