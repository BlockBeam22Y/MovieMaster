function createMovieGenre(movie) {
  const { genre } = movie;
  
  const movieGenre = document.createElement('div');
  movieGenre.classList.add('movie-genre');
  
  genre.forEach(g => {
      const movieGenreSpan = document.createElement('span');
      movieGenreSpan.innerHTML = g;
      movieGenreSpan.classList.add('genre-span');
      movieGenre.appendChild(movieGenreSpan);
  });

  return movieGenre;
}

module.exports = createMovieGenre;