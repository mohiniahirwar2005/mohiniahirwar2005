
const texts = ["Web Developer", "Freelancer", "Problem Solver"];
let count = 0, index = 0, currentText = "", letter = "";

(function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.getElementById("typing-text").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500);
  } else {
    setTimeout(type, 100);
  }
})();


const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  if (body.getAttribute("data-theme") === "dark") {
    body.removeAttribute("data-theme");
    themeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
    localStorage.setItem("theme", "light");
  } else {
    body.setAttribute("data-theme", "dark");
    themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
    localStorage.setItem("theme", "dark");
  }
});

if (localStorage.getItem("theme") === "dark") {
  body.setAttribute("data-theme", "dark");
  themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
}


(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        event.preventDefault()
        alert("Message sent! Main jald reply karunga :)")
        form.reset()
        form.classList.remove('was-validated')
        return
      }
      form.classList.add('was-validated')
    }, false)
  })
})()


window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('shadow');
  } else {
    navbar.classList.remove('shadow');
  }
});