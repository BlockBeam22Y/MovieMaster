function displayValidationAlert({ message, OK }) {
  const validationContainer = document.querySelector('.validation-info');
  validationContainer.innerHTML = '';

  const validationAlert = document.createElement('div');
  validationAlert.classList.add('alert')
  if (OK) {
    validationAlert.innerHTML = 'Datos enviados correctamente';
    validationAlert.classList.add('alert-success');
  } else {
    validationAlert.innerHTML = `Error al enviar los datos: ${message}`;
    validationAlert.classList.add('alert-danger');
  }

  validationContainer.appendChild(validationAlert);
}

module.exports = displayValidationAlert;