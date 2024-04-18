function clearInputs(inputs, data) {
  for (let id in inputs) {
    inputs[id].value = '';
    inputs[id].classList.remove('is-invalid');
    delete data[id];
  }
  
  data.genre = [];

  const rateLabel = document.getElementById('rate-label');
  rateLabel.innerHTML = Number(inputs.rate.value).toFixed(1);

  const genreChoices = document.querySelector('.genre-choices');
  const searchInput = document.querySelector('.search-input');
  
  searchInput.placeholder = 'Género';
  genreChoices.innerHTML = '';
  genreChoices.classList.remove('is-invalid');
  genreChoices.append(searchInput.parentElement);
  
  const validationContainer = document.querySelector('.validation-info');
  validationContainer.innerHTML = '';
}

module.exports = clearInputs;