function createSelectedList({ genre }, searchInput) {
  return genre
    .map((genreName, index) => {
      const selectedOption = document.createElement('li');
      selectedOption.classList.add('selected-option', 'border');

      const choiceSpan = document.createElement('span');
      choiceSpan.innerHTML = genreName;
      selectedOption.appendChild(choiceSpan);

      const choiceClose = document.createElement('div');
      choiceClose.innerHTML = '<span aria-hidden="true">&times;</span>';
      choiceClose.addEventListener('mousedown', () => {
        genre.splice(index, 1);
        searchInput.dispatchEvent(new Event('select'));
      })

      choiceClose.classList.add('close');
      selectedOption.appendChild(choiceClose);

      return selectedOption;
    }).toSpliced(genre.length, 0, searchInput.parentElement);
}

module.exports = createSelectedList;