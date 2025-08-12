/* Inicio*/

document.addEventListener("DOMContentLoaded", function() {
  const text = "Desarrollador web Full Stack";
  let index = 0;
  const typingSpeed = 75; 
  const cursor = '<span class="cursor">|</span>';

  function typeWriter() {
    if (index < text.length) {
      document.getElementById("typing-text").innerHTML = text.substring(0, index + 1) + cursor;
      index++;
      setTimeout(typeWriter, typingSpeed);
    } else {
      document.getElementById("typing-text").innerHTML = text; // Remueve el cursor al final
    }
  }

  typeWriter();
});

/* Scroll */

// Mostrar/ocultar el botón de desplazamiento hacia arriba
window.addEventListener("scroll", function() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (window.scrollY > 200) { // Mostrar el botón cuando se desplaza hacia abajo 300px
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Desplazarse hacia arriba cuando se hace clic en el botón
document.getElementById("scrollToTopBtn").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

