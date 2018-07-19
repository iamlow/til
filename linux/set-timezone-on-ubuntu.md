## Case 1
```sh
sudo timedatectl set-timezone Asia/Seoul
```

## Case 2
```sh
sudo rm /etc/localtime
sudo ln -s /usr/share/zoneinfo/Asia/Seoul /etc/localtime
```
