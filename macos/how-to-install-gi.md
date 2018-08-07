# how to install gi

## environment

OS: High sierra

## issue

```
$ python
Python 2.7.15 (default, Jul 11 2018, 12:02:00)
[GCC 4.2.1 Compatible Apple LLVM 9.1.0 (clang-902.0.39.2)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> import gi
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ImportError: No module named gi
```

## install

```sh
brew reinstall pygobject pygobject3
```

## result

```
python
Python 2.7.15 (default, Jul 11 2018, 12:02:00)
[GCC 4.2.1 Compatible Apple LLVM 9.1.0 (clang-902.0.39.2)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> import gi
```
