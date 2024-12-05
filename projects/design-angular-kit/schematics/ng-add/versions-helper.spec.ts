import { getPackageVersion } from './versions-helper';

describe('schematics versions helper tests', () => {
  it('should return v1.0.0 for Angular v17', () => {
    //arrange
    const angularMajorVersion = '17';
    //act
    const actual = getPackageVersion({ angularMajorVersion });
    //assert
    expect(actual).toBe('1.0.0');
  });

  it('should return v1.1.0 for Angular v18', () => {
    //arrange
    const angularMajorVersion = '18';
    //act
    const actual = getPackageVersion({ angularMajorVersion });
    //assert
    expect(actual).toBe('~1.1.0');
  });

  it('should return v1.1.0 for Angular v19', () => {
    //arrange
    const angularMajorVersion = '19';
    //act
    const actual = getPackageVersion({ angularMajorVersion });
    //assert
    expect(actual).toBe('~1.2.0');
  });
});
