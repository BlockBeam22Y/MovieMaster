function createMovieRate(movie) {
  const { rate } = movie;
  
  const rateContainer = document.createElement('div');
  rateContainer.classList.add('movie-rate');

  const rateBar = document.createElement('div');
  rateBar.classList.add('rate-bar');

  const rateBarContent = document.createElement('div');
  rateBarContent.style.width = `${10 * rate}%`;

  if (rate < 4) {
      rateBarContent.classList.add('bg-danger');
  } else if (rate < 7) {
      rateBarContent.classList.add('bg-warning');
  } else {
      rateBarContent.classList.add('bg-success');
  }

  rateBarContent.classList.add('h-100');
  rateBar.appendChild(rateBarContent);

  rateContainer.appendChild(rateBar);
  
  const rateLabel = document.createElement('p');
  rateLabel.innerHTML = `${rate}/10`;
  rateLabel.classList.add('m-0', 'font-weight-bold');
  rateContainer.appendChild(rateLabel);
  
  return rateContainer;
}

module.exports = createMovieRate;