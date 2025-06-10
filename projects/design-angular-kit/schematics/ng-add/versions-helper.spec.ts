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

  it('should return v1.4.0 for Angular v18', () => {
    //arrange
    const angularMajorVersion = '18';
    //act
    const actual = getPackageVersion({ angularMajorVersion });
    //assert
    expect(actual).toBe('~1.4.0');
  });

  it('should return v1.5.0 for Angular v19', () => {
    //arrange
    const angularMajorVersion = '19';
    //act
    const actual = getPackageVersion({ angularMajorVersion });
    //assert
    expect(actual).toBe('~1.5.0');
  });

  it('should return default version for a past Angular version (previous to v17)', () => {
    //arrange
    const angularMajorVersion = '15';
    //act
    const actual = getPackageVersion({ angularMajorVersion });
    //assert
    expect(actual).toBe('1.0.0');
  });

  it('should return latest version for the next stable Angular version', () => {
    //arrange
    const angularMajorVersion = '20';
    //act
    const actual = getPackageVersion({ angularMajorVersion });
    //assert
    expect(actual).toBe('1.5.0');
  });
});
