# How to use pyinstaller

PyInstaller bundles a Python application and all its dependencies into a single package.

## Installation

```sh
pip install pyinstaller
```

## Bundle

```sh
pyinstaller -F [filename]
```

## Test

```sh
./dist/filename
```

### Runtime error occurred in venv!

```sh
Traceback (most recent call last):
  File "test.py", line 2, in <module>
    import zmq
ImportError: No module named zmq
```

> Check python version using pyenv!

[![asciicast](https://asciinema.org/a/zdoefFZ34mx43QnIhNRf5lntA.png)](https://asciinema.org/a/zdoefFZ34mx43QnIhNRf5lntA)

## References

https://pyinstaller.readthedocs.io/en/stable/index.html
