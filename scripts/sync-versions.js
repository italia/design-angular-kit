const LIB_PACKAGE = "projects/design-angular-kit/package.json"
const LIB_LOCK_PACKAGE = "projects/design-angular-kit/package-lock.json"
const rootPackage = require("../package.json")
const libPackage = require("../" + LIB_PACKAGE)
const libLockPackage = require("../" + LIB_LOCK_PACKAGE)
const fs = require("fs");

libPackage.version = rootPackage.version;
libLockPackage.version = rootPackage.version;
fs.writeFileSync(LIB_PACKAGE, JSON.stringify(libPackage, null, 2))
fs.writeFileSync(LIB_LOCK_PACKAGE, JSON.stringify(libLockPackage, null, 2))