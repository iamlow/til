# How to install

## On Ubuntu 16.04(L4T Jetson TX2)

```sh
apt-get install -y python3-venv
```

## Create

```sh
pyvenv venv
```

or

```sh
python3 -m venv venv
```

### Issue on Ubuntu 16.04

```sh
# python3 -m venv venv
The virtual environment was not created successfully because ensurepip is not
available.  On Debian/Ubuntu systems, you need to install the python3-venv
package using the following command.

    apt-get install python3-venv

You may need to use sudo with that command.  After installing the python3-venv
package, recreate your virtual environment.

Failing command: ['/root/workspace/kkk/venv3/bin/python3.5', '-Im', 'ensurepip', '--upgrade', '--default-pip']
```

#### Solved

```sh
python3 -m venv venv --without-pip
```

## Activate a virtual environment

```sh
source venv/bin/activate
```

OR

```sh
. venv/bin/activate
```

## Deactivate

```sh
deactivate
```
