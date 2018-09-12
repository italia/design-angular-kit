#!/bin/sh

# Aggiorna i numeri di versione nei file package.json
PACKAGE_VERSION=$(node -pe "require('./dist/design-angular-kit/package.json').version")
sed -i -E -e "s/\"version\": \"[0-9]+\.[0-9]+\.[0-9]+\"/\"version\": \"${PACKAGE_VERSION}\"/g" ./package.json
sed -i -E -e "s/\"version\": \"[0-9]+\.[0-9]+\.[0-9]+\"/\"version\": \"${PACKAGE_VERSION}\"/g" ./projects/design-angular-kit/package.json

# Aggiunge il README.md al pacchetto NPM
cp README.md dist/design-angular-kit/
