document.getElementById("btnSaludo").addEventListener("click", async () => {
  const respuesta = await fetch("/api/saludo");
  const data = await respuesta.json();
  document.getElementById("respuesta").textContent = data.mensaje;
});
