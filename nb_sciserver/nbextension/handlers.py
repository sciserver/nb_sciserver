from tornado import web
from notebook.base.handlers import IPythonHandler, json_errors, RedirectWithParams
import os
from pathlib import Path

# from https://stackoverflow.com/a/3250952/239003
if 'APPDATA' in os.environ:
    _confighome = os.environ['APPDATA']
elif 'XDG_CONFIG_HOME' in os.environ:
    _confighome = os.environ['XDG_CONFIG_HOME']
else:
    _confighome = os.path.join(os.environ['HOME'], '.config')
_config_file = Path(os.path.join(_confighome, 'nb_sciserver', 'selectedInterface'))

class NewDefaultHandler(IPythonHandler):
    @web.authenticated
    @json_errors
    def put(self):
        _config_file.parent.mkdir(parents=True, exist_ok=True)
        _config_file.write_text(self.get_argument('type', 'tree'))
        self.finish()

class SciServerRedirectHandler(RedirectWithParams):
    def initialize(self):
        super().initialize("/tree", False)

    def get(self):
        if _config_file.exists() and _config_file.read_text() == 'lab':
            self._url = '/lab?reset'
        else:
            self._url = '/tree'

        super().get()
