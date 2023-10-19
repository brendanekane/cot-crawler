const formatter = require('./formatter');

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
      expect(formatter.formatDate('Hello There')).toBeNull;
      expect(formatter.formatDate('2023/12/31')).toMatch('Dec 31');
      expect(formatter.formatDate('2023-12-31')).toMatch('Dec 31');
      expect(formatter.formatDate('12-31-2023')).toMatch('Dec 31');
      expect(formatter.formatDate('December 31st')).toMatch('Dec 31');
      expect(formatter.formatDate('December 31')).toMatch('Dec 31');
      expect(formatter.formatDate('December 31 2023')).toMatch('Dec 31');
      expect(formatter.formatDate('Dec 31 2023')).toMatch('Dec 31');
    });
  });
});
