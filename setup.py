import setuptools

setuptools.setup(
    name="nb_sciserver",
    version='0.1.0',
    url="https://github.com/sciserver/nb_sciserver",
    author="IDIES",
    description="SciServer extension to easily switch between Classical Jupyter and Jupyterlab",
    long_description=open('README.md').read(),
    packages=setuptools.find_packages(),
    package_data={'nb_sciserver': [ 'static/*.js' ]},
)
