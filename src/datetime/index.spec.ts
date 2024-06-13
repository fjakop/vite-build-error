import {describe, expect, it} from 'vitest';
import {dateAndTimeConfig, formatDateAndTime} from './';

describe('datetime', () => {
  describe('dateAndTimeConfig', () => {
    it('should return correct date and time configuration for the given language', () => {
      const config = dateAndTimeConfig('en-US');
      const formattedDate = config.format(new Date('2024-04-19T12:00:00'));

      expect(formattedDate).toMatch('04/19/2024, 12:00:00 PM');
    });
  });

  describe('formatDateAndTime by navigator.language', () => {
    it("should return formatted date and time according to the user's locale, in this case german", () => {
      Object.defineProperty(global.navigator, 'language', {
        value: 'de-DE',
        configurable: true,
      });

      const mockDate = new Date('2024-04-19T12:00:00');

      const formattedDateTime = formatDateAndTime(mockDate);

      expect(formattedDateTime).toMatch('19.04.2024, 12:00:00');
    });

    it("should return formatted date and time according to the user's locale, in this case US english", () => {
      Object.defineProperty(global.navigator, 'language', {
        value: 'en-US',
        configurable: true,
      });

      const mockDate = new Date('2024-04-19T12:00:00');

      const formattedDateTime = formatDateAndTime(mockDate);

      expect(formattedDateTime).toMatch('04/19/2024, 12:00:00 PM');
    });
  });
});
