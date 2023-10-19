const prompt = require('prompt-sync')();
const formatter = require('./formatter');

const userInput = {
  getBand: () => {
    let band = prompt('What band do you want tickets for?: ', '');
    while (band == '' || band == null) {
      band = prompt('What band do you want tickets for?: ', '');
    }
    return formatter.formatBand(band);
  },
  getDate: () => {
    // wrap the prompt in formatDate when it is done. formatDate will return null if an invalid date is supplied
    let date = formatter.formatDate(
      prompt(
        'What date is the show? Use abbreviated month format e.g. Mar 14: ',
        ''
      )
    );
    while (date == '' || date == null) {
      date = formatter.formatDate(
        prompt(
          'What date is the show? Use abbreviated month format e.g. Mar 14: ',
          ''
        )
      );
    }
    return date;
  },
  getInfo: () => {
    let band = prompt('What band do you want tickets for?: ', '');
    while (band == '' || band == null) {
      band = prompt('What band do you want tickets for?: ', '');
    }

    let date = formatter.formatDate(
      prompt(
        'What date is the show? Use abbreviated month format e.g. Mar 14: ',
        ''
      )
    );
    while (date == '' || date == null) {
      date = formatter.formatDate(
        prompt(
          'INVALID DATE! What date is the show? Use abbreviated month format e.g. Mar 14: ',
          ''
        )
      );
    }
    return {
      band: formatter.formatBand(band),
      date,
    };
  },
};

module.exports = userInput;
