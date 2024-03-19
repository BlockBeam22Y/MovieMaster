function displayErrorAlert(error) {
  const cardContainer = document.querySelector('.movie-container');
  cardContainer.innerHTML = '';

  const errorAlert = document.createElement('div');
  errorAlert.innerHTML = `Error al obtener los datos: ${error.message}`;
  errorAlert.classList.add('alert', 'alert-danger');

  cardContainer.appendChild(errorAlert);
}

module.exports = displayErrorAlert;