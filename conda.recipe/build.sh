#!/bin/bash
#*******************************************************************************
#* Copyright (c) Johns Hopkins University. All rights reserved.
#* Licensed under the Apache License, Version 2.0.
#* See LICENSE.txt in the project root for license information.
#*******************************************************************************
pip install --no-deps .

mkdir -p "$PREFIX/share/node_modules"
# run 'npm run build' now to save effort at runtime
(cd nb_sciserver_lab && npm install && npm run build)
cp -r nb_sciserver_lab "$PREFIX/share/node_modules/nb_sciserver_lab"
