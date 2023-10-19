const formatter = {
  formatBand: (band) => {
    const bandArr = band.split(' ');

    if (bandArr.length === 1) return band.toLowerCase();

    for (let i = 0; i < bandArr.length; i++) {
      bandArr[i] = bandArr[i].toLowerCase();
    }

    return bandArr.join('-');
  },
  formatDate: (date) => {},
};

module.exports = formatter;
