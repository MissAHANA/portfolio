// script.js
const textArray = [
  "Aspiring Data Scientist",
  "Researcher",
  "ML Enthusiast"
];

let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textIndex].length) {
    document.getElementById("typed-text").textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000); // Wait before erasing
  }
}

function erase() {
  if (charIndex > 0) {
    document.getElementById("typed-text").textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const phrases = [
    { id: "typed-1", text: "Aspiring Data Scientist", delay: 500 },
    { id: "typed-2", text: "Researcher", delay: 2000 },
    { id: "typed-3", text: "ML Enthusiast", delay: 3500 }
  ];

  phrases.forEach(({ id, text, delay }) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      let i = 0;
      const type = () => {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          element.style.opacity = 1;
          i++;
          setTimeout(type, 50);
        }
      };
      type();
    }, delay);
  });
});

