import { getPackageVersion } from './versions-helper';

describe('schematics versions helper tests', () => {
  it('should return ^18.0.0 for Angular v18', () => {
    //arrange
    const angularMajorVersion = '18';
    //act
    const actual = getPackageVersion({ angularMajorVersion });
    //assert
    expect(actual).toBe('^18.0.0');
  });

  it('should return ^19.0.0 for Angular v19', () => {
    //arrange
    const angularMajorVersion = '19';
    //act
    const actual = getPackageVersion({ angularMajorVersion });
    //assert
    expect(actual).toBe('^19.0.0');
  });

  it('should return ^20.0.0 for Angular v20', () => {
    //arrange
    const angularMajorVersion = '20';
    //act
    const actual = getPackageVersion({ angularMajorVersion });
    //assert
    expect(actual).toBe('^20.0.0');
  });

  it('should return ^21.0.0 for Angular v21', () => {
    //arrange
    const angularMajorVersion = '21';
    //act
    const actual = getPackageVersion({ angularMajorVersion });
    //assert
    expect(actual).toBe('^21.0.0');
  });
});
