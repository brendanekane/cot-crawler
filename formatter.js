const formatter = {
  formatBand: (band) => {
    const bandArr = band.split(' ');

    if (bandArr.length === 1) return band.toLowerCase();

    for (let i = 0; i < bandArr.length; i++) {
      bandArr[i] = bandArr[i].toLowerCase();
    }

    return bandArr.join('-');
  },
  formatDate: (string) => {
    let date, formatted;
    if (string.includes('-') && string.split('-')[0].length === 4) {
      formatted = string.split('-').slice(1).join('-');
      date = new Date(formatted);
    } else if (string.includes('st')) {
      formatted = string.replace(/st/, '');
      date = new Date(formatted);
    } else if (string.includes('nd')) {
      formatted = string.replace(/nd/, '');
      date = new Date(formatted);
    } else if (string.includes('rd')) {
      formatted = string.replace(/rd/, '');
      date = new Date(formatted);
    } else if (string.includes('th')) {
      formatted = string.replace(/th/, '');
      date = new Date(formatted);
    } else {
      date = new Date(string);
    }

    if (date == 'Invalid Date') return null;

    const formattedDate = date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });

    return formattedDate;
  },
};

module.exports = formatter;
