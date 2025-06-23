// Precio base del producto
const precio = 400000;

// Selección de elementos del DOM
const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const totalSpan = document.querySelector(".valor-total");

// Botones
const botones = document.querySelectorAll("button");
const botonMas = botones[0];
const botonMenos = botones[1];

// Estado inicial
let cantidad = 0;

// Mostrar precio base al cargar
precioSpan.textContent = precio;

// Actualizar cantidad y total
function actualizarVista() {
  cantidadSpan.textContent = cantidad;
  totalSpan.textContent = cantidad * precio;
}

// Eventos de los botones
botonMas.onclick = () => {
  cantidad++;
  actualizarVista();
};

botonMenos.onclick = () => {
  if (cantidad > 0) {
    cantidad--;
    actualizarVista();
  }
};

// Mostrar estado inicial
actualizarVista();


