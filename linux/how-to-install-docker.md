# How to install docker on Jetson

Just tried installing docker on JetPack 3.2.1 — L4T R28.2.1 for Jetson TX2

## Install a docker-ce with script

```sh
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
#OR
curl -fsSL get.docker.com -o get-docker.sh && sudo sh get-docker.sh
#OR
curl -sSL https://get.docker.com | sh
```

### Add user to group docker

```sh
sudo usermod -aG docker pi
```

We'll issue the following command to avoid having to log out and log back in for our docker group changes to take effect:

```sh
newgrp docker
```

### Verity 

To verify the success of our installation, let's check the Docker version:

```sh
$ docker --version
Docker version 18.09.0, build 4d60db4
```

### Test hello-world

```sh
docker run hello-world
```

## Install a docker-ce manually

### Set up the docker repository

```sh
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=arm64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```

### Install Docker CE

```sh
sudo apt-get update
sudo apt-get install docker-ce
```

> `18.06.1~ce~3-0~ubuntu` 설치성공.

> `18.09.0~3-0~ubunt` 설치실패.

### Verify the installation

```sh
sudo docker run --rm hello-world
```

### Add user to group docker

```sh
sudo gpasswd -a <user id> docker
```

## For docker-compose

### Installation using apt (**DEPRECATED**)

#### Add package repositories

Uncomment universe package repositories in '/etc/apt/sources.list' file.

#### Update

```sh
sudo apt-get update
```

#### Install

```sh
sudo apt-get install docker-compose
```

#### Check version

```sh
$ docker-compose version
docker-compose version 1.8.0, build unknown
docker-py version: 1.9.0
CPython version: 2.7.11+
OpenSSL version: OpenSSL 1.0.2g-fips  1 Mar 2016
```

### How to remove and install a docker-compose using pip

```sh
sudo apt-get remove docker-compose

sudo apt-get install python-pip
# OR
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python get-pip.py

sudo pip install docker-compose
```

Check version:

```sh
docker-compose -v
docker-compose version 1.22.0, build f46880f
```

## References

- https://thisdavej.com/how-to-install-redis-on-a-raspberry-pi-using-docker/
- https://docs.docker.com/compose/install/#install-compose
