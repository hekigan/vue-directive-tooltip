#!/usr/bin/env sh

# abort on errors
set -e

# build lib
npm run build

#build docs site
cd site
npm run build
cd -

# navigate into the build output directory
rm -Rf ./docs
cp -R ./site/dist ./docs
echo "Built docs folder"

# git
# git add -A
# git commit -m "update docs"