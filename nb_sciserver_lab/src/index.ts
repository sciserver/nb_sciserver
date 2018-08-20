/*******************************************************************************
 * Copyright (c) Johns Hopkins University. All rights reserved.
 * Licensed under the Apache License, Version 2.0.
 * See LICENSE.txt in the project root for license information.
 *******************************************************************************/
import { JupyterLab, JupyterLabPlugin } from '@jupyterlab/application';

import { PageConfig, URLExt } from '@jupyterlab/coreutils';

import { ServerConnection } from '@jupyterlab/services';

import '../style/index.css';


/**
 * Initialization data for the nb_sciserver_lab extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'nb_sciserver_lab',
  autoStart: true,
  activate: (app: JupyterLab) => {
	const base_url = PageConfig.getBaseUrl();
	const init = { method: 'PUT' };
	const settings = ServerConnection.makeSettings()
	ServerConnection.makeRequest(URLExt.join(base_url, 'new_default?type=lab'), init, settings)
		.then(response => {
			if (response.status !== 200) {
				throw new ServerConnection.ResponseError(response);
			}
		});
  }
};

export default extension;
