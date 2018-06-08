#### Change hostname
```sh
hostnamectl --set-hostname tx1
```

#### Change these lines to /etc/hosts:

##### Before
```sh
127.0.0.1 tegra-ubuntu
```

##### After
```sh
127.0.0.1 tx1
```

#### Reboot
```sh
sudo reboot
```
