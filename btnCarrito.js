const btnCarrito = document.getElementById('menuImg');

btnCarrito.addEventListener('click', (e) => {
  document.getElementById('contenedorSudmenu').style.display = 'block';
});

btnCarrito.addEventListener('mouseenter', (e) => {
    document.getElementById('contenedorSudmenu').style.display = 'none';
});