const ANGULAR_VERSIONS = {
  v17: '17',
  v18: '18',
};

const KIT_VERSION_1_0_0 = '1.0.0';
const KIT_VERSION_1_1_0 = '1.1.0';
const DEFAULT = 'DEFAULT';
const LATEST = 'LATEST';

const versionsMap: Record<string, string> = {
  [DEFAULT]: KIT_VERSION_1_0_0,
  [ANGULAR_VERSIONS.v17]: KIT_VERSION_1_0_0,
  [ANGULAR_VERSIONS.v18]: KIT_VERSION_1_1_0,
  [LATEST]: KIT_VERSION_1_1_0,
};

// Get Design Angular Kit package version given Angular major version
export function getPackageVersion({ angularMajorVersion }: { angularMajorVersion: string }) {
  if (isNaN(+angularMajorVersion)) {
    throw new Error('Major version is not a number');
  }

  let version = versionsMap[DEFAULT];

  switch (angularMajorVersion) {
    case ANGULAR_VERSIONS.v17:
      version = versionsMap[ANGULAR_VERSIONS.v17];
      break;
    case ANGULAR_VERSIONS.v18:
      version = versionsMap[ANGULAR_VERSIONS.v18];
      break;
    default: {
      if (Number(angularMajorVersion) > Number(ANGULAR_VERSIONS.v18)) {
        version = versionsMap[LATEST];
      }
    }
  }

  return version;
}
