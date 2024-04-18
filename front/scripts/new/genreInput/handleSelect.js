const createOptionList = require('./createOptionList');
const createSelectedList = require('./createSelectedList');

function handleSelectGenre(data) {
  const genreContainer = document.querySelector('.genre-container');
  const genreChoices = genreContainer.querySelector('.genre-choices');
  const searchInput = genreContainer.querySelector('.search-input');
  const selectDrop = genreContainer.querySelector('.select-drop');
  const genreSelect = genreContainer.querySelector('.genre-select');

  genreContainer.addEventListener('click', () => searchInput.focus());

  ['focus', 'input'].forEach(eventName => {
    searchInput.addEventListener(eventName, () => {
      selectDrop.style.display = 'flex';
      searchInput.placeholder = '';

      genreSelect.innerHTML = '';
      if (data.genre.length < 5) {
        genreSelect.append(...createOptionList(data, searchInput));
      }
    });
  });

  searchInput.addEventListener('select', () => {
    if (!data.genre.length) {
      searchInput.placeholder = 'Género';
    }

    genreSelect.innerHTML = '';
    genreChoices.innerHTML = '';
    genreChoices.classList.remove('is-invalid');
    genreChoices.append(...createSelectedList(data, searchInput));
  })

  searchInput.addEventListener('blur', () => {
    selectDrop.style.display = 'none';

    searchInput.value = '';
    if (!data.genre.length) {
      searchInput.placeholder = 'Género';
    }
  });
}

module.exports = handleSelectGenre;