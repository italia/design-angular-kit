const ANGULAR_VERSIONS = {
  v17: '17',
  v18: '18',
  v19: '19',
};

const KIT_VERSION_1_0_0 = '1.0.0';
const KIT_VERSION_1_1_0 = '1.1.0';
const KIT_VERSION_1_2_0 = '1.2.0';
const DEFAULT = 'DEFAULT';
const LATEST = 'LATEST';

const versionsMap: Record<string, string> = {
  [DEFAULT]: KIT_VERSION_1_0_0,
  [ANGULAR_VERSIONS.v17]: KIT_VERSION_1_0_0,
  [ANGULAR_VERSIONS.v18]: `~${KIT_VERSION_1_1_0}`,
  [ANGULAR_VERSIONS.v19]: `~${KIT_VERSION_1_2_0}`,
  [LATEST]: KIT_VERSION_1_2_0,
};

// Get Design Angular Kit package version given Angular major version
export function getPackageVersion({ angularMajorVersion }: { angularMajorVersion: string }) {
  if (isNaN(+angularMajorVersion)) {
    throw new Error('Major version is not a number');
  }

  if (Number(angularMajorVersion) > Number(ANGULAR_VERSIONS.v19)) {
    return versionsMap[LATEST];
  }

  return versionsMap[angularMajorVersion] ?? versionsMap[DEFAULT];
}
