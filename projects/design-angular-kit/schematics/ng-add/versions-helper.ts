const ANGULAR_VERSION_17 = '17';
const ANGULAR_VERSION_18 = '18';

const KIT_VERSION_1_0_0 = '1.0.0';
const KIT_VERSION_1_1_0 = '1.1.0';
const DEFAULT = 'DEFAULT';

const versionsMap: Record<string, string> = {
  [DEFAULT]: KIT_VERSION_1_0_0,
  [ANGULAR_VERSION_17]: KIT_VERSION_1_0_0,
  [ANGULAR_VERSION_18]: KIT_VERSION_1_1_0,
};

export function getPackageVersion({ angularMajorVersion }: { angularMajorVersion: string }) {
  let version = versionsMap[DEFAULT];

  switch (angularMajorVersion) {
    case ANGULAR_VERSION_17:
      version = versionsMap[ANGULAR_VERSION_17];
      break;
    case ANGULAR_VERSION_18:
      version = versionsMap[ANGULAR_VERSION_18];
      break;
    default:
      version = versionsMap[DEFAULT];
  }

  return version;
}
