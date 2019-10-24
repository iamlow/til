# Remove

## All docker containers

```sh
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
```

## All docker images

```sh
docker rmi $(docker images -q)
```
