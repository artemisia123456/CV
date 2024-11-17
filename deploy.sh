#!/usr/bin/env sh

set -e
npm run build

cd dist

git init
git checkout -b gh-pages
git add *

git commit -m 'New Deployment'
git remote add origin https://github.com/artemisia123456/CV.git
git push --force origin gh-pages

cd -