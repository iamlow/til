# How to install docker on Jetson

Just tried installing docker on JetPack 3.2.1 — L4T R28.2.1 for Jetson TX2

## For docker

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

### Verify the installation

```sh
sudo docker run hello-world
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
sudo pip install docker-compose
```

Check version

```sh
docker-compose -v
docker-compose version 1.22.0, build f46880f
```
