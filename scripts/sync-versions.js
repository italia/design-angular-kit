const LIB_PACKAGE = "projects/design-angular-kit/package.json"
const rootPackage = require("../package.json")
const libPackage = require("../" + LIB_PACKAGE)
const fs = require("fs");

libPackage.version = rootPackage.version;
fs.writeFileSync(LIB_PACKAGE, JSON.stringify(libPackage, null, 2))
