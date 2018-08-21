#!/bin/bash
set -x -e
cd ..
git clone git@github.com:$CIRCLE_PROJECT_USERNAME/$CIRCLE_PROJECT_REPONAME.git -b gh-pages docs

rm -rfv docs/*
cp -r design-angular-kit/dist/design-angular-kit-bundle/* docs

cd docs

git add -A

if [ -n "$(git status --porcelain)" ]; then
  git commit -m "Update GitHub Pages $CIRCLE_BUILD_NUM  [ci skip]"
  git push --force origin gh-pages
else
  echo "Non ci sono cambiamenti. La documentazione non verrà pubblicata";
fi
