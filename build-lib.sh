#!/usr/bin/env sh

# abort on errors
set -e

# build lib
vue build --target lib --name vueDirectiveTooltip ./src/index.js

# To preserve backward comaptibility,
# copy "umd" files and remove the "umd" part of the filename
cp ./dist/vueDirectiveTooltip.umd.js ./dist/vueDirectiveTooltip.js
cp ./dist/vueDirectiveTooltip.umd.js.map ./dist/vueDirectiveTooltip.js.map
cp ./dist/vueDirectiveTooltip.umd.min.js ./dist/vueDirectiveTooltip.min.js
cp ./dist/vueDirectiveTooltip.umd.min.js.map ./dist/vueDirectiveTooltip.min.js.map