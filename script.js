function mostrarContenido(idCarta) {
    var cartas = document.querySelectorAll('.carta');
    cartas.forEach(function(carta) {
      carta.style.display = 'none';
    });
  
    var carta = document.getElementById(idCarta);
    carta.style.display = 'block';
  
    var btnCerrarCarta = document.getElementById('cerrarCarta');
    btnCerrarCarta.style.display = 'block';
    btnCerrarCarta.onclick = function() {
      carta.style.display = 'none';
      btnCerrarCarta.style.display = 'none';
    }
  }
 