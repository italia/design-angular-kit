#!/bin/bash
set -x -e
cd ..
git clone git@github.com:$CIRCLE_PROJECT_USERNAME/$CIRCLE_PROJECT_REPONAME.git -b gh-pages docs

rm -rfv docs/*
cp -r design-angular-kit/dist/design-angular-kit-bundle/* docs

cd docs

git config --global user.email "teamdigitale@governo.it"
git config --global user.name $CIRCLE_PROJECT_USERNAME

git add -A
git commit -m "publi:ship: $CIRCLE_BUILD_NUM"
git push --force origin gh-pages
