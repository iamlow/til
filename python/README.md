# Keywords

## Editor

#### PyCharm

#### Visual Studio Code

##### Python Plugin (Microsoft)

###### pylint 관련 오류가 발생함

```
pylint medium.py
************* Module medium
medium.py:34:0: C0330: Wrong continued indentation (add 14 spaces).
        zmq.XSUB, 'inproc://0xsub', zmq.XPUB, 'inproc://0xpub')
        ^             | (bad-continuation)
medium.py:1:0: C0111: Missing module docstring (missing-docstring)
medium.py:7:0: C0103: Constant name "logger" doesn't conform to UPPER_CASE naming style (invalid-name)
medium.py:10:0: C0111: Missing function docstring (missing-docstring)
medium.py:34:8: E1101: Module 'zmq' has no 'XSUB' member (no-member)
medium.py:34:36: E1101: Module 'zmq' has no 'XPUB' member (no-member)

------------------------------------------------------------------
Your code has been rated at 3.64/10 (previous run: 5.91/10, -2.27)
```

> pyzmq의 특정 멤버를 찾지 못함. no-member 

##### Kite

## Python Package Project Template

#### cookiecutter

```sh
pip install cookiecutter
```

## pyenv: Simple Python Version Management

-   https://github.com/pyenv/pyenv
-   https://github.com/pyenv/pyenv-installer

### Installation python 3.7.2 on ubuntu 16.04

```sh
curl https://pyenv.run | bash

# add to ~/.zshrc
export PATH="~/.pyenv/bin:$PATH"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"

# Prerequisites
sudo apt-get install -y make build-essential libssl-dev zlib1g-dev libbz2-dev \
libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev libncursesw5-dev \
xz-utils tk-dev libffi-dev liblzma-dev python-openssl git

pyenv install 3.7.2
```

> add to ~/.zshrc에 3라인만 넣으면 shell 반응이 엄청느려짐..ㅠㅠ

## pyvenv

## virtualenv

## autoenv

## pip

### how to install

- Download: https://bootstrap.pypa.io/get-pip.py

```sh
wget https://bootstrap.pypa.io/get-pip.py
```

- Install

```sh
python get-pip.py
```

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

```sh
pip freeze requirements.txt
```

### PyPi

## setuptools

### How to install

```sh
pip install setuptools
```

### setup.py
