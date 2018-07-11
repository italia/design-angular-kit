#!/bin/bash
set -x -e
cd ..
git clone git@github.com:$CIRCLE_PROJECT_USERNAME/$CIRCLE_PROJECT_REPONAME.git -b gh-pages docs

rm -rfv docs/*
cp -r design-angular-kit/dist/design-angular-kit-bundle/* docs
pwd
ls -l docs

# cd examples/todomvc
# npm install
# npm run build
# cd ../..
# mkdir -p public/todomvc
# cp examples/todomvc/public/* public/todomvc
# cd public
# git config --global user.email "oyanglulu@gmail.com"
# git config --global user.name $CIRCLE_PROJECT_USERNAME
# git add .
# git commit -m "publi:ship: $CIRCLE_BUILD_NUM"
# git push origin gh-pages
