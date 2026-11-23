// Verifica che la major della Angular CLI installata globalmente
// (feature `angular-cli` del devcontainer) coincida con quella di @angular/core.
const { execSync } = require('child_process');
const path = require('path');

const major = version => version.split('.')[0];

const globalRoot = execSync('npm root -g', { encoding: 'utf8' }).trim();

let cliVersion;
try {
  cliVersion = require(path.join(globalRoot, '@angular/cli/package.json')).version;
} catch {
  console.error(`Angular CLI non installata globalmente in ${globalRoot}: la feature angular-cli del devcontainer è mancante?`);
  process.exit(1);
}

const coreVersion = require('@angular/core/package.json').version;

console.info(`Angular CLI (global): ${cliVersion} - @angular/core: ${coreVersion}`);

if (major(cliVersion) !== major(coreVersion)) {
  console.error(`Angular CLI major (${major(cliVersion)}) != @angular/core major (${major(coreVersion)})`);
  process.exit(1);
}
