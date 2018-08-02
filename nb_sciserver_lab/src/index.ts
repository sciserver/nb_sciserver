import { JupyterLab, JupyterLabPlugin } from '@jupyterlab/application';

import { ICommandPalette } from '@jupyterlab/apputils';

import { PageConfig, URLExt } from '@jupyterlab/coreutils';

import { ServerConnection } from '@jupyterlab/services';

import { IMainMenu } from '@jupyterlab/mainmenu';

import { Menu } from '@phosphor/widgets';

import '../style/index.css';


/**
 * Initialization data for the nb_sciserver_lab extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'nb_sciserver_lab',
  autoStart: true,
  requires: [ICommandPalette, IMainMenu],
  activate: (app: JupyterLab, palette: ICommandPalette, mainMenu: IMainMenu) => {
	const base_url = PageConfig.getBaseUrl();
	const init = { method: 'PUT' };
	const settings = ServerConnection.makeSettings()
	ServerConnection.makeRequest(URLExt.join(base_url, 'new_default?type=lab'), init, settings)
		.then(response => {
			if (response.status !== 200) {
				throw new ServerConnection.ResponseError(response);
			}
		});

	const command: string = 'nb_sciserver:switch-to-classical';
	app.commands.addCommand(command, {
		label: 'Switch to Classical Jupyter',
		execute: () => {
			window.location.href = URLExt.join(base_url, 'tree')
		}
	});

	const menu = new Menu({ commands: app.commands });
	menu.title.label = 'SciServer';

	palette.addItem({command, category: 'SciServer'});
	menu.addItem({ command })

	mainMenu.addMenu(menu, {rank: 1000});
  }
};

export default extension;
