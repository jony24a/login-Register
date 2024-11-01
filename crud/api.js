// Importar las dependencias necesarias
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Crear una instancia de Express
const app = express();

// Middleware para analizar solicitudes JSON
app.use(bodyParser.json());

// Middleware para permitir solicitudes de otros dominios (CORS)
app.use(cors());

// Datos inicializados con datos almacenados localmente o un array vacío
let data = JSON.parse(localStorage.getItem("formData")) || [];

// Endpoint para obtener todos los datos
app.get('/data', (req, res) => {
  res.json(data);
});

// Endpoint para agregar un nuevo dato
app.post('/data', (req, res) => {
  const newData = req.body;
  data.push(newData);
  localStorage.setItem("formData", JSON.stringify(data));
  res.status(201).json({ message: 'Dato agregado correctamente' });
});

// Endpoint para actualizar un dato existente
app.put('/data/:index', (req, res) => {
  const index = req.params.index;
  const updatedData = req.body;
  data[index] = updatedData;
  localStorage.setItem("formData", JSON.stringify(data));
  res.status(200).json({ message: 'Dato actualizado correctamente' });
});

// Endpoint para eliminar un dato existente
app.delete('/data/:index', (req, res) => {
  const index = req.params.index;
  data.splice(index, 1);
  localStorage.setItem("formData", JSON.stringify(data));
  res.status(200).json({ message: 'Dato eliminado correctamente' });
});

// Iniciar el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
