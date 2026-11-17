// ============================================================
// JavaScript del portfolio
// ============================================================

// Validación de formularios de Bootstrap (ya lo hicimos en el Ejercicio 7)
document.querySelectorAll('.needs-validation').forEach(form => {
  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
  });
});

// ===== EFECTO MÁQUINA DE ESCRIBIR =====
  const palabras = ["Desarrollador Web.", "Programador Junior.", "Apasionado de los videojuegos."];
  let i = 0; // Índice de la palabra actual
  let j = 0; // Índice de la letra actual
  let borrando = false;
  const elementoTexto = document.getElementById("maquina-escribir");

  if (elementoTexto) {
      function escribir() {
          const palabraActual = palabras[i];
          
          if (borrando) {
              elementoTexto.textContent = palabraActual.substring(0, j - 1);
              j--;
          } else {
              elementoTexto.textContent = palabraActual.substring(0, j + 1);
              j++;
          }

          let velocidad = borrando ? 50 : 100; // Velocidad de borrar y escribir

          if (!borrando && j === palabraActual.length) {
              // Pausa cuando termina de escribir la palabra
              velocidad = 2000; 
              borrando = true;
          } else if (borrando && j === 0) {
              // Pausa antes de empezar la siguiente palabra
              borrando = false;
              i++;
              if (i === palabras.length) i = 0;
              velocidad = 500; 
          }

          setTimeout(escribir, velocidad);
      }
      // Iniciar el efecto
      setTimeout(escribir, 1000);
  }