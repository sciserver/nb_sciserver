#*******************************************************************************
#* Copyright (c) Johns Hopkins University. All rights reserved.
#* Licensed under the Apache License, Version 2.0.
#* See LICENSE.txt in the project root for license information.
#*******************************************************************************
{
	"${PREFIX}/bin/jupyter" nbextension install --overwrite --sys-prefix --py "${PKG_NAME}"
	"${PREFIX}/bin/jupyter" nbextension enable --sys-prefix --py "${PKG_NAME}"
	"${PREFIX}/bin/jupyter" serverextension enable --sys-prefix --py "${PKG_NAME}"
} >> "${PREFIX}/.messages.txt" 2>&1
