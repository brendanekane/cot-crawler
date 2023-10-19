const userInput = require('./user-input');

jest.mock('./user-input');

describe('User Input', () => {
  let spy;

  beforeAll(() => {
    // get rid of async
    spy = jest.fn();
    spy = jest.spyOn(userInput, 'getInfo');
  });

  describe('getInfo', () => {
    const sampleKeys = ['band', 'date'];
    const mockUserInput = jest.mocked(userInput);
    mockUserInput.getInfo.mockImplementation(() => {
      return {
        band: 'Grateful Dead',
        date: 'Dec 31 1978',
      };
    });
    test('returns an object', () => {
      const gettingInfo = userInput.getInfo();

      expect(spy).toHaveBeenCalled();
      expect(gettingInfo && typeof gettingInfo === 'object').toBe(true);
      expect(Array.isArray(gettingInfo)).toBe(false);
    });
    test('object has a key of the band and the date and corresponding values', () => {
      expect(userInput.getInfo()).toEqual(
        expect.objectContaining({
          band: expect.any(String),
          date: expect.any(String),
        })
      );
    });
  });
});
