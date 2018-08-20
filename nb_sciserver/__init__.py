#*******************************************************************************
#* Copyright (c) Johns Hopkins University. All rights reserved.
#* Licensed under the Apache License, Version 2.0.
#* See LICENSE.txt in the project root for license information.
#*******************************************************************************
import os
from notebook.utils import url_path_join
from .nbextension.handlers import NewDefaultHandler, SciServerRedirectHandler


def _jupyter_server_extension_paths():
    return [dict(module="nb_sciserver")]


def _jupyter_nbextension_paths():
    return [
        dict(
            section="tree",
            src=os.path.join("static"),
            dest="nb_sciserver",
            require="nb_sciserver/tree"),
    ]


def load_jupyter_server_extension(nb_app):
    nb_app.log.debug("nb_sciserver enabled")

    web_app = nb_app.web_app
    host_pattern = '.*$'
    new_default_pattern = url_path_join(web_app.settings['base_url'], '/new_default')
    sciserver_pattern = url_path_join(web_app.settings['base_url'], '/sciserver')
    web_app.add_handlers(host_pattern, [
        (new_default_pattern, NewDefaultHandler),
        (sciserver_pattern, SciServerRedirectHandler)])
