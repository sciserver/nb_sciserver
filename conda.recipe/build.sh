#!/bin/bash
pip install --no-deps .

mkdir -p "$PREFIX/share/node_modules"
# run 'npm run build' now to save effort at runtime
(cd nb_sciserver_lab && npm install && npm run build)
cp -r nb_sciserver_lab "$PREFIX/share/node_modules/nb_sciserver_lab"
