function updateData(input, data) {
  switch(input.id) {
    case 'title':
    case 'director':
    case 'duration':
    case 'poster':
      data[input.id] = input.value.trim();
      break;
    case 'rate':
      const rateLabel = document.getElementById('rate-label');
      rateLabel.innerHTML = Number(input.value).toFixed(1);
    case 'year':
      data[input.id] = Number(input.value);
      break;
  }
}

module.exports = updateData;