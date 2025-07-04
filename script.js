const claveSecreta = "Elgamocapo"; // ← cámbiala por tu contraseña

// Guardar comentario
document.getElementById("formulario")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const comentario = document.getElementById("comentario").value.trim();
  const mensaje = document.querySelector(".mensaje");

  if (nombre && comentario) {
    const datos = JSON.parse(localStorage.getItem("comentarios") || "[]");
    datos.push({ nombre, comentario });
    localStorage.setItem("comentarios", JSON.stringify(datos));
    mensaje.textContent = "¡Comentario enviado!";
    this.reset();
  } else {
    mensaje.textContent = "Completa todos los campos.";
  }
});

// Acceder a admin.html si contraseña es correcta
function accederAdmin() {
  const clave = document.getElementById("clave").value;
  if (clave === claveSecreta) {
    window.location.href = "admin.html";
  } else {
    alert("Contraseña incorrecta.");
  }
}

// Mostrar comentarios en admin.html
function mostrarComentarios() {
  const lista = document.getElementById("lista-comentarios");
  const datos = JSON.parse(localStorage.getItem("comentarios") || "[]");
  lista.innerHTML = datos.length
    ? datos.map((d) => `<li><strong>${d.nombre}:</strong> ${d.comentario}</li>`).join("")
    : "<li>No hay comentarios aún.</li>";
}