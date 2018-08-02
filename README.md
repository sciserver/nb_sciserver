# nb_sciserver

## Develop

```
python setup.py develop
jupyter nbextension install --symlink --py nb_sciserver --sys-prefix
jupyter nbextension enable --py nb_sciserver --sys-prefix
jupyter serverextension enable --py nb_sciserver --sys-prefix
```

Now you are ready to start testing with:

```
jupyter notebook
```

## Distribution

Once you are happy with your extension you can run:

```
conda build conda.recipe
```

And upload your package to [Anaconda-Cloud](http://anaconda.org). So everybody can
have access to your brand new extension.

> Generated with [generator-nbextension](http://anaconda.org).
