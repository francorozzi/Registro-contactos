document.getElementById('registroForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var form = event.target;
  if (form.checkValidity() === false) {
    event.stopPropagation();
    form.classList.add('was-validated');
    return;
  }
  form.classList.add('was-validated');
  // Mostrar mensaje de éxito
  alert('¡Registro enviado correctamente!');
});
