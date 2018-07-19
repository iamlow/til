## Requirements

- NFS Server: Ubuntu 16.04 on Nvidia Jetson TX1/TX2
- NFS Client: MacOS High Sierra v10.13.6

## NFS Server

### To install

```sh
sudo apt-get install nfs-kernel-server portmap nfs-common
```

### To enter the following in /etc/exports 

```sh
/home/nvidia/workspace 192.168.0.0/24(rw,sync,no_subtree_check,insecure,all_squash,anonuid=1001,anongid=1001)
```

> This insecure is IMPORTANT option. This all_squash,anonuid=1001,anongid=1001 is IMPORTANT option for permission.

### To restart nfs-server enter the below

```sh
sudo systemctl restart nfs-server.service
```

### To check nfs-server enter the below

```sh
showmount -e
```

Result:

```
Export list for tegra-ubuntu:
/home/nvidia/workspace 192.168.0.0/24
```

## NFS Client

### To check nfs-server enter the below:

```sh
showmount -e [SERVER-IP-ADDRESS]
```

### To mount nfs-server enter below:

```sh
mount -t nfs [SERVER-IP-ADDRESS]:/home/nvidia/workspace /mnt
```

## Problems
- *NFS is too slow on TX2.*
- *NFS is failed to install nfs-server on TX1.*


## References
- https://www.cyberciti.biz/faq/how-to-ubuntu-nfs-server-configuration-howto/
- https://www.cyberciti.biz/tips/ubuntu-linux-nfs-client-configuration-to-mount-nfs-share.html
- https://thornelabs.net/2013/10/15/operation-not-permitted-mounting-nfs-share-on-os-x-mountain-lion.html
