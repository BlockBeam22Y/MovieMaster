function validateData({ title, year, director, duration, genre, rate, poster }) {
  return {
    title: 
      typeof title === 'string' && 
      title !== '',
    year: 
      typeof year === 'number' && 
      year > 1890 && 
      year < new Date().getFullYear() && 
      !(year % 1),
    director: 
      typeof director === 'string' && 
      director !== '',
    duration: 
      typeof duration === 'string' && 
      duration !== '' &&
      /^([0-9]+h )?[0-9]+min$/.test(duration),
    genre: 
      Array.isArray(genre) && 
      genre.length > 0 && 
      genre.every(genreName => typeof genreName === 'string' && genreName !== ''),
    rate: 
      typeof rate === 'number' && 
      rate >= 0 && 
      rate < 10 && 
      !(10*rate % 1),
    poster:
      typeof poster === 'string' && 
      poster !== '',
  };
}

module.exports = validateData;