# How to mount disk

## Show disks

```sh
sudo fdisk -l
```

## Check the UUID of a disk 

```sh
sudo blkid
.
.
/dev/sdb1: UUID="7e8e718f-a577-4547-b481-523854c470b3" TYPE="ext4" PARTUUID="86ca3399-01"
```

## Add this lines to /etc/fstab

```sh
UUID=7e8e718f-a577-4547-b481-523854c470b3 /hdd		  ext4    defaults        0       0
```

## Test

```sh
sudo mkdir /hdd
sudo mount -a
```
