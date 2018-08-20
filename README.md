<h2>Welcome to SciServer's <a href='https://github.com/sciserver/nb_sciserver'>nb_sciserver</a> repo.</h2>

<h3>Table of Contents</h3>
<ul>
<li><a href="#description">Description</a></li>
<li><a href="#installation">Installation</a></li>
<li><a href="#usage">Usage</a></li>
<li><a href="#contributing">Contributing</a></li>
<li><a href="#license">License</a></li>
<li><a href="#contact">Contact</a></li>
</ul>

<h3 id="description">Description</h3>

This repository contains a Jupyter server extension, a Jupyter notebook extension, a JupyterLab extension, and the conda recipe for building the first two extensions.

<h4>Components Included<h4>

* The server extension adds two endpoints to Jupyter: `/sciserver` and `/new_default`. `/sciserver` will redirect to either `/lab?reset` or `/tree` depending on the contents of `~/.config/nb_sciserver/selectedInterface`. Sending an HTTP PUT to `/new_default` will write the contents of the `type` parameter given to the aforementioned file.
* The Jupyter notebook extension adds a faux tab to the classical Jupyter interface, which shows a dialog describing JupyterLab and offering to open it. It also makes a call to `/new_default?type=tree` on page load.
* The JupyterLab extension makes a call to `/new_default?type=lab` on page load.

<h3 id="installation">Installation</h3>

<h4>From conda</h4>

The following command will install and enable nb_sciserver's server and classical notebook extensions:

`conda install -c sciserver nb_sciserver`

The following will install the JupyterLab extension from npm, and therefore require `nodejs`:

`jupyter labextension install nb_sciserver_lab`

<h4>From source</h4>

`pip install .` - install Python extensions

`jupyter nbextension install --sys-prefix --py nb_sciserver` - Install notebook extension (CSS/JavaScript)

`jupyter nbextension enable --sys-prefix --py nb_sciserver` - Enable notebook extension

`jupyter serverextension enable --sys-prefix --py nb_sciserver` - Enable server-side extension

`jupyter labextension install ./nb_sciserver_lab` - Install JupyterLab extension

<h4>Common tasks</h4>

`conda build conda.recipe` - Builds the conda package containing the server and noebook extensions.

`cd nb_sciserver_lab; npm run build` - Builds the JupyterLab extension.


<h3 id="usage">Usage</h3>



<h3 id="contributing">Contributing</h3>



<h3 id="license">License</h3>

The SciServer Jupyter extensions is licensed under <a href="http://www.sciserver.org/docs/license/LICENCE.txt" target="_blank">Apache 2.0</a>.

This package was originally generated with [generator-nbextension](https://github.com/Anaconda-Platform/generator-nbextension)

<h3 id="contact">Contact</h3>

For technical questions or to report a bug, please email sciserver-helpdesk@jhu.edu.

For questions about collaborating with SciServer or using SciServer for Education, please contact <a href="mailto:sciserver-outreach@lists.johnshopkins.edu">sciserver-outreach@lists.johnshopkins.edu</a>.

For more information about SciServer, what it is, and what you can do with it, please visit www.sciserver.org.
