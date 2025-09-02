document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Ejemplo: mostrar un mensaje de éxito usando Bootstrap
  alert('¡Formulario enviado correctamente!\n\n' +
    'Nombre: ' + firstName +
    '\nApellido: ' + lastName +
    '\nEmail: ' + email +
    '\nMensaje: ' + message);
});
