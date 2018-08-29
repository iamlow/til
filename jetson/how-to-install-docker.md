# How to install docker on Jetson

Just tried installing docker on JetPack 3.2.1 — L4T R28.2.1 for Jetson TX2

## Set up the docker repository

```sh
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=arm64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```

## Install Docker CE

```sh
sudo apt-get update
sudo apt-get install docker-ce
```

## Verify the installation

```sh
sudo docker run hello-world
```

## Add user to group docker

```sh
sudo gpasswd -a <user id> docker
```
