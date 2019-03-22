**Issue:**

/home/iamlow/.local/lib/python2.7/site-packages/pip/_vendor/requests/__init__.py:83: RequestsDependencyWarning: Old version of cryptography ([1, 2, 3]) may cause slowdown.
  warnings.warn(warning, RequestsDependencyWarning)

**Solved:**

```sh
pip install --upgrade --user cryptography
python -m easy_install --upgrade --user pyOpenSSL
```

**References:**

* https://stackoverflow.com/questions/51283708/python-pip-package-requestsdependencywarning-when-installing-elastic-search-cura
