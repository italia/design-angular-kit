import { toSemVerObject } from './utils';

describe('schematics utils tests', () => {
  describe('toSemver tests', () => {
    it('should return toSemver object given numeric semantic version', () => {
      //arrage
      const version = '19.0.1';
      //act
      const actual = toSemVerObject(version);
      //assert
      expect(actual.major).toBe('19');
      expect(actual.minor).toBe('0');
      expect(actual.patch).toBe('1');
    });

    it('should return toSemver object given ~ prefixed semantic version', () => {
      //arrage
      const version = '~19.0.0';
      //act
      const actual = toSemVerObject(version);
      expect(actual.major).toBe('19');
      expect(actual.minor).toBe('0');
      expect(actual.patch).toBe('0');
      expect(actual.semVer).toBe('~19.0.0');
    });

    it('should return toSemver object given ^ prefixed semantic version', () => {
      //arrage
      const version = '^18.1.2';
      //act
      const actual = toSemVerObject(version);
      //assert
      expect(actual.major).toBe('18');
      expect(actual.minor).toBe('1');
      expect(actual.patch).toBe('2');
      expect(actual.semVer).toBe('^18.1.2');
    });

    it('should return toSemver object given v-prefixed semantic version', () => {
      //arrage
      const version = 'v18.1.2';
      //act
      const actual = toSemVerObject(version);
      //assert
      expect(actual.semVer).toBe('18.1.2');
      expect(actual.major).toBe('18');
    });
  });
});
