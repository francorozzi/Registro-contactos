const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Array en memoria para almacenar los contactos
let contacts = [];

// Ruta para obtener todos los contactos
app.get('/contacts', (req, res) => {
  res.json(contacts);
});

// Ruta para agregar un nuevo contacto
app.post('/contacts', (req, res) => {
  const { name, email, phone } = req.body;
  
  // Validación básica
  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }
  
  const newContact = {
    id: Date.now(), // ID único basado en timestamp
    name,
    email,
    phone
  };
  
  contacts.push(newContact);
  res.status(201).json(newContact);
});

// Ruta para eliminar un contacto
app.delete('/contacts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = contacts.length;
  
  contacts = contacts.filter(contact => contact.id !== id);
  
  if (contacts.length === initialLength) {
    return res.status(404).json({ error: 'Contacto no encontrado' });
  }
  
  res.status(200).json({ message: 'Contacto eliminado correctamente' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});