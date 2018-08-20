#*******************************************************************************
#* Copyright (c) Johns Hopkins University. All rights reserved.
#* Licensed under the Apache License, Version 2.0.
#* See LICENSE.txt in the project root for license information.
#*******************************************************************************
"${PREFIX}/bin/jupyter" nbextension disable --sys-prefix --py "${PKG_NAME}"
"${PREFIX}/bin/jupyter" nbextension uninstall --sys-prefix --py "${PKG_NAME}"
"${PREFIX}/bin/jupyter" serverextension disable --sys-prefix --py "${PKG_NAME}"
"${PREFIX}/bin/jupyter" labextension uninstall  "${PKG_NAME}_lab"
