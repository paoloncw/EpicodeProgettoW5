// Bloom — Week Project Settimana V
//
// Aggiungi qui il codice JavaScript se serve (es. modale, scroll handler).
// Per la Versione Base spesso non serve niente: tutto si fa in CSS.


const header= document.getElementById("header");
window.addEventListener("scroll", function() {
    if (window.scrollY > 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


const bottoneTema = document.getElementById("tema");
bottoneTema.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});