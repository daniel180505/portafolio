document.addEventListener("DOMContentLoaded", function() {
  const text = "Desarrollador web Front-end";
  let index = 0;
  const typingSpeed = 80; // Velocidad de escritura en milisegundos
  const cursor = '<span class="cursor">|</span>'; // Cursor parpadeante

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



