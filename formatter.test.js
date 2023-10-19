const formatter = require('./formatter');

// url formatter tests
// return a formatted url
// returns null if band name, date, or state are not included

describe('Formatter', () => {
  describe('Band Name Formatter', () => {
    test('puts a hyphen inbetween every word', () => {
      expect(formatter.formatBand('Grateful Dead')).toMatch('grateful-dead');
      expect(
        formatter.formatBand('King GIZZARD and tHe liZard Wizard')
      ).toMatch('king-gizzard-and-the-lizard-wizard');
    });
    test("doesn't put any hyphens if there is only one word", () => {
      expect(formatter.formatBand('Goose')).toMatch('goose');
      expect(formatter.formatBand('PHISH')).toMatch('phish');
    });
  });
  describe('Date Formatter', () => {
    test('takes in any date and returns it in the abbreviated Month 00 format e.g. Mar 14', () => {
      expect(formatter.formatDate('2023-12-31')).toMatch('Dec 31');
      expect(formatter.formatDate('12-31-2023')).toMatch('Dec 31');
      expect(formatter.formatDate('December 31st')).toMatch('Dec 31');
      expect(formatter.formatDate('December 31')).toMatch('Dec 31');
      expect(formatter.formatDate('December 31 2023')).toMatch('Dec 31');
      expect(formatter.formatDate('Dec 31 2023')).toMatch('Dec 31');
    });
  });
});

// describe('URL Formatter', () => {
//   test('returns a formatted cashOrTrade url', () => {
//     expect(formatter.formatUrl('Grateful Dead', 'CA', '1978-12-31')).toMatch(
//       /https:/
//     );
//     expect(formatter.formatUrl('Grateful Dead', 'CA', '1978-12-31')).toMatch(
//       /cashortrade.org/
//     );
//     // expect formatter to match the exact url not just subdomain
//   });
//   // we don't want to return any page because we don't want to buy a random ticket we don't want
//   test('returns null if any inputs are empty', () => {
//     expect(formatter.formatUrl('', 'CA', '1978-12-31')).toBeNull();
//     expect(formatter.formatUrl('Grateful Dead', '', '1978-12-31')).toBeNull();
//     expect(formatter.formatUrl('Grateful Dead', 'CA', '')).toBeNull();
//   });
// });
