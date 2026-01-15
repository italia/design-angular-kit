const ANGULAR_VERSIONS = {
  v17: '17',
  v18: '18',
  v19: '19',
  v20: '20',
  v21: '21',
};

// const KIT_VERSION_1_0_0 = '1.0.0';
// const KIT_VERSION_1_4_0 = '1.4.0';
// const KIT_VERSION_1_5_0 = '1.5.0';

const DEFAULT = 'DEFAULT';
const LATEST = 'LATEST';

const versionsMap: Record<string, string> = {
  [DEFAULT]: '^21.0.0',
  [ANGULAR_VERSIONS.v18]: `^18.0.0`,
  [ANGULAR_VERSIONS.v19]: `^19.0.0`,
  [ANGULAR_VERSIONS.v20]: `^20.0.0`,
  [ANGULAR_VERSIONS.v21]: `^21.0.0`,
  [LATEST]: '^21.0.0',
};

// Get Design Angular Kit package version given Angular major version
export function getPackageVersion({ angularMajorVersion }: { angularMajorVersion: string }) {
  if (isNaN(+angularMajorVersion)) {
    throw new Error('Major version is not a number');
  }

  if (Number(angularMajorVersion) > Number(ANGULAR_VERSIONS.v21)) {
    return versionsMap[LATEST];
  }

  return versionsMap[angularMajorVersion] ?? versionsMap[DEFAULT];
}
