#!/usr/bin/env sh

set -e
npm run build

cd dist

git init add -A
git commit -m 'New Deployment'
git push -f git@github.com:artemisia123456/CV.git deploy:gh-pages

cd -