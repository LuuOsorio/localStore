let btnGuardar = document.getElementById("btnGuardar");
let btnEliminar = document.getElementById("btnEliminar");
let unNombre = document.getElementById("txtNombre");
let mensaje = document.getElementById("mensaje");

function guardarNombre() {
  if (unNombre) {
    let nombre = unNombre.value;
    localStorage.setItem("nombre", nombre);
  }
}

function verNombre() {
  if (mensaje) {
    let nombreGuardado = localStorage.getItem("nombre");
    
    if (nombreGuardado) {
      mensaje.innerText = `Hola ${nombreGuardado}. Bienvenido/a de nuevo`;
    } else {
      mensaje.innerText = "Por favor ve al index e ingresa tu nombre.";
    }
  }
}

function eliminaNombre() {
  localStorage.removeItem("nombre");
}

window.addEventListener('load', function() {
  if (btnGuardar) {
    btnGuardar.addEventListener("click", guardarNombre);
  }

  if (btnEliminar) {
    btnEliminar.addEventListener("click", eliminaNombre);
  }

  verNombre();  // Esta función ahora maneja la lógica completa
});
