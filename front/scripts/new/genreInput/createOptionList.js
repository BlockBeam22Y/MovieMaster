const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Thriller",
  "War",
  "Western"
];

function createOptionList({ genre }, searchInput) {
  return genres
    .filter(genreName => {
      return !genre.includes(genreName) && genreName.toLowerCase().includes(searchInput.value.toLowerCase())
    }).map(genreName => {
      const genreOption = document.createElement('li');
      genreOption.innerHTML = genreName;
      genreOption.classList.add('genre-option', 'list-group-item');

      genreOption.addEventListener('mouseover', () => {
        genreOption.classList.add('active');
      });

      genreOption.addEventListener('mouseleave', () => {
        genreOption.classList.remove('active');
      });

      genreOption.addEventListener('mousedown', () => {
        genre.push(genreName);
        genre.sort();
        searchInput.dispatchEvent(new Event('select'));
      })

      return genreOption;
    });
}

module.exports = createOptionList;