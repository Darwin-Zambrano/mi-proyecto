const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, "../frontend")));
app.get("/api/saludo", (req, res) => {
  res.json({ mensaje: "¡Hola desde el servidor Node.js!" });
});
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
