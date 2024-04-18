const axios = require('axios');
const handleSelectGenre = require('./genreInput/handleSelect');
const updateData = require('./updateData');
const clearInputs = require('./clearInputs');
const validateData = require('./validateData');
const displayValidationAlert = require('./displayValidationAlert');

module.exports = function () {
  const inputIds = ['title', 'year', 'director', 'duration', 'rate', 'poster'];

  const inputs = {};
  const data = { genre: [] };
  
  inputIds.forEach(id => {
    inputs[id] = document.getElementById(id);
    inputs[id].addEventListener('input', () => {
      updateData(inputs[id], data);
      inputs[id].classList.remove('is-invalid');
    });
  });

  handleSelectGenre(data);

  const submitButton = document.getElementById('submit-button');
  const clearButton = document.getElementById('clear-button');
  
  submitButton.addEventListener('click', e => {
    e.preventDefault();

    const validationData = validateData(data);
    let invalidFields = Object.keys(validationData).filter(id => !validationData[id]);

    if (invalidFields.length) {
      invalidFields.forEach(id => {
        const input = id !== 'genre' ? inputs[id] : document.querySelector('.genre-choices');
        input.classList.add('is-invalid');
      })
      
      displayValidationAlert({ message: 'Datos inválidos' });
    } else {
      axios.post('http://localhost:3000/movies', data)
        .then(res => {
          clearInputs(inputs, data);
          displayValidationAlert({ OK: true });
        })
        .catch(err => displayValidationAlert(err));
    }
  });

  clearButton.addEventListener('click', () => {
    clearInputs(inputs, data);
  });
};