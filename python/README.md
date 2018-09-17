# Keywords

## PyCharm

## pyenv

### On Ubuntu

-   https://github.com/pyenv/pyenv
-   https://github.com/pyenv/pyenv-installer

## pyvenv

## virtualenv

## autoenv

## pip

### locale.Error: unsupported locale setting

```sh
pip install virtualenv
Traceback (most recent call last):
  File "/usr/bin/pip", line 11, in <module>
    sys.exit(main())
  File "/usr/lib/python3.4/site-packages/pip/__init__.py", line 215, in main
    locale.setlocale(locale.LC_ALL, '')
  File "/usr/lib64/python3.4/locale.py", line 592, in setlocale
    return _setlocale(category, locale)
locale.Error: unsupported locale setting
```

#### Resolved

```sh
export LC_ALL=C
```

### requirements.txt

### freeze

### PyPi

## setuptools

### How to install

```sh
pip install setuptools
```

### setup.py

## Kite
